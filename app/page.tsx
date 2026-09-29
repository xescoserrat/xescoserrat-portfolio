import Link from "next/link";
import { SiteHeader } from "../components/site-header";

const brandLogos = {
  // The transparent source logo has generous horizontal padding; this verified cropped export
  // keeps the wordmark optically equal to Koroshi without altering either logo's proportions.
  desigual: { src: "/images/brands/desigual-official-logo-cropped.webp", alt: "Desigual official logo" },
  koroshi: { src: "/images/brands/koroshi-official-logo.webp", alt: "Koroshi official logo" },
} as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="landing" tabIndex={-1}>
        <section className="landing-panel" aria-labelledby="intro-title">
          <div className="landing-intro">
            <p className="eyebrow">Francesc Serrat / Barcelona</p>
            <h1 id="intro-title">Fashion Designer<br />&amp; Senior Fashion<br />Graphic Designer</h1>
            <p>Fashion design, garment development, graphics, textile prints and visual direction.</p>
          </div>

          <nav className="landing-brands" aria-label="Portfolio brand worlds">
            <Link href="/work/desigual" className="landing-brand" aria-label="Enter Desigual archive">
              <img src={brandLogos.desigual.src} alt={brandLogos.desigual.alt} />
              <span>Desigual archive</span>
            </Link>
            <Link href="/work/koroshi" className="landing-brand" aria-label="Enter Koroshi archive">
              <img src={brandLogos.koroshi.src} alt={brandLogos.koroshi.alt} />
              <span>Koroshi archive</span>
            </Link>
            <Link href="/work/artworks" className="landing-brand landing-brand--artworks" aria-label="Enter Artworks archive">
              <strong>Artworks</strong>
              <span>Prints, repeats &amp; graphic studies<br />across Koroshi and Desigual</span>
            </Link>
          </nav>
        </section>
      </main>
    </>
  );
}
