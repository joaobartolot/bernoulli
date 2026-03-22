import joaoVictor from "../assets/team/joao-victor.webp";
import nicolas from "../assets/team/nicolas.webp";
import raphael from "../assets/team/raphael.webp";
import SectionTitle from "../components/ui/SectionTitle";
import { useI18n } from "../i18n/I18nProvider";

const team = [
	{
		name: "Nicolas Bartolote",
		role: "Mechanical Engineer",
		note: "Process and equipment behavior specialist.",
		photo: nicolas,
	},
	{
		name: "Raphael Bruno",
		role: "Electrical Engineer",
		note: "Instrumentation, panel, and controls integration.",
		photo: raphael,
	},
	{
		name: "Joao Victor Bartolot",
		role: "Software Engineer",
		note: "Control software architecture and platform development.",
		photo: joaoVictor,
	},
];

export default function TeamSection() {
	const { t } = useI18n();

	return (
		<section id="team" className="section pt-0">
			<SectionTitle
				title={t("Our team")}
				subtitle={t(
					"A multidisciplinary team combining software, electrical, and mechanical expertise to improve industrial systems from the field to the interface.",
				)}
			/>
			<div className="flex flex-col gap-5 md:flex-row">
				{team.map((member) => (
					<article
						key={member.name}
						className="panel overflow-hidden rounded-[1.75rem] p-0 md:w-96"
					>
						<img
							src={member.photo}
							alt={t(member.name)}
							className="aspect-[1/1] h-80 w-full object-cover"
						/>
						<div className="p-6">
							<p className="text-lg font-semibold text-brand-secondary dark:text-brand-text">
								{t(member.name)}
							</p>
							<p className="mt-1 text-sm font-semibold text-brand-primary">
								{t(member.role)}
							</p>
							<p className="mt-3 text-sm text-brand-muted">
								{t(member.note)}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
