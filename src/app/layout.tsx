import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Michaël Myscile | Gestionnaire Comptable en Alternance",
  description: "CV en ligne de Michaël Myscile, en reconversion vers la comptabilité. Recherche une alternance pour un titre professionnel de gestionnaire comptable et fiscal.",
  keywords: ["CV", "comptabilité", "alternance", "gestionnaire comptable", "fiscal", "reconversion"],
  openGraph: {
    title: "Michaël Myscile | Gestionnaire Comptable en Alternance",
    description: "CV en ligne de Michaël Myscile, en reconversion vers la comptabilité. Recherche une alternance pour un titre professionnel de gestionnaire comptable et fiscal.",
    images: [`${basePath}/og-image.png`],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michaël Myscile | Gestionnaire Comptable en Alternance",
    description: "CV en ligne de Michaël Myscile. Recherche une alternance pour un titre de gestionnaire comptable et fiscal.",
    images: [`${basePath}/og-image.png`],
  },
  icons: {
    icon: [
      { url: `${basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
