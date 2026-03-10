export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5">
      <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-brand-muted">{project.description}</p>
      </div>
    </article>
  );
}
