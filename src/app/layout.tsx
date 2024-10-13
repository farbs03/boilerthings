import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="boilerthings-theme"
        >
          <div className="bg-white dark:bg-zinc-900 dark:text-white">
            <div className="w-full max-w-screen-xl mx-auto relative">
              {children}
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
