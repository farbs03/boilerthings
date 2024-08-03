"use client";

import Link from "next/link";
import ToggleDarkmode from "./ui/toggle-darkmode";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  InfoIcon,
  LibraryBigIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useState } from "react";

const NavLink = ({
  navLink,
  active,
  onClick,
}: {
  navLink: NavLinkInfo;
  active: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <Link
      key={navLink.href}
      href={navLink.href}
      onClick={onClick}
      className={`
        font-medium 
        dark:hover:text-primary 
        hover:bg-zinc-100
        dark:hover:bg-white/10
        ${active ? "bg-zinc-100 dark:bg-white/10 dark:text-primary" : ""}
        transition 
        duration-100 
        ease-in 
        md:p-2
        p-4
        md:w-fit
        w-full
        text-center
        rounded-md
        flex
        items-center
        gap-2
        `}
    >
      {navLink.icon}
      {navLink.title}
    </Link>
  );
};

export default function Navbar() {
  const navLinks: NavLinkInfo[] = [
    {
      title: "Projects",
      href: "/projects",
      icon: <LibraryBigIcon />,
    },
    {
      title: "Team",
      href: "/team",
      icon: <UsersIcon />,
    },
    {
      title: "About",
      href: "/about",
      icon: <InfoIcon />,
    },
  ];
  const path = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Boilerthings
      </Link>

      <div className="items-center hidden gap-4 md:flex">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.href}
            navLink={navLink}
            active={path === navLink.href}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ToggleDarkmode />
        <div className="md:hidden">
          <Drawer
            direction="right"
            open={drawerOpen}
            onOpenChange={(open) => setDrawerOpen(open)}
          >
            <DrawerTrigger className="grid place-items-center">
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent className="flex flex-col gap-4">
              <DrawerClose>
                <XIcon />
              </DrawerClose>
              {navLinks.map((navLink) => (
                <NavLink
                  key={navLink.href}
                  onClick={() => setDrawerOpen(false)}
                  navLink={navLink}
                  active={path === navLink.href}
                />
              ))}
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
