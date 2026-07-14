import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Heart, Clock, Star, DollarSign, Quote, Scissors, ArrowRight, Music2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";

const baseUrl = COMPANY.domain;
const city = "Presidente Epitácio";

export const metadata: Metadata = {
  title: `Produção Masculina para Casamento em ${city} | DiFaria Barber Music`,
  description:
    "Produção masculina para casamento em Presidente Epitácio. Visual completo para noivos, padrinhos e convidados: corte, barba, sobrancelha e finalização. Agende na DiFaria.",
  alternates: { canonical: `${baseUrl}/producao-masculina-para-casamento-em-presidente-epitacio` },
  openGraph: {
    title: `Produção Masculina para Casamento em ${city} | DiFaria Barber Music`,
    description: "Produção masculina para casamento em Presidente Epitácio: visual completo.",
    url: `${baseUrl}/producao-masculina-para-casamento-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/capa.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Qual a diferença entre este serviço e o pacote para noivos?",
    answer:
      "O pacote para noivos é um combo fechado com várias sessões (testes + dia do casamento). Já a produção masculina para casamento é um atendimento avulso focado no visual completo em uma única sessão — ideal para padrinhos, familiares ou convidados que querem um cuidado especial para a ocasião.",
  },
  {
    question: "Quanto tempo antes do evento devo agendar?",
    answer:
      "Recomendamos agendar com pelo menos 1 semana de antecedência, especialmente em épocas de muitos eventos. Para horários de última hora, consulte a disponibilidade pelo WhatsApp.",
  },
  {
    question: "Quanto tempo dura o atendimento?",
    answer:
      "A produção completa leva de 50 minutos a 1 hora e 10 minutos, incluindo corte, barba, sobrancelha e finalização. É tempo suficiente para um resultado caprichado sem pressa.",
  },
  {
    question: "Atendem grupos de padrinhos?",
    answer:
      "Sim! Temos experiência em atender grupos de padrinhos e familiares. Basta agendar com antecedência para organizarmos os horários consecutivos e deixar todo mundo pronto a tempo.",
  },
  {
    question: "Fazem maquiagem masculina ou correção de imperfeições?",
    answer:
      "Sim, oferecemos finalização com produtos específicos para a pele masculina, incluindo correção sutil de olheiras e imperfeições quando necessário. Consulte na hora do agendamento.",
  },
];

const testimonials = [
  {
    text: "Fiz a produção para o casamento do meu irmão. Fiquei muito bem, recebi vários elogios. O acabamento é impecável.",
    author: "Rafael B.",
  },
  {
    text: "Levamos os padrinhos para fazer a produção na DiFaria e o resultado foi sensacional. Todo mundo alinhado e bonito nas fotos.",
    author: "Luciana (mãe do noivo)",
  },
];

const servicesWithSlug = SERVICES.filter((s): s is typeof s & { slug: string } => "slug" in s);
const related = servicesWithSlug.filter((s) => ["corte-masculino", "barba", "corte-e-barba", "sobrancelha-masculina", "barboterapia", "pacote-para-noivos"].includes(s.slug));

export default function ProducaoCasamentoPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Produção para Casamento", item: `${baseUrl}/producao-masculina-para-casamento-em-presidente-epitacio` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Produção Masculina para Casamento em Presidente Epitácio",
    description: "Visual completo para casamentos incluindo corte personalizado, barba, sobrancelha e finalização profissional.",
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
          <AnimateIn variant="fade-up"><span className="eyebrow">Eventos</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h1 style={{ margin: "20px auto 24px" }}>Produção Masculina para Casamento em {city}</h1></AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              Casamento é daqueles eventos em que cada detalhe importa — e o visual masculino não fica de fora.
              A produção masculina para casamento na DiFaria Barber Music é o serviço ideal para noivos, padrinhos,
              pais e convidados que querem estar impecáveis na ocasião. Inclui corte personalizado, barba
              desenhada, design de sobrancelha e finalização premium com produtos profissionais. Tudo feito
              com calma, capricho e a atenção que um momento especial merece.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_service">
                <span>Agendar produção</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up"><span className="eyebrow dark">O que inclui</span></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}><h2 style={{ margin: "16px auto 28px" }}>Visual completo para o evento</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" /><h3>Corte personalizado</h3>
                <p>Corte alinhado ao estilo do evento, do clássico ao contemporâneo, com acabamento preciso.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" /><h3>Barba e sobrancelha</h3>
                <p>Barba desenhada e sobrancelha alinhada para um visual completo e fotogênico.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Music2 aria-hidden="true" /><h3>Finalização duradoura</h3>
                <p>Produtos de alta fixação que mantêm o visual impecável durante toda a celebração.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" /><h3>Correção sutil</h3>
                <p>Finalização com produtos específicos para uniformizar a pele e realçar a aparência nas fotos.</p>
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
              A produção masculina para casamento é indicada para noivos que querem um cuidado especial no dia, padrinhos que desejam estar alinhados para as fotos, pais dos noivos e familiares que participam da cerimônia, e convidados que querem um visual impecável para a ocasião.
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
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>50-70 min</p>
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
          <AnimateIn variant="fade-up"><h2 style={{ margin: "16px auto 28px" }}>Agende sua produção para casamento</h2></AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>Entre em contato pelo WhatsApp e garanta seu horário.</p>
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
