import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, whatsappUrl } from "@/lib/constants";

const pageUrl = `${COMPANY.domain}/codigo-de-imagem`;
const presentationUrl = whatsappUrl(
  "Olá, conheci o Código de Imagem pelo site da DiFaria e gostaria de receber uma apresentação para minha empresa."
);
const founderUrl = whatsappUrl(
  "Olá, conheci o Código de Imagem pelo site e gostaria de saber mais sobre o Plano Fundador para minha equipe."
);
const premiumUrl = whatsappUrl(
  "Olá, conheci o Código de Imagem pelo site e gostaria de saber mais sobre o Plano Presença Premium para minha equipe."
);

export const metadata: Metadata = {
  title: "Código de Imagem para Empresas | DiFaria",
  description:
    "Programa corporativo da DiFaria para cuidado pessoal, presença profissional e manutenção do visual de líderes e equipes.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Código de Imagem para Empresas | DiFaria",
    description:
      "Uma solução corporativa para empresas que desejam cuidar da presença profissional de quem representa a marca todos os dias.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${COMPANY.domain}/images/blog/visagismo-masculino.webp`,
        width: 1200,
        height: 630,
        alt: "Código de Imagem, programa corporativo da DiFaria Barber Music",
      },
    ],
  },
};

const pillars = [
  {
    icon: Users,
    title: "Presença",
    text: "Cuidado pessoal alinhado ao ambiente em que líderes e equipes representam a empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Credibilidade",
    text: "Uma apresentação profissional que reforça organização, atenção e consistência.",
  },
  {
    icon: Target,
    title: "Autoridade",
    text: "Um visual coerente com a responsabilidade e o posicionamento de cada profissional.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    text: "Uma rotina de cuidado simples, previsível e integrada ao calendário da equipe.",
  },
  {
    icon: Sparkles,
    title: "Experiência",
    text: "Atendimento prioritário em um ambiente preparado para receber cada colaborador.",
  },
];

const steps = [
  {
    number: "01",
    title: "Conversa inicial",
    text: "Entendemos o tamanho da equipe, a rotina da operação e a frequência desejada.",
  },
  {
    number: "02",
    title: "Planejamento",
    text: "Organizamos um calendário com horários distribuídos para reduzir o impacto na jornada de trabalho.",
  },
  {
    number: "03",
    title: "Atendimento",
    text: "Os profissionais recebem os cortes previstos no plano com prioridade e padrão DiFaria.",
  },
  {
    number: "04",
    title: "Continuidade",
    text: "A manutenção mensal preserva a organização do benefício e permite ajustar a agenda da equipe.",
  },
];

const benefits = [
  {
    icon: CalendarCheck,
    title: "Agendamento em lote",
    text: "Horários organizados com antecedência para facilitar a gestão da equipe.",
  },
  {
    icon: BadgeCheck,
    title: "Atendimento prioritário",
    text: "Um fluxo preparado para os colaboradores incluídos no programa.",
  },
  {
    icon: Handshake,
    title: "Benefício valorizado",
    text: "Cuidado pessoal recorrente que pode fazer parte da experiência oferecida ao time.",
  },
  {
    icon: Building2,
    title: "Presença consistente",
    text: "Uma rotina visual mais organizada para quem atende clientes e representa a empresa.",
  },
];

const faqs = [
  {
    question: "Para quais empresas o Código de Imagem é indicado?",
    answer:
      "O programa pode atender empresas de diferentes segmentos que desejam oferecer manutenção de corte de cabelo a proprietários, lideranças e equipes de atendimento.",
  },
  {
    question: "É necessário ter exatamente nove profissionais?",
    answer:
      "Os planos apresentados usam uma equipe-base de nove profissionais, com um proprietário e oito colaboradores. Para equipes com outro tamanho, a DiFaria pode avaliar uma condição personalizada.",
  },
  {
    question: "Onde os atendimentos são realizados?",
    answer: `Os atendimentos são realizados na DiFaria Barber Music, na ${COMPANY.address.full}, com agenda organizada previamente.`,
  },
  {
    question: "O programa inclui outros serviços além do corte?",
    answer:
      "Os planos-base contemplam manutenção de cortes de cabelo. Barba, sobrancelha, visagismo e outros cuidados podem ser consultados separadamente conforme a necessidade da empresa.",
  },
  {
    question: "Como funciona o agendamento da equipe?",
    answer:
      "A empresa informa os participantes e a DiFaria organiza os horários em lotes, respeitando a disponibilidade da agenda e a rotina da operação.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Código de Imagem",
  description:
    "Programa corporativo de cuidado pessoal e manutenção de cortes para líderes e equipes.",
  url: pageUrl,
  provider: {
    "@type": "Barbershop",
    "@id": `${COMPANY.domain}/#barbershop`,
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "City",
    name: COMPANY.address.city,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Plano Fundador",
      price: "320.00",
      priceCurrency: "BRL",
      url: pageUrl,
    },
    {
      "@type": "Offer",
      name: "Plano Presença Premium",
      price: "580.00",
      priceCurrency: "BRL",
      url: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CodigoDeImagemPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <section className="code-hero">
        <div className="container code-hero-grid">
          <div className="code-hero-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow">Para empresas • Uma iniciativa DiFaria</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h1>
                Código de <strong>Imagem</strong>
              </h1>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p className="code-hero-lead">
                Cuidado pessoal para líderes e equipes que representam sua marca todos os dias.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={220}>
              <p className="code-hero-description">
                Um programa corporativo com manutenção de cortes, atendimento prioritário e
                agendamento organizado para transformar cuidado pessoal em um benefício simples de gerir.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={300}>
              <div className="hero-actions">
                <a className="button" href={presentationUrl} target="_blank" rel="noreferrer" data-ga="click_codigo_imagem_hero">
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Solicitar apresentação</span>
                </a>
                <a className="button button-ghost" href="#como-funciona">
                  <span>Como funciona</span>
                </a>
              </div>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={360}>
              <div className="code-hero-notes" aria-label="Diferenciais do programa">
                <span><Check aria-hidden="true" /> Planos mensais</span>
                <span><Check aria-hidden="true" /> Agenda em lote</span>
                <span><Check aria-hidden="true" /> Atendimento prioritário</span>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn variant="slide-left" delay={120}>
            <div className="code-hero-visual">
              <Image
                src="/images/will.jpeg"
                alt="William Farias, criador do programa Código de Imagem"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <div className="code-hero-visual-overlay" />
              <div className="code-hero-signature">
                <span>Idealizado por</span>
                <strong>William Farias</strong>
                <small>CEO e barbeiro</small>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="code-section-heading">
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">O conceito</span>
              <h2>Sua equipe também comunica o padrão da empresa.</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={120}>
              <p>
                O Código de Imagem organiza uma rotina de cuidado pessoal para profissionais que
                atendem clientes, lideram pessoas e representam a marca. A proposta é prática:
                oferecer constância, facilidade de agendamento e um atendimento à altura da equipe.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn variant="fade-up" delay={180} stagger>
            <div className="code-pillars-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article className="code-pillar-card stagger-item" key={pillar.title}>
                    <Icon aria-hidden="true" />
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-mid" id="como-funciona">
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Da conversa à rotina</span>
            <h2>Como o programa funciona</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={140} stagger>
            <div className="code-steps-grid">
              {steps.map((step) => (
                <article className="code-step stagger-item" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark code-benefits-section">
        <div className="container code-benefits-layout">
          <div>
            <AnimateIn variant="fade-up">
              <span className="eyebrow">Benefícios para a empresa</span>
              <h2>Mais organização para quem cuida da equipe.</h2>
              <p>
                O programa transforma atendimentos individuais em uma rotina corporativa previsível,
                com comunicação direta e acompanhamento da agenda pela DiFaria.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={180}>
              <a className="text-link" href={presentationUrl} target="_blank" rel="noreferrer" data-ga="click_codigo_imagem_benefits">
                Conversar sobre minha empresa <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </AnimateIn>
          </div>
          <AnimateIn variant="fade-up" delay={120} stagger>
            <div className="code-benefits-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article className="code-benefit-card stagger-item" key={benefit.title}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream" id="planos">
        <div className="container">
          <div className="code-plans-heading">
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">Condições de lançamento</span>
              <h2>Planos para uma equipe-base de 9 profissionais</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={120}>
              <p>
                Condições estruturadas para um proprietário e oito colaboradores. Equipes com outra
                configuração podem solicitar uma proposta personalizada.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn variant="fade-up" delay={180} stagger>
            <div className="code-plans-grid">
              <article className="code-plan-card stagger-item">
                <span className="code-plan-label">Plano Fundador</span>
                <h3>Presença essencial</h3>
                <div className="code-plan-price"><small>R$</small>320<span>/mês</span></div>
                <p className="code-plan-per-person">Valor médio de R$ 35,55 por profissional</p>
                <ul>
                  <li><Check aria-hidden="true" /> 1 corte por mês para cada profissional</li>
                  <li><Check aria-hidden="true" /> Atendimento corporativo prioritário</li>
                  <li><Check aria-hidden="true" /> Agendamento em lote facilitado</li>
                  <li><Check aria-hidden="true" /> Selo de Empresa Fundadora</li>
                </ul>
                <a className="button" href={founderUrl} target="_blank" rel="noreferrer" data-ga="click_codigo_imagem_founder">
                  <span>Conhecer o plano</span>
                </a>
              </article>

              <article className="code-plan-card code-plan-featured stagger-item">
                <span className="code-plan-recommended">Recomendado</span>
                <span className="code-plan-label">Plano Presença Premium</span>
                <h3>Presença contínua</h3>
                <div className="code-plan-price"><small>R$</small>580<span>/mês</span></div>
                <p className="code-plan-per-person">Valor médio de R$ 64,44 por profissional</p>
                <ul>
                  <li><Check aria-hidden="true" /> 2 cortes por mês para cada profissional</li>
                  <li><Check aria-hidden="true" /> Atendimento corporativo prioritário</li>
                  <li><Check aria-hidden="true" /> Agendamento em lote facilitado</li>
                  <li><Check aria-hidden="true" /> Selo de Empresa Fundadora</li>
                </ul>
                <a className="button" href={premiumUrl} target="_blank" rel="noreferrer" data-ga="click_codigo_imagem_premium">
                  <span>Conhecer o plano</span>
                </a>
              </article>
            </div>
          </AnimateIn>
          <p className="code-plans-note">
            Valores e condições sujeitos à disponibilidade de agenda e à confirmação comercial da DiFaria.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <AnimateIn variant="fade-up">
            <div>
              <span className="eyebrow dark">Perguntas frequentes</span>
              <h2>Antes de levar o programa para sua equipe</h2>
              <p>Se precisar de uma proposta diferente, fale diretamente com William.</p>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={120}>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-card code-final-cta">
          <div>
            <AnimateIn variant="fade-up">
              <span className="eyebrow">Código de Imagem</span>
              <h2>Vamos criar uma rotina de cuidado para sua equipe?</h2>
              <p>Conte quantos profissionais participariam e receba uma orientação inicial.</p>
            </AnimateIn>
          </div>
          <AnimateIn variant="scale-in" delay={180}>
            <a className="button button-light" href={presentationUrl} target="_blank" rel="noreferrer" data-ga="click_codigo_imagem_final">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Falar com William</span>
            </a>
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
