import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP, SERVICES } from "@/lib/constants";
import { posts, BLOG_AUTHOR } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };
  const postUrl = `${COMPANY.domain}/blog/${post.slug}`;
  return {
    title: `${post.title} | DiFaria Barber Music`,
    description: post.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      images: [
        { url: `${COMPANY.domain}${post.image}`, width: 1200, height: 630, alt: post.title },
      ],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postUrl = `${COMPANY.domain}/blog/${post.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: COMPANY.domain },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${COMPANY.domain}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${COMPANY.domain}${post.image}`,
    author: {
      "@type": "Person",
      name: BLOG_AUTHOR.name,
      image: `${COMPANY.domain}${BLOG_AUTHOR.image}`,
    },
    reviewedBy: {
      "@type": "Person",
      name: BLOG_AUTHOR.name,
      description: BLOG_AUTHOR.title,
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: `${COMPANY.domain}/images/logo.png`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  const relatedServices = SERVICES.filter(
    (s): s is typeof s & { slug: string } => "slug" in s && !!s.slug && post.serviceSlugs.includes(s.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />

      <section className="section section-cream" style={{ paddingTop: "140px" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <AnimateIn variant="fade-up">
            <Link href="/blog" style={{ color: "#72816a", fontSize: "0.85rem", textDecoration: "underline", textUnderlineOffset: 3 }}>
              ← Voltar ao blog
            </Link>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={50}>
            <div style={{ position: "relative", height: 320, borderRadius: 12, overflow: "hidden", marginTop: 16, marginBottom: 32 }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 720px) 100vw, 720px"
              />
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, fontSize: "0.8rem", color: "#72816a" }}>
              <span>Publicado em {formatDate(post.publishedDate)}</span>
              {post.updatedDate !== post.publishedDate && (
                <span>· Atualizado em {formatDate(post.updatedDate)}</span>
              )}
            </div>
            <h1 style={{ marginTop: 8 }}>{post.title}</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={120}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, marginTop: 24, padding: "16px 20px", background: "var(--bg-card)", borderRadius: 12, border: "1px solid var(--line-dark)" }}>
              <div style={{ position: "relative", width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <Image src={BLOG_AUTHOR.image} alt={BLOG_AUTHOR.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{BLOG_AUTHOR.name}</div>
                <div style={{ fontSize: "0.8rem", color: "#72816a", lineHeight: 1.4 }}>{BLOG_AUTHOR.bio}</div>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <div style={{ color: "#48564d", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} style={{ marginBottom: 16 }}>{paragraph}</p>
              ))}
            </div>
          </AnimateIn>

          {post.relatedPage && (
            <AnimateIn variant="fade-up" delay={170}>
              <Link
                href={post.relatedPage.href}
                style={{
                  display: "block",
                  marginTop: 36,
                  padding: "24px 26px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--line-dark)",
                  borderRadius: 12,
                  color: "var(--cream)",
                  textDecoration: "none",
                }}
              >
                <strong style={{ display: "block", fontSize: "1.05rem", marginBottom: 8 }}>
                  {post.relatedPage.title}
                </strong>
                <span style={{ display: "block", color: "rgba(240, 234, 220, 0.72)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {post.relatedPage.description}
                </span>
                <span style={{ display: "inline-block", marginTop: 14, color: "var(--cream)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {post.relatedPage.label} →
                </span>
              </Link>
            </AnimateIn>
          )}

          {post.faqs.length > 0 && (
            <AnimateIn variant="fade-up" delay={180}>
              <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line-dark)" }}>
                <h2 style={{ fontSize: "1.3rem", marginBottom: 24 }}>Perguntas frequentes</h2>
                {post.faqs.map((faq, i) => (
                  <details key={i} style={{ marginBottom: 12, background: "var(--bg-card)", borderRadius: 8, border: "1px solid var(--line-dark)", overflow: "hidden" }}>
                    <summary style={{ padding: "14px 18px", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      {faq.question}
                      <span style={{ fontSize: "1.2rem", lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 18px 14px", fontSize: "0.9rem", color: "#48564d", lineHeight: 1.7 }}>
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </AnimateIn>
          )}

          {relatedServices.length > 0 && (
            <AnimateIn variant="fade-up" delay={200}>
              <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line-dark)" }}>
                <h2 style={{ fontSize: "1.3rem", marginBottom: 16 }}>Serviços relacionados</h2>
                <div style={{ display: "grid", gap: 12 }}>
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}-em-presidente-epitacio`}
                      style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "14px 18px", background: "var(--bg-card)", borderRadius: 8,
                        border: "1px solid var(--line-dark)", color: "var(--text-dark)",
                        textDecoration: "none", fontSize: "0.95rem", fontWeight: 500,
                      }}
                    >
                      <span>{s.title}</span>
                      <span style={{ color: "#72816a", fontSize: "0.85rem" }}>Saiba mais →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateIn>
          )}

          <AnimateIn variant="fade-up" delay={220}>
            <div className="center" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line-dark)" }}>
              <p style={{ color: "#72816a", marginBottom: 16 }}>
                Gostou do conteúdo? Agende seu horário na DiFaria Barber Music.
              </p>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <span>Agendar pelo WhatsApp</span>
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
