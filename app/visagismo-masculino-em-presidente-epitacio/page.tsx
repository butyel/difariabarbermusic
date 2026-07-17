import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Eye, Ruler, Star, Clock, DollarSign, Scissors, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import { COMPANY, WHATSAPP, SERVICES, whatsappUrl } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";

const baseUrl = COMPANY.domain;
const city = "Presidente Epitácio";
const trackingMessage = "Olá, encontrei a DiFaria pela página de visagismo masculino e gostaria de consultar os horários disponíveis.";

export const metadata: Metadata = {
  title: `Visagismo Masculino em ${city} | DiFaria Barber Music`,
  description:
    "Visagismo masculino em Presidente Epitácio: análise facial personalizada para criar o visual ideal. Corte, barba e estilo que valorizam seus traços. Agende na DiFaria.",
  alternates: { canonical: `${baseUrl}/visagismo-masculino-em-presidente-epitacio` },
  openGraph: {
    title: `Visagismo Masculino em ${city} | DiFaria Barber Music`,
    description: "Visagismo masculino em Presidente Epitácio: análise facial personalizada.",
    url: `${baseUrl}/visagismo-masculino-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-atendimento.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "O que é visagismo masculino?",
    answer:
      "Visagismo é a arte de criar uma imagem pessoal a partir da análise das formas do rosto. No visagismo masculino, estudamos o formato do seu rosto, proporções, traços marcantes e estilo de vida para indicar o corte, barba e design de sobrancelha que mais valorizam sua aparência.",
  },
  {
    question: "Visagismo é só sobre corte de cabelo?",
    answer:
      "Não. O visagismo masculino analisa o conjunto: cabelo, barba, sobrancelha, formato do rosto e até a personalidade. O resultado é um visual completo e coerente, que transmite a mensagem certa em cada contexto.",
  },
  {
    question: "Quanto tempo dura uma consultoria de visagismo?",
    answer:
      "A primeira consultoria leva de 30 a 40 minutos, incluindo análise facial, discussão de referências e definição do plano de estilo. As visitas seguintes são mais rápidas, com ajustes periódicos.",
  },
  {
    question: "Preciso levar alguma referência?",
    answer:
      "Se tiver fotos de estilos que você admira, traga! Elas ajudam na comunicação. Mas não se preocupe — durante a análise, vamos identificar juntos o que funciona melhor para você, mesmo sem referências.",
  },
  {
    question: "O visagismo tem manutenção?",
    answer:
      "Sim. O estilo definido na consultoria precisa de manutenção periódica a cada 20 ou 30 dias. A cada visita, ajustamos o corte e a barba para manter a harmonia do visual.",
  },
];



const servicesWithSlug = SERVICES.filter((s): s is typeof s & { slug: string } => "slug" in s);
const related = servicesWithSlug.filter((s) => ["corte-masculino", "barba", "sobrancelha-masculina", "corte-e-barba"].includes(s.slug));

export default function VisagismoPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Visagismo Masculino", item: `${baseUrl}/visagismo-masculino-em-presidente-epitacio` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Visagismo Masculino em Presidente Epitácio",
    description: "Análise facial personalizada para criar o visual ideal de acordo com as características do rosto.",
    provider: { "@type": "Barbershop", name: COMPANY.name, url: baseUrl },
    areaServed: { "@type": "City", name: city },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Estudo facial</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h1 style={{ margin: "20px auto 24px" }}>Visagismo Masculino em {city}</h1></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              O visagismo masculino vai além do corte de cabelo. É um estudo completo do seu rosto: formato,
              proporções, ângulos, traços marcantes e até a mensagem que você quer transmitir. Na DiFaria Barber Music,
              analisamos cada detalhe para criar um visual que valoriza sua identidade — do corte à barba, da
              sobrancelha ao estilo. Se você sente que algo no seu visual pode melhorar mas não sabe exatamente o quê,
              o visagismo é o caminho certo.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar consultoria</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Benefícios</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>O que o visagismo pode fazer por você</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Eye aria-hidden="true" /><h3>Análise facial completa</h3>
                <p>Estudo detalhado do formato do rosto, proporções e traços para um resultado personalizado.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Ruler aria-hidden="true" /><h3>Proporção e harmonia</h3>
                <p>Cada elemento do visual é pensado para equilibrar e valorizar suas características naturais.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" /><h3>Estilo com identidade</h3>
                <p>Um visual que comunica quem você é — profissional, criativo, esportivo ou sofisticado.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" /><h3>Resultado duradouro</h3>
                <p>Com as bases certas, a manutenção fica mais fácil e o visual se mantém por mais tempo.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Processo</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Como funciona</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="experience" style={{ gap: 32, gridTemplateColumns: "1fr 1fr", marginTop: 40 }}>
              <div className="stagger-item" style={{ textAlign: "center", padding: 32, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "inline-block", width: 40, height: 40, lineHeight: "40px", borderRadius: "50%", background: "var(--green-700)", color: "white", fontWeight: 700, marginBottom: 16 }}>1</span>
                <h3>Análise facial</h3>
                <p style={{ color: "#72816a", fontSize: "0.85rem" }}>Estudo do formato do rosto, assimetrias, proporções e características únicas.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center", padding: 32, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "inline-block", width: 40, height: 40, lineHeight: "40px", borderRadius: "50%", background: "var(--green-700)", color: "white", fontWeight: 700, marginBottom: 16 }}>2</span>
                <h3>Definição do estilo</h3>
                <p style={{ color: "#72816a", fontSize: "0.85rem" }}>Com base na análise, definimos corte, barba, sobrancelha e acabamento ideais para você.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Indicação</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Para quem é indicado</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#2a4235" }}>
              O visagismo masculino é para quem quer dar um passo além no cuidado com a aparência. É indicado para homens que sentem que o visual atual não transmite a mensagem certa, que querem mudar mas não sabem para onde ir, ou que buscam um estilo mais alinhado com a personalidade e o momento de vida.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Investimento</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Preço e duração</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              A consultoria de visagismo dura de 30 a 40 minutos. Consulte o valor pelo WhatsApp.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="pricing-cards" style={{ marginTop: 28 }}>
              <div className="pricing-card">
                <Clock aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Duração</p>
                <p className="pricing-card-value">60 min</p>
              </div>
              <div className="pricing-card">
                <DollarSign aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Valor</p>
                <p className="pricing-card-value">Sob consulta</p>
              </div>
            </div>
            <p style={{ marginTop: 20, fontSize: "0.85rem", color: "#72816a" }}>
              Aceitamos: Cartão de Crédito, Débito, PIX e Dinheiro
            </p>
          </AnimateIn>
        </div>
      </section>

          <Testimonials testimonials={TESTIMONIALS["visagismo-masculino"]} variant="cream" />

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Dúvidas</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Perguntas frequentes</h2></AnimateIn>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Endereço</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Venha nos visitar</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ color: "#2a4235" }}>{COMPANY.address.full}</p>
            <p style={{ color: "#2a4235", marginTop: 8 }}>{COMPANY.hours.full}</p>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><h2 style={{ margin: "16px auto 28px" }}>Agende sua consultoria de visagismo</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>Entre em contato pelo WhatsApp e transforme seu visual.</p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={whatsappUrl(trackingMessage)} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar agora</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-dark" style={{ paddingTop: 0 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <AnimateIn variant="fade-up"><span className="eyebrow">Relacionados</span></AnimateIn>
            <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Serviços complementares</h2></AnimateIn>
            <AnimateIn variant="fade-up" delay={150} stagger>
              <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
                {related.map((s) => (
                  <Link key={s.title} href={`/${s.slug}-em-presidente-epitacio`} className="stagger-item" style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{ textAlign: "center", padding: 24, background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
                      <ArrowRight aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.4 }} size={20} />
                      <h3 style={{ fontSize: "1rem" }}>{s.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
