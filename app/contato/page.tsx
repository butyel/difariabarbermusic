import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a DiFaria Barber Music em Presidente Epitácio. Agende seu horário pelo WhatsApp, veja o endereço e horários de funcionamento.",
  alternates: { canonical: "/contato" },
};

const contactSchema = {
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
            <div style={{ width: "100%", height: 400, borderRadius: 12, overflow: "hidden" }}>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ""}&q=${encodeURIComponent(COMPANY.address.full)}&center=${COMPANY.coordinates.lat},${COMPANY.coordinates.lng}&zoom=16`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - DiFaria Barber Music"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
