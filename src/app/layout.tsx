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
        defaultTheme="system"
        enableSystem
        storageKey="boilerthings-theme"
      >
        <body className="bg-white dark:bg-zinc-900 dark:text-white ">
          <div className="max-w-5xl w-full mx-auto p-4 flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
