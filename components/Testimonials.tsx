import { Quote, Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY } from "@/lib/constants";
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
        <AnimateIn variant="fade-up" delay={150} className="center">
          <a
            href={COMPANY.googleReviewLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.85rem",
              color: isDark ? "#72816a" : "#2a4235",
              marginBottom: 32,
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
            data-ga="click_google_reviews"
          >
            <Star size={14} fill="#d4a853" color="#d4a853" />
            <b>{COMPANY.googleRating.toFixed(1)}</b>
            <span>({COMPANY.googleReviews} avaliações no Google)</span>
          </a>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={200} stagger>
          <div className="feature-grid" style={{ justifyContent: "center", marginTop: 24 }}>
            {testimonials.map((t) => (
              <div className="stagger-item" key={t.author} style={{ textAlign: "center", maxWidth: 320 }}>
                <Quote aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.3 }} size={24} />
                <p style={{ fontStyle: "italic", color: isDark ? "#72816a" : "#2a4235", marginBottom: 12 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <p style={{ fontWeight: 600, margin: "0 0 4px", color: isDark ? "#d4a853" : "#1f4a33" }}>{t.author}</p>
                <p style={{ fontSize: "0.75rem", color: isDark ? "#5a6a52" : "#4a6a55", margin: 0 }}>
                  {t.source} &middot; {t.date}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
