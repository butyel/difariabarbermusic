import type { Metadata } from "next";
import { Scissors, Sparkles, Music2, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
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
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Barbearia</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Barbearia em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
              Na DiFaria Barber Music, oferecemos uma experiência completa de barbearia em Presidente Epitácio.
              Cortes modernos, degradê impecável, barba alinhada e um ambiente único com música e boa energia.
              Nosso time de profissionais está pronto para transformar seu visual com atendimento personalizado.
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
            <span className="eyebrow dark">Por que escolher</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Uma barbearia feita para você</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Profissionais experientes</h3>
                <p>Equipe treinada em técnicas modernas de corte, degradê e barba para um resultado impecável.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Music2 aria-hidden="true" />
                <h3>Ambiente único</h3>
                <p>Música, estilo e atendimento personalizado em um espaço pensado para o seu conforto.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Atendimento premium</h3>
                <p>Cada cliente recebe uma consultoria de estilo antes do corte para um resultado que valoriza seus traços.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <MapPin aria-hidden="true" />
                <h3>Localização central</h3>
                <p>No coração de Presidente Epitácio, com fácil acesso e estacionamento próximo.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu horário</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e garanta o melhor horário para sua visita.
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
