import heroFluid from '../assets/illustrations/hero-fluid.svg';

export default function HeroSection({ hero }) {
  return (
    <section id="home" className="section relative overflow-hidden pb-24 pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,hsl(var(--color-primary)/0.22),transparent_38%),radial-gradient(circle_at_85%_0%,hsl(var(--color-secondary)/0.15),transparent_35%)]" />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-brand-primary/25 bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
            {hero.badge}
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-brand-secondary sm:text-6xl dark:text-brand-text">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">{hero.description}</p>
          <ul className="mt-6 space-y-2.5">
            {hero.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2.5 text-sm font-medium text-brand-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              {hero.ctaPrimary}
            </a>
            <a href="#projects" className="btn-secondary">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <img
          src={heroFluid}
          alt="Fluid automation dashboard concept"
          className="panel w-full rounded-[2rem] border-brand-secondary/10 p-2"
        />
      </div>
    </section>
  );
}
