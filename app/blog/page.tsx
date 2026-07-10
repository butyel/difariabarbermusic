import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export const metadata: Metadata = {
  title: "Dicas de Corte, Barba e Estilo Masculino | DiFaria",
  description:
    "Conteúdos sobre cortes masculinos, degradê, barba, cuidados pessoais e estilo para homens de Presidente Epitácio e região.",
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: "Dicas de Corte, Barba e Estilo Masculino | DiFaria",
    description:
      "Conteúdos sobre cortes masculinos, degradê, barba, cuidados pessoais e estilo para homens de Presidente Epitácio e região.",
    url: `${baseUrl}/blog`,
    images: [
      { url: `${baseUrl}/images/barbearia.jpg`, width: 1200, height: 630, alt: "Blog DiFaria Barber Music" },
    ],
  },
};

const posts = [
  {
    title: "Como escolher o corte ideal para o formato do seu rosto",
    excerpt:
      "Nem todo corte funciona para todo mundo. Aprenda a identificar seu formato de rosto e descubra o estilo que mais valoriza seus traços.",
    image: "/images/barbearia.jpg",
    slug: "corte-ideal-formato-rosto",
  },
  {
    title: "Degradê: low fade, mid fade ou high fade?",
    excerpt:
      "Entenda as diferenças entre os tipos de degradê e descubra qual combina mais com seu estilo e tipo de cabelo.",
    image: "/images/barbeiro.jpg",
    slug: "degrade-low-mid-high-fade",
  },
  {
    title: "Cuidados com a barba: como manter o shape em casa",
    excerpt:
      "Dicas práticas para manter sua barba alinhada entre as visitas à barbearia. Hidratação, aparação e produtos recomendados.",
    image: "/images/difaria.jpg",
    slug: "cuidados-barba-em-casa",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Header />

      <section className="section section-cream" style={{ paddingTop: "120px" }}>
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Blog</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>Dicas de estilo e cuidados</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <p style={{ maxWidth: 600, marginBottom: 48, color: "#48564d" }}>
              Acompanhe as novidades, tendências e cuidados para manter o visual
              sempre impecável.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {posts.map((post) => (
              <AnimateIn key={post.slug} variant="fade-up" className="grid-item">
                <article style={{
                  background: "var(--bg-card)",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--line-dark)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{ position: "relative", height: 200 }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 600px) 100vw, 33vw"
                    />
                  </div>
                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{post.title}</h2>
                    <p style={{ color: "#72816a", fontSize: "0.9rem", lineHeight: 1.6, flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-block",
                        marginTop: 16,
                        color: "var(--cream)",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 48 }}>
              <p style={{ color: "#72816a" }}>
                Fique por dentro das novidades. Siga a DiFaria no{" "}
                <a href={COMPANY.instagram} target="_blank" rel="noreferrer" style={{ color: "var(--cream)" }}>
                  Instagram
                </a>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
