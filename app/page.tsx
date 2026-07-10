import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";

const barbershopSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: COMPANY.name,
  image: `${COMPANY.domain}/images/barbearia-interior.jpg`,
  url: COMPANY.domain,
  telephone: `+55 ${COMPANY.phoneRaw}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip || undefined,
    addressCountry: "BR",
  },
  sameAs: [COMPANY.instagram, COMPANY.facebook],
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.coordinates.lat,
    longitude: COMPANY.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: COMPANY.googleRating,
    bestRating: 5,
    ratingCount: COMPANY.googleReviews,
    reviewAspect: "Google Reviews",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barbershopSchema) }}
      />
      <Header />

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
              Estilo. Música. Identidade.
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

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">O que oferecemos</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Nossos serviços</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto 40px", color: "#48564d" }}>
              Do clássico ao contemporâneo, cada serviço é pensado para valorizar
              sua identidade com técnica e precisão.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="services-grid">
              {SERVICES.slice(0, 3).map((service, index) => (
                <article className="service-card stagger-item" key={service.title}>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="center" style={{ marginTop: 32 }}>
              <Link className="button" href="/servicos">
                <span>Ver todos os serviços</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">A experiência</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Mais que um corte. Uma assinatura de estilo.</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Técnica, estética, música e atendimento personalizado em Presidente Epitácio.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 32 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Técnica e precisão</h3>
                <p>Acabamento limpo e consultoria para encontrar o estilo ideal.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Atendimento premium</h3>
                <p>Cuidado individual para você sair confiante em cada visita.</p>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="center" style={{ marginTop: 32 }}>
              <Link className="button button-ghost" href="/sobre">
                <span>Conheça nossa história</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Galeria</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Onde estilo e música se encontram</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="center" style={{ marginTop: 24 }}>
              <Link className="button" href="/galeria">
                <span>Ver galeria completa</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-card">
          <div>
            <AnimateIn variant="fade-up">
              <span className="eyebrow">Agende</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2>Seu próximo visual começa aqui.</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>Fale com a DiFaria Barber Music e reserve seu horário.</p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <div className="contact-lines">
                <a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin aria-hidden="true" /> {COMPANY.address.full}
                </a>
                <a href={WHATSAPP.url} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> {COMPANY.phone}
                </a>
                <span>
                  <Clock3 aria-hidden="true" /> {COMPANY.hours.full}
                </span>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn variant="scale-in" delay={300}>
            <a className="button button-light" href={WHATSAPP.url} target="_blank" rel="noreferrer">
              <span>Agendar agora</span>
            </a>
          </AnimateIn>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
