import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corte e Barba em Presidente Epitácio",
  description:
    "Corte e barba em Presidente Epitácio em um só lugar. Combo completo para renovar o visual com harmonia. Agende na DiFaria Barber Music.",
  alternates: {
    canonical: "/corte-e-barba-presidente-epitacio",
  },
};

export default function CorteBarbaPage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Corte e Barba em Presidente Epitácio</h1>
      <p style={{ color: "#48564d" }}>
        Conteúdo completo em breve. Agende seu horário pelo WhatsApp.
      </p>
    </main>
  );
}
