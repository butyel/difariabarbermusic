import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Heart, Clock, Star, DollarSign, Shield, Quote, Scissors, ArrowRight, Diamond } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";

const baseUrl = COMPANY.domain;
const city = "Presidente Epitácio";

export const metadata: Metadata = {
  title: `Pacote para Noivos em ${city} | DiFaria Barber Music`,
  description:
    "Pacote para noivos em Presidente Epitácio: preparação completa para o grande dia. Corte, barba, sobrancelha e cuidados especiais. Agende na DiFaria.",
  alternates: { canonical: `${baseUrl}/pacote-para-noivos-em-presidente-epitacio` },
  openGraph: {
    title: `Pacote para Noivos em ${city} | DiFaria Barber Music`,
    description: "Pacote para noivos em Presidente Epitácio: preparação completa para o grande dia.",
    url: `${baseUrl}/pacote-para-noivos-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/capa.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Quanto tempo antes do casamento devo agendar?",
    answer:
      "Recomendamos agendar com pelo menos 15 a 30 dias de antecedência, especialmente em épocas de alta temporada (maio a outubro). O pacote inclui uma sessão preparatória e o acerto final próximo à data.",
  },
  {
    question: "O pacote inclui teste de visual?",
    answer:
      "Sim! Incluímos uma sessão de testes aproximadamente 15 dias antes para definir o corte, barba e estilo que serão usados no grande dia. Assim não há surpresas e tudo sai exatamente como planejado.",
  },
  {
    question: "O pacote atende apenas o noivo?",
    answer:
      "O pacote principal é focado no noivo, mas podemos atender padrinhos e familiares com horários próximos. Consulte disponibilidade para grupos.",
  },
  {
    question: "Quanto tempo dura o preparo no dia do casamento?",
    answer:
      "O atendimento no dia do casamento dura em média 1 hora, incluindo corte ou ajuste fino, barba, sobrancelha e finalização. Tudo feito com calma para você chegar tranquilo ao altar.",
  },
  {
    question: "Precisa levar algum produto ou acessório?",
    answer:
      "Nós fornecemos todos os produtos e finalizadores. Se for usar algum produto específico no dia (como a pomada que você já tem), pode trazer — ajustamos a finalização conforme sua preferência.",
  },
];

const testimonials = [
  {
    text: "O pacote para noivos da DiFaria foi essencial. Cheguei no casamento me sentindo impecável. O Rafael cuidou de cada detalhe.",
    author: "Rafael e Camila",
  },
  {
    text: "Fizemos o pacote eu e meus padrinhos. Todo mundo ficou lindo, atendimento nota 10. Recomendo de olhos fechados.",
    author: "Felipe e Ana",
  },
];

const servicesWithSlug = SERVICES.filter((s): s is typeof s & { slug: string } => "slug" in s);
const related = servicesWithSlug.filter((s) => ["corte-masculino", "barba", "corte-e-barba", "sobrancelha-masculina", "barboterapia", "producao-masculina-para-casamento"].includes(s.slug));

export default function PacoteNoivosPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Pacote para Noivos", item: `${baseUrl}/pacote-para-noivos-em-presidente-epitacio` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pacote para Noivos em Presidente Epitácio",
    description: "Preparação completa para casamentos incluindo corte, barba, sobrancelha e cuidados especiais.",
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
          <AnimateIn variant="fade-up"><span className="eyebrow">Casamento</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h1 style={{ margin: "20px auto 24px" }}>Pacote para Noivos em {city}</h1></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              O seu grande dia merece uma preparação à altura. O pacote para noivos da DiFaria Barber Music
              foi criado para que você chegue ao altar se sentindo confiante e impecável. Inclui consultoria
              de estilo, sessão de testes, corte personalizado, barba desenhada, design de sobrancelha e
              finalização premium. Tudo planejado com antecedência para que no dia do casamento você só
              se preocupe em aproveitar cada momento. Oferecemos também horário especial e atendimento
              diferenciado para noivos e padrinhos.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Consultar pacote</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">O que inclui</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>O pacote completo</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" /><h3>Corte personalizado</h3>
                <p>Corte definido na sessão de testes e ajustado no dia, exatamente como você ensaiou.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" /><h3>Barba e sobrancelha</h3>
                <p>Barba desenhada e sobrancelha alinhada para um visual completo e harmônico.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" /><h3>Finalização premium</h3>
                <p>Produtos profissionais para fixação e brilho que duram a festa toda.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Heart aria-hidden="true" /><h3>Teste de visual</h3>
                <p>Sessão preparatória dias antes para definir o estilo sem surpresas.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Shield aria-hidden="true" /><h3>Atendimento VIP</h3>
                <p>Horário exclusivo e sem pressa para que você saia tranquilo para o grande momento.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Diamond aria-hidden="true" /><h3>Padrinhos incluídos</h3>
                <p>Consulte pacotes especiais para atender padrinhos e familiares próximos à data.</p>
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
              O pacote para noivos é indicado para todo homem que quer estar impecável no dia do casamento — do civil à festa. Também atende padrinhos, pais dos noivos e familiares que desejam um preparo especial. Atendemos grupos com horários próximos para que todos fiquem prontos juntos.
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
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Duração (dia)</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>~1 hora</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <DollarSign aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Pacote completo</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>Sob consulta</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">Depoimentos</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>O que nossos clientes dizem</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              {testimonials.map((t) => (
                <div className="stagger-item" key={t.author} style={{ textAlign: "center", maxWidth: 320 }}>
                  <Quote aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.3 }} size={24} />
                  <p style={{ fontStyle: "italic", color: "#2a4235", marginBottom: 12 }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ fontWeight: 600, margin: 0, color: "#1f4a33" }}>{t.author}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

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
          <AnimateIn variant="fade-up"><h2 style={{ margin: "16px auto 28px" }}>Agende o pacote para noivos</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>Entre em contato pelo WhatsApp e garanta o melhor horário para o seu grande dia.</p>
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
