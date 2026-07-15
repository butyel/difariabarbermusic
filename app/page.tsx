import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Music2,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP, SERVICES, MEDIA } from "@/lib/constants";

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
            <span className="eyebrow">Estilo • Música • Identidade</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>
              Barbearia em <strong>Presidente Epitácio</strong> para quem valoriza presença.
            </h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <p>
              Corte, barba e atendimento personalizado em uma experiência criada
              para valorizar sua identidade.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="hero-actions">
              <Link className="button" href="/agendar" data-ga="click_booking_hero">
                <CalendarDays size={19} aria-hidden="true" /> <span>Agendar horário</span>
              </Link>
              <a className="button button-ghost" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
                <MapPin size={19} aria-hidden="true" /> <span>Como chegar</span>
              </a>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={400}>
            <a
              className="hero-proof"
              href={COMPANY.googleReviewLink}
              target="_blank"
              rel="noreferrer"
              data-ga="click_google_reviews"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Star size={18} fill="currentColor" aria-hidden="true" />
              <b>{COMPANY.googleRating.toFixed(1)} no Google</b>
              <span aria-hidden="true">•</span>
              <span>{COMPANY.googleReviews} avaliações</span>
            </a>
          </AnimateIn>
        </div>
      </section>

      <section className="proof-strip" aria-label="Diferenciais da DiFaria">
        <div className="container proof-strip-grid">
          <a href={COMPANY.googleReviewLink} target="_blank" rel="noreferrer" data-ga="click_google_reviews">
            <strong>{COMPANY.googleRating.toFixed(1)}</strong>
            <span><Star size={14} fill="currentColor" aria-hidden="true" /> {COMPANY.googleReviews} avaliações no Google</span>
          </a>
          <div>
            <strong>Atendimento personalizado</strong>
            <span>Estilo pensado para seus traços e sua rotina</span>
          </div>
          <a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
            <strong>Centro de Presidente Epitácio</strong>
            <span><MapPin size={14} aria-hidden="true" /> Veja como chegar</span>
          </a>
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

      <section className="section section-dark experience-editorial">
        <div className="container experience-editorial-grid">
          <AnimateIn variant="slide-left">
            <div className="experience-portrait">
              <Image
                src="/images/will.jpeg"
                alt="William Farias, CEO e barbeiro da DiFaria Barber Music"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
              <div className="portrait-caption">
                <strong>William Farias</strong>
                <span>CEO e barbeiro</span>
              </div>
            </div>
          </AnimateIn>
          <div className="experience-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow">A experiência DiFaria</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2>Mais que um corte. Uma presença que fala por você.</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                Técnica, estética, música e atenção aos detalhes se encontram em um
                atendimento feito para valorizar quem você é.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200} stagger>
              <div className="experience-features">
                <div className="stagger-item">
                  <Scissors aria-hidden="true" />
                  <div><h3>Técnica e precisão</h3><p>Acabamento limpo e escolha do estilo ideal.</p></div>
                </div>
                <div className="stagger-item">
                  <Sparkles aria-hidden="true" />
                  <div><h3>Identidade em cada detalhe</h3><p>Um resultado coerente com seus traços e personalidade.</p></div>
                </div>
                <div className="stagger-item">
                  <Music2 aria-hidden="true" />
                  <div><h3>Atmosfera Barber Music</h3><p>Conforto, música e uma experiência com personalidade.</p></div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={300}>
              <Link className="text-link" href="/sobre">
                Conheça nossa história <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section section-cream home-gallery-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <AnimateIn variant="fade-up">
                <span className="eyebrow dark">Galeria</span>
              </AnimateIn>
              <AnimateIn variant="fade-up" delay={100}>
                <h2>Onde estilo e música se encontram</h2>
              </AnimateIn>
            </div>
            <AnimateIn variant="fade-up" delay={150}>
              <Link className="text-link text-link-dark" href="/galeria">
                Ver galeria completa <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </AnimateIn>
          </div>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="home-gallery-grid">
              <div className="home-gallery-item home-gallery-main stagger-item">
                <Image src="/images/barbearia-interior.jpg" alt="Interior da DiFaria Barber Music" fill sizes="(max-width: 800px) 100vw, 58vw" />
                <span>O espaço</span>
              </div>
              <div className="home-gallery-item stagger-item">
                <Image src="/images/barbearia-atendimento.jpg" alt="Atendimento na DiFaria Barber Music" fill sizes="(max-width: 800px) 50vw, 30vw" />
                <span>O cuidado</span>
              </div>
              <div className="home-gallery-item stagger-item">
                <Image src="/images/barbearia-exterior.jpg" alt="Fachada da DiFaria Barber Music" fill sizes="(max-width: 800px) 50vw, 30vw" />
                <span>A DiFaria</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section corporate-teaser">
        <div className="container corporate-teaser-card">
          <div className="corporate-teaser-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow">Para empresas</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2>Sua equipe também representa o padrão da sua marca.</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                O Código de Imagem é o programa corporativo da DiFaria para organizar
                a manutenção do visual de líderes e equipes, com atendimento prioritário
                e agendamento em lote.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={220}>
              <Link className="button" href="/codigo-de-imagem">
                <span>Conhecer o Código de Imagem</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </AnimateIn>
          </div>
          <AnimateIn variant="fade-up" delay={140} stagger>
            <div className="corporate-teaser-pillars">
              <span className="stagger-item">Presença</span>
              <span className="stagger-item">Credibilidade</span>
              <span className="stagger-item">Autoridade</span>
              <span className="stagger-item">Performance</span>
              <span className="stagger-item">Experiência</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">DiFaria na mídia</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Quem conhece, reconhece</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              {MEDIA.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  data-ga="click_media"
                  className="media-card"
                  style={{
                    display: "block",
                    padding: "24px 32px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, color: "#72816a", margin: "0 0 8px" }}>
                    {item.name} &middot; {item.date}
                  </p>
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "#d4a853" }}>
                    {item.headline}
                  </p>
                </a>
              ))}
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
            <Link className="button button-light" href="/agendar" data-ga="click_booking_footer">
              <span>Agendar agora</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
