import AnimateIn from "@/components/AnimateIn";

type Service = {
  title: string;
  description: string;
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <AnimateIn variant="fade-up" delay={150 + index * 50} stagger>
      <article className="service-card stagger-item" key={service.title}>
        <span>0{index + 1}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </article>
    </AnimateIn>
  );
}
