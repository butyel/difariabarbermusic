import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/AnimateIn";
import { COMPANY, WHATSAPP } from "@/lib/constants";

const posts = [
  {
    slug: "corte-ideal-formato-rosto",
    title: "Como escolher o corte ideal para o formato do seu rosto",
    excerpt:
      "Nem todo corte funciona para todo mundo. Aprenda a identificar seu formato de rosto e descubra o estilo que mais valoriza seus traços.",
    image: "/images/barbearia.jpg",
    content:
      "Escolher o corte de cabelo ideal vai muito além da moda — é sobre valorizar o que você tem. Cada formato de rosto pede um tipo de corte diferente, e um bom barbeiro sabe exatamente como equilibrar proporções.\n\nRosto redondo: cortes com volume no topo e laterais mais curtas (como o pompadour ou o quiff) ajudam a alongar o rosto.\n\nRosto quadrado: opte por cortes que suavizem a mandíbula, como um textured crop ou um corte desconectado.\n\nRosto oval: você tem sorte — a maioria dos cortes funciona bem. Desde o degradê até o clássico corte militar.\n\nRosto alongado: evite muito volume no topo. Cortes com franja ou textura lateral equilibram a proporção.\n\nNa DiFaria Barber Music, fazemos uma consultoria completa antes de cada corte para entender seu estilo, rotina e o que valoriza seus traços.",
    author: "DiFaria Barber Music",
    date: "Julho 2026",
  },
  {
    slug: "degrade-low-mid-high-fade",
    title: "Degradê: low fade, mid fade ou high fade?",
    excerpt:
      "Entenda as diferenças entre os tipos de degradê e descubra qual combina mais com seu estilo e tipo de cabelo.",
    image: "/images/barbeiro.jpg",
    content:
      "O degradê (fade) é um dos cortes mais pedidos na DiFaria. A transição suave entre o cabelo curto na lateral e o volume no topo cria um visual moderno e limpo. Mas você sabe qual tipo escolher?\n\nLow fade: o fade começa baixo, próximo às orelhas. É discreto, elegante e ideal para quem quer um visual profissional sem chamar muita atenção.\n\nMid fade: começa na metade da lateral. É o mais versátil e equilibrado — funciona com praticamente qualquer estilo de cabelo no topo.\n\nHigh fade: começa no alto da lateral, quase no topo da cabeça. É o mais ousado e esportivo, perfeito para quem gosta de um visual marcante.\n\nNa dúvida? Nosso time faz uma avaliação do formato do seu rosto, tipo de cabelo e estilo de vida para recomendar o fade ideal para você.",
    author: "DiFaria Barber Music",
    date: "Julho 2026",
  },
  {
    slug: "cuidados-barba-em-casa",
    title: "Cuidados com a barba: como manter o shape em casa",
    excerpt:
      "Dicas práticas para manter sua barba alinhada entre as visitas à barbearia. Hidratação, aparação e produtos recomendados.",
    image: "/images/difaria.jpg",
    content:
      "Manter a barba bonita entre as visitas à barbearia é mais simples do que parece. Com alguns cuidados básicos, você chega ao próximo atendimento com a barba saudável e pronta para o barbeiro trabalhar.\n\n1. Lave com shampoo específico: a barba acumula sujeira e oleosidade. Use um shampoo próprio para barba, que não resseca os fios.\n\n2. Hidrate diariamente: óleo ou balm para barba mantém os fios macios e a pele sob a barba hidratada. Isso evita coceira e caspa (sim, existe!).\n\n3. Penteie todos os dias: um pente ou escova própria para barba treina os fios na direção desejada e distribui os óleos naturais.\n\n4. Apare apenas o necessário: entre as visitas, use uma aparador para manter o contorno do pescoço e das bochechas. Deixe a modelagem profissional para o barbeiro.\n\n5. Não esqueça a pele: a pele sob a barba precisa de cuidados. Esfolie uma vez por semana e mantenha a hidratação em dia.\n\nAgende sua visita na DiFaria Barber Music e mantenha o shape impecável o ano todo.",
    author: "DiFaria Barber Music",
    date: "Julho 2026",
  },
  {
    slug: "melhores-barbearias-presidente-epitacio",
    title: "Melhores barbearias em Presidente Epitácio: o que procurar",
    excerpt:
      "O que considerar ao escolher uma barbearia em Presidente Epitácio? Ambiente, técnica, atendimento e localização fazem toda a diferença.",
    image: "/images/barbearia-interior.jpg",
    content:
      "Escolher a barbearia certa em Presidente Epitácio pode transformar completamente sua experiência de cuidado pessoal. Mas o que realmente faz uma barbearia se destacar?\n\n1. Técnica e atualização profissional: uma boa barbearia investe em treinamento constante. Técnicas como degradê navalhado, cortes texturizados e barba desenhada exigem domínio e prática.\n\n2. Ambiente e experiência: o espaço diz muito sobre o cuidado que você vai receber. Ambiente limpo, organizado e com uma boa música faz diferença no resultado final.\n\n3. Atendimento personalizado: cada pessoa tem formato de rosto, tipo de cabelo e estilo de vida diferentes. Um bom barbeiro ouve antes de cortar.\n\n4. Produtos de qualidade: barbearias que usam produtos profissionais para finalização mostram compromisso com o resultado.\n\n5. Localização e horários: a praticidade de encontrar uma barbearia no centro de Presidente Epitácio, com horários flexíveis, facilita a rotina.\n\nNa DiFaria Barber Music, reunimos todos esses diferenciais em um só lugar. Agende sua visita e venha conhecer.",
    author: "DiFaria Barber Music",
    date: "Julho 2026",
  },
  {
    slug: "tendencias-corte-masculino-2026",
    title: "Tendências de corte masculino para 2026",
    excerpt:
      "Cortes texturizados, degradê moderno e barba bem cuidada estão entre as principais tendências de estilo masculino para 2026.",
    image: "/images/capa.jpg",
    content:
      "O universo dos cortes masculinos está em constante evolução. Em 2026, as tendências combinam o clássico e o contemporâneo com um toque de personalidade. Confira o que vem por aí:\n\nCorte texturizado: o textured crop continua em alta. A proposta é criar movimento e volume natural no topo, com laterais mais curtas. Ideal para quem busca um visual moderno sem exageros.\n\nDegradê criativo: o degradê tradicional ganha variações como o burst fade (em volta da orelha) e o drop fade (mais baixo atrás). A criatividade na transição entre os tamanhos é o destaque.\n\nBarba cheia e bem cuidada: barba grande continua elegante, desde que bem alinhada. O contorno definido e a hidratação são essenciais para um visual sofisticado.\n\nCorte desconectado: a diferença brusca entre o topo e as laterais cria um contraste moderno. Funciona bem com finalizações texturizadas.\n\nCorte social: o clássico bem executado nunca sai de moda. Corte social com risco na lateral e degradê suave é a escolha de quem prefere um visual elegante e atemporal.\n\nNa DiFaria Barber Music, acompanhamos as tendências sem perder a essência do atendimento personalizado. Agende seu horário e descubra o estilo ideal para você.",
    author: "DiFaria Barber Music",
    date: "Julho 2026",
  },
  {
    slug: "cuidar-degrade-entre-visitas",
    title: "Como cuidar do degradê entre as visitas à barbearia",
    excerpt:
      "Manter o degradê bonito por mais tempo exige cuidados simples. Veja dicas de hidratação, penteado e produtos para usar em casa.",
    image: "/images/will.jpeg",
    content:
      "O degradê é um dos cortes mais versáteis e elegantes, mas exige manutenção. Entre uma visita e outra à barbearia, alguns cuidados fazem toda a diferença para manter o visual impecável.\n\n1. Lave o cabelo com frequência adequada: lavar todos os dias pode ressecar os fios. O ideal é lavar em dias alternados com shampoo suave e condicionador.\n\n2. Use produtos leves: pomadas e ceras com baixo brilho ajudam a estilizar sem pesar no visual. Produtos muito oleosos podem desmanchar a transição do degradê.\n\n3. Penteie na direção certa: use um pente ou escova para alinhar o cabelo no sentido do corte. Isso evita que os fios fiquem desordenados e quebrem a harmonia do degradê.\n\n4. Hidrate os fios: cabelo hidratado tem mais movimento e brilho natural. Use um leave-in leve ou óleo capilar nas pontas.\n\n5. Apare o contorno com cuidado: se o degradê começar a perder a definição, você pode aparar apenas o contorno do pescoço e das orelhas com uma máquina. Mas deixe a manutenção completa para o barbeiro.\n\n6. Evite bonés e chapéus apertados: o atrito constante pode desmanchar o degradê e causar frizz.\n\nAgende sua próxima visita na DiFaria Barber Music e mantenha seu degradê sempre impecável.",
    author: "DiFaria Barber Music",
    date: "Julho 2026",
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };
  const postUrl = `${COMPANY.domain}/blog/${post.slug}`;
  return {
    title: `${post.title} | DiFaria Barber Music`,
    description: post.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      images: [
        { url: `${COMPANY.domain}${post.image}`, width: 1200, height: 630, alt: post.title },
      ],
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${COMPANY.domain}${post.image}`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: `${COMPANY.domain}/images/logo.png`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.domain}/blog/${post.slug}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      <section className="section section-cream" style={{ paddingTop: "140px" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <AnimateIn variant="fade-up">
            <Link href="/blog" style={{ color: "#72816a", fontSize: "0.85rem", textDecoration: "underline", textUnderlineOffset: 3 }}>
              ← Voltar ao blog
            </Link>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={50}>
            <div style={{ position: "relative", height: 320, borderRadius: 12, overflow: "hidden", marginTop: 16, marginBottom: 32 }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 720px) 100vw, 720px"
              />
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100}>
            <span style={{ color: "#72816a", fontSize: "0.8rem" }}>{post.date} — {post.author}</span>
            <h1 style={{ marginTop: 8 }}>{post.title}</h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150}>
            <div style={{ color: "#48564d", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} style={{ marginBottom: 16 }}>{paragraph}</p>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="center" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line-dark)" }}>
              <p style={{ color: "#72816a", marginBottom: 16 }}>Agende seu horário e venha nos conhecer.</p>
              <a className="button" href={WHATSAPP.url} target="_blank" rel="noreferrer">
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
