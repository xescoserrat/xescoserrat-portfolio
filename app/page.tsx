import Link from "next/link";
import { MediaFrame } from "../components/media-frame";
import { SiteHeader } from "../components/site-header";
import { projects } from "../content/projects";

const visualStream = projects.flatMap((project) => project.media.map((media, imageIndex) => ({
  project,
  media,
  imageIndex,
})));

const archiveDisciplines = [
  ["Fashion Graphics & Typography", "Graphic languages, typography, labels and patches built for product, placement and recognition.", ["koroshi-ss-aw", "man-designs-desigual", "woman-designs-desigual"]],
  ["Surface / Textile Prints", "Textile prints, all-over patterns, repeat, colour and texture as visual atmosphere.", ["fashion-prints", "rapport-fashion-prints"]],
  ["Form / Fashion", "Fashion design, menswear, garment development and collection thinking through the body, silhouette and movement.", ["koroshi-ss-aw", "man-designs-desigual", "woman-designs-desigual"]],
  ["Photography / Personal Project", "A personal space for photography, visual experimentation, art direction and an early brand universe.", ["flasheros"]],
] as const;

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

        <section className="visual-stream" id="work" aria-labelledby="work-title">
          <div className="stream-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">An archive of images,<br />systems and garments.</h2>
          </div>
          <div className="stream-grid">
            {visualStream.map(({ project, media, imageIndex }, index) => (
              <article className={`stream-item stream-item--${(index % 9) + 1}`} key={`${project.slug}-${media.src}`}>
                <Link className="stream-image-link" href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                  <MediaFrame media={media} title={project.title} priority={index < 2} />
                  <span className="stream-view" aria-hidden="true">View project ↗</span>
                </Link>
                <div className="stream-caption">
                  <p>{project.title}</p>
                  <span>{project.discipline} · {project.year} · {String(imageIndex + 1).padStart(2, "0")}</span>
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
            {archiveDisciplines.map(([title, description, slugs], index) => (
              <article className="archive-discipline" key={title}>
                <p className="section-index">( 0{index + 1} )</p>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ul>
                  {slugs.map((slug) => {
                    const project = projects.find((item) => item.slug === slug);
                    return project ? <li key={`${title}-${slug}`}><Link href={`/work/${slug}`}>{project.title} <span aria-hidden="true">↗</span></Link></li> : null;
                  })}
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
            <p>Francesc Serrat is a Barcelona-based Fashion Designer and Senior Fashion Graphic Designer with more than 14 years of experience in the fashion industry.</p>
            <p>His background combines fashion graphics, textile prints, typography and visual identity with menswear design, garment and collection development, fittings, measurements, technical specifications, tech packs and production follow-up.</p>
            <p>He currently works as a Fashion Designer at Koroshi, developing menswear collections from initial concept through graphics, fabrics, colour, garment construction and final production. Previously, he developed extensive experience as a Fashion Graphic Designer at Desigual across menswear, womenswear, kidswear and accessories.</p>
            <p>His profile connects creative direction, fashion graphics and product development—making him suited to both Fashion Designer and Senior Fashion Graphic Designer roles.</p>
          </div>
          <ul className="profile-capabilities" aria-label="Professional capabilities">
            <li>14+ years in fashion</li><li>Fashion and menswear design</li><li>Garment and collection development</li><li>Fashion graphics, textile prints and all-over patterns</li><li>Typography, labels, patches and branding</li><li>Technical specifications and tech packs</li><li>Fittings, measurements and production follow-up</li><li>Art direction and visual identity</li>
          </ul>
        </section>

        <footer id="contact" className="contact" aria-label="Contact">
          <p className="eyebrow">Let’s make the next thing matter</p>
          <a href="mailto:hello@xescoserrat.com">hello@xescoserrat.com</a>
          <div><span>© 2026 Xesco Serrat</span><a href="https://www.behance.net/xescoserrat">Behance</a><a href="https://www.instagram.com/xescoserrat">Instagram</a></div>
        </footer>
      </main>
    </>
  );
}
