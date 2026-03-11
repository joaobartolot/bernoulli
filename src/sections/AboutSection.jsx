import SectionTitle from '../components/ui/SectionTitle';

export default function AboutSection({ about }) {
  return (
    <section id="about" className="section">
      <SectionTitle title={about.title} subtitle={about.description} />
      <div className="grid gap-5 md:grid-cols-3">
        {about.team.map((member) => (
          <article key={member.name} className="panel overflow-hidden p-0">
            <img src={member.photo} alt={`${member.name} mock portrait`} className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="text-lg font-semibold text-brand-secondary dark:text-brand-text">{member.name}</p>
              <p className="mt-1 text-sm font-semibold text-brand-primary">{member.role}</p>
              <p className="mt-3 text-sm text-brand-muted">{member.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
