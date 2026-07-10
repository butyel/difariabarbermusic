import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corte Degradê em Presidente Epitácio",
  description:
    "Corte degradê em Presidente Epitácio com transições limpas. Low fade, mid fade, high fade e navalhado. Agende na DiFaria Barber Music.",
  alternates: {
    canonical: "/corte-degrade-presidente-epitacio",
  },
};

export default function CorteDegradePage() {
  return (
    <main>
      <Header />
      <section style={{ paddingTop: "120px" }} className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Corte Degradê em Presidente Epitácio</h1>
          <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
            O corte degradê em Presidente Epitácio é nossa especialidade. Trabalhamos com low fade,
            mid fade, high fade e degradê navalhado para criar transições suaves e um visual moderno.
            Cada detalhe é pensado para um resultado limpo, simétrico e com a sua personalidade.
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
