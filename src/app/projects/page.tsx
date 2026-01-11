import Container from "@/components/Container";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.title} className="border p-4 rounded-xl">
            <h2 className="font-medium">{project.title}</h2>
            <p className="text-sm text-neutral-700">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
