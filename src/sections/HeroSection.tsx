import heroBackground from "../assets/projects/hero_bg.webp";
import { useI18n } from "../i18n/I18nProvider";

const highlights = [
	"Fast visual reading",
	"Safety-focused workflows",
	"Real-world engineering reliability",
];

export default function HeroSection() {
	const { t } = useI18n();

	return (
		<section
			id="home"
			className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
		>
			<img
				src={heroBackground}
				alt=""
				aria-hidden="true"
				className="absolute inset-0 -z-30 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 -z-20 bg-brand-secondary/45" />
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,hsl(var(--color-secondary)/0.78)_8%,hsl(var(--color-secondary)/0.42)_40%,hsl(var(--color-secondary)/0.2)_68%,hsl(var(--color-secondary)/0.58)_100%)]" />

			<div className="mx-auto w-full max-w-6xl px-4 py-24 text-white sm:px-6 lg:px-8">
				<div className="bg-brand-surface/18 max-w-3xl rounded-[2rem] border border-white/20 p-8 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
					<p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
						{t("Fluid automation engineering + software")}
					</p>
					<h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
						{t(
							"Industrial fluid control that feels simple, fast, and safe.",
						)}
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
						{t(
							"Bernoulli Automation designs digital control systems for complex plants, with a user experience that keeps operators confident from first glance.",
						)}
					</p>
					<ul className="mt-6 space-y-2.5">
						{highlights.map((highlight) => (
							<li
								key={highlight}
								className="flex items-center gap-2.5 text-sm font-medium"
							>
								<span className="h-2.5 w-2.5 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(118,165,164,0.8)]" />
								{t(highlight)}
							</li>
						))}
					</ul>
					<div className="mt-9 flex flex-wrap gap-3">
						<a href="#contact" className="btn-primary">
							{t("Book a discovery call")}
						</a>
						<a href="#projects" className="btn-secondary">
							{t("See project cases")}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
