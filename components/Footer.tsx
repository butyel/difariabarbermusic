import Image from "next/image";
import { Clock3, Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Image
          src="/images/logo.png"
          alt="DiFaria Barber Music"
          width={160}
          height={58}
        />
        <p>{COMPANY.tagline}</p>
        <div className="footer-info">
          <a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" data-ga="click_directions">
            <MapPin size={16} aria-hidden="true" /> {COMPANY.address.full}
          </a>
          <a href={WHATSAPP.url} target="_blank" rel="noreferrer" data-ga="click_whatsapp_footer">
            <MessageCircle size={16} aria-hidden="true" /> {COMPANY.phone}
          </a>
          <span>
            <Clock3 size={16} aria-hidden="true" /> {COMPANY.hours.full}
          </span>
        </div>
        <div className="socials">
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da DiFaria Barber Music"
            data-ga="click_instagram"
          >
            <Instagram aria-hidden="true" />
          </a>
          <a
            href={COMPANY.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook da DiFaria Barber Music"
            data-ga="click_facebook"
          >
            <Facebook aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <a href="/politica-de-privacidade" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}>
          Política de Privacidade
        </a>
        <span style={{ margin: "0 12px", color: "var(--footer-text)" }}>—</span>
        &copy; {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
