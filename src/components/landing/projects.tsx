import { projectList } from "@/lib/project-list";
import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <div className="min-h-screen p-4 flex flex-col" id="projects">
      <p className="mb-8 text-3xl font-bold text-center">Projects</p>
      <div className="flex-grow h-full">
        <div className="grid justify-center w-full grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {projectList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
