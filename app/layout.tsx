import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { COMPANY, SEO_KEYWORDS, FAQS } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.domain),
  title: {
    default: `${COMPANY.name} | Barbearia em Presidente Epitácio`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: SEO_KEYWORDS,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: COMPANY.domain,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Estilo, música e identidade`,
    description: COMPANY.description,
    images: [
      {
        url: "/images/capa.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.description,
    images: ["/images/capa.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const barbershopSchema = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: COMPANY.name,
  image: `${COMPANY.domain}/images/barbearia-interior.jpg`,
  url: COMPANY.domain,
  telephone: `+55 ${COMPANY.phoneRaw}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    addressCountry: "BR",
  },
  sameAs: [COMPANY.instagram, COMPANY.facebook],
  areaServed: `${COMPANY.address.city} - ${COMPANY.address.state}`,
  description: COMPANY.description,
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.coordinates.lat,
    longitude: COMPANY.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(barbershopSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
