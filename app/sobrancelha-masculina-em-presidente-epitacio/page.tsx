import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Eye, Star, Clock, DollarSign, Scissors, ArrowRight } from "lucide-react";
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
const trackingMessage = "Olá, encontrei a DiFaria pela página de sobrancelha masculina e gostaria de consultar os horários disponíveis.";

export const metadata: Metadata = {
  title: `Sobrancelha Masculina em ${city} | DiFaria Barber Music`,
  description:
    "Design de sobrancelha masculina em Presidente Epitácio com pinça e navalha. Alinhamento natural que valoriza o olhar. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/sobrancelha-masculina-em-presidente-epitacio` },
  openGraph: {
    title: `Sobrancelha Masculina em ${city} | DiFaria Barber Music`,
    description: "Design de sobrancelha masculina em Presidente Epitácio com pinça e navalha.",
    url: `${baseUrl}/sobrancelha-masculina-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-atendimento.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Homem pode fazer sobrancelha?",
    answer:
      "Sim! O design de sobrancelha masculino é cada vez mais comum e nada mais é que um cuidado estético como qualquer outro. O segredo está num resultado natural, que mantém a masculinidade e apenas valoriza o olhar sem marcar demais.",
  },
  {
    question: "Dói fazer a sobrancelha?",
    answer:
      "A sensação é bem leve. Usamos pinça para os pelos mais grossos e navalha para o contorno e acabamento fino. A maioria dos clientes não sente desconforto significativo.",
  },
  {
    question: "Quanto tempo dura o serviço de sobrancelha?",
    answer:
      "O design completo de sobrancelha masculina leva de 15 a 20 minutos. É um atendimento rápido que pode ser combinado com corte ou barba no mesmo horário.",
  },
  {
    question: "Com que frequência devo fazer a manutenção?",
    answer:
      "Recomendamos a cada 20 ou 30 dias, dependendo da velocidade de crescimento dos pelos. Com a manutenção regular, o desenho se mantém com mais facilidade.",
  },
  {
    question: "Vocês fazem sobrancelha masculina com henna?",
    answer:
      "Trabalhamos com design natural, sem henna. Nosso foco é no alinhamento dos pelos e no contorno preciso para valorizar o olhar de forma sutil e masculina.",
  },
];



const servicesWithSlug = SERVICES.filter((s): s is typeof s & { slug: string } => "slug" in s);
const related = servicesWithSlug.filter((s) => ["barba", "visagismo-masculino", "corte-masculino", "corte-e-barba"].includes(s.slug));

export default function SobrancelhaPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Sobrancelha Masculina", item: `${baseUrl}/sobrancelha-masculina-em-presidente-epitacio` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sobrancelha Masculina em Presidente Epitácio",
    description: "Design de sobrancelha masculina com pinça e navalha para um olhar marcante e natural.",
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
          <AnimateIn variant="fade-up"><span className="eyebrow">Design natural</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h1 style={{ margin: "20px auto 24px" }}>Sobrancelha Masculina em {city}</h1></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              Uma sobrancelha bem cuidada transforma a expressão do rosto. Na DiFaria Barber Music, o design de
              sobrancelha masculina é feito com pinça e navalha para um resultado natural que valoriza o olhar
              sem perder a masculinidade. Nada de traços marcados ou artificiais — apenas o alinhamento preciso
              dos pelos, a correção de falhas e um contorno limpo que faz toda a diferença na sua aparência.
              É um serviço rápido, acessível e que acumula resultados positivos a cada visita.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar sobrancelha</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Benefícios</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Por que fazer a sobrancelha</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Eye aria-hidden="true" /><h3>Olhar marcante</h3>
                <p>Sobrancelhas alinhadas abrem o olhar e valorizam a expressão facial de forma imediata.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" /><h3>Resultado natural</h3>
                <p>Técnica que mantém a masculinidade e o formato original, apenas corrigindo o que está irregular.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" /><h3>Autoconfiança</h3>
                <p>Um detalhe que parece pequeno mas transforma a forma como você se vê e se apresenta.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" /><h3>Rápido e prático</h3>
                <p>Atendimento ágil que pode ser combinado com corte ou barba no mesmo dia.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Indicação</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Para quem é indicado</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              O design de sobrancelha masculina é indicado para qualquer homem que queira um olhar mais expressivo e uma aparência mais cuidada. É especialmente recomendado para quem tem sobrancelhas muito grossas ou com falhas, pelos que crescem em direções irregulares, ou simplesmente quer dar um upgrade sutil no visual.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Investimento</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Preço e duração</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="pricing-cards" style={{ marginTop: 28 }}>
              <div className="pricing-card">
                <Clock aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Duração</p>
                <p className="pricing-card-value">20 min</p>
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

          <Testimonials testimonials={TESTIMONIALS["sobrancelha-masculina"]} variant="cream" />

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
          <AnimateIn variant="fade-up"><h2 style={{ margin: "16px auto 28px" }}>Agende sua sobrancelha</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>Entre em contato pelo WhatsApp e agende seu horário.</p>
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
