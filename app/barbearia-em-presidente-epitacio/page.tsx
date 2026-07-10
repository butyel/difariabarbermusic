import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Barbearia em Presidente Epitácio",
  description:
    "Barbearia premium em Presidente Epitácio. Corte masculino, degradê, barba e atendimento personalizado. Agende seu horário pelo WhatsApp.",
  alternates: {
    canonical: "/barbearia-em-presidente-epitacio",
  },
};

export default function BarbeariaPage() {
  return (
    <main>
      <Header />
      <section style={{ paddingTop: "120px" }} className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Barbearia em Presidente Epitácio</h1>
          <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
            Na DiFaria Barber Music, oferecemos uma experiência completa de barbearia em Presidente Epitácio.
            Cortes modernos, degradê impecável, barba alinhada e um ambiente único com música e boa energia.
            Nosso time de profissionais está pronto para transformar seu visual com atendimento personalizado.
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
