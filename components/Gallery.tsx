"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const images = [
  {
    src: "/images/barbearia-interior.jpg",
    alt: "Cadeira e ambiente da barbearia DiFaria em Presidente Epitácio",
    w: 900,
    h: 900,
  },
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

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  return (
    <>
      <div className="gallery">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="gallery-btn"
            onClick={() => setSelected(i)}
            aria-label={`Ampliar imagem: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes={i === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 50vw, 40vw"}
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
              src={images[selected].src}
              alt={images[selected].alt}
              width={images[selected].w}
              height={images[selected].h}
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
            <span>{selected + 1} / {images.length}</span>
            {selected < images.length - 1 && (
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
