import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://api.whatsapp.com/send?phone=5518982064610&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20DiFaria%20Barber%20Music%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
