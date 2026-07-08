"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="DiFaria Barber Music - início">
        <Image src="/images/logo-difa.png" alt="DiFaria Barber Music" width={190} height={70} priority />
      </a>
      <button
        className="menu-button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="button button-small"
          href={WHATSAPP.url}
          target="_blank"
          rel="noreferrer"
        >
          Agendar
        </a>
      </nav>
    </header>
  );
}
