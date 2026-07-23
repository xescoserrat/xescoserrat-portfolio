import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { MediaGallery } from "../../../components/media-gallery";
import { SiteHeader } from "../../../components/site-header";
import { getProject, projects } from "../../../content/projects";

type Props = { params: Promise<{ slug: string }> };

function legacyContext(slug: string, title: string) {
  if (slug === "koroshi-ss-aw") {
    return {
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: title }],
      parentHref: "/work/koroshi",
      parentLabel: "Explore Koroshi",
    };
  }
  if (slug === "man-designs-desigual") {
    return {
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Desigual", href: "/work/desigual" }, { label: "Man", href: "/work/desigual/man" }, { label: title }],
      parentHref: "/work/desigual/man",
      parentLabel: "Explore Desigual Man",
    };
  }
  if (slug === "woman-designs-desigual") {
    return {
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Desigual", href: "/work/desigual" }, { label: "Woman", href: "/work/desigual/woman" }, { label: title }],
      parentHref: "/work/desigual/woman",
      parentLabel: "Explore Desigual Woman",
    };
  }
  if (slug === "fashion-prints" || slug === "rapport-fashion-prints") {
    return {
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Archive", href: "/#archive" }, { label: "Independent Print Archive", href: "/work/independent-print-archive" }, { label: title }],
      parentHref: "/work/independent-print-archive",
      parentLabel: "Explore Independent Print Archive",
    };
  }
  return {
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Flasheros" }],
    parentHref: "/",
    parentLabel: "Return home",
  };
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    if (!project) return {};

    const title = `${project.title} — Francesc Serrat, Fashion Designer & Senior Fashion Graphic Designer`;
    return {
      title,
      description: project.summary,
      alternates: { canonical: `/work/${project.slug}/` },
      openGraph: {
        title,
        description: project.summary,
        url: `/work/${project.slug}/`,
        type: "article",
      },
      twitter: {
        card: "summary",
        title,
        description: project.summary,
      },
    };
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const context = legacyContext(slug, project.title);

  return (
    <>
      <a className="skip-link" href="#case-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
      <section className="case-hero" id="case-content" tabIndex={-1} aria-labelledby="case-title">
        <Breadcrumbs items={context.breadcrumbs} />
        <p className="eyebrow">{project.discipline} · {project.year}</p>
        <h1 id="case-title">{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <MediaGallery className="case-hero-media" media={[project.media[0]]} title={project.title} priority />
      </section>
      <section className="case-introduction layout-grid" aria-labelledby="introduction-title">
        <p className="section-index">( Context )</p>
        <div>
          <p className="eyebrow">{project.role}</p>
          <h2 id="introduction-title">The work begins with a visual position—not a decoration.</h2>
          <p className="lede">{project.introduction}</p>
        </div>
      </section>
      {project.media.length > 1 ? <MediaGallery className="case-gallery" media={project.media.slice(1)} title={project.title} /> : null}
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
        <nav className="case-project-nav" aria-label="Case-study navigation">
          <Link className="next-project" href={context.parentHref}>
            <span className="eyebrow">Return to context</span><strong>{context.parentLabel}</strong><span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </section>
      </main>
    </>
  );
}
