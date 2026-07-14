import { COMPANY } from "@/lib/constants";

const baseUrl = COMPANY.domain;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  publishedDate: string;
  updatedDate: string;
  faqs: { question: string; answer: string }[];
  serviceSlugs: string[];
};

const authorName = "William Farias";
const authorBio =
  "Barbeiro profissional e fundador da DiFaria Barber Music, especializado em cortes masculinos, degradê e barboterapia. Criador do programa Código de Imagem.";
const authorImage = "/images/will.jpeg";
const reviewedTitle = "CEO e barbeiro";

export const BLOG_AUTHOR = { name: authorName, bio: authorBio, image: authorImage, title: reviewedTitle };

export const posts: BlogPost[] = [
  {
    slug: "corte-ideal-formato-rosto",
    title: "Como escolher o corte ideal para o formato do seu rosto",
    excerpt:
      "Nem todo corte funciona para todo mundo. Aprenda a identificar seu formato de rosto e descubra o estilo que mais valoriza seus traços.",
    image: "/images/barbearia.jpg",
    publishedDate: "2026-07-01T10:00:00-03:00",
    updatedDate: "2026-07-10T14:00:00-03:00",
    serviceSlugs: ["corte-masculino", "visagismo-masculino"],
    faqs: [
      {
        question: "Como identificar meu formato de rosto?",
        answer: "Olhe-se no espelho com o cabelo preso e trace o contorno do rosto com um batom ou caneta lavável no espelho. Compare o formato desenhado com as referências: redondo (mesma largura e altura), quadrado (mandíbula marcada), oval (testa levemente maior que o queixo) ou alongado (comprimento maior que a largura).",
      },
      {
        question: "Corte degradê funciona em rosto redondo?",
        answer: "Sim! O degradê é uma ótima escolha para rostos redondos, desde que combinado com volume no topo. O high fade ou mid fade com pompadour ou texto no topo ajudam a alongar visualmente o rosto.",
      },
      {
        question: "Preciso de consultoria para saber meu formato?",
        answer: "Não é obrigatório, mas faz toda a diferença. Na DiFaria, fazemos a análise facial completa durante o visagismo masculino, considerando formato do rosto, ângulos, tipo de cabelo e estilo de vida.",
      },
    ],
    content: `Escolher o corte de cabelo ideal vai muito além da moda — é sobre valorizar o que você tem. Cada formato de rosto pede um tipo de corte diferente, e um bom barbeiro sabe exatamente como equilibrar proporções para destacar seus melhores traços.

Durante mais de uma década atendendo em Presidente Epitácio, percebi que a maior parte dos homens usa o mesmo corte desde a adolescência por falta de informação, não por convicção. Quando você entende como o formato do seu rosto funciona, um mundo de possibilidades se abre.

Formato redondo

Características: largura e altura do rosto são quase iguais, bochechas cheias e queixo arredondado.

O que funciona: cortes com volume no topo e laterais mais curtas criam a ilusão de alongamento. O pompadour, o quiff e o topete com degradê alto são excelentes escolhas. Evite cortes muito arredondados que acompanhem o formato do rosto.

Formato quadrado

Características: mandíbula marcada, testa larga e linhas retas.

O que funciona: cortes que suavizem a mandíbula, como o textured crop, o corte desconectado ou um degradê médio com franja lateral. O contraste entre o volume no topo e as laterais curtas equilibra a estrutura do rosto.

Formato oval

Características: testa levemente mais larga que o queixo, maçãs do rosto salientes.

O que funciona: praticamente todos os cortes funcionam. Do degradê clássico ao corte social, passando pelo militar e pelo moderno. É o formato mais versátil.

Formato alongado

Características: rosto mais comprido que largo, testa alta e queixo longo.

O que funciona: evite muito volume no topo — isso alonga ainda mais o rosto. Cortes com franja, textura lateral e volume nas laterais equilibram a proporção. O mid fade com franja curta é uma excelente opção.

Na DiFaria Barber Music, cada corte começa com uma consultoria de estilo. Analisamos o formato do seu rosto, o tipo de cabelo, sua rotina e o visual que deseja antes de tocar na tesoura. Agende seu horário e descubra o corte que foi feito para você.`,
  },
  {
    slug: "degrade-low-mid-high-fade",
    title: "Degradê: low fade, mid fade ou high fade?",
    excerpt:
      "Entenda as diferenças entre os tipos de degradê e descubra qual combina mais com seu estilo e tipo de cabelo.",
    image: "/images/barbeiro.jpg",
    publishedDate: "2026-06-20T10:00:00-03:00",
    updatedDate: "2026-07-10T14:00:00-03:00",
    serviceSlugs: ["corte-degrade", "corte-masculino"],
    faqs: [
      {
        question: "Qual degradê dura mais tempo?",
        answer: "O low fade tende a durar mais visualmente porque a transição começa baixa e o crescimento natural demora mais para quebrar o efeito. Já o high fade exige manutenção a cada 10 a 15 dias.",
      },
      {
        question: "Degradê combina com cabelo cacheado?",
        answer: "Sim, e o resultado é incrível. O degradê em cabelos cacheados ou crespos exige técnica apurada para lidar com a textura e a direção dos fios. O mid fade costuma ser a melhor escolha para valorizar o volume natural do topo.",
      },
      {
        question: "Posso fazer degradê em casa?",
        answer: "Não recomendo. O degradê exige precisão milimétrica, conhecimento de técnicas de transição e as máquinas certas. Tentar fazer em casa geralmente resulta em falhas que exigem raspar tudo para consertar. Deixe com quem entende do riscado.",
      },
    ],
    content: `O degradê (fade) é um dos cortes mais pedidos na DiFaria Barber Music — e não é por acaso. A transição suave entre o cabelo curto na lateral e o volume no topo cria um visual moderno, limpo e que valoriza qualquer formato de rosto.

Mas você sabe qual tipo de degradê escolher? Muita gente chega aqui dizendo "quero um degradê" sem saber que existem variações importantes. Cada uma tem um efeito diferente no visual final.

Low fade

O fade começa baixo, próximo às orelhas, e desce suavemente em direção à nuca. É o mais discreto dos três, ideal para quem quer um visual moderno sem chamar muita atenção. Funciona muito bem em ambientes profissionais e para quem prefere um estilo elegante. O low fade combina com cortes clássicos no topo, como o social tapeçado ou o corte militar.

Mid fade

Começa na metade da lateral da cabeça. É o mais versátil e equilibrado — o queridinho dos clientes. Funciona com praticamente qualquer estilo de cabelo no topo: pompadour, topete, texturizado, franja ou até cabelo médio. O mid fade é a escolha segura para quem quer um visual moderno sem ousar demais.

High fade

Começa no alto da lateral, quase no topo da cabeça. É o mais ousado e esportivo, perfeito para quem gosta de um visual marcante e não tem medo de arriscar. O high fade pede mais volume no topo para equilibrar a proporção e exige manutenção mais frequente (a cada 10 a 15 dias).

Na dúvida entre os tipos? Na DiFaria, fazemos uma avaliação completa: formato do rosto, tipo de cabelo, estilo de vida e preferência pessoal. Chega com uma foto de referência ou confia no nosso olho clínico — o resultado é sempre um degradê impecável.`,
  },
  {
    slug: "cuidados-barba-em-casa",
    title: "Cuidados com a barba: como manter o shape em casa",
    excerpt:
      "Dicas práticas para manter sua barba alinhada entre as visitas à barbearia. Hidratação, aparação e produtos recomendados.",
    image: "/images/difaria.jpg",
    publishedDate: "2026-05-15T10:00:00-03:00",
    updatedDate: "2026-07-10T14:00:00-03:00",
    serviceSlugs: ["barba", "barboterapia"],
    faqs: [
      {
        question: "Qual a melhor frequência para lavar a barba?",
        answer: "O ideal é lavar a barba de 2 a 3 vezes por semana com shampoo específico. Lavar todos os dias pode ressecar os fios e a pele. Nos dias sem lavagem, um enxágue com água já ajuda a remover impurezas.",
      },
      {
        question: "Óleo ou balm: qual usar?",
        answer: "O óleo é mais leve e indicado para uso diário — hidrata sem pesar. O balm é mais encorpado, ideal para finalizar e dar forma à barba, especialmente em dias mais secos ou para barbas médias e longas. Muitos clientes usam os dois: óleo pela manhã e balm à noite.",
      },
      {
        question: "A barboterapia substitui os cuidados em casa?",
        answer: "Não, ela complementa. A barboterapia é um tratamento profissional profundo que faz uma limpeza e hidratação muito mais intensas do que é possível em casa. Mas os cuidados diários são essenciais para manter os resultados entre as sessões.",
      },
    ],
    content: `Manter a barba bonita entre as visitas à barbearia é mais simples do que parece — mas exige consistência. Ao longo dos anos atendendo centenas de clientes em Presidente Epitácio, percebi que quem mantém uma rotina de cuidados em casa chega sempre com a barba mais saudável e o resultado final fica muito melhor.

1. Lave com shampoo específico

A barba acumula sujeira, oleosidade e resíduos de produtos ao longo do dia. Usar shampoo de cabelo comum resseca os fios e a pele. Invista em um shampoo próprio para barba — ele limpa sem agredir e mantém a oleosidade natural equilibrada.

2. Hidrate diariamente

Óleo ou balm para barba não é frescura — é necessidade. O óleo hidrata os fios e a pele sob a barba, evitando coceira, descamação e a temida caspa (sim, barba também tem caspa). O balm, além de hidratar, ajuda a modelar e controlar os fios rebeldes.

3. Penteie todos os dias

Um pente ou escova própria para barba treina os fios na direção desejada e distribui os óleos naturais. Além disso, desembaraça e reduz o aspecto de barba desgrenhada. Cinco minutos pela manhã já fazem diferença.

4. Apare apenas o necessário

Entre as visitas, use uma aparador para manter o contorno do pescoço e das bochechas — mas vá com calma. O erro mais comum é avançar demais no contorno e perder o desenho feito pelo barbeiro. Deixe a modelagem profissional para quem entende.

5. Esfolie uma vez por semana

A pele sob a barba acumula células mortas que podem causar pelos encravados e coceira. Uma esfoliação suave semanal ajuda a manter a pele saudável e o crescimento dos fios livre.

6. Não esqueça a alimentação e hidratação

Barba saudável também vem de dentro. Água, proteínas e vitaminas (especialmente biotina) ajudam no crescimento e na qualidade dos fios.

Na DiFaria Barber Music, oferecemos o serviço completo de barba e também a barboterapia — um tratamento profissional com toalhas quentes, esfoliação e óleos essenciais que potencializa os cuidados em casa.`,
  },
  {
    slug: "melhores-barbearias-presidente-epitacio",
    title: "Melhores barbearias em Presidente Epitácio: o que procurar",
    excerpt:
      "O que considerar ao escolher uma barbearia em Presidente Epitácio? Ambiente, técnica, atendimento e localização fazem toda a diferença.",
    image: "/images/barbearia-interior.jpg",
    publishedDate: "2026-06-01T10:00:00-03:00",
    updatedDate: "2026-07-10T14:00:00-03:00",
    serviceSlugs: ["corte-masculino", "corte-degrade", "barba", "corte-e-barba"],
    faqs: [
      {
        question: "Qual a diferença entre uma barbearia tradicional e uma barbearia premium?",
        answer: "A barbearia premium vai além do corte: oferece consultoria de estilo, produtos profissionais, ambiente pensado para o conforto e atendimento personalizado. Na DiFaria, cada cliente recebe uma análise facial antes do primeiro corte e um acompanhamento contínuo.",
      },
      {
        question: "Vale a pena pagar mais caro por uma barbearia especializada?",
        answer: "Sim, porque o resultado é visivelmente diferente. Um barbeiro especializado entende de formato de rosto, técnicas de degradê, texturização e finalização. O corte dura mais, valoriza mais seus traços e você sai com a confiança que um bom visual proporciona.",
      },
      {
        question: "Como saber se o barbeiro é bom?",
        answer: "Observe o portfólio (redes sociais), o estado das ferramentas, a higiene do ambiente e, principalmente, se ele pergunta sobre suas preferências antes de começar. Um bom barbeiro ouve antes de cortar.",
      },
    ],
    content: `Escolher a barbearia certa em Presidente Epitácio pode transformar completamente sua experiência de cuidado pessoal. Não se trata apenas de cortar o cabelo — é sobre encontrar um profissional que entenda seu estilo, valorize seus traços e entregue um resultado que faça diferença no seu dia a dia.

Depois de mais de 10 anos no ramo, posso dizer que o que realmente separa uma barbearia comum de uma excepcional são alguns fatores que todo homem deveria observar antes de escolher onde cortar.

Técnica e atualização profissional

Uma boa barbearia investe em treinamento constante. Técnicas como degradê navalhado, cortes texturizados, barba desenhada e visagismo masculino exigem domínio e prática. Barbeiros que estudam e se atualizam entregam resultados consistentemente superiores.

Ambiente e experiência

O espaço onde você é atendido diz muito sobre o cuidado que vai receber. Ambiente limpo, organizado, com boa música e iluminação adequada não é luxo — é padrão mínimo para um serviço de qualidade. A DiFaria foi pensada para ser uma experiência, não apenas um corte.

Atendimento personalizado

Cada pessoa tem formato de rosto, tipo de cabelo e estilo de vida diferentes. Um bom barbeiro ouve antes de cortar, pergunta sobre sua rotina, seus hábitos e o que você espera do resultado. Se o profissional já começa cortando sem conversar, desconfie.

Produtos de qualidade

Barbearias que usam produtos profissionais para finalização mostram compromisso com o resultado. Pomadas, ceras, óleos e balms de qualidade fazem diferença na durabilidade e no aspecto do corte.

Localização e horários

A praticidade de encontrar uma barbearia no centro de Presidente Epitácio, com horários flexíveis, facilita a rotina. A DiFaria está na Av. Pres. Vargas, com fácil acesso e estacionamento nas proximidades.

Na DiFaria Barber Music, reunimos todos esses diferenciais em um só lugar. Mais do que uma barbearia, somos um espaço de estilo e identidade.`,
  },
  {
    slug: "tendencias-corte-masculino-2026",
    title: "Tendências de corte masculino para 2026",
    excerpt:
      "Cortes texturizados, degradê moderno e barba bem cuidada estão entre as principais tendências de estilo masculino para 2026.",
    image: "/images/capa.jpg",
    publishedDate: "2026-01-10T10:00:00-03:00",
    updatedDate: "2026-07-10T14:00:00-03:00",
    serviceSlugs: ["corte-masculino", "corte-degrade", "barba"],
    faqs: [
      {
        question: "O corte texturizado funciona para cabelo fino?",
        answer: "Sim, e é uma das melhores opções para cabelo fino. A texturização cria volume e movimento onde naturalmente há pouca densidade, dando a impressão de cabelo mais encorpado.",
      },
      {
        question: "Barba cheia ainda está na moda em 2026?",
        answer: "Sim, mas com um diferencial: a barba cheia de 2026 é bem cuidada, hidratada e com contorno definido. Barba grande mas desalinhada já era — o que vale é o contorno preciso e a aparência saudável.",
      },
      {
        question: "O corte desconectado é difícil de manter?",
        answer: "Exige manutenção regular a cada 15 a 20 dias para manter o contraste entre o topo e as laterais. Mas é um visual que compensa o esforço — moderno, ousado e muito elogiado.",
      },
    ],
    content: `O universo dos cortes masculinos está em constante evolução. Em 2026, as tendências combinam o clássico e o contemporâneo com um toque de personalidade. Depois de atender centenas de clientes na DiFaria, posso dizer que o homem de hoje busca um visual que comunica quem ele é — e não apenas um corte da moda.

Corte texturizado

O textured crop continua em alta, e não é difícil entender por quê. A proposta é criar movimento e volume natural no topo, com laterais mais curtas. Funciona em cabelos lisos, ondulados e cacheados, e a manutenção é relativamente simples. O segredo está na finalização: uma pomada de baixo brilho ou um spray texturizador faz toda a diferença.

Degradê criativo

O degradê tradicional ganha variações interessantes. O burst fade (que contorna a orelha) e o drop fade (mais baixo atrás) estão entre os mais pedidos. A criatividade na transição entre os tamanhos é o destaque — um bom barbeiro consegue criar efeitos únicos que valorizam o formato da cabeça.

Barba cheia e bem cuidada

Barba grande continua elegante, desde que bem cuidada. O contorno definido, a hidratação constante e um corte periódico são essenciais para um visual sofisticado. A barboterapia, que oferecemos na DiFaria, é o tratamento ideal para quem quer manter a barba sempre no ponto.

Corte desconectado

A diferença brusca entre o volume do topo e as laterais curtas cria um contraste moderno que funciona muito bem com finalizações texturizadas. É um visual que exige confiança e manutenção regular.

Corte social

O clássico bem executado nunca sai de moda. O corte social com degradê suave e risco lateral é a escolha de quem prefere um visual elegante e atemporal — perfeito para ambientes profissionais e ocasiões formais.

Na DiFaria Barber Music, acompanhamos as tendências sem perder a essência: atendimento personalizado que valoriza sua identidade.`,
  },
  {
    slug: "cuidar-degrade-entre-visitas",
    title: "Como cuidar do degradê entre as visitas à barbearia",
    excerpt:
      "Manter o degradê bonito por mais tempo exige cuidados simples. Veja dicas de hidratação, penteado e produtos para usar em casa.",
    image: "/images/will.jpeg",
    publishedDate: "2026-04-20T10:00:00-03:00",
    updatedDate: "2026-07-10T14:00:00-03:00",
    serviceSlugs: ["corte-degrade", "corte-masculino"],
    faqs: [
      {
        question: "De quanto em quanto tempo devo refazer o degradê?",
        answer: "O ideal é a cada 15 dias para manter o visual impecável. Clientes que preferem um aspecto mais natural podem estender para 20 dias. O high fade exige manutenção mais frequente que o low fade.",
      },
      {
        question: "Posso usar boné depois do degradê?",
        answer: "Pode, mas evite usar logo após o corte e prefira bonés mais ajustados que não esfreguem na lateral. O atrito constante desmancha a transição e acelera a perda do formato.",
      },
      {
        question: "Qual produto usar para não pesar no degradê?",
        answer: "Prefira pomadas de baixo brilho ou ceras leves. Produtos muito oleosos ou pesados podem desmanchar a textura e achatar o volume do topo. Um spray texturizador também é uma ótima opção para o dia a dia.",
      },
    ],
    content: `O degradê é um dos cortes mais versáteis e elegantes, mas também um dos que exige mais manutenção. Entre uma visita e outra à barbearia, alguns cuidados fazem toda a diferença para manter o visual impecável por mais tempo.

Durante anos atendendo clientes em Presidente Epitácio, vi de perto como pequenos hábitos caseiros prolongam a vida do degradê — e como a falta de cuidados básicos pode estragar um corte perfeito em questão de dias.

1. Lave o cabelo na frequência certa

Lavar todos os dias pode ressecar os fios e acelerar o desaparecimento do degradê. O ideal é lavar em dias alternados com shampoo suave e condicionador leve. Nos dias sem lavagem, um enxágue com água já ajuda a manter.

2. Use produtos leves

Pomadas e ceras com baixo brilho são as melhores amigas do degradê. Produtos muito pesados ou oleosos desmancham a transição e deixam o visual ensebado. Prefira finalizadores de textura leve e aplique uma quantidade moderada.

3. Penteie na direção certa

Use um pente ou escova para alinhar o cabelo no sentido do corte. Isso evita que os fios fiquem desordenados e quebrem a harmonia do degradê. A direção correta mantém a transição visível por mais tempo.

4. Hidrate os fios regularmente

Cabelo hidratado tem mais movimento, brilho natural e responde melhor à finalização. Use um leave-in leve ou óleo capilar nas pontas duas a três vezes por semana.

5. Apare apenas o contorno

Se o degradê começar a perder a definição, você pode aparar apenas o contorno do pescoço e das orelhas com uma máquina — mas vá com calma. A manutenção completa do degradê é serviço para barbeiro.

6. Evite bonés apertados

O atrito constante desmancha o degradê e causa frizz nas laterais. Se precisar usar boné, prefira modelos mais soltos e por períodos curtos.

Seguindo essas dicas, seu degradê dura mais e chega ao próximo atendimento com aspecto fresco, facilitando o trabalho do barbeiro e garantindo um resultado ainda melhor.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
