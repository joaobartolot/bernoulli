import logoMark from '../assets/brand/bernoulli-logo-mark.svg';

export default function FooterSection({ footer }) {
  return (
    <footer className="border-t border-brand-secondary/10 bg-brand-surface/80 dark:border-white/10">
      <div className="section flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="Bernoulli logo mark" className="h-8 w-8 opacity-90" />
          <div>
            <p className="text-sm font-semibold text-brand-muted">{footer.slogan}</p>
            <p className="mt-1 text-xs text-brand-muted/90">© {new Date().getFullYear()} Bernoulli Automation. {footer.rights}</p>
          </div>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="text-brand-muted transition hover:text-brand-secondary dark:hover:text-brand-primary">LinkedIn</a>
          <a href="#" className="text-brand-muted transition hover:text-brand-secondary dark:hover:text-brand-primary">Instagram</a>
          <a href="#" className="text-brand-muted transition hover:text-brand-secondary dark:hover:text-brand-primary">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
