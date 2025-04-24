import HeroSection from "@/components/HeroSection";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/Approach";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import { User, Layers, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "About", link: "#about", icon: <User /> },
  { name: "Skills", link: "#skills", icon: <Layers /> },
  { name: "Projects", link: "#projects", icon: <FolderOpen /> },
  { name: "Contact", link: "#contact", icon: <Mail /> },
];

export default function Page() {
  return (
    <>
      <FloatingNavbar navItems={navItems} />
      <HeroSection/>
      <AboutSection/>
      <ApproachSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </>
  );
}
