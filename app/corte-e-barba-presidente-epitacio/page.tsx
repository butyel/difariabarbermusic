import type { Metadata } from "next";
import { Scissors, Sparkles, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
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
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Completo</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Corte e Barba em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
              Nosso combo corte e barba em Presidente Epitácio é a escolha perfeita para quem quer
              sair completo. Enquanto o corte ganha forma com tesoura e máquina, a barba é desenhada
              e alinhada para um visual harmônico. Tudo no mesmo lugar, com agilidade e qualidade
              que só a DiFaria Barber Music oferece.
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
            <span className="eyebrow dark">Vantagens</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Por que fazer o combo</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Corte e barba em harmonia</h3>
                <p>Os dois serviços são feitos de forma integrada para um visual coeso e equilibrado.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Clock aria-hidden="true" />
                <h3>Agilidade no atendimento</h3>
                <p>Todo o cuidado em uma única sessão, sem precisar agendar dois horários separados.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Resultado profissional</h3>
                <p>Técnica apurada para que corte e barba se complementem e valorizem seus traços.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" />
                <h3>Melhor custo-benefício</h3>
                <p>Combo com preço especial em comparação aos serviços avulsos.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu combo</h2>
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
