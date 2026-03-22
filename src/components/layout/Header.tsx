import { useState, type CSSProperties } from "react";
import logoMark from "../../assets/brand/bernoulli-logo.png";
import { useI18n } from "../../i18n/I18nProvider";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
	{ href: "#home", label: "Home" },
	{ href: "#projects", label: "Projects" },
	{ href: "#about", label: "About Us" },
	{ href: "#team", label: "Our team" },
	{ href: "#contact", label: "Contact" },
];

export default function Header({
	language,
	onLanguageChange,
	darkMode,
	onToggleDarkMode,
}) {
	const [open, setOpen] = useState(false);
	const { t } = useI18n();

	return (
		<>
			<header
				className="sticky top-0 z-50 border-b border-brand-secondary/10 bg-brand-surface/20 backdrop-blur-2xl dark:border-white/10"
				style={{ "--header-height": "4.5rem" } as CSSProperties}
			>
				<div className="mx-auto grid min-h-[var(--header-height)] max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:px-8 lg:px-10">
					<a
						href="#home"
						className="flex min-w-0 items-center gap-3 justify-self-start text-brand-secondary dark:text-brand-text"
					>
						<img
							src={logoMark}
							alt="Bernoulli Automation logo"
							className="h-10 w-10 shrink-0"
						/>
						<div className="hidden leading-none md:block">
							<p className="text-xs font-semibold tracking-[0.3em]">
								BERNOULLI
							</p>
							<p className="mt-1 text-[10px] font-medium tracking-[0.28em] text-brand-primary">
								AUTOMATION
							</p>
						</div>
					</a>

					<div className="hidden items-center justify-center gap-8 md:flex">
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-sm font-medium text-brand-muted transition hover:text-brand-secondary dark:hover:text-brand-text"
							>
								{t(link.label)}
							</a>
						))}
					</div>

					<div className="hidden items-center justify-self-end gap-5 md:flex">
						<LanguageToggle
							language={language}
							onToggle={onLanguageChange}
						/>
						<ThemeToggle
							darkMode={darkMode}
							onToggle={onToggleDarkMode}
						/>
					</div>

					<div className="col-start-3 flex items-center justify-self-end gap-4 md:hidden">
						<LanguageToggle
							language={language}
							onToggle={onLanguageChange}
							className="text-xs"
						/>
						<ThemeToggle
							darkMode={darkMode}
							onToggle={onToggleDarkMode}
						/>
						<button
							className="relative inline-flex h-8 w-8 items-center justify-center text-brand-secondary dark:text-brand-text"
							onClick={() => setOpen((prev) => !prev)}
							aria-label={t("Toggle menu")}
							aria-expanded={open}
						>
							<span
								className={`absolute h-[1.8px] w-6 rounded-full bg-current transition-all duration-300 ${
									open
										? "translate-y-0 rotate-45"
										: "-translate-y-[7px] rotate-0"
								}`}
							/>
							<span className="absolute flex w-6 items-center justify-center overflow-hidden">
								<span
									className={`h-[1.8px] w-1/2 rounded-full bg-current transition-transform duration-300 ${
										open
											? "origin-right scale-x-0"
											: "origin-right scale-x-100"
									}`}
								/>
								<span
									className={`h-[1.8px] w-1/2 rounded-full bg-current transition-transform duration-300 ${
										open
											? "origin-left scale-x-0"
											: "origin-left scale-x-100"
									}`}
								/>
							</span>
							<span
								className={`absolute h-[1.8px] w-6 rounded-full bg-current transition-all duration-300 ${
									open
										? "translate-y-0 -rotate-45"
										: "translate-y-[7px] rotate-0"
								}`}
							/>
						</button>
					</div>
				</div>
			</header>

			<div
				className={`fixed inset-0 z-40 bg-brand-surface transition-transform duration-500 dark:bg-brand-secondary md:hidden ${
					open
						? "origin-top scale-y-100"
						: "pointer-events-none origin-top scale-y-0"
				}`}
			>
				<nav className="flex h-full flex-col justify-center gap-8 px-10">
					{links.map((link, index) => (
						<a
							key={link.label}
							href={link.href}
							onClick={() => setOpen(false)}
							className={`text-3xl font-medium text-brand-secondary transition-all duration-500 dark:text-brand-text ${
								open
									? "translate-x-0 opacity-100"
									: "-translate-x-12 opacity-0"
							}`}
							style={{
								transitionDelay: open
									? `${index * 70 + 120}ms`
									: "0ms",
							}}
						>
							{t(link.label)}
						</a>
					))}
				</nav>
			</div>
		</>
	);
}
