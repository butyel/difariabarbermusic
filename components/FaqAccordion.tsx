import AnimateIn from "@/components/AnimateIn";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: readonly FaqItem[] }) {
  return (
    <AnimateIn variant="fade-up" delay={150} stagger>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <details className="stagger-item" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </AnimateIn>
  );
}
