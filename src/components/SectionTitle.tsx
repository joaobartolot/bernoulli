export default function SectionTitle({ title, subtitle }) {
	return (
		<div className="mb-10 max-w-3xl">
			<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
				{title}
			</h2>
			{subtitle ? (
				<p className="mt-3 text-brand-muted">{subtitle}</p>
			) : null}
		</div>
	);
}
