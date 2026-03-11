export default function ProjectCard({ project }) {
  return (
    <article className="panel group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold tracking-tight text-brand-secondary dark:text-brand-text">{project.title}</h3>
        <p className="text-sm leading-relaxed text-brand-muted">{project.description}</p>
      </div>
    </article>
  );
}
