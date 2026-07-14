import type { Metadata } from "next";
import { Scissors, Sparkles, Droplets, Star, DollarSign, ThumbsUp, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Barba em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Barba em Presidente Epitácio com desenho, alinhamento, hidratação e acabamento profissional. Valorize seu visual. Agende na DiFaria Barber Music.",
  alternates: { canonical: `${baseUrl}/barba-em-presidente-epitacio` },
  openGraph: {
    title: "Barba em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Barba em Presidente Epitácio com desenho, alinhamento e acabamento profissional. Agende na DiFaria Barber Music.",
    url: `${baseUrl}/barba-em-presidente-epitacio`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqs = [
  {
    question: "Quanto tempo leva o serviço de barba completo?",
    answer:
      "O serviço completo de barba — incluindo desenho, alinhamento, hidratação e acabamento com navalha — leva em média 30 a 40 minutos. Se for combinado com corte masculino, o atendimento total fica entre 50 minutos e 1 hora e 10 minutos.",
  },
  {
    question: "Vocês fazem hidratação de barba?",
    answer:
      "Sim! A hidratação de barba faz parte do nosso serviço completo. Utilizamos produtos específicos para amaciar os fios, hidratar a pele sob a barba e eliminar a coceira. É essencial para quem tem barba média ou longa e quer manter os fios saudáveis.",
  },
  {
    question: "Como cuidar da barba em casa entre as visitas?",
    answer:
      "Recomendamos lavar a barba com shampoo específico 2 a 3 vezes por semana, usar óleo ou balm hidratante diariamente e pentear os fios para manter o alinhamento. Evite aparar em casa sem orientação — melhores resultados vêm com manutenção profissional a cada 15 ou 20 dias.",
  },
  {
    question: "Barba cheia ou desenhada: qual escolher?",
    answer:
      "Depende do formato do seu rosto e do seu estilo pessoal. Barba cheia funciona bem em rostos ovais e alongados, enquanto a barba desenhada valoriza rostos redondos e quadrados. Na consultoria, analisamos seus traços e indicamos o melhor contorno para você.",
  },
  {
    question: "Vocês fazem apenas o desenho da barba sem aparar o comprimento?",
    answer:
      "Sim. Se você quer manter o comprimento mas precisa definir o contorno, fazemos apenas o desenho com navalha. É um serviço rápido, ideal para quem está deixando a barba crescer mas quer manter um visual alinhado.",
  },
];

const testimonials = [
  {
    text: "Minha barba nunca esteve tão alinhada. O desenho ficou perfeito, valorizou demais meu rosto. Profissionalismo incrível!",
    author: "Fernando A.",
  },
  {
    text: "Fiz a hidratação de barba e o resultado surpreendeu. Fios muito mais macios e sem coceira. Virei cliente!",
    author: "Marcos D.",
  },
];

export default function BarbaPage() {
  return (
    <main>
      <Header />
      <section className="section section-dark" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Barba</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1 style={{ margin: "20px auto 24px" }}>Barba em Presidente Epitácio</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 700, margin: "24px auto", color: "#72816a" }}>
              Uma barba bem cuidada transforma o visual. Na DiFaria Barber Music, o serviço de barba
              em Presidente Epitácio vai do desenho preciso ao alinhamento completo, incluindo hidratação
              profissional e acabamento com navalha para um resultado impecável. Se você prefere uma
              barba cheia e volumosa, um cavanhaque estiloso ou um contorno leve e sofisticado, nossa
              equipe tem a técnica certa para valorizar seus traços. Trabalhamos com produtos específicos
              para cada tipo de pelo e pele, garantindo não apenas um visual incrível, mas também a saúde
              dos seus fios. Cada sessão inclui análise do formato do rosto, definição de contorno simétrico,
              toalha quente para relaxar os poros e finalização com óleo ou balm hidratante.
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
            <span className="eyebrow dark">Cuidados</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Serviço completo de barba</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} stagger>
            <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Scissors aria-hidden="true" />
                <h3>Desenho e alinhamento</h3>
                <p>Definimos o contorno ideal para o formato do seu rosto, com linhas precisas e simétricas.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Droplets aria-hidden="true" />
                <h3>Hidratação profissional</h3>
                <p>Produtos específicos para amaciar os fios e cuidar da pele sob a barba.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Sparkles aria-hidden="true" />
                <h3>Acabamento com navalha</h3>
                <p>Toque final com navalha para um resultado limpo e preciso que dura mais tempo.</p>
              </div>
              <div className="stagger-item" style={{ textAlign: "center" }}>
                <Star aria-hidden="true" />
                <h3>Estilos variados</h3>
                <p>Barba cheia, cavanhaque, desenhada ou só o contorno — o estilo que combina com você.</p>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Preço do serviço de barba</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Consulte nossos preços de barba em Presidente Epitácio pelo WhatsApp. Aceitamos
              cartão de crédito, débito, PIX e dinheiro. Clientes recorrentes têm condições especiais.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 28, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <DollarSign aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Barba completa</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>Sob consulta</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", minWidth: 180 }}>
                <Star aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.6 }} size={28} />
                <p style={{ fontSize: "0.95rem", margin: 0, color: "#72816a" }}>Apenas desenho</p>
                <p style={{ fontSize: "1.6rem", fontWeight: 700, margin: "8px 0 0", color: "#d4a853" }}>Sob consulta</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Dúvidas</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Perguntas frequentes sobre barba</h2>
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
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Agende sua barba</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              Entre em contato pelo WhatsApp e agende o melhor horário para você.
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
