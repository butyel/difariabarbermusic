import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Droplets, Heart, Clock, DollarSign, Star, Scissors, Sun, Wind, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";

const baseUrl = COMPANY.domain;
const city = "Presidente Epitácio";

export const metadata: Metadata = {
  title: `Barboterapia em ${city} | DiFaria Barber Music`,
  description:
    "Barboterapia em Presidente Epitácio: tratamento relaxante com toalhas quentes, óleos essenciais e esfoliação para barba e pele. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/barboterapia-em-presidente-epitacio` },
  openGraph: {
    title: `Barboterapia em ${city} | DiFaria Barber Music`,
    description: "Barboterapia em Presidente Epitácio com toalhas quentes e óleos essenciais.",
    url: `${baseUrl}/barboterapia-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-atendimento.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "O que é barboterapia?",
    answer:
      "Barboterapia é um tratamento completo para barba e pele do rosto que combina limpeza profunda, esfoliação, toalhas quentes, hidratação com óleos essenciais e massagem relaxante. É como um spa para a barba.",
  },
  {
    question: "Quanto tempo dura a barboterapia?",
    answer:
      "A sessão completa de barboterapia dura entre 40 e 50 minutos. Inclui higienização, esfoliação, toalhas quentes, hidratação e massagem facial.",
  },
  {
    question: "Com que frequência devo fazer barboterapia?",
    answer:
      "Recomendamos a cada 15 ou 20 dias para manter a barba e a pele saudáveis. Clientes com pele sensível ou barba muito ressecada podem se beneficiar de sessões semanais no primeiro mês.",
  },
  {
    question: "Barboterapia é só para barba grande?",
    answer:
      "Não. A barboterapia é indicada para todos os tipos e tamanhos de barba — desde a barba rala até a barba cheia. O tratamento é adaptado conforme a necessidade de cada cliente.",
  },
  {
    question: "Quais os benefícios da barboterapia?",
    answer:
      "Hidratação profunda dos fios e da pele, alívio da coceira, redução da irritação, estímulo do crescimento saudável, relaxamento muscular e uma sensação de bem-estar que dura dias.",
  },
];



const servicesWithSlug = SERVICES.filter((s): s is typeof s & { slug: string } => "slug" in s);
const related = servicesWithSlug.filter((s) => ["barba", "corte-e-barba", "visagismo-masculino", "sobrancelha-masculina"].includes(s.slug));

export default function BarboterapiaPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Barboterapia", item: `${baseUrl}/barboterapia-em-presidente-epitacio` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Barboterapia em Presidente Epitácio",
    description:
      "Tratamento relaxante para barba e pele com toalhas quentes, óleos essenciais e esfoliação.",
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
          <AnimateIn variant="fade-up"><span className="eyebrow">Spa para a barba</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h1 style={{ margin: "20px auto 24px" }}>Barboterapia em {city}</h1></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              A barboterapia é o tratamento completo para quem cuida da barba e da pele do rosto. Na DiFaria Barber Music,
              combinamos higienização profunda, esfoliação suave, toalhas quentes, óleos essenciais selecionados e massagem
              facial relaxante. O resultado é uma barba macia, pele saudável e uma sensação de renovação que vai muito
              além da estética. Ideal para quem sofre com ressecamento, coceira ou pelos encravados.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar barboterapia</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Benefícios</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Por que fazer barboterapia</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Droplets aria-hidden="true" /><h3>Hidratação profunda</h3>
                <p>Óleos essenciais e hidratantes específicos que nutrem os fios e a pele sob a barba.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sun aria-hidden="true" /><h3>Toalhas quentes</h3>
                <p>Abertura dos poros e relaxamento muscular com toalhas térmicas durante o tratamento.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" /><h3>Esfoliação suave</h3>
                <p>Remoção de células mortas e impurezas para prevenir pelos encravados e irritações.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Heart aria-hidden="true" /><h3>Bem-estar completo</h3>
                <p>Massagem facial relaxante que alivia a tensão e proporciona uma sensação revigorante.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Wind aria-hidden="true" /><h3>Alívio da coceira</h3>
                <p>Tratamento ideal para quem sofre com coceira e descamação causadas pelo crescimento da barba.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" /><h3>Crescimento saudável</h3>
                <p>Estimula os folículos capilares para uma barba mais forte, volumosa e com aspecto saudável.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Como funciona</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>O passo a passo</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Cada sessão de barboterapia na DiFaria segue um protocolo pensado para maximizar resultados e conforto.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="experience" style={{ gap: 32, gridTemplateColumns: "1fr 1fr 1fr", marginTop: 40 }}>
              <div className="stagger-item" style={{ textAlign: "center", padding: 32, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "inline-block", width: 40, height: 40, lineHeight: "40px", borderRadius: "50%", background: "var(--green-700)", color: "white", fontWeight: 700, marginBottom: 16 }}>1</span>
                <h3>Limpeza e esfoliação</h3>
                <p style={{ color: "#72816a", fontSize: "0.85rem" }}>Higienização profunda da barba e pele, seguida de esfoliação suave para remover impurezas.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center", padding: 32, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "inline-block", width: 40, height: 40, lineHeight: "40px", borderRadius: "50%", background: "var(--green-700)", color: "white", fontWeight: 700, marginBottom: 16 }}>2</span>
                <h3>Toalhas quentes</h3>
                <p style={{ color: "#72816a", fontSize: "0.85rem" }}>Aplicação de toalhas térmicas para abrir os poros, amaciar os fios e relaxar a musculatura.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center", padding: 32, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "inline-block", width: 40, height: 40, lineHeight: "40px", borderRadius: "50%", background: "var(--green-700)", color: "white", fontWeight: 700, marginBottom: 16 }}>3</span>
                <h3>Hidratação e massagem</h3>
                <p style={{ color: "#72816a", fontSize: "0.85rem" }}>Aplicação de óleos essenciais com massagem facial revitalizante e finalização.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Indicação</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Para quem é indicada</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#2a4235" }}>
              A barboterapia é para todo homem que cuida da barba e quer elevar o nível desse cuidado. Indicada especialmente para quem tem barba ressecada, coceira frequente, pelos encravados ou simplesmente busca um momento de relaxamento e autocuidado. Também é uma excelente opção de preparação para eventos especiais.
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
              A sessão de barboterapia dura entre 40 e 50 minutos. Consulte o valor pelo WhatsApp.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 28, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <Clock aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Duração</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>40-50 min</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <DollarSign aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Valor</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>Sob consulta</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

          <Testimonials testimonials={TESTIMONIALS["barboterapia"]} variant="cream" />

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
          <AnimateIn variant="fade-up"><h2 style={{ margin: "16px auto 28px" }}>Agende sua barboterapia</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e garanta o melhor horário.
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
