import type { Metadata } from "next";
import { Scissors, Sparkles, Ruler, MessageCircle, DollarSign, Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Corte Masculino em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte masculino em Presidente Epitácio com estilo próprio. Tesoura, máquina e navalha para um acabamento impecável. Agende seu horário na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-masculino-em-presidente-epitacio` },
  openGraph: {
    title: "Corte Masculino em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Corte masculino em Presidente Epitácio com estilo próprio. Agende seu horário na DiFaria Barber Music.",
    url: `${baseUrl}/corte-masculino-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Qual a diferença entre corte na tesoura e na máquina?",
    answer:
      "O corte na tesoura oferece mais naturalidade e textura, ideal para cabelos médios e longos. Já a máquina garante linhas retas e precisão, especialmente em laterais e degradês. Na DiFaria, combinamos ambas as técnicas conforme o estilo desejado e o tipo de cabelo de cada cliente.",
  },
  {
    question: "Com que frequência devo cortar o cabelo?",
    answer:
      "Para manter o formato do corte, recomendamos retornar a cada 20 a 30 dias. Cortes mais curtos, como degradê, pedem manutenção a cada 15 dias. Durante a consultoria de estilo, indicamos o intervalo ideal para o seu visual.",
  },
  {
    question: "Preciso lavar o cabelo antes de ir?",
    answer:
      "Não é necessário. Fazemos a lavagem completa antes do corte para garantir precisão no acabamento. Se vier com produtos como gel ou pomada, tudo bem — higienizamos durante o atendimento.",
  },
  {
    question: "Vocês fazem consultoria de estilo?",
    answer:
      "Sim! Antes de cada corte, analisamos o formato do seu rosto, o tipo de cabelo, sua rotina e preferências pessoais para indicar o melhor estilo. Se tiver uma foto de referência, traga conosco.",
  },
  {
    question: "Vocês atendem cabelos cacheados e crespos?",
    answer:
      "Com certeza. Nossa equipe tem experiência com todos os tipos de cabelo, incluindo texturas cacheadas e crespas. Adequamos a técnica para valorizar seus fios e garantir um resultado que funciona para você.",
  },
];

const testimonials = [
  {
    text: "Melhor corte da cidade! Saí de lá me sentindo um novo homem. O Rafael entendeu exatamente o que eu queria.",
    author: "Lucas M.",
  },
  {
    text: "Ambiente incrível, atendimento nota 10. Faço meu corte masculino aqui há mais de um ano e nunca decepciona.",
    author: "Carlos E.",
  },
];

export default function CorteMasculinoPage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Corte Masculino</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1 style={{ margin: "20px auto 24px" }}>Corte Masculino em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              Na DiFaria Barber Music, o corte masculino em Presidente Epitácio vai muito além da máquina e tesoura.
              Cada visita começa com uma consultoria de estilo: analisamos o formato do seu rosto, o tipo de fio,
              sua rotina e o visual que você deseja. Seja um corte clássico bem alinhado, um estilo moderno com textura
              ou um degradê técnico, nosso compromisso é entregar um resultado que valorize sua identidade.
              Trabalhamos com tesoura, máquina, navalha e produtos profissionais de finalização para que você saia
              com o visual impecável e pronto para qualquer ocasião — do escritório à balada.
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Por que fazer seu corte na DiFaria</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Técnica e precisão</h3>
                <p>Tesoura, máquina e navalha para um acabamento limpo e detalhado em cada corte.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Ruler aria-hidden="true" />
                <h3>Consultoria de estilo</h3>
                <p>Analisamos formato do rosto, tipo de cabelo e rotina para indicar o melhor visual.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Finalização premium</h3>
                <p>Produtos profissionais para fixação e brilho que mantêm o visual impecável por mais tempo.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <MessageCircle aria-hidden="true" />
                <h3>Atendimento personalizado</h3>
                <p>Do clássico ao contemporâneo, cada corte é pensado exclusivamente para você.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Investimento</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Preço do corte masculino</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              O valor do corte masculino em Presidente Epitácio na DiFaria Barber Music varia conforme
              a complexidade do estilo e o tipo de cabelo. Consulte nosso WhatsApp para preços atualizados
              e promoções especiais. Aceitamos cartão de crédito, débito, PIX e dinheiro.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 28, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <DollarSign aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Corte masculino</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>Sob consulta</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <Star aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Corte + finalização</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>Sob consulta</p>
              </div>
            </div>
            <p style={{ marginTop: 20, fontSize: "0.85rem", color: "#72816a" }}>
              Consulte promoções de fidelidade para clientes recorrentes.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Dúvidas</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Perguntas frequentes sobre corte masculino</h2>
          </AnimateIn>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Depoimentos</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>O que nossos clientes dizem</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              {testimonials.map((t) => (
                <div className="stagger-item" key={t.author} style={{ textAlign: "center", maxWidth: 320 }}>
                  <Quote aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.3 }} size={24} />
                  <p style={{ fontStyle: "italic", color: "#72816a", marginBottom: 12 }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ fontWeight: 600, margin: 0, color: "#d4a853" }}>{t.author}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu corte masculino</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e garanta o melhor horário para sua visita.
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
