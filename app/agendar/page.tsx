import type { Metadata } from "next";
import BookingExperience from "@/components/BookingExperience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY } from "@/lib/constants";

const canonical = `${COMPANY.domain}/agendar`;

export const metadata: Metadata = {
  title: "Agendamento Online | DiFaria Barber Music",
  description:
    "Escolha serviços, profissional, data e horário para agendar seu atendimento na DiFaria Barber Music em Presidente Epitácio.",
  alternates: { canonical },
  openGraph: {
    title: "Agendamento Online | DiFaria Barber Music",
    description:
      "Reserve seu corte, barba ou cuidado masculino online na DiFaria Barber Music.",
    url: canonical,
    images: [
      {
        url: `${COMPANY.domain}/images/capa.jpg`,
        width: 1200,
        height: 630,
        alt: "Agendamento online na DiFaria Barber Music",
      },
    ],
  },
};

const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Agendamento online da DiFaria Barber Music",
  url: canonical,
  description:
    "Página para consultar serviços, profissionais, datas e horários da DiFaria Barber Music.",
  isPartOf: {
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.domain,
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: canonical,
    result: {
      "@type": "Reservation",
      name: "Atendimento na DiFaria Barber Music",
    },
  },
};

export default function BookingPage() {
  return (
    <main className="booking-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <Header />
      <div className="container booking-page-container">
        <BookingExperience />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
