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
import {
  COMPANY,
  WHATSAPP,
  SERVICES,
  FAQS,
} from "@/lib/constants";

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
          <span className="eyebrow">
            <Music2 size={16} aria-hidden="true" /> {COMPANY.slogan}
          </span>
          <h1>
            Barbearia premium em <strong>Presidente Epitácio</strong>
          </h1>
          <p>
            Corte masculino, barba e atendimento personalizado em um ambiente
            criado para transformar o seu visual em uma experiência.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href={WHATSAPP.url}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" /> Agendar pelo WhatsApp
            </a>
            <a
              className="button button-ghost"
              href={COMPANY.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={19} aria-hidden="true" /> Como chegar
            </a>
          </div>
          <div className="hero-proof">
            <Star size={18} fill="currentColor" aria-hidden="true" />{" "}
            <b>{COMPANY.googleRating.toFixed(1)} no Google</b>
            <span aria-hidden="true">•</span>
            <span>{COMPANY.googleReviews} avaliações</span>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section experience container">
        <div className="section-copy">
          <span className="eyebrow dark">A experiência DiFaria</span>
          <h2>Mais que um corte. Uma assinatura de estilo.</h2>
          <p>
            A DiFaria Barber Music une técnica, estética, música e atendimento
            personalizado. Cada detalhe do ambiente foi pensado para homens que
            valorizam presença, qualidade e personalidade.
          </p>
          <div className="feature-grid">
            <div>
              <Scissors aria-hidden="true" />
              <h3>Técnica e precisão</h3>
              <p>Acabamento limpo e consultoria para encontrar o estilo ideal.</p>
            </div>
            <div>
              <Music2 aria-hidden="true" />
              <h3>Atmosfera única</h3>
              <p>Uma identidade que conecta barbearia, música e experiência.</p>
            </div>
            <div>
              <Sparkles aria-hidden="true" />
              <h3>Atendimento premium</h3>
              <p>Cuidado individual para você sair confiante em cada visita.</p>
            </div>
          </div>
        </div>
        <div className="portrait-frame">
          <Image
            src="/images/will.jpeg"
            alt="Profissional da DiFaria Barber Music realizando um atendimento"
            width={720}
            height={900}
            sizes="(max-width: 800px) 100vw, 45vw"
          />
        </div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="container">
          <span className="eyebrow">Serviços</span>
          <h2>Visual alinhado do seu jeito</h2>
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="center">
            <a
              className="button"
              href={WHATSAPP.url}
              target="_blank"
              rel="noreferrer"
            >
              Consultar e agendar
            </a>
          </div>
        </div>
      </section>

      <section id="galeria" className="section container">
        <span className="eyebrow dark">Ambiente</span>
        <h2>Onde estilo e música se encontram</h2>
        <div className="gallery">
          <Image
            src="/images/barbearia-interior.jpg"
            alt="Cadeira e ambiente da barbearia DiFaria em Presidente Epitácio"
            width={900}
            height={900}
          />
          <Image
            src="/images/will.jpeg"
            alt="Profissional da DiFaria Barber Music durante atendimento personalizado"
            width={900}
            height={900}
          />
          <Image
            src="/images/capa.jpg"
            alt="Logotipo da DiFaria Barber Music, barbearia em Presidente Epitácio"
            width={1200}
            height={700}
          />
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow dark">Dúvidas frequentes</span>
            <h2>Antes de escolher seu próximo corte</h2>
            <p>
              Informações rápidas para facilitar sua visita à DiFaria Barber
              Music.
            </p>
          </div>
          <div className="faq-list">
            {FAQS.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="container contact-card">
          <div>
            <span className="eyebrow">Agende sua experiência</span>
            <h2>Seu próximo visual começa aqui.</h2>
            <p>Fale com a DiFaria Barber Music e reserve seu horário.</p>
            <div className="contact-lines">
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin aria-hidden="true" /> {COMPANY.address.full}
              </a>
              <a href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> {COMPANY.phone}
              </a>
              <span>
                <Clock3 aria-hidden="true" /> {COMPANY.hours.full}
              </span>
            </div>
          </div>
          <a className="button button-light" href={WHATSAPP.url} target="_blank" rel="noreferrer">
            Agendar agora
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <Image
            src="/images/logo-difa.png"
            alt="DiFaria Barber Music"
            width={220}
            height={90}
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
          &copy; {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
          reservados.
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
