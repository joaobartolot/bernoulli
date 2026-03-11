export default function LanguageToggle({ language, onToggle, className = '' }) {
  return (
    <button
      onClick={onToggle}
      className={`text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary transition hover:text-brand-primary dark:text-brand-text dark:hover:text-brand-primary ${className}`}
      aria-label="Toggle language"
    >
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  );
}
