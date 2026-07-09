import Image from "next/image";
import {
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Music2,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import Gallery from "@/components/Gallery";
import { COMPANY, WHATSAPP, SERVICES, FAQS } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Header />

      <section id="inicio" className="hero">
        <Image
          className="hero-image"
          src="/images/barbearia-interior.jpg"
          alt="Interior da DiFaria Barber Music em Presidente Epitácio"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow">
              <Music2 size={16} aria-hidden="true" /> {COMPANY.slogan}
            </span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h1>
              Barbearia premium em <strong>Presidente Epitácio</strong>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <p>
              Corte masculino, barba e atendimento personalizado em um ambiente
              criado para transformar o seu visual em uma experiência.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="hero-actions">
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <MessageCircle size={19} aria-hidden="true" /> <span>Agendar pelo WhatsApp</span>
              </a>
              <a className="button button-ghost" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin size={19} aria-hidden="true" /> <span>Como chegar</span>
              </a>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={400}>
            <div className="hero-proof">
              <Star size={18} fill="currentColor" aria-hidden="true" />
              <b>{COMPANY.googleRating.toFixed(1)} no Google</b>
              <span aria-hidden="true">•</span>
              <span>{COMPANY.googleReviews} avaliações</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section id="experiencia" className="section section-cream">
        <div className="container experience">
          <div className="section-copy">
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">A experiência DiFaria</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2>Mais que um corte. Uma assinatura de estilo.</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                A DiFaria Barber Music une técnica, estética, música e atendimento
                personalizado. Cada detalhe do ambiente foi pensado para homens que
                valorizam presença, qualidade e personalidade.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200} stagger>
              <div className="feature-grid">
                <div className="stagger-item">
                  <Scissors aria-hidden="true" />
                  <h3>Técnica e precisão</h3>
                  <p>Acabamento limpo e consultoria para encontrar o estilo ideal.</p>
                </div>
                <div className="stagger-item">
                  <Music2 aria-hidden="true" />
                  <h3>Atmosfera única</h3>
                  <p>Uma identidade que conecta barbearia, música e experiência.</p>
                </div>
                <div className="stagger-item">
                  <Sparkles aria-hidden="true" />
                  <h3>Atendimento premium</h3>
                  <p>Cuidado individual para você sair confiante em cada visita.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn variant="slide-right" delay={100}>
            <div className="portrait-frame">
              <Image
                src="/images/will.jpeg"
                alt="Profissional da DiFaria Barber Music realizando um atendimento"
                width={720}
                height={900}
                sizes="(max-width: 800px) 100vw, 45vw"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section id="servicos" className="section section-dark">
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow">Serviços</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Visual alinhado do seu jeito</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="services-grid">
              {SERVICES.map((service, index) => (
                <article className="service-card stagger-item" key={service.title}>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300}>
            <div className="center">
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <span>Consultar e agendar</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section id="galeria" className="section section-cream">
        <div className="container">
          <AnimateIn variant="fade-up">
            <span className="eyebrow dark">Ambiente</span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <h2>Onde estilo e música se encontram</h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <Gallery />
          </AnimateIn>
        </div>
      </section>

      <section id="faq" className="section section-mid">
        <div className="container faq-layout">
          <div>
            <AnimateIn variant="fade-up">
              <span className="eyebrow dark">Dúvidas frequentes</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2>Antes de escolher seu próximo corte</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>
                Informações rápidas para facilitar sua visita à DiFaria Barber Music.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn variant="fade-up" delay={150} stagger>
            <div className="faq-list">
              {FAQS.map(({ question, answer }) => (
                <details className="stagger-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="container contact-card">
          <div>
            <AnimateIn variant="fade-up">
              <span className="eyebrow">Agende sua experiência</span>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h2>Seu próximo visual começa aqui.</h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p>Fale com a DiFaria Barber Music e reserve seu horário.</p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <div className="contact-lines">
                <a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin aria-hidden="true" /> {COMPANY.address.full}
                </a>
                <a href={WHATSAPP.url} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> {COMPANY.phone}
                </a>
                <span>
                  <Clock3 aria-hidden="true" /> {COMPANY.hours.full}
                </span>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn variant="scale-in" delay={300}>
            <a className="button button-light" href={WHATSAPP.url} target="_blank" rel="noreferrer">
              <span>Agendar agora</span>
            </a>
          </AnimateIn>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <Image
            src="/images/logo-difa.png"
            alt="DiFaria Barber Music"
            width={200}
            height={82}
          />
          <p>{COMPANY.tagline}</p>
          <div className="socials">
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da DiFaria Barber Music"
            >
              <Instagram aria-hidden="true" />
            </a>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da DiFaria Barber Music"
            >
              <Facebook aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <a href="/politica-de-privacidade" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}>
            Política de Privacidade
          </a>
          <span style={{ margin: "0 12px", color: "#7f8981" }}>—</span>
          &copy; {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
