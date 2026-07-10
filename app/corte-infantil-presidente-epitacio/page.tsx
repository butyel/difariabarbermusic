import type { Metadata } from "next";
import { Smile, Sparkles, Heart, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Corte Infantil em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte infantil em Presidente Epitácio com atendimento cuidadoso e confortável para os pequenos. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-infantil-presidente-epitacio` },
  openGraph: {
    title: "Corte Infantil em Presidente Epitácio | DiFaria Barber Music",
    description: "Corte infantil em Presidente Epitácio com atendimento cuidadoso. Agende na DiFaria.",
    url: `${baseUrl}/corte-infantil-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

export default function CorteInfantilPage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Infantil</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Corte Infantil em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "24px auto", color: "#72816a" }}>
              O corte infantil em Presidente Epitácio na DiFaria Barber Music é feito com paciência
              e carinho para os pequenos ficarem à vontade. Oferecemos desde cortes práticos e
              confortáveis até estilos moderninhos que as crianças adoram. Ambiente acolhedor e
              um resultado que vai deixar seu filho feliz e estiloso.
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Por que trazer seu filho</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Smile aria-hidden="true" />
                <h3>Atendimento acolhedor</h3>
                <p>Profissionais pacientes e preparados para deixar a criança confortável durante todo o corte.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Shield aria-hidden="true" />
                <h3>Ambiente seguro</h3>
                <p>Espaço pensado para receber os pequenos com segurança, higiene e conforto.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Heart aria-hidden="true" />
                <h3> Experiência positiva</h3>
                <p>Queremos que a criança saia feliz e queira voltar. Cada corte é uma experiência divertida.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Estilos moderninhos</h3>
                <p>Desde cortes práticos até visuais mais estilosos que as crianças adoram.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende o corte do seu filho</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e agende o melhor horário para vocês.
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
