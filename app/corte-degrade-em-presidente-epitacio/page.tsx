import type { Metadata } from "next";
import { Scissors, Sparkles, Zap, ChevronDown, DollarSign, Star, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import { COMPANY, WHATSAPP, whatsappUrl } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";

const baseUrl = COMPANY.domain;
const trackingMessage = "Olá, encontrei a DiFaria pela página de degradê e gostaria de consultar os horários disponíveis.";

export const metadata: Metadata = {
  title: "Corte Degradê em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte degradê em Presidente Epitácio com transições impecáveis. Low fade, mid fade, high fade e navalhado. Especialistas em degradê na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-degrade-em-presidente-epitacio` },
  openGraph: {
    title: "Corte Degradê em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Corte degradê em Presidente Epitácio com transições impecáveis. Agende na DiFaria Barber Music.",
    url: `${baseUrl}/corte-degrade-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Qual a diferença entre low fade, mid fade e high fade?",
    answer:
      "O low fade começa próximo às orelhas e desce suavemente — é o mais discreto, ideal para ambientes formais. O mid fade inicia no meio da lateral, oferecendo equilíbrio entre ousadia e sofisticação. O high fade começa no alto da cabeça, criando um contraste marcante e visual esportivo. Na consultoria, indicamos o mais adequado para você.",
  },
  {
    question: "Degradê funciona em cabelo cacheado ou crespo?",
    answer:
      "Sim! O degradê em cabelos cacheados e crespos fica incrível quando bem executado. A técnica exige cuidado com a textura e a direção do fio para garantir transições suaves. Nossa equipe tem experiência com todos os tipos de cabelo e sabe valorizar cada curvatura.",
  },
  {
    question: "Quanto tempo dura um degradê bem feito?",
    answer:
      "Com o crescimento natural do cabelo, o degradê começa a perder o contorno em cerca de 10 a 15 dias. Recomendamos a manutenção a cada 15 dias para quem quer manter o visual sempre alinhado. Clientes que preferem um aspecto mais natural podem estender para 20 dias.",
  },
  {
    question: "O que é degradê navalhado?",
    answer:
      "É uma técnica que utiliza a navalha no lugar da máquina para criar a transição do degradê. O resultado é ainda mais suave e natural, com um desvanecimento progressivo que muitos clientes preferem. É ideal para quem busca um visual mais texturizado e menos marcado.",
  },
  {
    question: "Posso combinar degradê com barba?",
    answer:
      "Com certeza! O degradê combinado com a barba bem desenhada é um dos visuais mais pedidos. A transição do cabelo se conecta com a barba, criando um fluxo visual harmonioso. Oferecemos o combo corte degradê + barba com valor especial.",
  },
];



export default function CorteDegradePage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Degradê</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1 style={{ margin: "20px auto 24px" }}>Corte Degradê em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              O corte degradê em Presidente Epitácio é uma das nossas maiores especialidades na DiFaria Barber Music.
              Seja low fade para um visual mais discreto, mid fade para o equilíbrio perfeito ou high fade para quem
              gosta de ousar, cada transição é feita com técnica apurada e atenção milimétrica. Trabalhamos com
              máquina de precisão, tesoura e navalha para criar degradês limpos e simétricos, adaptados ao seu
              tipo de cabelo e formato de rosto. Além do degradê tradicional, fazemos o navalhado — uma técnica
              que entrega um desvanecimento ainda mais suave e natural. Se você busca um visual moderno, bem
              acabado e que chama atenção pelo capricho, o degradê na DiFaria é a escolha certa.
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
            <span className="eyebrow dark">Tipos de degradê</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Qual fade combina com você?</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <ChevronDown aria-hidden="true" />
                <h3>Low fade</h3>
                <p>Transição baixa, próxima às orelhas. Discreto e elegante, ideal para ambientes profissionais.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Mid fade</h3>
                <p>Começa no meio da lateral. O mais versátil e equilibrado, funciona com qualquer estilo no topo.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Zap aria-hidden="true" />
                <h3>High fade</h3>
                <p>Transição no alto da lateral. Visual ousado e esportivo para quem gosta de marcar presença.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Navalhado</h3>
                <p>Técnica com navalha para um degradê ainda mais suave e com textura diferenciada.</p>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Preço do corte degradê</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              O valor do degradê em Presidente Epitácio varia conforme o tipo de fade escolhido
              e a complexidade do serviço. Consulte nossos preços pelo WhatsApp. Aceitamos cartão,
              débito, PIX e dinheiro.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="pricing-cards" style={{ marginTop: 28 }}>
              <div className="pricing-card">
                <Clock aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Duração</p>
                <p className="pricing-card-value">45 min</p>
              </div>
              <div className="pricing-card">
                <DollarSign aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Degradê simples</p>
                <p className="pricing-card-value">Sob consulta</p>
              </div>
              <div className="pricing-card">
                <Star aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Degradê + barba</p>
                <p className="pricing-card-value">Sob consulta</p>
              </div>
            </div>
            <p style={{ marginTop: 20, fontSize: "0.85rem", color: "#72816a" }}>
              Aceitamos: Cartão de Crédito, Débito, PIX e Dinheiro
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Perguntas frequentes sobre degradê</h2>
          </AnimateIn>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

          <Testimonials testimonials={TESTIMONIALS["corte-degrade"]} variant="dark" />

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu degradê</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e agende o melhor horário para você.
            </p>
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

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
