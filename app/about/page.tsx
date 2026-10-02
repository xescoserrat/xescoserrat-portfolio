import type { Metadata } from "next";
import { AboutContent } from "../../components/about-content";
import { SiteHeader } from "../../components/site-header";

const title = "Bio | Francesc Serrat";
const description = "Francesc Serrat is a Barcelona-based Fashion Designer and Senior Fashion Graphic Designer with approximately 16 years of fashion-industry experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/" },
  openGraph: { title, description, url: "/about/", type: "profile" },
  twitter: { card: "summary", title, description },
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#about-title">Skip to about</a>
      <SiteHeader />
      <main id="main-content" className="about-page">
        <AboutContent />
      </main>
    </>
  );
}
