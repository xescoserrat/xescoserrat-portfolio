import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xesco Serrat — Fashion Graphic Designer",
  description:
    "The creative practice of Xesco Serrat, Senior Fashion Graphic Designer in Barcelona.",
  metadataBase: new URL("https://xescoserrat-portfolio.pages.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xesco Serrat — Fashion Graphic Designer",
    description: "The creative practice of Xesco Serrat, Senior Fashion Graphic Designer in Barcelona.",
    url: "/",
    siteName: "Xesco Serrat",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xesco Serrat — Fashion Graphic Designer",
    description: "The creative practice of Xesco Serrat, Senior Fashion Graphic Designer in Barcelona.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
