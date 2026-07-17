import type { Metadata } from "next";
import { Smile, Sparkles, Heart, Shield, DollarSign, Star, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import { COMPANY, WHATSAPP, whatsappUrl } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";

const baseUrl = COMPANY.domain;
const trackingMessage = "Olá, encontrei a DiFaria pela página de corte infantil e gostaria de consultar os horários disponíveis.";

export const metadata: Metadata = {
  title: "Corte Infantil em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Corte infantil em Presidente Epitácio com atendimento paciente e acolhedor para os pequenos. Ambiente seguro e divertido. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/corte-infantil-em-presidente-epitacio` },
  openGraph: {
    title: "Corte Infantil em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Corte infantil em Presidente Epitácio com atendimento paciente e acolhedor. Agende na DiFaria Barber Music.",
    url: `${baseUrl}/corte-infantil-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Meu filho tem medo de cortar cabelo. Como vocês lidam?",
    answer:
      "Entendemos que muitas crianças ficam apreensivas, especialmente na primeira vez. Nossa equipe é treinada para lidar com os pequenos com paciência, criando um ambiente descontraído e divertido. Usamos distrações como conversa, música e brincadeiras para que a criança se sinta confortável durante todo o corte.",
  },
  {
    question: "Qual a idade mínima para o corte infantil?",
    answer:
      "Atendemos crianças a partir de 2 anos de idade. Para bebês, recomendamos esperar até que consigam ficar sentados com segurança na cadeira ou no colo dos pais. Em caso de dúvida, entre em contato pelo WhatsApp que orientamos.",
  },
  {
    question: "Quanto tempo dura o atendimento infantil?",
    answer:
      "O corte infantil costuma ser mais rápido que o adulto — em média 20 a 30 minutos. Procuramos ser ágeis para não cansar a criança, mas sem abrir mão da qualidade e do capricho no acabamento.",
  },
  {
    question: "Vocês têm cadeiras ou entretenimento para crianças?",
    answer:
      "Sim! Nosso espaço é preparado para receber os pequenos com conforto. Temos música, um ambiente acolhedor e profissionais que sabem conversar e distrair a criança durante o corte. Tudo para que a experiência seja positiva.",
  },
  {
    question: "Preciso levar algum material ou brinquedo?",
    answer:
      "Não é necessário, mas se seu filho tem um brinquedo ou objeto favorito que ajuda a acalmá-lo, fique à vontade para trazer. Quanto mais confortável a criança estiver, melhor será o resultado.",
  },
];



export default function CorteInfantilPage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Infantil</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1 style={{ margin: "20px auto 24px" }}>Corte Infantil em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              O corte infantil em Presidente Epitácio na DiFaria Barber Music é feito com paciência,
              carinho e muito cuidado. Sabemos que nem toda criança fica à vontade na cadeira do barbeiro,
              por isso nossa equipe é preparada para transformar o momento em uma experiência positiva
              e divertida. Trabalhamos com cortes práticos e confortáveis para o dia a dia, mas também
              com estilos moderninhos que os pequenos adoram — desde degradê infantil até cortes com
              textura e risco lateral. O ambiente é seguro, acolhedor e pensado para que a criança
              se sinta relaxada. Nosso objetivo é que ela saia feliz, estilosa e queira voltar na
              próxima vez. Traga seu filho para conhecer!
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Por que trazer seu filho</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Smile aria-hidden="true" />
                <h3>Atendimento acolhedor</h3>
                <p>Profissionais pacientes e preparados para deixar a criança confortável durante todo o corte.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Shield aria-hidden="true" />
                <h3>Ambiente seguro</h3>
                <p>Espaço pensado para receber os pequenos com segurança, higiene e conforto.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Heart aria-hidden="true" />
                <h3>Experiência positiva</h3>
                <p>Queremos que a criança saia feliz e queira voltar. Cada corte é uma experiência divertida.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Estilos moderninhos</h3>
                <p>Desde cortes práticos até visuais mais estilosos que as crianças adoram.</p>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Preço do corte infantil</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Consulte o valor do corte infantil em Presidente Epitácio pelo WhatsApp.
              Aceitamos cartão de crédito, débito, PIX e dinheiro. Irmãos ganham desconto especial!
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="pricing-cards" style={{ marginTop: 28 }}>
              <div className="pricing-card">
                <Clock aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Duração</p>
                <p className="pricing-card-value">30 min</p>
              </div>
              <div className="pricing-card">
                <DollarSign aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Corte infantil</p>
                <p className="pricing-card-value">Sob consulta</p>
              </div>
              <div className="pricing-card">
                <Star aria-hidden="true" className="pricing-card-icon" size={28} />
                <p className="pricing-card-label">Desconto para irmãos</p>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Perguntas frequentes sobre corte infantil</h2>
          </AnimateIn>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

          <Testimonials testimonials={TESTIMONIALS["corte-infantil"]} variant="dark" />

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende o corte do seu filho</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e agende o melhor horário para vocês.
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
