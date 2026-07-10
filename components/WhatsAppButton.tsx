import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP.url}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      data-ga="click_whatsapp_float"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}