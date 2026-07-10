import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Corte Infantil em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte infantil em Presidente Epitácio com atendimento cuidadoso e confortável para os pequenos. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-infantil-presidente-epitacio` },
  openGraph: {
    title: "Corte Infantil em Presidente Epitácio | DiFaria Barber Music",
    description: "Corte infantil em Presidente Epitácio com atendimento cuidadoso. Agende na DiFaria.",
    url: `${baseUrl}/corte-infantil-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

export default function CorteInfantilPage() {
  return (
    <main>
      <Header />
      <section style={{ paddingTop: "120px" }} className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Corte Infantil em Presidente Epitácio</h1>
          <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
            O corte infantil em Presidente Epitácio na DiFaria Barber Music é feito com paciência
            e carinho para os pequenos ficarem à vontade. Oferecemos desde cortes práticos e
            confortáveis até estilos moderninhos que as crianças adoram. Ambiente acolhedor,
            brincadeiras e um resultado que vai deixar seu filho feliz e estiloso.
          </p>
          <div className="center" style={{ marginTop: 32 }}>
            <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
