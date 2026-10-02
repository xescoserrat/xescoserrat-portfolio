export function AboutContent() {
  return (
    <section className="about-page-content" aria-labelledby="about-title">
      <p className="eyebrow">Francesc Serrat / Barcelona</p>
      <h1 id="about-title">Fashion Designer &amp;<br />Senior Fashion Graphic Designer.</h1>
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
          <h2 className="eyebrow" id="collaborators-title">Selected collaborators</h2>
          <p>Throughout his career, he has collaborated with fashion designers including Matteo Nocchi, Annelore Beemster, Estrella Archs, David Terroba, José Castro, Roser Loureiro, Alexis Reina, Adrián Platas, Thomas Meyer and Miranda Makaroff.</p>
        </section>
        <section className="about-detail about-expertise" aria-labelledby="expertise-title">
          <h2 className="eyebrow" id="expertise-title">Areas of expertise</h2>
          <p>His work connects product, graphics and visual identity—from garments, prints and typography to labels, patches, technical development and collection presentation.</p>
          <ul className="profile-capabilities" aria-label="Professional capabilities">
            <li>Fashion design &amp; menswear</li><li>Garment &amp; collection development</li><li>Fashion graphics &amp; textile prints</li><li>Typography, labels, patches &amp; branding</li><li>Technical specifications &amp; production follow-up</li><li>Art direction &amp; collection presentation</li>
          </ul>
        </section>
        <section className="about-detail about-contact" aria-labelledby="availability-title">
          <h2 className="eyebrow" id="availability-title">Availability &amp; contact</h2>
          <p>Available for Fashion Designer and Senior Fashion Graphic Designer opportunities.</p>
          <div><span>Barcelona, Spain</span><a href="mailto:xescoserrat@gmail.com">xescoserrat@gmail.com</a></div>
        </section>
      </div>
    </section>
  );
}
