export default function LanguageToggle({ language, onToggle }) {
  return (
    <button onClick={onToggle} className="toggle-pill" aria-label="Toggle language">
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  );
}
