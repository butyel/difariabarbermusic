import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corte Masculino em Presidente Epitácio",
  description:
    "Corte masculino em Presidente Epitácio com acabamento preciso. Do clássico ao contemporâneo. Agende seu horário na DiFaria Barber Music.",
  alternates: {
    canonical: "/corte-masculino-presidente-epitacio",
  },
};

export default function CorteMasculinoPage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Corte Masculino em Presidente Epitácio</h1>
      <p style={{ color: "#48564d" }}>
        Conteúdo completo em breve. Agende seu horário pelo WhatsApp.
      </p>
    </main>
  );
}
