import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Barba em Presidente Epitácio",
  description:
    "Barba em Presidente Epitácio com desenho, alinhamento e acabamento profissional. Valorize seu visual. Agende na DiFaria Barber Music.",
  alternates: {
    canonical: "/barba-presidente-epitacio",
  },
};

export default function BarbaPage() {
  return (
    <main>
      <Header />
      <section style={{ paddingTop: "120px" }} className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Barba em Presidente Epitácio</h1>
          <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
            Uma barba bem feita faz toda a diferença. Na DiFaria Barber Music, o serviço de barba
            em Presidente Epitácio inclui desenho, alinhamento, hidratação e acabamento com navalha.
            Seja barba cheia, desenhada ou estilo cavanhaque, garantimos um resultado profissional
            que valoriza seu rosto.
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
