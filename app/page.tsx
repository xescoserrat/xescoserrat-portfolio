import Link from "next/link";
import { MediaFrame } from "../components/media-frame";
import { SiteHeader } from "../components/site-header";
import { portfolioWorlds } from "../content/portfolio-worlds";
import { mediaInventory } from "../content/media-inventory";

const visualStream = mediaInventory.filter((item) => (
  item.publicationStatus === "published" && ["Koroshi", "Desigual", "Flasheros"].includes(item.brand)
));

const archiveDisciplines = [
  {
    title: "Fashion / Product Development",
    description: "Menswear design, product thinking, technical development and the detail that carries a collection into production.",
    links: [
      { label: "Koroshi / T-Shirts & Sleeveless", href: "/work/koroshi/t-shirts-sleeveless" },
      { label: "Koroshi / Knitwear", href: "/work/koroshi/knitwear" },
      { label: "Koroshi / Product Development", href: "/work/koroshi/product-development" },
    ],
  },
  {
    title: "Fashion Graphics / Textile Prints",
    description: "Graphic languages, typography, all-over print and product application built for placement and recognition.",
    links: [
      { label: "Koroshi / Fashion Graphics", href: "/work/koroshi/fashion-graphics" },
      { label: "Desigual / Man", href: "/work/desigual/man" },
      { label: "Desigual / Woman", href: "/work/desigual/woman" },
    ],
  },
  {
    title: "Photography / Personal Project",
    description: "A personal space for photography, visual experimentation, art direction and an early future-brand universe.",
    links: [{ label: "Flasheros", href: "/work/flasheros" }],
  },
  {
    title: "Independent Print Archive",
    description: "Two preserved print studies kept separate until their original brand or division can be verified with confidence.",
    links: [
      { label: "Fashion Prints", href: "/work/independent-print-archive" },
      { label: "Rapport Fashion Prints", href: "/work/independent-print-archive" },
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
            <p className="eyebrow">Portfolio / Three worlds</p>
            <h2 id="worlds-title">Start with the context.<br />Then go deeper.</h2>
          </div>
          <div className="worlds-grid">
            {portfolioWorlds.map((world, index) => (
              <article className={`world-card world-card--${index + 1}`} key={world.slug}>
                <Link className="world-card-image" href={world.href} aria-label={`Explore ${world.title}`}>
                  <MediaFrame media={world.cover} title={world.title} />
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
                <Link className="stream-image-link" href={item.proposedRoute} aria-label={`Explore ${item.brand}: ${item.category}`}>
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
              <p className="section-index">( 05 )</p>
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
            <p>Francesc Serrat is a Barcelona-based Fashion Designer and Senior Fashion Graphic Designer with approximately 16 years of experience in the fashion industry.</p>
            <p>His background combines fashion graphics, textile prints, typography and visual identity with menswear design, garment and collection development, fittings, measurements, technical specifications, tech packs and production follow-up.</p>
            <p>After more than 14 years as a Fashion Graphic Designer at Desigual across menswear, womenswear, kidswear and accessories, he joined Koroshi. There, he has worked for almost two years across three menswear seasons, developing collections from initial concept through graphics, fabric, colour, garment construction and final production.</p>
            <p>His profile connects creative direction, fashion graphics and product development—making him suited to both Fashion Designer and Senior Fashion Graphic Designer roles.</p>
          </div>
          <ul className="profile-capabilities" aria-label="Professional capabilities">
            <li>≈16 years in fashion</li><li>Fashion and menswear design</li><li>Garment and collection development</li><li>Fashion graphics, textile prints and all-over patterns</li><li>Typography, labels, patches and branding</li><li>Technical specifications and tech packs</li><li>Fittings, measurements and production follow-up</li><li>Art direction and visual identity</li>
          </ul>
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
