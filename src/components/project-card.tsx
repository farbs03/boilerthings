import { ImageIcon, LinkIcon } from "lucide-react";

export default function ProjectCard({ project }: { project: ProjectInfo }) {
  return (
    <div className="flex items-center justify-between w-full max-w-md p-4 mx-auto transition duration-100 ease-in bg-white select-none md:max-w-none md:w-auto md:mx-0 drop-shadow-md hover:drop-shadow-lg dark:drop-shadow-none dark:ring-0 rounded-xl dark:bg-zinc-950/50 dark:hover:bg-zinc-950">
      <div className="flex flex-col flex-grow gap-1">
        <p className="text-lg font-semibold">{project.title}</p>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
        <a
          href={project.url}
          className="flex items-center gap-2 text-primary group w-fit"
          target="_blank"
        >
          {project.urlText}
          <LinkIcon className="transition duration-100 ease-in translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-primary" />
        </a>
      </div>
      <div className="grid w-20 rounded-lg bg-zinc-100 dark:bg-zinc-800 place-items-center aspect-square">
        <ImageIcon />
      </div>
    </div>
  );
}
