import type { Metadata } from "next";
import { Scissors, Sparkles, Zap, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Corte Degradê em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte degradê em Presidente Epitácio com transições limpas. Low fade, mid fade, high fade e navalhado. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-degrade-presidente-epitacio` },
  openGraph: {
    title: "Corte Degradê em Presidente Epitácio | DiFaria Barber Music",
    description: "Corte degradê em Presidente Epitácio com transições limpas. Agende na DiFaria.",
    url: `${baseUrl}/corte-degrade-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

export default function CorteDegradePage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Degradê</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Corte Degradê em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
              O corte degradê em Presidente Epitácio é nossa especialidade. Trabalhamos com low fade,
              mid fade, high fade e degradê navalhado para criar transições suaves e um visual moderno.
              Cada detalhe é pensado para um resultado limpo, simétrico e com a sua personalidade.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Tipos de degradê</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Qual fade combina com você?</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <ChevronDown aria-hidden="true" />
                <h3>Low fade</h3>
                <p>Transição baixa, próxima às orelhas. Discreto e elegante, ideal para ambientes profissionais.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Mid fade</h3>
                <p>Começa no meio da lateral. O mais versátil e equilibrado, funciona com qualquer estilo no topo.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Zap aria-hidden="true" />
                <h3>High fade</h3>
                <p>Transição no alto da lateral. Visual ousado e esportivo para quem gosta de marcar presença.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Navalhado</h3>
                <p>Técnica com navalha para um degradê ainda mais suave e com textura diferenciada.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu degradê</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e agende o melhor horário para você.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar agora</span>
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
