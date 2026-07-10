import type { Metadata } from "next";
import { COMPANY, WHATSAPP } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da DiFaria Barber Music. Saiba como seus dados são coletados, utilizados e protegidos.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections = [
  {
    title: "1. Sobre a DiFaria Barber Music",
    content: `A DiFaria Barber Music é uma barbearia localizada em ${COMPANY.address.full}.`,
  },
  {
    title: "2. Quais informações podem ser coletadas",
    content: `Durante a navegação no site ou o contato com a barbearia, algumas informações podem ser fornecidas pelo próprio visitante. Entre elas estão: nome, número de telefone, informações enviadas por formulários, mensagens enviadas pelo WhatsApp e dados necessários para atendimento ou agendamento.

O site também pode coletar automaticamente algumas informações técnicas, como endereço IP, tipo de navegador, tipo de dispositivo, páginas acessadas, data e horário de acesso, origem da visita e localização aproximada.`,
  },
  {
    title: "3. Como as informações podem ser utilizadas",
    content: `Os dados coletados podem ser utilizados para: responder dúvidas e solicitações, realizar agendamentos, confirmar, remarcar ou cancelar horários, prestar atendimento pelo WhatsApp, melhorar o funcionamento do site, analisar o desempenho das páginas, proteger o site contra acessos indevidos, cumprir obrigações legais e enviar comunicações, quando houver autorização do cliente.

A DiFaria Barber Music não vende e não comercializa dados pessoais.`,
  },
  {
    title: "4. Atendimento pelo WhatsApp e redes sociais",
    content: `O site possui links para WhatsApp, Instagram e Facebook. Ao clicar nesses links, o visitante será direcionado para plataformas externas. A partir desse momento, o uso das informações também estará sujeito às regras e políticas de privacidade de cada plataforma.`,
  },
  {
    title: "5. Google Maps",
    content: `O site pode utilizar o Google Maps para mostrar a localização da barbearia e facilitar a criação de rotas. Ao utilizar esse recurso, algumas informações técnicas podem ser processadas pelo Google.`,
  },
  {
    title: "6. Uso de cookies",
    content: `Cookies são pequenos arquivos armazenados no dispositivo do visitante. Eles ajudam o site a funcionar corretamente, guardar preferências e entender como as pessoas navegam pelas páginas.

Tipos de cookies que podem ser utilizados:
• Necessários — essenciais para o funcionamento e segurança do site
• Preferência — para lembrar escolhas do visitante
• Análise — para entender o uso do site e melhorar a navegação
• Publicidade — apenas se o site vier a trabalhar com anúncios`,
  },
  {
    title: "7. Ferramentas de análise",
    content: `O site poderá utilizar ferramentas como o Google Analytics para entender melhor o comportamento dos visitantes. Esses dados ajudam a identificar melhorias e tornar o site mais útil.`,
  },
  {
    title: "8. Compartilhamento de informações",
    content: `Os dados pessoais poderão ser compartilhados apenas quando necessário para o funcionamento do site, atendimento ou cumprimento de obrigação legal. O compartilhamento poderá ocorrer com empresas de hospedagem, plataformas de atendimento, serviços de agendamento, ferramentas de análise, redes sociais e autoridades públicas, quando houver obrigação legal.`,
  },
  {
    title: "9. Segurança dos dados",
    content: `A DiFaria Barber Music procura adotar cuidados técnicos e administrativos para proteger as informações pessoais contra acesso não autorizado, perda, alteração indevida, divulgação sem autorização e uso incorreto.`,
  },
  {
    title: "10. Por quanto tempo os dados são armazenados",
    content: `Os dados serão mantidos apenas pelo tempo necessário para realizar o atendimento, concluir o agendamento, cumprir obrigações legais, proteger os direitos da empresa e prevenir fraudes.`,
  },
  {
    title: "11. Direitos do titular dos dados",
    content: `De acordo com a LGPD, o titular pode solicitar: confirmação de tratamento, acesso às informações, correção de dados, exclusão, bloqueio ou anonimização, informação sobre compartilhamento, retirada de autorização, portabilidade e esclarecimentos sobre decisões automatizadas.

Solicitações podem ser feitas pelo WhatsApp: ${COMPANY.phone}`,
  },
  {
    title: "12. Dados de crianças e adolescentes",
    content: `O site não foi criado especificamente para crianças. Nos casos de agendamento de corte infantil, os dados devem ser fornecidos ou autorizados pelos pais ou responsáveis legais.`,
  },
  {
    title: "13. Links para outros sites",
    content: `O site pode apresentar links para outras páginas, aplicativos ou redes sociais. A DiFaria Barber Music não se responsabiliza pelas práticas de privacidade dessas plataformas externas.`,
  },
  {
    title: "14. Alterações nesta política",
    content: `Esta Política de Privacidade pode ser atualizada sempre que houver mudanças no site, nos serviços utilizados ou nas regras aplicáveis. A versão mais recente ficará disponível nesta página, acompanhada da data da última atualização.`,
  },
  {
    title: "15. Contato",
    content: `Dúvidas, solicitações ou pedidos relacionados à privacidade podem ser encaminhados pelos canais:

DiFaria Barber Music
WhatsApp: ${COMPANY.phone}
Instagram: @difaria_barber_music
Endereço: ${COMPANY.address.full}`,
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "var(--cream)" }}>
      <Header />
      <div
        style={{
          padding: "160px 20px 80px",
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <span className="eyebrow dark" style={{ marginBottom: 8 }}>
          Privacidade
        </span>
        <h1>Política de Privacidade</h1>
        <p
          style={{
            color: "#72816a",
            fontSize: "0.9rem",
            marginBottom: 48,
          }}
        >
          Última atualização: 8 de julho de 2026
        </p>
        <p style={{ marginBottom: 48, color: "#48564d" }}>
          A DiFaria Barber Music respeita a privacidade de seus clientes e de
          todas as pessoas que acessam este site. Esta Política de Privacidade
          explica, de forma simples, quais informações podem ser coletadas, como
          elas podem ser utilizadas e quais cuidados adotamos para proteger
          esses dados.
        </p>
        {sections.map((section) => (
          <section key={section.title} style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 12,
                maxWidth: "none",
              }}
            >
              {section.title}
            </h2>
            {section.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                style={{
                  color: "#48564d",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  marginBottom: 12,
                }}
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
