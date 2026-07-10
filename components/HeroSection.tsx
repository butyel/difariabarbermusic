import Image from "next/image";
import { MapPin, MessageCircle, Music2, Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        className="hero-image"
        src="/images/barbearia-interior.jpg"
        alt="Interior da DiFaria Barber Music em Presidente Epitácio"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <AnimateIn variant="fade-up">
          <span className="eyebrow">
            <Music2 size={16} aria-hidden="true" /> {COMPANY.slogan}
          </span>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={100}>
          <h1>
            Barbearia premium em <strong>Presidente Epitácio</strong>
          </h1>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={200}>
          <p>
            Corte masculino, barba e atendimento personalizado em um ambiente
            criado para transformar o seu visual em uma experiência.
          </p>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={300}>
          <div className="hero-actions">
            <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" /> <span>Agendar pelo WhatsApp</span>
            </a>
            <a className="button button-ghost" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={19} aria-hidden="true" /> <span>Como chegar</span>
            </a>
          </div>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={400}>
          <div className="hero-proof">
            <Star size={18} fill="currentColor" aria-hidden="true" />
            <b>{COMPANY.googleRating.toFixed(1)} no Google</b>
            <span aria-hidden="true">•</span>
            <span>{COMPANY.googleReviews} avaliações</span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
