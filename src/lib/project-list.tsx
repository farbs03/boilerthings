import {
  BookOpenIcon,
  GraduationCapIcon,
  PlaneIcon,
  SchoolIcon,
  VideoIcon,
} from "lucide-react";

const iconClasses = "w-12 aspect-square text-black dark:invert";

export const projectList: ProjectInfo[] = [
  {
    title: "Boilerexams",
    icon: <SchoolIcon className={iconClasses} />,
    url: "https://boilerexams.com/",
    urlText: "boilerexams.com",
    category: "Education",
    description: "Needs no introduction",
  },
  {
    title: "Chenflix",
    icon: <VideoIcon className={iconClasses} />,
    url: "https://chenflix.vercel.app/",
    urlText: "chenflix.vercel.app",
    category: "Education",
    description: "Description here",
  },
  {
    title: "BoilerBookings",
    icon: <PlaneIcon className={iconClasses} />,
    url: "https://boilerbookings.com/",
    urlText: "boilerbookings.com",
    category: "Education",
    description: "Description here",
  },
  {
    title: "BoilerClasses",
    icon: <BookOpenIcon className={iconClasses} />,
    url: "https://boilerclasses.com/",
    urlText: "boilerclasses.com",
    category: "Education",
    description: "Description here",
  },
  {
    title: "BoilerGrades",
    icon: <GraduationCapIcon className={iconClasses} />,
    url: "https://boilergrades.com/",
    urlText: "boilergrades.com",
    category: "Education",
    description: "Description here",
  },
];
