"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

const slideImages = [
  {
    src: "/images/barbearia-interior.jpg",
    alt: "Cadeira e ambiente da barbearia DiFaria em Presidente Epitácio",
    w: 900,
    h: 900,
  },
  {
    src: "/images/barbearia.jpg",
    alt: "Ambiente da barbearia DiFaria",
    w: 900,
    h: 900,
  },
  {
    src: "/images/barbeiro.jpg",
    alt: "Barbeiro da DiFaria realizando atendimento",
    w: 900,
    h: 900,
  },
  {
    src: "/images/difaria.jpg",
    alt: "Fachada da DiFaria Barber Music",
    w: 900,
    h: 900,
  },
];

const rightImages = [
  {
    src: "/images/will.jpeg",
    alt: "Profissional da DiFaria Barber Music durante atendimento personalizado",
    w: 900,
    h: 900,
  },
  {
    src: "/images/capa.jpg",
    alt: "Logotipo da DiFaria Barber Music, barbearia em Presidente Epitácio",
    w: 1200,
    h: 700,
  },
];

const allImages = [...slideImages, ...rightImages];

export default function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const close = useCallback(() => setSelected(null), []);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 3000);
  }, []);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  const slide = slideImages[slideIndex];

  return (
    <>
      <div className="gallery">
        <button
          className="gallery-btn gallery-slide"
          onClick={() => setSelected(slideIndex)}
          aria-label={`Ampliar imagem: ${slide.alt}`}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={slide.w}
            height={slide.h}
            sizes="(max-width: 900px) 100vw, 60vw"
            className="gallery-slide-img"
          />
          <span className="gallery-slide-dots">
            {slideImages.map((_, i) => (
              <span
                key={i}
                className={`gallery-dot${i === slideIndex ? " active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSlideIndex(i);
                }}
              />
            ))}
          </span>
        </button>

        {rightImages.map((img) => (
          <button
            key={img.src}
            className="gallery-btn"
            onClick={() => {
              const idx = allImages.findIndex((x) => x.src === img.src);
              setSelected(idx);
            }}
            aria-label={`Ampliar imagem: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes="(max-width: 900px) 50vw, 40vw"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-label="Visualização ampliada">
          <button className="lightbox-close" onClick={close} aria-label="Fechar">
            <X size={28} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={allImages[selected].src}
              alt={allImages[selected].alt}
              width={allImages[selected].w}
              height={allImages[selected].h}
              className="lightbox-image"
              priority
            />
          </div>
          <div className="lightbox-nav">
            {selected > 0 && (
              <button onClick={() => setSelected(selected - 1)} aria-label="Anterior">
                ‹
              </button>
            )}
            <span>{selected + 1} / {allImages.length}</span>
            {selected < allImages.length - 1 && (
              <button onClick={() => setSelected(selected + 1)} aria-label="Próxima">
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
