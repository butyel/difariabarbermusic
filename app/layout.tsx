import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { COMPANY, SEO_KEYWORDS } from "@/lib/constants";
import Analytics from "@/components/Analytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.domain),
  title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
  description:
    "Barbearia em Presidente Epitácio especializada em corte masculino, degradê, barba e atendimento personalizado. Agende seu horário na DiFaria.",
  keywords: SEO_KEYWORDS,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: COMPANY.domain,
    siteName: COMPANY.name,
    title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Corte masculino, degradê, barba e atendimento personalizado na DiFaria Barber Music.",
    images: [
      {
        url: `${COMPANY.domain}/images/capa.jpg`,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia em Presidente Epitácio | DiFaria Barber Music",
    description:
      "Corte masculino, degradê, barba e atendimento personalizado na DiFaria Barber Music.",
    images: [`${COMPANY.domain}/images/capa.jpg`],
  },
  alternates: { canonical: `${COMPANY.domain}/` },
  robots: { index: true, follow: true },
  verification: { google: "0TC4N0E899HDPA0csITKXyKu1Avl6QuOk7pMxUnKROM" },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
