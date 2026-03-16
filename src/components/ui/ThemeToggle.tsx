import { useI18n } from "../../i18n/I18nProvider";

function SunIcon({ className = "" }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			className={className}
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2.75v2.5M12 18.75v2.5M4.75 12h-2.5M21.75 12h-2.5M5.8 5.8l-1.76-1.77M19.96 19.96l-1.77-1.76M5.8 18.2l-1.76 1.76M19.96 4.04 18.2 5.8"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function MoonIcon({ className = "" }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			className={className}
			aria-hidden="true"
		>
			<path
				d="M18.95 14.15A7.7 7.7 0 0 1 9.85 5.05 8.25 8.25 0 1 0 18.95 14.15Z"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default function ThemeToggle({ darkMode, onToggle, className = "" }) {
	const { t } = useI18n();

	return (
		<button
			onClick={onToggle}
			className={`inline-flex items-center justify-center text-brand-secondary transition hover:text-brand-primary dark:text-brand-text dark:hover:text-brand-primary ${className}`}
			aria-label={t("Toggle theme")}
			title={darkMode ? t("Light") : t("Dark")}
		>
			{darkMode ? (
				<SunIcon className="h-5 w-5" />
			) : (
				<MoonIcon className="h-5 w-5" />
			)}
		</button>
	);
}
