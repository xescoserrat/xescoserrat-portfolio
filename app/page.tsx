import Link from "next/link";
import { SiteHeader } from "../components/site-header";

const brandLogos = {
  desigual: { src: "/images/brands/desigual-official-logo.png", alt: "Desigual official logo" },
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

          <div className="landing-print" aria-hidden="true">
            <img src="/images/projects/koroshi-jungle-repeat-master-01.jpg" alt="" />
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
          </nav>
        </section>
      </main>
    </>
  );
}
