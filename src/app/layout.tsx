import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://mmyscile.github.io/cv-online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Michaël Myscile | Gestionnaire Comptable et Fiscal en Alternance",
  description: "CV en ligne de Michaël Myscile, en reconversion vers la comptabilité. Recherche une alternance pour un titre professionnel de gestionnaire comptable et fiscal.",
  keywords: ["CV", "comptabilité", "alternance", "gestionnaire comptable", "fiscal", "reconversion"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Michaël Myscile | Gestionnaire Comptable et Fiscal en Alternance",
    description: "CV en ligne de Michaël Myscile, en reconversion vers la comptabilité. Recherche une alternance pour un titre professionnel de gestionnaire comptable et fiscal.",
    url: siteUrl,
    siteName: "CV Michaël Myscile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CV de Michaël Myscile - Gestionnaire Comptable et Fiscal",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michaël Myscile | Gestionnaire Comptable et Fiscal en Alternance",
    description: "CV en ligne de Michaël Myscile. Recherche une alternance pour un titre de gestionnaire comptable et fiscal.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: `${basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michaël Myscile",
  url: siteUrl,
  jobTitle: "Gestionnaire Comptable et Fiscal en Alternance",
  description:
    "En reconversion professionnelle vers la comptabilité, recherche une alternance pour un titre professionnel de gestionnaire comptable et fiscal.",
  knowsAbout: ["Comptabilité", "Fiscalité", "Excel", "Gestion"],
  seeks: {
    "@type": "Demand",
    description: "Alternance en comptabilité",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
