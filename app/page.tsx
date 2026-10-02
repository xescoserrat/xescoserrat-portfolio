import Link from "next/link";
import { SiteHeader } from "../components/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="home-screen" tabIndex={-1}>
        <section className="home-panel" aria-labelledby="intro-title">
          <div className="home-intro">
            <p className="eyebrow">Francesc Serrat / Barcelona</p>
            <h1 id="intro-title">Fashion Designer &amp;<br />Senior Fashion Graphic Designer</h1>
            <p>Fashion design, garment development, graphics, textile prints and visual direction.</p>
          </div>

          <nav className="home-worlds" id="portfolio" aria-label="Portfolio archives">
            <Link className="home-world home-world--desigual" href="/work/desigual">
              <span>Desigual</span>
              <small>Man + Woman</small>
            </Link>
            <Link className="home-world home-world--prints-desigual" href="/work/prints/desigual">
              <span>Prints Desigual</span>
              <small>Fashion Prints + Rapport</small>
            </Link>
            <Link className="home-world home-world--koroshi" href="/work/koroshi">
              <span>Koroshi</span>
              <small>SS26 + AW26–27</small>
            </Link>
            <Link className="home-world home-world--prints-koroshi" href="/work/prints/koroshi">
              <span>Prints Koroshi</span>
              <small>Original artworks</small>
            </Link>
          </nav>
        </section>
      </main>
    </>
  );
}
