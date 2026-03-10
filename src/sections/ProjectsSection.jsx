import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section">
      <SectionTitle title={projects.title} subtitle={projects.subtitle} />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
