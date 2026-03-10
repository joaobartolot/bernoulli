import heroFluid from '../assets/illustrations/hero-fluid.svg';

export default function HeroSection({ hero }) {
  return (
    <section id="home" className="section relative overflow-hidden pb-20 pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--color-primary)/0.2),transparent_40%),radial-gradient(circle_at_80%_0%,hsl(var(--color-accent)/0.23),transparent_35%)]" />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
            {hero.badge}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">{hero.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">{hero.description}</p>
          <ul className="mt-6 space-y-2">
            {hero.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-brand-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 transition hover:-translate-y-0.5">
              {hero.ctaPrimary}
            </a>
            <a href="#projects" className="rounded-2xl border border-brand-muted/30 bg-white/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <img src={heroFluid} alt="Fluid automation dashboard concept" className="w-full rounded-[2rem] border border-white/40 shadow-soft dark:border-white/10" />
      </div>
    </section>
  );
}
