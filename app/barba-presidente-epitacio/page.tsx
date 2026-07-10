import type { Metadata } from "next";
import { Scissors, Sparkles, Droplets, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Barba em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Barba em Presidente Epitácio com desenho, alinhamento e acabamento profissional. Valorize seu visual. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/barba-presidente-epitacio` },
  openGraph: {
    title: "Barba em Presidente Epitácio | DiFaria Barber Music",
    description: "Barba em Presidente Epitácio com desenho e acabamento profissional. Agende na DiFaria.",
    url: `${baseUrl}/barba-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

export default function BarbaPage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Barba</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Barba em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
              Uma barba bem feita faz toda a diferença. Na DiFaria Barber Music, o serviço de barba
              em Presidente Epitácio inclui desenho, alinhamento, hidratação e acabamento com navalha.
              Seja barba cheia, desenhada ou estilo cavanhaque, garantimos um resultado profissional
              que valoriza seu rosto.
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
            <span className="eyebrow dark">Cuidados</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Serviço completo de barba</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Desenho e alinhamento</h3>
                <p>Definimos o contorno ideal para o formato do seu rosto, com linhas precisas e simétricas.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Droplets aria-hidden="true" />
                <h3>Hidratação profissional</h3>
                <p>Produtos específicos para amaciar os fios e cuidar da pele sob a barba.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Acabamento com navalha</h3>
                <p>Toque final com navalha para um resultado limpo e preciso que dura mais tempo.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" />
                <h3>Estilos variados</h3>
                <p>Barba cheia, cavanhaque, desenhada ou só o contorno — o estilo que combina com você.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende sua barba</h2>
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
