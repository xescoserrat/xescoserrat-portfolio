import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francesc Serrat — Fashion Designer & Senior Fashion Graphic Designer",
  description:
    "Fashion Designer and Senior Fashion Graphic Designer in Barcelona, combining garment development, menswear, fashion graphics, textile prints and visual direction.",
  metadataBase: new URL("https://xescoserrat-portfolio.xescoserrat.workers.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Francesc Serrat — Fashion Designer & Senior Fashion Graphic Designer",
    description: "Fashion Designer and Senior Fashion Graphic Designer in Barcelona, combining garment development, menswear, fashion graphics, textile prints and visual direction.",
    url: "/",
    siteName: "Francesc Serrat",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Francesc Serrat — Fashion Designer & Senior Fashion Graphic Designer",
    description: "Fashion Designer and Senior Fashion Graphic Designer in Barcelona, combining garment development, menswear, fashion graphics, textile prints and visual direction.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
