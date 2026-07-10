import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Corte e Barba em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte e barba em Presidente Epitácio em um só lugar. Combo completo para renovar o visual com harmonia. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-e-barba-presidente-epitacio` },
  openGraph: {
    title: "Corte e Barba em Presidente Epitácio | DiFaria Barber Music",
    description: "Corte e barba em Presidente Epitácio em um só lugar. Agende na DiFaria Barber Music.",
    url: `${baseUrl}/corte-e-barba-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

export default function CorteBarbaPage() {
  return (
    <main>
      <Header />
      <section style={{ paddingTop: "120px" }} className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Corte e Barba em Presidente Epitácio</h1>
          <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
            Nosso combo corte e barba em Presidente Epitácio é a escolha perfeita para quem quer
            sair completo. Enquanto o corte ganha forma com tesoura e máquina, a barba é desenhada
            e alinhada para um visual harmônico. Tudo no mesmo lugar, com agilidade e qualidade
            que só a DiFaria Barber Music oferece.
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
