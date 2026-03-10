import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import { content } from './data/content';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const t = useMemo(() => content[language], [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log('Mock contact request:', payload);
    event.currentTarget.reset();
  };

  return (
    <div>
      <Header
        t={t}
        language={language}
        onLanguageChange={() => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <section id="home" className="section grid gap-8 pb-24 pt-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-brand-primary/10 px-3 py-1 text-sm text-brand-primary">{t.hero.tag}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t.hero.title}</h1>
            <p className="mt-5 text-lg text-brand-muted">{t.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-brand-primary px-5 py-3 text-sm font-medium text-white">{t.hero.ctaPrimary}</a>
              <a href="#projects" className="rounded-xl border border-brand-muted/30 px-5 py-3 text-sm font-medium">{t.hero.ctaSecondary}</a>
            </div>
          </div>
          <img
            className="h-72 w-full rounded-3xl object-cover shadow-soft sm:h-96"
            src="https://images.unsplash.com/photo-1581093588401-16ec44a8df5a?auto=format&fit=crop&w=1400&q=80"
            alt="Industrial fluid automation interface"
          />
        </section>

        <section id="projects" className="section">
          <SectionTitle title={t.projects.title} />
          <div className="grid gap-6 md:grid-cols-3">
            {t.projects.items.map((project) => (
              <article key={project.title} className="card overflow-hidden">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-brand-muted">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle title={t.about.title} subtitle={t.about.description} />
          <div className="card p-6">
            <ul className="space-y-3">
              {t.about.team.map((member) => (
                <li key={member} className="rounded-xl bg-brand-secondary p-4 text-sm sm:text-base">{member}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <SectionTitle title={t.contact.title} subtitle={t.contact.description} />
          <form onSubmit={handleSubmit} className="card grid gap-4 p-6">
            <input name="name" required placeholder={t.contact.name} className="rounded-xl border border-brand-muted/30 bg-transparent px-4 py-3" />
            <input name="email" type="email" required placeholder={t.contact.email} className="rounded-xl border border-brand-muted/30 bg-transparent px-4 py-3" />
            <textarea name="message" required rows="5" placeholder={t.contact.message} className="rounded-xl border border-brand-muted/30 bg-transparent px-4 py-3" />
            <button type="submit" className="w-fit rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white">{t.contact.submit}</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-brand-muted/20 bg-brand-surface">
        <div className="section flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-muted">© {new Date().getFullYear()} Bernoulli Automation. {t.footer.rights}</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-brand-muted hover:text-brand-primary">LinkedIn</a>
            <a href="#" className="text-brand-muted hover:text-brand-primary">Instagram</a>
            <a href="#" className="text-brand-muted hover:text-brand-primary">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
