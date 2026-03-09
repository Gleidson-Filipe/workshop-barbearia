import type { Metadata } from "next";
import { Anton, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workshop de Barbearia Profissional | Kingsman Barbearia — 13 e 14 de Junho de 2026",
  description:
    "Aprenda fade, acabamento e design de barba com Victor Hayes. Workshop presencial, certificado incluído. Vagas limitadas — garanta a sua.",
  keywords: [
    "workshop barbearia",
    "curso de barbearia",
    "aprender barbearia",
    "fade profissional",
    "Victor Hayes",
    "Kingsman Barbearia",
    "barbearia profissional",
    "curso barbeiro",
  ],
  openGraph: {
    title: "Workshop Kingsman Barbearia — 13 e 14 de Junho de 2026",
    description:
      "Dois dias de imersão técnica com Victor Hayes. Fade, acabamento, design de barba. Certificado incluso. Vagas limitadas.",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Workshop Kingsman Barbearia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${anton.variable} ${playfair.variable} ${inter.variable} bg-surface-page text-text-primary antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
