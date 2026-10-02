export function AboutContent() {
  return (
    <section className="bio-page-content" aria-labelledby="about-title">
      <header className="bio-intro">
        <figure className="bio-photo">
          <img src="/images/profile/francesc-serrat.jpg" alt="Francesc Serrat" width="400" height="392" />
        </figure>
        <div>
          <p className="eyebrow">Francesc Serrat / Barcelona</p>
          <h1 id="about-title">Francesc Serrat</h1>
          <p className="bio-role">Fashion Designer &amp; Senior Fashion Graphic Designer</p>
          <p className="bio-statement">Barcelona-based Fashion Designer and Senior Fashion Graphic Designer with approximately 16 years of experience connecting product, graphics and visual identity.</p>
        </div>
      </header>

      <div className="bio-grid">
        <section className="bio-section" aria-labelledby="background-title">
          <h2 className="eyebrow" id="background-title">Career background</h2>
          <p>After more than 14 years at Desigual as a Fashion Graphic Designer, he joined Koroshi, where he has worked across three menswear seasons combining fashion design, garment development, fashion graphics, textile prints, accessories, technical specifications and production follow-up.</p>
        </section>
        <section className="bio-section" aria-labelledby="expertise-title">
          <h2 className="eyebrow" id="expertise-title">Areas of expertise</h2>
          <p>From garments, prints and typography to labels, patches, technical development and collection presentation.</p>
          <ul className="bio-capabilities" aria-label="Professional capabilities">
            <li>Fashion design &amp; menswear</li><li>Garment &amp; collection development</li><li>Fashion graphics &amp; textile prints</li><li>Typography, labels, patches &amp; branding</li><li>Technical specifications &amp; production follow-up</li><li>Art direction &amp; collection presentation</li>
          </ul>
        </section>
        <section className="bio-section bio-section--wide" aria-labelledby="collaborators-title">
          <h2 className="eyebrow" id="collaborators-title">Selected collaborators</h2>
          <p>Has collaborated with fashion designers including Matteo Nocchi, Annelore Beemster, Estrella Archs, David Terroba, José Castro, Roser Loureiro, Alexis Reina, Adrián Platas, Thomas Meyer and Miranda Makaroff.</p>
        </section>
        <section className="bio-section bio-availability" aria-labelledby="availability-title">
          <h2 className="eyebrow" id="availability-title">Availability &amp; contact</h2>
          <p>Available for Fashion Designer and Senior Fashion Graphic Designer opportunities.</p>
          <a href="mailto:xescoserrat@gmail.com">xescoserrat@gmail.com</a>
        </section>
      </div>
    </section>
  );
}
