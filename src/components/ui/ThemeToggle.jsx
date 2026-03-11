export default function ThemeToggle({ darkMode, onToggle, labels }) {
  return (
    <button onClick={onToggle} className="toggle-pill" aria-label={labels.toggleTheme}>
      {darkMode ? labels.light : labels.dark}
    </button>
  );
}
