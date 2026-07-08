import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Acompanhe as novidades, dicas de estilo e tendências da DiFaria Barber Music em Presidente Epitácio.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Blog DiFaria Barber Music</h1>
      <p style={{ color: "#48564d" }}>
        Em breve. Acompanhe dicas de estilo, cuidados e novidades.
      </p>
    </main>
  );
}
