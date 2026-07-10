import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Gallery from "@/components/Gallery";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Veja as fotos do ambiente, atendimentos e estrutura da DiFaria Barber Music em Presidente Epitácio. Conheça o espaço onde estilo e música se encontram.",
  alternates: { canonical: "/galeria" },
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
