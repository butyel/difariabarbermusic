import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY } from "@/lib/constants";
import { posts, BLOG_AUTHOR } from "@/lib/blog";

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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

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
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.78rem", color: "#8a9a8a", marginTop: 12 }}>
                      <span>{BLOG_AUTHOR.name}</span>
                      <span>·</span>
                      <span>{formatDate(post.publishedDate)}</span>
                    </div>
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
                <a href={COMPANY.instagram} target="_blank" rel="noreferrer" style={{ color: "var(--text-dark)" }}>
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
