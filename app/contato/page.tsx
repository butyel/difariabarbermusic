import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, MapPin, MessageCircle, Car, Accessibility, Navigation, Landmark } from "lucide-react";
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
      { url: `${baseUrl}/images/barbearia-exterior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
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
            <span className="eyebrow">Localização</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Onde estamos</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ color: "#72816a", marginBottom: 32, maxWidth: 600 }}>
              A DiFaria Barber Music fica na Av. Pres. Vargas, uma das principais avenidas do Centro de Presidente Epitácio, com fácil acesso de carro, moto ou a pé.
            </p>
          </AnimateIn>
          <div className="experience" style={{ gap: 32 }}>
            <AnimateIn variant="fade-up" delay={200}>
              <Map />
            </AnimateIn>
            <AnimateIn variant="slide-right" delay={150}>
              <div className="portrait-frame" style={{ margin: 0 }}>
                <Image
                  src="/images/barbearia-exterior.jpg"
                  alt="Fachada da DiFaria Barber Music em Presidente Epitácio"
                  width={600}
                  height={750}
                  sizes="(max-width: 800px) 100vw, 40vw"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Referências</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ margin: "16px auto 28px" }}>Na região</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto 12px", color: "#2a4235" }}>
              Estamos próximos a pontos conhecidos do centro. Fácil de encontrar e chegar.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Landmark aria-hidden="true" />
                <h3>Referências próximas</h3>
                <p>Estamos na Av. Pres. Vargas, próximo à Praça da Matriz, Igreja Matriz e ao comércio central da cidade. Fácil localização para quem conhece a região central.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Car aria-hidden="true" />
                <h3>Estacionamento</h3>
                <p>Há estacionamento rotativo público na própria avenida e ruas adjacentes. Também há estacionamentos pagos nas proximidades para maior comodidade.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Accessibility aria-hidden="true" />
                <h3>Acessibilidade</h3>
                <p>O salão está no térreo, sem degraus na entrada, com espaço interno amplo para circulação de cadeira de rodas e mobilidade reduzida.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Rotas</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ margin: "16px auto 28px" }}>Como chegar</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Navigation aria-hidden="true" />
                <h3>Do Centro</h3>
                <p>Siga pela Av. Pres. Vargas sentido bairro. Estamos entre a Rua Treze de Maio e a Rua Marechal Deodoro, no lado direito, Sala 2.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Navigation aria-hidden="true" />
                <h3>Da saída para Teodoro Sampaio</h3>
                <p>Entre pela Av. Pres. Vargas sentido centro. Passando a Praça da Matriz, são cerca de 3 quarteirões. Estamos à esquerda, antes da Rua Marechal Deodoro.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Navigation aria-hidden="true" />
                <h3>Dos bairros</h3>
                <p>As principais linhas de ônibus passam pela Av. Pres. Vargas. O ponto mais próximo fica em frente à Praça da Matriz, a 2 minutos a pé da barbearia.</p>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={250}>
            <div className="center" style={{ marginTop: 48 }}>
              <a className="button" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
                <MapPin aria-hidden="true" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
