import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Gallery from "@/components/Gallery";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Galeria da Barbearia DiFaria em Presidente Epitácio",
  description:
    "Veja fotos da DiFaria Barber Music, do ambiente, da estrutura e da experiência oferecida aos clientes em Presidente Epitácio.",
  alternates: { canonical: `${baseUrl}/galeria` },
  openGraph: {
    title: "Galeria da Barbearia DiFaria em Presidente Epitácio",
    description:
      "Veja fotos da DiFaria Barber Music, do ambiente, da estrutura e da experiência oferecida aos clientes em Presidente Epitácio.",
    url: `${baseUrl}/galeria`,
    images: [
      { url: `${baseUrl}/images/barbearia.jpg`, width: 1200, height: 630, alt: "Galeria DiFaria Barber Music" },
    ],
  },
};

export default function GaleriaPage() {
  return (
    <main>
      <Header />

      <section className="section section-cream" style={{ paddingTop: "120px" }}>
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Galeria</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Onde estilo e música se encontram</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, marginBottom: 48, color: "#48564d" }}>
              Conheça o espaço da DiFaria Barber Music. Cada imagem mostra um
              pouco da atmosfera única que torna cada visita especial.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <Gallery />
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
