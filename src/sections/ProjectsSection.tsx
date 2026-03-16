import { twMerge } from "tailwind-merge";
import adblueMonitoring from "../assets/projects/adblue-monitoring.webp";
import fillingStation from "../assets/projects/filling-station.webp";
import SectionTitle from "../components/ui/SectionTitle";
import { useI18n } from "../i18n/I18nProvider";

function ProjectItem({
	eyebrow,
	title,
	description,
	imageSrc,
	imageAlt,
	reverse = false,
}: {
	eyebrow: string;
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	reverse?: boolean;
}) {
	const { t } = useI18n();

	return (
		<div
			className={twMerge(
				"flex w-full flex-col bg-black/10 md:min-h-96 md:flex-row",
				reverse && "md:flex-row-reverse",
			)}
		>
			<div className="md:w-1/2">
				<img
					src={imageSrc}
					alt={t(imageAlt)}
					className={twMerge(
						"block aspect-video w-full object-cover md:aspect-square",
						reverse
							? "translate-x-8 md:translate-y-8"
							: "-translate-x-8 -translate-y-8",
					)}
				/>
			</div>

			<div className="flex items-center px-12 py-8 md:w-1/2">
				<div className="flex flex-col">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
						{t(eyebrow)}
					</p>
					<h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
						{t(title)}
					</h3>
					<p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
						{t(description)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default function ProjectsSection() {
	const { t } = useI18n();

	return (
		<section id="projects" className="section">
			<SectionTitle
				title={t("Project cases")}
				subtitle={t(
					"Two recent systems that show how we combine engineering context, field data, and clean operator interfaces.",
				)}
			/>

			<div className="relative overflow-visible">
				<article className="flex flex-col p-4 md:p-16">
					<ProjectItem
						eyebrow="Filling station"
						title="Operational visibility for faster, safer fueling workflows."
						description="A supervisory layer designed to help teams monitor station activity, react quickly to alerts, and keep throughput moving without losing clarity in the field."
						imageSrc={fillingStation}
						imageAlt="Operational visibility for faster, safer fueling workflows."
					/>
					<ProjectItem
						eyebrow="AdBlue production"
						title="Production control that keeps quality and compliance in view."
						description="Recipe validation, process health, and operator guidance come together in a single interface so the plant can stay consistent, traceable, and easier to manage day to day."
						imageSrc={adblueMonitoring}
						imageAlt="Production control that keeps quality and compliance in view."
						reverse
					/>
				</article>
			</div>
		</section>
	);
}
