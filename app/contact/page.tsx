import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";

const title = "Contact | Francesc Serrat";
const description = "Contact Francesc Serrat, Fashion Designer and Senior Fashion Graphic Designer, based in Barcelona.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact/" },
  openGraph: { title, description, url: "/contact/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#contact-title">Skip to contact</a>
      <SiteHeader />
      <main id="main-content" className="contact-page">
        <section aria-labelledby="contact-title">
          <p className="eyebrow">Francesc Serrat / Barcelona</p>
          <h1 id="contact-title">Contact</h1>
          <p>Available for Fashion Designer and Senior Fashion Graphic Designer opportunities.</p>
          <a href="mailto:xescoserrat@gmail.com">xescoserrat@gmail.com</a>
        </section>
      </main>
    </>
  );
}
