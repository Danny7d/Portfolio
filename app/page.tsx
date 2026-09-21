import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ModernProjects from "@/components/ModernProjects";
import ModernSkills from "@/components/ModernSkills";
import ModernContact from "@/components/ModernContact";

export default function Home() {
  return (
    <>
      <div id="home" style={{ scrollMarginTop: "80px" }}>
        <Hero />
      </div>
      <div id="about" style={{ scrollMarginTop: "80px" }}>
        <AboutMe />
      </div>
      <div id="projects" style={{ scrollMarginTop: "80px" }}>
        <ModernProjects />
      </div>
      <div id="skills" style={{ scrollMarginTop: "80px" }}>
        <ModernSkills />
      </div>
      <div id="contact" style={{ scrollMarginTop: "80px" }}>
        <ModernContact />
      </div>
    </>
  );
}
