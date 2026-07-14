import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import Map from "@/components/Map";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Agende seu Corte em Presidente Epitácio | DiFaria",
  description:
    "Agende seu corte ou barba na DiFaria Barber Music, no Centro de Presidente Epitácio. Atendimento pelo WhatsApp e localização pelo Google Maps.",
  alternates: { canonical: `${baseUrl}/contato` },
  openGraph: {
    title: "Agende seu Corte em Presidente Epitácio | DiFaria",
    description:
      "Agende seu corte ou barba na DiFaria Barber Music, no Centro de Presidente Epitácio. Atendimento pelo WhatsApp e localização pelo Google Maps.",
    url: `${baseUrl}/contato`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const contactSchema = {
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

export default function ContatoPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />

      <section className="section contact-section" style={{ paddingTop: "120px" }}>
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Agende</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Seu próximo visual começa aqui.</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, marginBottom: 40, color: "#72816a" }}>
              Fale com a DiFaria Barber Music e reserve seu horário.
            </p>
          </AnimateIn>
          <div className="contact-card">
            <div>
              <AnimateIn variant="fade-up" delay={200}>
                <div className="contact-lines">
                  <a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
                    <MapPin aria-hidden="true" /> {COMPANY.address.full}
                  </a>
                  <a href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_contato">
                    <MessageCircle aria-hidden="true" /> {COMPANY.phone}
                  </a>
                  <span>
                    <Clock3 aria-hidden="true" /> {COMPANY.hours.full}
                  </span>
                </div>
              </AnimateIn>
              <AnimateIn variant="fade-up" delay={250}>
                <div style={{ marginTop: 24 }}>
                  <p style={{ color: "#72816a", fontSize: "0.9rem", marginBottom: 8 }}>
                    Formas de pagamento:
                  </p>
                  <p style={{ color: "#f0eadc" }}>{COMPANY.paymentMethods.join(" • ")}</p>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn variant="scale-in" delay={300}>
              <a className="button button-light" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <span>Agendar agora</span>
              </a>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <AnimateIn variant="fade-up">
            <h2>Como chegar</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ color: "#72816a", marginBottom: 24 }}>
              {COMPANY.address.full}
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <Map />
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
