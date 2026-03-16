import adblueMonitoring from "../assets/projects/adblue-monitoring.webp";
import fillingStation from "../assets/projects/filling-station.webp";
import SectionTitle from "../components/ui/SectionTitle";
import { useI18n } from "../i18n/I18nProvider";

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
					<div className="flex min-h-[550px] w-full flex-col justify-between gap-x-12 bg-black/10 md:flex-row lg:min-h-96">
						<div className="relative md:w-1/2">
							<img
								src={fillingStation}
								alt={t(
									"Operational visibility for faster, safer fueling workflows.",
								)}
								className="absolute -top-8 right-8 aspect-video w-full object-cover md:-top-16 md:right-16 md:aspect-square"
							/>
						</div>
						<div className="flex items-center px-12 md:w-1/2">
							<div className="flex flex-col">
								<p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
									{t("Filling station")}
								</p>
								<h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
									{t(
										"Operational visibility for faster, safer fueling workflows.",
									)}
								</h3>
								<p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
									{t(
										"A supervisory layer designed to help teams monitor station activity, react quickly to alerts, and keep throughput moving without losing clarity in the field.",
									)}
								</p>
							</div>
						</div>
					</div>
					<div className="flex w-full gap-x-12 bg-black/10 lg:min-h-[31rem]">
						<div className="flex w-1/2 items-center px-12">
							<div className="flex flex-col">
								<p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
									{t("AdBlue production")}
								</p>
								<h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
									{t(
										"Production control that keeps quality and compliance in view.",
									)}
								</h3>
								<p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
									{t(
										"Recipe validation, process health, and operator guidance come together in a single interface so the plant can stay consistent, traceable, and easier to manage day to day.",
									)}
								</p>
							</div>
						</div>
						<div className="relative w-1/2">
							<img
								src={adblueMonitoring}
								alt={t(
									"Production control that keeps quality and compliance in view.",
								)}
								className="absolute -bottom-16 left-16 aspect-square w-full object-cover"
							/>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}
