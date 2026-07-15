"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="DiFaria Barber Music - início">
        <Image src="/images/logo.png" alt="DiFaria Barber Music" width={120} height={44} priority />
      </Link>
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
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="button button-small"
          href="/agendar"
          onClick={() => setOpen(false)}
          data-ga="click_booking_header"
        >
          <span>Agendar</span>
        </Link>
      </nav>
    </header>
  );
}
