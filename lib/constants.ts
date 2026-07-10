export const COMPANY = {
  name: "DiFaria Barber Music",
  shortName: "DiFaria",
  description:
    "Barbearia premium em Presidente Epitácio com corte masculino, degradê, barba, acabamento e atendimento personalizado. Estilo, música e experiência.",
  slogan: "Estilo. Música. Identidade.",
  tagline:
    "Barbearia em Presidente Epitácio para quem entende que estilo também é identidade.",
  phone: "(18) 98206-4610",
  phoneRaw: "5518982064610",
  email: "",
  address: {
    street: "Av. Pres. Vargas, 20-64, Sala 2",
    complement: "Sala 2",
    neighborhood: "Centro",
    city: "Presidente Epitácio",
    state: "SP",
    zip: "",
    full: "Av. Pres. Vargas, 20-64, Sala 2, Centro, Presidente Epitácio, SP",
  },
  googleRating: 5.0,
  googleReviews: 92,
  googleProfile:
    "https://www.google.com.br/search?kgmid=/g/11mbn8gm1h&hl=pt-BR&q=DiFaria+Barber+Music",
  googleReviewLink: "https://g.page/r/Cdu1jJatqVhMEBM/review",
  coordinates: {
    lat: -21.774110569502966,
    lng: -52.119201922057215,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.%20Pres.%20Vargas%2C%2020-64%20-%20Centro%2C%20Presidente%20Epit%C3%A1cio%20-%20SP",
  hours: {
    weekdays: "09:00 – 20:00",
    saturday: "09:00 – 16:00",
    sunday: "Fechado",
    full: "Seg a Sex: 09:00 – 20:00 | Sáb: 09:00 – 16:00",
  },
  paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Dinheiro"],
  instagram: "https://www.instagram.com/difaria_barber_music/",
  facebook:
    "https://www.facebook.com/share/1D3Lsi8fzQ/?mibextid=wwXIfr",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://difariabarbermusic.com.br",
};

export const WHATSAPP = {
  number: "5518982064610",
  message:
    "Olá, vim pelo site da DiFaria Barber Music e gostaria de agendar um horário.",
  get url() {
    return `https://api.whatsapp.com/send?phone=${this.number}&text=${encodeURIComponent(this.message)}`;
  },
};

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Galeria", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Perguntas", href: "/perguntas-frequentes" },
  { label: "Contato", href: "/contato" },
] as const;

export const SERVICES = [
  {
    title: "Corte masculino",
    description:
      "Do clássico ao contemporâneo, com acabamento preciso e identidade.",
  },
  {
    title: "Degradê e fade",
    description:
      "Low fade, mid fade, high fade e navalhado com transições limpas.",
  },
  {
    title: "Barba",
    description:
      "Desenho, alinhamento, acabamento e cuidado para valorizar o rosto.",
  },
  {
    title: "Corte + barba",
    description:
      "O combo completo para renovar o visual com harmonia.",
  },
  {
    title: "Corte infantil",
    description:
      "Atendimento cuidadoso e confortável para os pequenos.",
  },
  {
    title: "Cuidados especiais",
    description:
      "Hidratação, pigmentação, sobrancelha e finalização profissional.",
  },
] as const;

export const FAQS = [
  {
    question: "Onde fica a DiFaria Barber Music?",
    answer:
      "Na Av. Pres. Vargas, 20-64, Sala 2 - Centro, Presidente Epitácio - SP.",
  },
  {
    question: "Precisa agendar horário?",
    answer:
      "O agendamento é recomendado para garantir o melhor horário. Fale pelo WhatsApp.",
  },
  {
    question: "A barbearia faz corte degradê?",
    answer:
      "Sim. Trabalhamos com low fade, mid fade, high fade, navalhado e outros estilos modernos.",
  },
  {
    question: "A DiFaria atende barba?",
    answer:
      "Sim. Oferecemos alinhamento, desenho, acabamento e cuidados para barba.",
  },
  {
    question: "Faz corte infantil?",
    answer:
      "Sim. Consulte a disponibilidade e agende pelo WhatsApp.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Cartão de crédito, cartão de débito, PIX e dinheiro.",
  },
] as const;

export const SEO_KEYWORDS = [
  "barbearia em Presidente Epitácio",
  "barbeiro em Presidente Epitácio",
  "corte masculino Presidente Epitácio",
  "corte degradê Presidente Epitácio",
  "barba Presidente Epitácio",
  "corte e barba em Presidente Epitácio",
  "barbearia premium",
  "barbearia perto de mim",
  "DiFaria Barber Music",
];

export const SEO_CITIES = [
  {
    slug: "presidente-epitacio",
    name: "Presidente Epitácio",
    state: "SP",
  },
];

export const SEO_SERVICES = [
  { slug: "barbearia", title: "Barbearia", h1: "Barbearia em" },
  { slug: "corte-masculino", title: "Corte Masculino", h1: "Corte Masculino em" },
  { slug: "corte-degrade", title: "Corte Degradê", h1: "Corte Degradê em" },
  { slug: "barba", title: "Barba", h1: "Barba em" },
  { slug: "corte-e-barba", title: "Corte e Barba", h1: "Corte e Barba em" },
  { slug: "corte-infantil", title: "Corte Infantil", h1: "Corte Infantil em" },
] as const;
