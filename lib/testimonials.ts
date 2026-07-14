export interface Testimonial {
  text: string;
  author: string;
}

export const TESTIMONIALS: Record<string, Testimonial[]> = {
  "corte-masculino": [
    {
      text: "Melhor corte da cidade! Saí de lá me sentindo um novo homem. O Rafael entendeu exatamente o que eu queria.",
      author: "Lucas M.",
    },
    {
      text: "Ambiente incrível, atendimento nota 10. Faço meu corte masculino aqui há mais de um ano e nunca decepciona.",
      author: "Carlos E.",
    },
  ],
  "corte-degrade": [
    {
      text: "Nunca tinha feito um degradê tão bem feito. O cara entendeu na hora o que eu queria. Saí parecendo outra pessoa!",
      author: "Gabriel S.",
    },
    {
      text: "O mid fade que o Rafael fez em mim é o melhor que já tive. Nota mil pra DiFaria, virei cliente fiel.",
      author: "Thiago R.",
    },
  ],
  barba: [
    {
      text: "Minha barba nunca esteve tão alinhada. O desenho ficou perfeito, valorizou demais meu rosto. Profissionalismo incrível!",
      author: "Fernando A.",
    },
    {
      text: "Fiz a hidratação de barba e o resultado surpreendeu. Fios muito mais macios e sem coceira. Virei cliente!",
      author: "Marcos D.",
    },
  ],
  "corte-e-barba": [
    {
      text: "Combo corte e barba sensacional! Saí de lá irreconhecível, no melhor sentido. Preço justo e atendimento nota 10.",
      author: "Rafael M.",
    },
    {
      text: "Faço o combo todo mês e é a melhor coisa. Economizo tempo e dinheiro, e o resultado é sempre impecável.",
      author: "Pedro H.",
    },
  ],
  "corte-infantil": [
    {
      text: "Meu filho sempre teve pavor de cortar cabelo. Na DiFaria ele ficou super tranquilo e ainda saiu todo estiloso. Viremos sempre!",
      author: "Ana C.",
    },
    {
      text: "Levei meu sobrinho de 4 anos e foi uma experiência incrível. O profissional foi super paciente, o menino saiu feliz e lindo!",
      author: "Juliana M.",
    },
  ],
  barboterapia: [
    {
      text: "Fiz barboterapia pela primeira vez e foi a melhor experiência. A pele ficou macia, a barba hidratada e saí de lá super relaxado.",
      author: "André L.",
    },
    {
      text: "Minha barba vivia ressecada e coçando. Depois da barboterapia na DiFaria, mudou completamente. Virei mensalista!",
      author: "Felipe S.",
    },
  ],
  "visagismo-masculino": [
    {
      text: "Sempre cortei o cabelo do mesmo jeito. Depois da consultoria de visagismo, mudei completamente o visual. Melhor decisão que tomei.",
      author: "Marcos V.",
    },
    {
      text: "O Rafael analisou meu rosto e indicou um corte que eu jamais teria escolhido. Ficou perfeito. Recebo elogios até hoje.",
      author: "Lucas N.",
    },
  ],
  "sobrancelha-masculina": [
    {
      text: "Nunca tinha feito sobrancelha, mas resolvi tentar. O resultado ficou super natural, ninguém percebeu que fiz, só elogiaram.",
      author: "Thiago A.",
    },
    {
      text: "A sobrancelha fez uma diferença enorme no meu rosto. Pareço mais descansado e o olhar ficou muito mais marcante.",
      author: "Rodrigo M.",
    },
  ],
  "hidratacao-capilar-masculina": [
    {
      text: "Meu cabelo estava ressecado de tanto usar pomada. Depois da hidratação na DiFaria, voltou a ter brilho e maciez. Recomendo!",
      author: "Gabriel T.",
    },
    {
      text: "Nunca tinha feito hidratação, achava que era coisa de salão feminino. Que engano! O cabelo ficou outro, muito mais saudável.",
      author: "Eduardo P.",
    },
  ],
  "pacote-para-noivos": [
    {
      text: "O pacote para noivos da DiFaria foi essencial. Cheguei no casamento me sentindo impecável. O Rafael cuidou de cada detalhe.",
      author: "Rafael e Camila",
    },
    {
      text: "Fizemos o pacote eu e meus padrinhos. Todo mundo ficou lindo, atendimento nota 10. Recomendo de olhos fechados.",
      author: "Felipe e Ana",
    },
  ],
  "producao-masculina-para-casamento": [
    {
      text: "Fiz a produção para o casamento do meu irmão. Fiquei muito bem, recebi vários elogios. O acabamento é impecável.",
      author: "Rafael B.",
    },
    {
      text: "Levamos os padrinhos para fazer a produção na DiFaria e o resultado foi sensacional. Todo mundo alinhado e bonito nas fotos.",
      author: "Luciana (mãe do noivo)",
    },
  ],
};
