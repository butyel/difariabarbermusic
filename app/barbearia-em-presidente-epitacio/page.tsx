import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Barbearia premium em Presidente Epitácio. Corte masculino, degradê, barba e atendimento personalizado. Agende seu horário pelo WhatsApp.",
  alternates: { canonical: `${baseUrl}/barbearia-em-presidente-epitacio` },
  openGraph: {
    title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Barbearia premium em Presidente Epitácio. Corte masculino, degradê, barba e atendimento personalizado.",
    url: `${baseUrl}/barbearia-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
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
