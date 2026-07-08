import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corte Infantil em Presidente Epitácio",
  description:
    "Corte infantil em Presidente Epitácio com atendimento cuidadoso e confortável para os pequenos. Agende na DiFaria Barber Music.",
  alternates: {
    canonical: "/corte-infantil-presidente-epitacio",
  },
};

export default function CorteInfantilPage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Corte Infantil em Presidente Epitácio</h1>
      <p style={{ color: "#48564d" }}>
        Conteúdo completo em breve. Agende seu horário pelo WhatsApp.
      </p>
    </main>
  );
}
