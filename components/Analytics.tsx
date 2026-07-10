"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;

    if (!document.getElementById("ga-script")) {
      const s = document.createElement("script");
      s.id = "ga-script";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function (...args: unknown[]) {
        (window as any).dataLayer.push(args);
      };
      (window as any).gtag("js", new Date());
      (window as any).gtag("config", GA_ID);
    }

    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-ga]") as HTMLElement | null;
      const action = el?.getAttribute("data-ga");
      if (action && (window as any).gtag) {
        (window as any).gtag("event", action, { event_category: "engagement" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    (window as any).gtag?.("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  return null;
}
