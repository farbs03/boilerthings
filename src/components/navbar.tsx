"use client";

import Link from "next/link";
import ToggleDarkmode from "./ui/toggle-darkmode";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Drawer as DrawerPrimitive } from "vaul";
import {
  InfoIcon,
  LibraryBigIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import { Micro_5 } from "next/font/google";

const micro_5 = Micro_5({
  weight: "400",
  subsets: ["latin"],
});

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
        text-zinc-700
        dark:text-zinc-300
        hover:text-black
        dark:hover:text-primary 
        ${active ? "bg-zinc-100 dark:bg-transparent dark:text-primary" : ""}
        transition 
        duration-100 
        ease-in 
        md:p-2
        px-4
        py-2
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
      title: "About",
      href: "#about",
      icon: <InfoIcon />,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: <LibraryBigIcon />,
    },
    {
      title: "Team",
      href: "#team",
      icon: <UsersIcon />,
    },
  ];
  const path = usePathname();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 border-b-[1px] border-b-zinc-100 dark:border-b-zinc-800 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]bg-zinc-800/60 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-screen-xl w-full mx-auto p-4">
        <Link
          href="/"
          className={`${micro_5.className} text-4xl font-bold w-fit  tracking-wide`}
        >
          BOILERTHINGS
        </Link>

        <div className="items-center hidden gap-4 md:flex justify-center">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.href}
              navLink={navLink}
              active={path === navLink.href}
              onClick={() => setVisible(false)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 justify-end">
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
                <DrawerTitle className="hidden" />
                <DrawerDescription className="hidden" />
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
    </nav>
  );
}
