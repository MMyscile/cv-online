import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michaël Myscile | Gestionnaire Comptable en Alternance",
  description: "Portfolio de Michaël Myscile, en reconversion vers la comptabilité. Recherche une alternance pour un titre professionnel de gestionnaire comptable et fiscal.",
  keywords: ["portfolio", "finance", "comptabilité", "expert comptable", "analyse financière"],
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
