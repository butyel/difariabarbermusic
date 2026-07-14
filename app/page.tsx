import type { Metadata } from "next";
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

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Barbearia em Presidente Epitácio especializada em corte masculino, degradê, barba e atendimento personalizado. Agende seu horário na DiFaria.",
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Corte masculino, degradê, barba e atendimento personalizado na DiFaria Barber Music.",
    url: `${baseUrl}/`,
    images: [
      {
        url: `${baseUrl}/images/capa.jpg`,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
};

const barbershopSchema = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  "@id": `${baseUrl}/#barbershop`,
  name: COMPANY.name,
  url: baseUrl,
  telephone: `+55${COMPANY.phoneRaw}`,
  email: COMPANY.email,
  priceRange: "$$",
  image: [`${baseUrl}/images/barbearia-interior.jpg`],
  logo: `${baseUrl}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Pres. Vargas, 20-64, Sala 2",
    addressLocality: "Presidente Epitácio",
    addressRegion: "SP",
    postalCode: COMPANY.address.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.coordinates.lat,
    longitude: COMPANY.coordinates.lng,
  },
  hasMap: COMPANY.mapsUrl,
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
  paymentAccepted: COMPANY.paymentMethods,
  currenciesAccepted: "BRL",
  sameAs: [
    "https://www.instagram.com/difaria_barber_music/",
    "https://www.facebook.com/share/1D3Lsi8fzQ/?mibextid=wwXIfr",
    COMPANY.googleProfile,
  ],
  founder: {
    "@type": "Person",
    name: "William Farias",
    jobTitle: "CEO e barbeiro",
  },
  areaServed: {
    "@type": "City",
    name: "Presidente Epitácio",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de barbearia",
    itemListElement: SERVICES.filter((s) => "slug" in s).map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
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
          quality={85}
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
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_hero">
                <MessageCircle size={19} aria-hidden="true" /> <span>Agendar pelo WhatsApp</span>
              </a>
              <a className="button button-ghost" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Nossos serviços</h2>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Mais que um corte. Uma experiência que transforma sua presença.</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Técnica, estética, música e atendimento personalizado para valorizar seu estilo em Presidente Epitácio.
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Onde estilo e música se encontram</h2>
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
                <a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
                  <MapPin aria-hidden="true" /> {COMPANY.address.full}
                </a>
                <a href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_footer">
                  <MessageCircle aria-hidden="true" /> {COMPANY.phone}
                </a>
                <span>
                  <Clock3 aria-hidden="true" /> {COMPANY.hours.full}
                </span>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn variant="scale-in" delay={300}>
            <a className="button button-light" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_hero">
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
