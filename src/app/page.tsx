import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Team from "@/components/landing/team";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Team />
    </>
  );
}
