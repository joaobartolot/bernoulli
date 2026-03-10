import { useState } from 'react';
import LanguageToggle from '../ui/LanguageToggle';
import ThemeToggle from '../ui/ThemeToggle';

const links = [
  { href: '#home', key: 'home' },
  { href: '#projects', key: 'projects' },
  { href: '#about', key: 'about' },
  { href: '#contact', key: 'contact' }
];

export default function Header({ t, language, onLanguageChange, darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-brand-secondary/80 backdrop-blur-xl dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-sm font-black tracking-wider text-brand-primary sm:text-base">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-accent" />
          BERNOULLI AUTOMATION
        </a>

        <button className="rounded-lg px-2 py-1 md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label={t.accessibility.toggleMenu}>
          ☰
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.key} href={link.href} className="text-sm font-medium text-brand-muted transition hover:text-brand-primary">
              {t.nav[link.key]}
            </a>
          ))}
          <LanguageToggle language={language} onToggle={onLanguageChange} />
          <ThemeToggle darkMode={darkMode} onToggle={onToggleDarkMode} labels={t.theme} />
        </nav>
      </div>

      {open && (
        <nav className="space-y-3 border-t border-white/20 px-4 py-3 md:hidden dark:border-white/10">
          {links.map((link) => (
            <a key={link.key} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-brand-muted">
              {t.nav[link.key]}
            </a>
          ))}
          <div className="flex gap-2">
            <LanguageToggle language={language} onToggle={onLanguageChange} />
            <ThemeToggle darkMode={darkMode} onToggle={onToggleDarkMode} labels={t.theme} />
          </div>
        </nav>
      )}
    </header>
  );
}
