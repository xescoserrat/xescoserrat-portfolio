import Link from "next/link";
import { MediaFrame } from "../components/media-frame";
import { SiteHeader } from "../components/site-header";
import { portfolioWorlds } from "../content/portfolio-worlds";
import { mediaInventory } from "../content/media-inventory";
import { koroshiSs26Categories } from "../content/koroshi-ss26";

const brandLogos = {
  koroshi: { src: "/images/brands/koroshi-official-logo.webp", alt: "Koroshi official logo", className: "brand-logo--koroshi" },
  desigual: { src: "/images/brands/desigual-official-logo-cropped.webp", alt: "Desigual official logo", className: "brand-logo--desigual" },
} as const;

const koroshiStream = koroshiSs26Categories.flatMap((category) => category.products.slice(0, 2)).map((product) => ({
  id: product.styleCode,
  media: product.thumbnail!,
  brand: "Koroshi",
  category: product.proposedCategory,
  creativeDiscipline: "Menswear / Fashion Design + Fashion Graphics",
  season: product.season,
  href: `/work/koroshi/menswear/ss26/product/${product.styleCode.toLowerCase()}`,
}));

const desigualStream = mediaInventory.filter((item) => (
  item.publicationStatus === "published" && item.brand === "Desigual"
)).slice(0, 8).map((item) => ({ ...item, href: item.proposedRoute }));

const visualStream = [...koroshiStream, ...desigualStream];

const archiveDisciplines = [
  {
    title: "Fashion / Product Development",
    description: "Menswear design, product thinking, technical development and the detail that carries a collection into production.",
    links: [
      { label: "Koroshi / SS26 Menswear", href: "/work/koroshi/menswear/ss26" },
      { label: "Koroshi / T-Shirts", href: "/work/koroshi/menswear/ss26/t-shirts" },
      { label: "Koroshi / Sweatshirts", href: "/work/koroshi/menswear/ss26/sweatshirts" },
    ],
  },
  {
    title: "Fashion Graphics / Textile Prints",
    description: "Graphic languages, typography, all-over print and product application built for placement and recognition.",
    links: [
      { label: "Koroshi / SS26 Shirts", href: "/work/koroshi/menswear/ss26/shirts" },
      { label: "Desigual / Man", href: "/work/desigual/man" },
      { label: "Desigual / Woman", href: "/work/desigual/woman" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="archive-intro" aria-labelledby="intro-title">
          <p className="eyebrow">Francesc Serrat / Barcelona</p>
          <h1 id="intro-title"><span className="intro-name">Francesc Serrat</span>Fashion Designer &amp;<br />Senior Fashion Graphic Designer</h1>
          <p>Fashion design, garment development, graphics, textile prints and visual direction.</p>
        </section>

        <section className="portfolio-worlds" aria-labelledby="worlds-title">
          <div className="worlds-heading">
            <p className="eyebrow">Portfolio / Brand worlds</p>
            <h2 id="worlds-title">Start with the context.<br />Then go deeper.</h2>
          </div>
          <div className="worlds-grid">
            {portfolioWorlds.map((world, index) => (
              <article className={`world-card world-card--${index + 1}`} key={world.slug}>
                <Link className="world-card-image world-card-logo" href={world.href} aria-label={`Explore ${world.title}`}>
                  <img className={`brand-logo ${brandLogos[world.slug].className}`} src={brandLogos[world.slug].src} alt={brandLogos[world.slug].alt} />
                  <span className="world-card-open" aria-hidden="true">Explore ↗</span>
                </Link>
                <div className="world-card-copy">
                  <p className="eyebrow">( 0{index + 1} )</p>
                  <h3><Link href={world.href}>{world.title}</Link></h3>
                  <p>{world.description}</p>
                  <Link className="world-card-link" href={world.href}>Explore {world.title} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="visual-stream" id="work" aria-labelledby="work-title">
          <div className="stream-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">An archive of images,<br />systems and garments.</h2>
          </div>
          <div className="stream-grid">
            {visualStream.map((item, index) => (
              <article className={`stream-item stream-item--${(index % 9) + 1}`} key={item.id}>
                <Link className="stream-image-link" href={item.href} aria-label={`Explore ${item.brand}: ${item.category}`}>
                  <MediaFrame media={item.media} title={`${item.brand}: ${item.category}`} />
                  <span className="stream-view" aria-hidden="true">Explore ↗</span>
                </Link>
                <div className="stream-caption">
                  <p>{item.brand} / {item.category}</p>
                  <span>{item.creativeDiscipline} · {item.season} · {item.id}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="archive" id="archive" aria-labelledby="archive-title">
          <div className="archive-heading">
            <p className="eyebrow">Archive / Disciplines</p>
            <h2 id="archive-title">One practice.<br />Different entry points.</h2>
          </div>
          <div className="archive-list">
            {archiveDisciplines.map((discipline, index) => (
              <article className="archive-discipline" key={discipline.title}>
                <p className="section-index">( 0{index + 1} )</p>
                <div><h3>{discipline.title}</h3><p>{discipline.description}</p></div>
                <ul>
                  {discipline.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label} <span aria-hidden="true">↗</span></Link></li>)}
                </ul>
              </article>
            ))}
            <article className="archive-discipline archive-process-link">
              <p className="section-index">( 03 )</p>
              <div><h3>Design Process</h3><p>Observation, tension, system and edit—applied to every visual decision.</p></div>
              <a href="#process">Read the process <span aria-hidden="true">↓</span></a>
            </article>
          </div>
        </section>

        <section className="process layout-grid" id="process" aria-labelledby="process-title">
          <p className="section-index">( Process )</p>
          <div>
            <p className="eyebrow">Design Process</p>
            <h2 id="process-title">Research becomes direction.<br />Direction becomes a visual system.</h2>
            <div className="process-steps">
              <p><span>01</span> Observe culture, product and people.</p>
              <p><span>02</span> Find the graphic tension worth developing.</p>
              <p><span>03</span> Build a system that holds across garments and formats.</p>
              <p><span>04</span> Edit until every decision earns its place.</p>
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <p className="eyebrow">Francesc Serrat / Xesco Serrat</p>
          <h2 id="about-title">Fashion Designer &amp;<br />Senior Fashion Graphic Designer.</h2>
          <div className="about-copy">
            <div className="about-definition">
              <p className="eyebrow">Professional definition</p>
              <p>Francesc Serrat is a Barcelona-based Fashion Designer and Senior Fashion Graphic Designer with approximately 16 years of experience in the fashion industry.</p>
            </div>
            <div className="about-background">
              <p className="eyebrow">Career background</p>
              <p>After more than 14 years at Desigual as a Fashion Graphic Designer, he joined Koroshi, where he has worked across three menswear seasons combining fashion design, garment development, fashion graphics, textile prints, accessories, technical specifications and production follow-up.</p>
            </div>
          </div>
          <div className="about-details">
            <section className="about-detail about-collaborators" aria-labelledby="collaborators-title">
              <h3 className="eyebrow" id="collaborators-title">Selected collaborators</h3>
              <p>Throughout his career, he has collaborated with fashion designers including Matteo Nocchi, Annelore Beemster, Estrella Archs, David Terroba, José Castro, Roser Loureiro, Alexis Reina, Adrián Platas, Thomas Meyer and Miranda Makaroff.</p>
            </section>
            <section className="about-detail about-expertise" aria-labelledby="expertise-title">
              <h3 className="eyebrow" id="expertise-title">Areas of expertise</h3>
              <p>His work connects product, graphics and visual identity—from garments, prints and typography to labels, patches, technical development and collection presentation.</p>
              <ul className="profile-capabilities" aria-label="Professional capabilities">
                <li>Fashion design &amp; menswear</li><li>Garment &amp; collection development</li><li>Fashion graphics &amp; textile prints</li><li>Typography, labels, patches &amp; branding</li><li>Technical specifications &amp; production follow-up</li><li>Art direction &amp; collection presentation</li>
              </ul>
            </section>
            <section className="about-detail about-contact" aria-labelledby="availability-title">
              <h3 className="eyebrow" id="availability-title">Availability &amp; contact</h3>
              <p>Available for Fashion Designer and Senior Fashion Graphic Designer opportunities.</p>
              <div><span>Barcelona, Spain</span><a href="mailto:xescoserrat@gmail.com">xescoserrat@gmail.com</a></div>
            </section>
          </div>
        </section>

        <footer id="contact" className="contact" aria-label="Contact">
          <p className="eyebrow">Let’s make the next thing matter</p>
          <a href="mailto:xescoserrat@gmail.com">xescoserrat@gmail.com</a>
          <div><span>© 2026 Xesco Serrat</span><a href="https://www.behance.net/xescoserrat">Behance</a><a href="https://www.instagram.com/xescoserrat">Instagram</a></div>
        </footer>
      </main>
    </>
  );
}
