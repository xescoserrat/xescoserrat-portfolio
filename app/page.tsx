import { MediaFrame } from "../components/media-frame";
import { projects } from "../content/projects";
import Link from "next/link";

const disciplines = [
  ["01", "Language", "Fashion graphics & typography"],
  ["02", "Surface", "Textile print & repeat"],
  ["03", "Form", "Menswear & womenswear"],
  ["04", "Direction", "Identity & creative exploration"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" tabIndex={-1}>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Xesco Serrat, home">XS</a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Chapters</a>
          <a href="#process">Process</a>
          <a className="header-link" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Barcelona · Senior Fashion Graphic Designer</p>
        <h1 id="hero-title">Visual language<br />for fashion.</h1>
        <div className="hero-detail">
          <p>Graphics, surface, silhouette and identity—built with a point of view.</p>
          <span className="scroll-cue" aria-hidden="true">Scroll to enter</span>
        </div>
      </section>

      <section className="statement layout-grid" aria-labelledby="statement-title">
        <p className="section-index">( 01 )</p>
        <div>
          <h2 id="statement-title">Fashion is a moving image.<br />Every mark needs a reason.</h2>
          <p className="lede">A fifteen-year practice in building graphic systems that feel native to the garment, the collection and the cultural moment.</p>
        </div>
      </section>

      <section className="chapter-intro" aria-labelledby="discipline-title">
        <p className="eyebrow">The practice</p>
        <h2 id="discipline-title">Four disciplines.<br />One visual universe.</h2>
        <div className="discipline-list">
          {disciplines.map(([number, title, description]) => (
            <article className="discipline" key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-sequence" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected chapters</p>
          <h2 id="work-title">Not a gallery.<br />A way of seeing.</h2>
        </div>
        {projects.map((project, index) => (
          <article className={`project project-${index + 1}`} key={project.slug}>
            <div className="project-copy">
              <p className="project-number">{String(index + 1).padStart(2, "0")}</p>
              <p className="project-discipline">{project.discipline}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul aria-label={`${project.title} capabilities`}>
                {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
              <Link className="project-link" href={`/work/${project.slug}`}>View case study <span aria-hidden="true">↗</span></Link>
            </div>
            <Link className="project-media-link" href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
              <MediaFrame media={project.media[0]} title={project.title} priority={index === 0} />
            </Link>
          </article>
        ))}
      </section>

      <section className="process layout-grid" id="process" aria-labelledby="process-title">
        <p className="section-index">( 02 )</p>
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
