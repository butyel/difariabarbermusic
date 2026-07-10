import type { Metadata } from "next";
import Image from "next/image";
import { Music2, Scissors, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história da DiFaria Barber Music em Presidente Epitácio. Técnica, estética, música e atendimento personalizado para homens que valorizam presença e personalidade.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <main>
      <Header />

      <section className="section section-cream" style={{ paddingTop: "120px" }}>
        <div className="container experience">
          <div className="section-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">A experiência</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h1>Mais que um corte. Uma assinatura de estilo.</h1>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                A DiFaria Barber Music une técnica, estética, música e atendimento
                personalizado. Cada detalhe do ambiente foi pensado para homens que
                valorizam presença, qualidade e personalidade.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <p>
                Localizada no coração de Presidente Epitácio, a DiFaria nasceu da
                paixão por barbearia e música. Mais do que um corte de cabelo,
                oferecemos uma experiência completa: desde a consultoria de estilo
                até a finalização, tudo é feito sob medida para cada cliente.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={250}>
              <p>
                Nosso espaço foi projetado para unir o melhor da barbearia tradicional
                com um ambiente moderno e acolhedor. Música selecionada, atendimento
                premium e a certeza de que você vai sair daqui se sentindo renovado.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200} stagger>
              <div className="feature-grid" style={{ marginTop: 32 }}>
                <div className="stagger-item">
                  <Scissors aria-hidden="true" />
                  <h3>Técnica e precisão</h3>
                  <p>Acabamento limpo e consultoria para encontrar o estilo ideal.</p>
                </div>
                <div className="stagger-item">
                  <Music2 aria-hidden="true" />
                  <h3>Atmosfera única</h3>
                  <p>Uma identidade que conecta barbearia, música e experiência.</p>
                </div>
                <div className="stagger-item">
                  <Sparkles aria-hidden="true" />
                  <h3>Atendimento premium</h3>
                  <p>Cuidado individual para você sair confiante em cada visita.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn variant="slide-right" delay={100}>
            <div className="portrait-frame">
              <Image
                src="/images/will.jpeg"
                alt="Profissional da DiFaria Barber Music realizando um atendimento"
                width={720}
                height={900}
                sizes="(max-width: 800px) 100vw, 45vw"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">O profissional</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Paixão por barbearia desde o primeiro corte</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Cada cliente que senta na cadeira recebe atenção exclusiva. Da
              consultoria ao acabamento, o objetivo é sempre o mesmo: fazer você
              sair daqui com a autoestima renovada.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <span>Agendar horário</span>
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
