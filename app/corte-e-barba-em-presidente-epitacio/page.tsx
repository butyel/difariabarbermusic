import type { Metadata } from "next";
import { Scissors, Sparkles, Clock, Star, DollarSign, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import { COMPANY, WHATSAPP, whatsappUrl } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";

const baseUrl = COMPANY.domain;
const trackingMessage = "Olá, encontrei a DiFaria pela página de corte + barba e gostaria de consultar os horários disponíveis.";

export const metadata: Metadata = {
  title: "Corte e Barba em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Combo corte e barba em Presidente Epitácio com preço especial. Renove o visual completo em um só atendimento. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-e-barba-em-presidente-epitacio` },
  openGraph: {
    title: "Corte e Barba em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Combo corte e barba em Presidente Epitácio com preço especial. Agende na DiFaria Barber Music.",
    url: `${baseUrl}/corte-e-barba-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Quanto tempo leva o combo corte e barba?",
    answer:
      "O atendimento completo leva em média 50 minutos a 1 hora e 10 minutos, dependendo da complexidade do corte e do estilo de barba. É tempo suficiente para fazer tudo com calma, sem pressa e com máximo capricho em cada detalhe.",
  },
  {
    question: "O combo corte e barba tem preço especial?",
    answer:
      "Sim! O combo corte e barba em Presidente Epitácio na DiFaria sai mais em conta do que contratar os dois serviços separadamente. Consulte o valor pelo WhatsApp — oferecemos um preço fechado especial para o combo completo.",
  },
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Recomendamos o agendamento, especialmente em horários de pico (finais de semana e após as 17h). O combo exige mais tempo de atendimento, então agendar garante que teremos todo o cuidado necessário para você.",
  },
  {
    question: "Posso escolher estilos diferentes para corte e barba?",
    answer:
      "Com certeza! Você pode optar por um corte clássico com barba cheia, um degradê moderno com cavanhaque, ou qualquer combinação que preferir. Durante a consultoria, alinhamos os dois estilos para que fiquem em harmonia.",
  },
  {
    question: "O combo inclui hidratação ou finalização?",
    answer:
      "Sim, a finalização está inclusa no combo — tanto para o cabelo quanto para a barba. A hidratação de barba também faz parte do serviço completo. Caso queira uma hidratação capilar mais aprofundada, consulte nossos serviços adicionais.",
  },
];



export default function CorteBarbaPage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Completo</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1 style={{ margin: "20px auto 24px" }}>Corte e Barba em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              O combo corte e barba em Presidente Epitácio é a escolha certa para quem quer renovar
              o visual por completo em um único atendimento. Na DiFaria Barber Music, integramos os
              dois serviços com harmonia: enquanto o corte ganha forma com tesoura e máquina, a barba
              é desenhada e alinhada para complementar perfeitamente o resultado final. Você economiza
              tempo, evita agendar dois horários separados e ainda leva um preço especial pelo combo.
              Cada detalhe é pensado para que o visual fique coeso — do degradê na lateral ao contorno
              da barba, tudo se conecta. E claro, você sai com aquele pós-barba relaxado, pronto para
              enfrentar a semana com estilo e confiança.
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
            <span className="eyebrow dark">Vantagens</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Por que fazer o combo</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Corte e barba em harmonia</h3>
                <p>Os dois serviços são feitos de forma integrada para um visual coeso e equilibrado.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Clock aria-hidden="true" />
                <h3>Agilidade no atendimento</h3>
                <p>Todo o cuidado em uma única sessão, sem precisar agendar dois horários separados.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Resultado profissional</h3>
                <p>Técnica apurada para que corte e barba se complementem e valorizem seus traços.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" />
                <h3>Melhor custo-benefício</h3>
                <p>Combo com preço especial em comparação aos serviços avulsos.</p>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Preço do combo corte e barba</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              O combo corte e barba em Presidente Epitácio tem valor promocional fechado,
              mais em conta que os serviços avulsos. Consulte pelo WhatsApp. Aceitamos cartão,
              débito, PIX e dinheiro.
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
                <p className="pricing-card-label">Combo corte + barba</p>
                <p className="pricing-card-value">Sob consulta</p>
              </div>
              <div className="pricing-card">
                <TrendingUp aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Economia no combo</p>
                <p className="pricing-card-value">Consulte</p>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Perguntas frequentes sobre o combo</h2>
          </AnimateIn>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

          <Testimonials testimonials={TESTIMONIALS["corte-e-barba"]} variant="dark" />

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende seu combo</h2>
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
