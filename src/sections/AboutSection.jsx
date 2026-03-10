import SectionTitle from '../components/ui/SectionTitle';

export default function AboutSection({ about }) {
  return (
    <section id="about" className="section">
      <SectionTitle title={about.title} subtitle={about.description} />
      <div className="grid gap-4 md:grid-cols-3">
        {about.team.map((member) => (
          <article key={member.name} className="rounded-3xl border border-white/40 bg-white/75 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-lg font-semibold">{member.name}</p>
            <p className="mt-1 text-sm font-medium text-brand-primary">{member.role}</p>
            <p className="mt-3 text-sm text-brand-muted">{member.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
