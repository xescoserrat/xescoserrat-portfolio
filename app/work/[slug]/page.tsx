import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "../../../components/media-frame";
import { getProject, projects } from "../../../content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    return project ? { title: `${project.title} — Xesco Serrat`, description: project.summary } : {};
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex(({ slug: currentSlug }) => currentSlug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main id="main-content">
      <header className="case-header">
        <Link className="wordmark" href="/" aria-label="Xesco Serrat, home">XS</Link>
        <Link className="header-link" href="/#work">All chapters</Link>
      </header>
      <section className="case-hero" aria-labelledby="case-title">
        <p className="eyebrow">{project.discipline} · {project.year}</p>
        <h1 id="case-title">{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <MediaFrame media={project.media[0]} title={project.title} priority />
      </section>
      <section className="case-introduction layout-grid" aria-labelledby="introduction-title">
        <p className="section-index">( Context )</p>
        <div>
          <p className="eyebrow">{project.role}</p>
          <h2 id="introduction-title">The work begins with a visual position—not a decoration.</h2>
          <p className="lede">{project.introduction}</p>
        </div>
      </section>
      <section className="case-gallery" aria-label={`${project.title} project imagery`}>
        {project.media.slice(1).map((media, index) => <MediaFrame key={media.src} media={media} title={`${project.title}, image ${index + 2}`} />)}
      </section>
      <section className="case-process layout-grid" aria-labelledby="case-process-title">
        <p className="section-index">( Design Process )</p>
        <div>
          <p className="eyebrow">How it thinks</p>
          <h2 id="case-process-title">System, tension, resolution.</h2>
          <p className="lede">{project.process}</p>
          <ul className="case-capabilities" aria-label="Capabilities demonstrated">
            {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </div>
      </section>
      <section className="case-outro">
        <a className="source-link" href={project.behanceUrl} target="_blank" rel="noreferrer">View original Behance project <span aria-hidden="true">↗</span></a>
        <Link className="next-project" href={`/work/${nextProject.slug}`}>
          <span className="eyebrow">Next chapter</span><strong>{nextProject.title}</strong><span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
