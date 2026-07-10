"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main>
      <Header />
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px 80px",
          background: "#071710",
          color: "#f0eadc",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.08em",
            color: "#1f4a33",
          }}
        >
          Erro
        </span>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 700,
            margin: "16px 0 12px",
            letterSpacing: "-0.04em",
          }}
        >
          Algo deu errado
        </h1>
        <p
          style={{
            maxWidth: 480,
            color: "#72816a",
            margin: "0 0 40px",
            fontSize: "1.05rem",
          }}
        >
          Tente novamente ou volte para a página inicial.
        </p>
        <button
          onClick={reset}
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
            border: "none",
            cursor: "pointer",
          }}
        >
          Tentar novamente
        </button>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
