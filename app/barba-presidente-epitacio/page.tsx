import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barba em Presidente Epitácio",
  description:
    "Barba em Presidente Epitácio com desenho, alinhamento e acabamento profissional. Valorize seu visual. Agende na DiFaria Barber Music.",
  alternates: {
    canonical: "/barba-presidente-epitacio",
  },
};

export default function BarbaPage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Barba em Presidente Epitácio</h1>
      <p style={{ color: "#48564d" }}>
        Conteúdo completo em breve. Agende seu horário pelo WhatsApp.
      </p>
    </main>
  );
}
