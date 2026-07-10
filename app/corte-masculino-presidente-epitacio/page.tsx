import type { Metadata } from "next";
import { Scissors, Sparkles, Ruler, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
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
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Corte Masculino</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Corte Masculino em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
              Seja um corte clássico ou um estilo contemporâneo, o corte masculino em Presidente Epitácio
              na DiFaria Barber Music é feito com precisão e atenção aos detalhes. Trabalhamos com tesoura,
              máquina e navalha para garantir um acabamento impecável que valoriza seu formato de rosto.
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
            <span className="eyebrow dark">Diferenciais</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Por que fazer seu corte na DiFaria</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Técnica e precisão</h3>
                <p>Tesoura, máquina e navalha para um acabamento limpo e detalhado em cada corte.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Ruler aria-hidden="true" />
                <h3>Consultoria de estilo</h3>
                <p>Analisamos o formato do seu rosto, tipo de cabelo e rotina para indicar o melhor corte.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Finalização premium</h3>
                <p>Produtos profissionais para fixação e brilho que mantêm o visual impecável por mais tempo.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <MessageCircle aria-hidden="true" />
                <h3>Atendimento personalizado</h3>
                <p>Do clássico ao contemporâneo, cada corte é pensado exclusivamente para você.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu corte</h2>
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
