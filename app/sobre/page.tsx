import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Conheça a DiFaria Barber Music em Presidente Epitácio",
  description:
    "Conheça a história da DiFaria Barber Music, criada por William Farias para unir barbearia, música, estilo, presença e atendimento personalizado.",
  alternates: { canonical: `${baseUrl}/sobre` },
  openGraph: {
    title: "Conheça a DiFaria Barber Music em Presidente Epitácio",
    description:
      "Conheça a história da DiFaria Barber Music, criada por William Farias para unir barbearia, música, estilo, presença e atendimento personalizado.",
    url: `${baseUrl}/sobre`,
    images: [
      { url: `${baseUrl}/images/will.jpeg`, width: 1200, height: 630, alt: "William Farias - DiFaria Barber Music" },
    ],
  },
};

export default function SobrePage() {
  return (
    <main>
      <Header />

      <section className="section section-cream" style={{ paddingTop: "120px" }}>
        <div className="container experience">
          <div className="section-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">A experiência</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h1 style={{ lineHeight: 1.1 }}>Mais que um corte. Uma experiência!<br /><span style={{ fontSize: "0.65em", fontWeight: 400, display: "block", marginTop: 8 }}>Uma experiência que transforma sua presença.</span></h1>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                A DiFaria Barber Music nasceu em Presidente Epitácio com uma proposta diferente: unir barbearia, música, estilo e atendimento personalizado em um só lugar.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <p>
                Aqui, cada cliente é recebido de forma única. Antes de começar o corte, buscamos entender sua rotina, seu estilo e a imagem que você deseja transmitir. Do atendimento à finalização, cada detalhe é pensado para valorizar seus traços, renovar sua aparência e fazer com que você saia se sentindo mais confiante.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={250}>
              <p>
                Nosso espaço combina a tradição da barbearia com um ambiente moderno, confortável e cheio de personalidade. A música faz parte da experiência, assim como o cuidado com a técnica, o acabamento e a atenção dedicada a cada cliente.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={300}>
              <p>
                À frente da DiFaria está William Farias, CEO, barbeiro e criador do programa empresarial Código de Imagem. Sua visão vai além da estética. Para William, a imagem pessoal também comunica presença, credibilidade, cuidado e autoridade antes mesmo de qualquer palavra.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={350}>
              <p>
                Foi a partir dessa ideia que surgiu o <strong>Código de Imagem</strong>, uma iniciativa da DiFaria Barber Music voltada a líderes, empresários e organizações que entendem a importância da apresentação pessoal no ambiente profissional. O programa trabalha pilares como presença, credibilidade, autoridade, performance e experiência, conectando cuidado pessoal, comportamento e posicionamento.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={400}>
              <p>
                Essa mesma visão está presente em cada atendimento da barbearia. Não se trata apenas de cortar o cabelo ou cuidar da barba. Trata-se de compreender o que combina com cada pessoa e entregar um resultado que represente sua personalidade.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={450}>
              <p>
                Localizada no coração de Presidente Epitácio, a DiFaria Barber Music oferece cortes masculinos, degradê, barba, acabamento e atendimento personalizado em um ambiente criado para quem valoriza qualidade, identidade e uma experiência diferenciada. A marca também se destaca pela identidade visual, pelo conceito que une música e estilo e pela excelente reputação construída junto aos clientes.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={500}>
              <p>
                Na DiFaria, cada detalhe importa. A técnica, o ambiente, a música, a conversa e o resultado final fazem parte de uma experiência pensada para que você se reconheça no espelho e se sinta preparado para ocupar qualquer ambiente com mais confiança.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn variant="slide-right" delay={100}>
            <div className="portrait-frame">
              <Image
                src="/images/will.jpeg"
                alt="William Farias, CEO e barbeiro da DiFaria Barber Music"
                width={720}
                height={900}
                sizes="(max-width: 800px) 100vw, 45vw"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Código de Imagem</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>Presença, credibilidade e autoridade</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, margin: "0 auto", color: "#72816a" }}>
              O programa empresarial Código de Imagem foi criado para líderes e organizações que entendem que a imagem pessoal também comunica presença, cuidado e autoridade no ambiente profissional.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <span>Agendar horário</span>
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
