import { useState } from 'react';
import logoMark from '../../assets/brand/bernoulli-logo-mark.svg';
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
    <header className="sticky top-0 z-50 border-b border-brand-secondary/10 bg-brand-surface/80 backdrop-blur-2xl dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-brand-secondary dark:text-brand-text">
          <img src={logoMark} alt="Bernoulli Automation logo" className="h-10 w-10" />
          <div className="leading-none">
            <p className="text-xs font-semibold tracking-[0.3em]">BERNOULLI</p>
            <p className="mt-1 text-[10px] font-medium tracking-[0.28em] text-brand-primary">AUTOMATION</p>
          </div>
        </a>

        <button className="rounded-lg px-2 py-1 text-brand-secondary md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label={t.accessibility.toggleMenu}>
          ☰
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.key} href={link.href} className="text-sm font-medium text-brand-muted transition hover:text-brand-secondary">
              {t.nav[link.key]}
            </a>
          ))}
          <LanguageToggle language={language} onToggle={onLanguageChange} />
          <ThemeToggle darkMode={darkMode} onToggle={onToggleDarkMode} labels={t.theme} />
        </nav>
      </div>

      {open && (
        <nav className="space-y-3 border-t border-brand-secondary/10 px-4 py-4 md:hidden dark:border-white/10">
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
