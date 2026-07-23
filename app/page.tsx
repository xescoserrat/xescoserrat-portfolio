import Link from "next/link";
import { MediaFrame } from "../components/media-frame";
import { projects } from "../content/projects";

const visualStream = projects.flatMap((project) => project.media.map((media, imageIndex) => ({
  project,
  media,
  imageIndex,
})));

const archiveDisciplines = [
  ["Fashion Graphics & Typography", "Graphic languages built for product, placement and recognition.", ["koroshi-ss-aw", "man-designs-desigual", "woman-designs-desigual"]],
  ["Surface / Textile Prints", "Print, repeat, colour and texture as visual atmosphere.", ["fashion-prints", "rapport-fashion-prints"]],
  ["Form / Fashion", "Menswear and womenswear considered through the body, silhouette and movement.", ["koroshi-ss-aw", "man-designs-desigual", "woman-designs-desigual"]],
  ["Direction / Identity and Art Direction", "A point of view that moves from a first graphic decision to a complete visual world.", ["flasheros"]],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" tabIndex={-1}>
        <header className="site-header site-header--archive" id="top">
          <a href="#top" className="wordmark" aria-label="Xesco Serrat, home">XS</a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Selected work</a>
            <a href="#archive">Archive</a>
            <a href="#process">Process</a>
            <a className="header-link" href="#contact">Contact</a>
          </nav>
        </header>

        <section className="archive-intro" aria-labelledby="intro-title">
          <p className="eyebrow">Francesc Serrat / Barcelona</p>
          <h1 id="intro-title">Senior Fashion<br />Graphic Designer</h1>
          <p>Fashion Graphics · Textile Prints · Fashion · Identity · Art Direction</p>
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

        <section className="about" aria-labelledby="about-title">
          <p className="eyebrow">Francesc Serrat / Xesco Serrat</p>
          <h2 id="about-title">Senior Fashion Graphic Designer.<br />Barcelona, Spain.</h2>
          <p>From textile print to art direction, I create visual worlds for fashion brands that want to be recognised—not merely seen.</p>
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
