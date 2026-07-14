import { Quote } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import type { Testimonial } from "@/lib/testimonials";

interface TestimonialsProps {
  testimonials: Testimonial[];
  variant?: "dark" | "cream";
}

export default function Testimonials({ testimonials, variant = "dark" }: TestimonialsProps) {
  const isDark = variant === "dark";

  return (
    <section className={`section ${isDark ? "section-dark" : "section-cream"}`}>
      <div className="container" style={{ textAlign: "center" }}>
        <AnimateIn variant="fade-up">
          <span className={`eyebrow ${isDark ? "" : "dark"}`}>Depoimentos</span>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={100}>
          <h2 style={{ textAlign: "center", margin: "16px auto 28px" }}>O que nossos clientes dizem</h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={150} stagger>
          <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
            {testimonials.map((t) => (
              <div className="stagger-item" key={t.author} style={{ textAlign: "center", maxWidth: 320 }}>
                <Quote aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.3 }} size={24} />
                <p style={{ fontStyle: "italic", color: isDark ? "#72816a" : "#2a4235", marginBottom: 12 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <p style={{ fontWeight: 600, margin: 0, color: isDark ? "#d4a853" : "#1f4a33" }}>{t.author}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
