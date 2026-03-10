export default function LanguageToggle({ language, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="rounded-full border border-white/40 bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-text transition hover:scale-[1.02] dark:border-white/20 dark:bg-white/10 dark:text-white"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  );
}
