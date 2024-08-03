import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Boilerthings",
  description: "Organization website for Boilerthings, home of Boilerexams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        storageKey="boilerthings-theme"
      >
        <body className="bg-white dark:bg-zinc-900 dark:text-white">
          <div className="flex flex-col w-full max-w-6xl min-h-screen p-4 mx-auto">
            <Navbar />
            <div className="flex-grow mt-8">{children}</div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
