export default function SectionTitle({ title, subtitle }) {
	return (
		<div className="mb-12 max-w-3xl">
			<h2 className="text-3xl font-bold tracking-tight text-brand-secondary dark:text-brand-text sm:text-4xl">
				{title}
			</h2>
			{subtitle ? (
				<p className="mt-3 text-brand-muted">{subtitle}</p>
			) : null}
		</div>
	);
}
