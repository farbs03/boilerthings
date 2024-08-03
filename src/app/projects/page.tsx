import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects: ProjectInfo[] = [
    {
      title: "Boilerexams",
      image: "Boilerexams.png",
      url: "https://boilerexams.com/",
      urlText: "boilerexams.com",
      category: "Education",
      description: "Needs no introduction",
    },
    {
      title: "Chenflix",
      image: "Chenflix.png",
      url: "https://chenflix.vercel.app/",
      urlText: "chenflix.vercel.app",
      category: "Education",
      description: "Description here",
    },
    {
      title: "BoilerBookings",
      image: "BoilerBookings.png",
      url: "https://boilerbookings.com/",
      urlText: "boilerbookings.com",
      category: "Education",
      description: "Description here",
    },
    {
      title: "BoilerClasses",
      image: "BoilerClasses.png",
      url: "https://boilerclasses.com/",
      urlText: "boilerclasses.com",
      category: "Education",
      description: "Description here",
    },
    {
      title: "BoilerGrades",
      image: "BoilerGrades.png",
      url: "https://boilergrades.com/",
      urlText: "boilergrades.com",
      category: "Education",
      description: "Description here",
    },
  ];
  return (
    <div>
      <p className="mb-8 text-3xl font-bold">Projects</p>
      <div className="grid justify-center w-full grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {projects.map((project) => (
          <a key={project.title} href={project.url} target="_blank">
            <ProjectCard project={project} />
          </a>
        ))}
      </div>
    </div>
  );
}
