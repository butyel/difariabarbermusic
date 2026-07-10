import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Corte Masculino em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte masculino em Presidente Epitácio com acabamento preciso. Do clássico ao contemporâneo. Agende seu horário na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-masculino-presidente-epitacio` },
  openGraph: {
    title: "Corte Masculino em Presidente Epitácio | DiFaria Barber Music",
    description: "Corte masculino em Presidente Epitácio com acabamento preciso. Agende na DiFaria.",
    url: `${baseUrl}/corte-masculino-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

export default function CorteMasculinoPage() {
  return (
    <main>
      <Header />
      <section style={{ paddingTop: "120px" }} className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Corte Masculino em Presidente Epitácio</h1>
          <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
            Seja um corte clássico ou um estilo contemporâneo, o corte masculino em Presidente Epitácio
            na DiFaria Barber Music é feito com precisão e atenção aos detalhes. Trabalhamos com tesoura,
            máquina e navalha para garantir um acabamento impecável que valoriza seu formato de rosto.
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
