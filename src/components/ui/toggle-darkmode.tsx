"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function ToggleDarkmode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {theme && (
        <button
          className="
            p-2 
            bg-gray-100
            dark:bg-zinc-800 
            hover:bg-white 
            hover:ring-2 hover:ring-black 
            dark:hover:bg-zinc-900
            dark:hover:ring-white 
            rounded-lg 
            transition
            duration-100
        "
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </button>
      )}
    </>
  );
}
