"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS, WHATSAPP } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      style={{
        background: scrolled
          ? "rgba(5, 12, 8, 0.92)"
          : "rgba(5, 12, 8, 0.6)",
        borderColor: scrolled
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(255, 255, 255, 0.12)",
      }}
    >
      <a className="brand" href="#inicio" aria-label="DiFaria Barber Music - início">
        <Image src="/images/logo.png" alt="DiFaria Barber Music" width={120} height={44} priority />
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
          <span>Agendar</span>
        </a>
      </nav>
    </header>
  );
}
