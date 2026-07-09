"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

interface Props {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  stagger?: boolean;
  className?: string;
}

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  stagger,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger) {
            const children = el.querySelectorAll(".stagger-item");
            children.forEach((child, i) => {
              (
                child as HTMLElement
              ).style.transitionDelay = `${i * 80}ms`;
            });
          }
          el.dataset.visible = "true";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`animate-in ${variant}${stagger ? " stagger" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      data-visible="false"
    >
      {children}
    </div>
  );
}
