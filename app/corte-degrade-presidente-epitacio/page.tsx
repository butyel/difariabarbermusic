import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corte Degradê em Presidente Epitácio",
  description:
    "Corte degradê em Presidente Epitácio com transições limpas. Low fade, mid fade, high fade e navalhado. Agende na DiFaria Barber Music.",
  alternates: {
    canonical: "/corte-degrade-presidente-epitacio",
  },
};

export default function CorteDegradePage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Corte Degradê em Presidente Epitácio</h1>
      <p style={{ color: "#48564d" }}>
        Conteúdo completo em breve. Agende seu horário pelo WhatsApp.
      </p>
    </main>
  );
}
