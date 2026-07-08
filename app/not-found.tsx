import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#071710",
        color: "#f0eadc",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontSize: "clamp(6rem, 18vw, 12rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.08em",
          color: "#1f4a33",
        }}
      >
        404
      </span>
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 700,
          margin: "16px 0 12px",
          letterSpacing: "-0.04em",
        }}
      >
        Página não encontrada
      </h1>
      <p
        style={{
          maxWidth: 480,
          color: "#72816a",
          margin: "0 0 40px",
          fontSize: "1.05rem",
        }}
      >
        O conteúdo que você procura não está disponível ou foi movido.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#f0eadc",
          color: "#071710",
          padding: "18px 28px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontSize: "0.75rem",
          textDecoration: "none",
        }}
      >
        Voltar ao início
      </Link>
    </main>
  );
}
