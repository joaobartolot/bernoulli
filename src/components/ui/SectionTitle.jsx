export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight text-brand-secondary sm:text-4xl dark:text-brand-text">{title}</h2>
      {subtitle ? <p className="mt-3 text-brand-muted">{subtitle}</p> : null}
    </div>
  );
}
