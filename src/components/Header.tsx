import { useState } from "react";

const links = [
	{ href: "#home", key: "home" },
	{ href: "#projects", key: "projects" },
	{ href: "#about", key: "about" },
	{ href: "#contact", key: "contact" },
];

export default function Header({
	t,
	language,
	onLanguageChange,
	darkMode,
	onToggleDarkMode,
}) {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-brand-muted/20 bg-brand-surface/95 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<a
					href="#home"
					className="font-semibold tracking-tight text-brand-primary"
				>
					Bernoulli Automation
				</a>
				<button
					className="rounded p-2 md:hidden"
					onClick={() => setOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					☰
				</button>
				<nav className="hidden items-center gap-6 md:flex">
					{links.map((link) => (
						<a
							key={link.key}
							href={link.href}
							className="text-sm text-brand-muted hover:text-brand-primary"
						>
							{t.nav[link.key]}
						</a>
					))}
					<button
						className="rounded-lg border px-2 py-1 text-xs"
						onClick={onLanguageChange}
					>
						{language.toUpperCase()}
					</button>
					<button
						className="rounded-lg border px-2 py-1 text-xs"
						onClick={onToggleDarkMode}
					>
						{darkMode ? "Light" : "Dark"}
					</button>
				</nav>
			</div>
			{open && (
				<nav className="space-y-2 border-t border-brand-muted/20 px-4 py-3 md:hidden">
					{links.map((link) => (
						<a
							key={link.key}
							href={link.href}
							className="block text-sm text-brand-muted"
							onClick={() => setOpen(false)}
						>
							{t.nav[link.key]}
						</a>
					))}
					<div className="flex gap-2">
						<button
							className="rounded-lg border px-2 py-1 text-xs"
							onClick={onLanguageChange}
						>
							{language.toUpperCase()}
						</button>
						<button
							className="rounded-lg border px-2 py-1 text-xs"
							onClick={onToggleDarkMode}
						>
							{darkMode ? "Light" : "Dark"}
						</button>
					</div>
				</nav>
			)}
		</header>
	);
}
