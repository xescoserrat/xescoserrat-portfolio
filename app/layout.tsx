import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Francesc Serrat — Fashion Designer & Senior Fashion Graphic Designer";
const siteDescription = "Barcelona-based Fashion Designer and Senior Fashion Graphic Designer with approximately 16 years of fashion-industry experience across menswear, garment development, fashion graphics, textile prints and visual identity.";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francesc Serrat",
  jobTitle: "Fashion Designer and Senior Fashion Graphic Designer",
  description: siteDescription,
  email: "mailto:xescoserrat@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  knowsAbout: [
    "Fashion design",
    "Menswear design",
    "Garment development",
    "Collection development",
    "Fashion graphics",
    "Textile prints",
    "Typography",
    "Visual identity",
  ],
};

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://xescoserrat-portfolio.xescoserrat.workers.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Francesc Serrat",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
      </body>
    </html>
  );
}
