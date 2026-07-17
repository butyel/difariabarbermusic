import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Music2, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Serviços de Barbearia em Presidente Epitácio | DiFaria",
  description:
    "Conheça todos os serviços da DiFaria Barber Music: corte masculino, degradê, barba, barboterapia, visagismo, sobrancelha e mais em Presidente Epitácio.",
  alternates: { canonical: `${baseUrl}/servicos` },
  openGraph: {
    title: "Serviços de Barbearia em Presidente Epitácio | DiFaria",
    description:
      "Conheça todos os serviços da DiFaria Barber Music em Presidente Epitácio.",
    url: `${baseUrl}/servicos`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const servicesWithPage = SERVICES.filter((s) => "slug" in s);

export default function ServicosPage() {
  return (
    <main>
      <Header />

      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Especialidades</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1 style={{ margin: "20px auto 24px", maxWidth: 800 }}>Serviços de barbearia em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, marginBottom: 48, color: "#72816a" }}>
              Do clássico ao contemporâneo, cada serviço é pensado para valorizar
              sua identidade com técnica, precisão e um atendimento que faz diferença.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="services-grid">
              {servicesWithPage.map((service, index) => {
                const href = `/${service.slug}-em-presidente-epitacio`;
                return (
                  <Link key={service.title} href={href} style={{ textDecoration: "none", color: "inherit" }}>
                    <article className="service-card stagger-item" style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <span>0{String(index + 1).padStart(2, "0")}</span>
                        <h2 style={{ fontSize: "1.2rem", margin: "12px 0 8px" }}>{service.title}</h2>
                        <p>{service.description}</p>
                      </div>
                      <span className="saiba-mais">
                        Saiba mais <ArrowRight aria-hidden="true" size={14} />
                      </span>
                    </article>
                  </Link>
                );
              })}
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="center" style={{ marginTop: 48 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Consultar e agendar</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
          <div className="container experience experience-equal">
          <div className="section-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">Preços sob consulta</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2 style={{ margin: "16px 0 28px" }}>Qualidade que cabe no seu bolso</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                Cada serviço é precificado de acordo com a complexidade e o tempo
                dedicado. Consulte nossos valores pelo WhatsApp e descubra um
                atendimento premium com preços justos.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <div className="feature-grid" style={{ marginTop: 24 }}>
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

      <div className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Agende</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ margin: "16px auto 28px" }}>Qual serviço você precisa?</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 500, margin: "0 auto 32px", color: "#72816a" }}>
              Fale conosco pelo WhatsApp e agende o melhor horário para você.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
              <span>Agendar agora</span>
            </a>
          </AnimateIn>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
