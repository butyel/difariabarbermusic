import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, FAQS } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Dúvidas sobre Cortes e Agendamentos | DiFaria Barber Music",
  description:
    "Tire suas dúvidas sobre agendamento, localização, cortes, barba e atendimento na DiFaria Barber Music em Presidente Epitácio.",
  alternates: { canonical: `${baseUrl}/perguntas-frequentes` },
  openGraph: {
    title: "Dúvidas sobre Cortes e Agendamentos | DiFaria Barber Music",
    description:
      "Tire suas dúvidas sobre agendamento, localização, cortes, barba e atendimento na DiFaria Barber Music em Presidente Epitácio.",
    url: `${baseUrl}/perguntas-frequentes`,
    images: [
      { url: `${baseUrl}/images/barbearia-interior.jpg`, width: 1200, height: 630, alt: COMPANY.name },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PerguntasPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <section className="section section-mid" style={{ paddingTop: "120px" }}>
        <div className="container faq-layout">
          <div>
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">Perguntas</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h1>Antes de escolher seu próximo corte</h1>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                Informações rápidas para facilitar sua visita à DiFaria Barber Music.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <p style={{ color: "#72816a", marginTop: 16 }}>
                Ainda com dúvidas? Fale conosco pelo WhatsApp.
              </p>
            </AnimateIn>
          </div>
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
