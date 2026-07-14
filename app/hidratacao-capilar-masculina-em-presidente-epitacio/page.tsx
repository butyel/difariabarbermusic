import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Droplets, Shield, Star, Clock, DollarSign, Scissors, ArrowRight } from "lucide-react";
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
  title: `Hidratação Capilar Masculina em ${city} | DiFaria Barber Music`,
  description:
    "Hidratação capilar masculina em Presidente Epitácio. Tratamento profissional para cabelos ressecados, fragilizados ou quimicamente tratados. Agende na DiFaria.",
  alternates: { canonical: `${baseUrl}/hidratacao-capilar-masculina-em-presidente-epitacio` },
  openGraph: {
    title: `Hidratação Capilar Masculina em ${city} | DiFaria Barber Music`,
    description: "Hidratação capilar masculina em Presidente Epitácio com produtos profissionais.",
    url: `${baseUrl}/hidratacao-capilar-masculina-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-atendimento.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Homem pode fazer hidratação capilar?",
    answer:
      "Sim! A hidratação capilar masculina é um tratamento indicado para qualquer homem que queira cabelos mais saudáveis, macios e com aspecto revitalizado. Não é uma questão de gênero, e sim de cuidado com os fios.",
  },
  {
    question: "Quanto tempo dura a hidratação?",
    answer:
      "O tratamento completo leva de 20 a 30 minutos, incluindo aplicação do produto, tempo de pausa e enxágue. Pode ser combinado com o corte no mesmo horário.",
  },
  {
    question: "Com que frequência devo hidratar o cabelo?",
    answer:
      "Recomendamos a cada 15 dias para cabelos ressecados ou com química, e uma vez por mês para manutenção de cabelos saudáveis. A frequência ideal depende do seu tipo de cabelo e da rotina de cuidados.",
  },
  {
    question: "A hidratação capilar é indicada para cabelos oleosos?",
    answer:
      "Sim, mas com produtos específicos para o seu tipo de cabelo. Na avaliação, indicamos a linha mais adequada — existem hidratantes próprios para cabelos oleosos que equilibram sem pesar.",
  },
  {
    question: "Posso fazer hidratação antes do corte?",
    answer:
      "Sim, inclusive é o mais recomendado. A hidratação prepara os fios, deixando-os mais maleáveis e saudáveis para o corte. Oferecemos o combo hidratação + corte com valor especial.",
  },
];



const servicesWithSlug = SERVICES.filter((s): s is typeof s & { slug: string } => "slug" in s);
const related = servicesWithSlug.filter((s) => ["corte-masculino", "corte-degrade", "barba", "corte-e-barba"].includes(s.slug));

export default function HidratacaoPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Hidratação Capilar", item: `${baseUrl}/hidratacao-capilar-masculina-em-presidente-epitacio` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hidratação Capilar Masculina em Presidente Epitácio",
    description: "Tratamento capilar profissional para cabelos masculinos com produtos específicos.",
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
          <AnimateIn variant="fade-up"><span className="eyebrow">Cuidado capilar</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h1 style={{ margin: "20px auto 24px" }}>Hidratação Capilar Masculina em {city}</h1></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              Cabelo saudável é a base de qualquer bom corte. Na DiFaria Barber Music, a hidratação capilar
              masculina é feita com produtos profissionais selecionados para o tipo de cabelo de cada cliente.
              O tratamento recupera a maciez, o brilho e a vitalidade dos fios — ideal para quem usa pomada,
              finalizador, tem cabelo ressecado pelo sol ou química. É um serviço rápido que transforma a
              saúde do seu cabelo e ainda potencializa o resultado do corte.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar hidratação</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Benefícios</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Por que hidratar o cabelo</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Droplets aria-hidden="true" /><h3>Maciez e brilho</h3>
                <p>Recupera a oleosidade natural dos fios, devolvendo maciez, brilho e maleabilidade.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Shield aria-hidden="true" /><h3>Proteção dos fios</h3>
                <p>Cria uma camada de proteção contra agressões externas como sol, vento e poluição.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" /><h3>Recuperação capilar</h3>
                <p>Ideal para cabelos ressecados por pomadas, finalizadores, químicas ou exposição solar.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" /><h3>Potencializa o corte</h3>
                <p>Cabelo hidratado assenta melhor e valoriza o resultado final do corte ou degradê.</p>
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
              A hidratação capilar masculina é indicada para todos os tipos de cabelo — lisos, ondulados, cacheados ou crespos. É especialmente recomendada para quem usa pomadas e finalizadores com frequência, fica muito tempo exposto ao sol, tem cabelos quimicamente tratados ou simplesmente quer manter os fios saudáveis.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow">Investimento</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Preço e duração</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 28, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <Clock aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Duração</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>20-30 min</p>
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

          <Testimonials testimonials={TESTIMONIALS["hidratacao-capilar-masculina"]} variant="cream" />

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
          <AnimateIn variant="fade-up"><h2 style={{ margin: "16px auto 28px" }}>Agende sua hidratação capilar</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>Entre em contato pelo WhatsApp e agende seu horário.</p>
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
