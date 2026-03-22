import dashboardImage from "../assets/projects/adblue-monitoring.webp";
import fillingStationImage from "../assets/projects/filling-station.webp";
import {
	FiActivity,
	FiAlertTriangle,
	FiBarChart2,
	FiEdit3,
	FiEye,
	FiGitMerge,
	FiShield,
	FiTool,
} from "react-icons/fi";
import SectionTitle from "../components/ui/SectionTitle";
import { useI18n } from "../i18n/I18nProvider";

const problems = [
	{
		title: "Limited visibility over production",
		description:
			"Teams struggle to see what is happening across the process in a clear, actionable way.",
		icon: FiEye,
	},
	{
		title: "No real-time alerts or monitoring",
		description:
			"Critical events arrive too late, which slows reaction time when the process drifts.",
		icon: FiAlertTriangle,
	},
	{
		title: "Difficult integrations with modern tools",
		description:
			"Legacy systems often stay isolated from reporting, analytics, and business platforms.",
		icon: FiGitMerge,
	},
	{
		title: "Hard to maintain and evolve",
		description:
			"Without structure, every small change becomes slower, riskier, and harder to validate.",
		icon: FiEdit3,
	},
];

const improvements = [
	"Improve PLC and HMI structure",
	"Add real-time monitoring and alerts",
	"Build dashboards and reports",
	"Enable integrations with modern tools",
	"Support remote access",
];

const results = [
	{
		title: "Clear visibility",
		icon: FiBarChart2,
	},
	{
		title: "Faster response to issues",
		icon: FiActivity,
	},
	{
		title: "More reliable processes",
		icon: FiShield,
	},
	{
		title: "Easier to maintain and evolve",
		icon: FiTool,
	},
];

export default function AboutSection() {
	const { t } = useI18n();

	return (
		<section id="about" className="section space-y-20">
			<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<SectionTitle
						title={t(
							"We Are a Software Company Specialized in Industrial Automation",
						)}
						subtitle={t(
							"We develop and improve software for PLC and HMI systems, giving you more visibility, reliability and control over your processes.",
						)}
					/>
				</div>
				<div className="panel overflow-hidden rounded-[2rem] p-0">
					<img
						src={fillingStationImage}
						alt={t(
							"Industrial control interface and field operation overview",
						)}
						className="h-full min-h-[320px] w-full object-cover"
					/>
				</div>
			</div>

			<div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
				<div className="max-w-xl">
					<p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary">
						{t("The Problem")}
					</p>
					<h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
						{t("Most Systems Work - But That's Not Enough")}
					</h3>
					<p className="mt-4 text-base leading-7 text-brand-muted">
						{t(
							"Industrial systems are built to work - but not to scale, integrate or provide real insight.",
						)}
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{problems.map((problem) => (
						<article
							key={problem.title}
							className="panel rounded-3xl p-6"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
								<problem.icon className="h-6 w-6" aria-hidden="true" />
							</div>
							<h4 className="mt-5 text-lg font-semibold text-brand-secondary dark:text-brand-text">
								{t(problem.title)}
							</h4>
							<p className="mt-3 text-sm leading-6 text-brand-muted">
								{t(problem.description)}
							</p>
						</article>
					))}
				</div>
			</div>

			<div className="panel rounded-[2rem] p-8 sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary">
					{t("What We Do")}
				</p>
				<div className="mt-4 max-w-4xl">
					<h3 className="text-3xl font-bold tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
						{t("We Enhance What Already Works")}
					</h3>
					<p className="mt-4 max-w-3xl text-base leading-7 text-brand-muted">
						{t(
							"We improve existing systems with better structure, monitoring, dashboards, alerts and integrations.",
						)}
					</p>
				</div>
				<div className="mt-8 rounded-3xl border border-brand-primary/20 bg-brand-primary/10 px-6 py-8 text-center">
					<p className="text-2xl font-semibold tracking-tight text-brand-secondary dark:text-brand-text sm:text-3xl">
						{t("We don't replace your system - we make it better.")}
					</p>
				</div>
			</div>

			<div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary">
						{t("How We Do It")}
					</p>
					<h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
						{t("How We Improve Your System")}
					</h3>
					<ul className="mt-8 space-y-4">
						{improvements.map((item, index) => (
							<li
								key={item}
								className="panel flex items-start gap-4 rounded-3xl p-5"
							>
								<span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-semibold text-white dark:bg-brand-primary">
									{index + 1}
								</span>
								<p className="text-base font-medium text-brand-secondary dark:text-brand-text">
									{t(item)}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div className="panel overflow-hidden rounded-[2rem] p-0">
					<img
						src={dashboardImage}
						alt={t(
							"Industrial analytics dashboard and monitoring interface",
						)}
						className="h-full min-h-[420px] w-full object-cover"
					/>
				</div>
			</div>

			<div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary">
						{t("The Result")}
					</p>
					<h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
						{t("A system you can trust, understand and control.")}
					</h3>
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{results.map((result) => (
						<div
							key={result.title}
							className="panel rounded-3xl p-6"
						>
							<div className="flex items-center gap-3 text-brand-primary">
								<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary/10">
									<result.icon className="h-5 w-5" aria-hidden="true" />
								</div>
								<p className="text-base font-semibold text-brand-secondary dark:text-brand-text">
									{t(result.title)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="grid gap-6 rounded-[2rem] bg-brand-secondary px-8 py-12 text-white shadow-soft sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end">
				<div className="max-w-3xl">
					<p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary">
						{t("Positioning")}
					</p>
					<h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
						{t("Bridging Automation and Software")}
					</h3>
					<p className="text-white/72 mt-4 text-base leading-7">
						{t(
							"We bring modern software engineering into industrial environments.",
						)}
					</p>
				</div>
				<div className="text-left text-sm uppercase tracking-[0.3em] text-white/45 lg:text-right">
					Bernoulli
				</div>
			</div>

			<div className="rounded-[2rem] border border-brand-primary/15 bg-[linear-gradient(135deg,hsl(var(--color-primary)/0.16),hsl(var(--color-secondary)/0.08))] px-6 py-14 text-center shadow-soft sm:px-10">
				<p className="mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl lg:text-5xl">
					{t("Working is not the same as being under control.")}
				</p>
			</div>
		</section>
	);
}
