import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Barbearia em Presidente Epitácio",
  description:
    "Barbearia premium em Presidente Epitácio. Corte masculino, degradê, barba e atendimento personalizado. Agende seu horário pelo WhatsApp.",
  alternates: {
    canonical: "/barbearia-em-presidente-epitacio",
  },
};

export default function BarbeariaPage() {
  return (
    <main style={{ padding: "180px 20px 80px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <h1>Barbearia em Presidente Epitácio</h1>
      <p style={{ color: "#48564d" }}>
        Conteúdo completo em breve. Agende seu horário pelo WhatsApp.
      </p>
    </main>
  );
}
