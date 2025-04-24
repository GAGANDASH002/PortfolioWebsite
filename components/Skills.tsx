"use client";

import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGitAlt, FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql,
  SiVercel, SiExpress, SiRedux, SiPostman, SiMysql, SiJavascript, SiAppwrite
} from "react-icons/si";

// 👇 Import Wavy Background
import { WavyBackground } from "./ui/wavy-background";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative pt-24 pb-0 -mt-35">
     <WavyBackground className="w-full min-h-screen max-w-7xl mx-auto">

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-gray-400 mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend */}
            <SkillCategory title="Frontend">
              <Skill icon={<FaReact className="text-blue-400" />} label="React" />
              <Skill icon={<SiNextdotjs className="text-white" />} label="Next.js" />
              <Skill icon={<SiTailwindcss className="text-cyan-400" />} label="Tailwind CSS" />
              <Skill icon={<SiTypescript className="text-blue-500" />} label="TypeScript" />
              <Skill icon={<SiJavascript className="text-yellow-500" />} label="JavaScript" />
              <Skill icon={<FaHtml5 className="text-orange-500" />} label="HTML5" />
              <Skill icon={<FaCss3Alt className="text-blue-500" />} label="CSS3" />
              <Skill icon={<SiRedux className="text-purple-400" />} label="Redux" />
            </SkillCategory>

            {/* Backend */}
            <SkillCategory title="Backend">
              <Skill icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
              <Skill icon={<SiExpress className="text-gray-300" />} label="Express.js" />
              <Skill icon={<SiTypescript className="text-blue-500" />} label="TypeScript" />
              <Skill icon={<SiAppwrite className="text-red-500" />} label="Appwrite" />
            </SkillCategory>

            {/* Databases */}
            <SkillCategory title="Databases">
              <Skill icon={<SiMongodb className="text-green-400" />} label="MongoDB" />
              <Skill icon={<SiPostgresql className="text-blue-400" />} label="PostgreSQL" />
              <Skill icon={<SiMysql className="text-blue-400" />} label="MySQL" />
            </SkillCategory>

            {/* Developer Tools */}
            <SkillCategory title="Developer Tools">
              <Skill icon={<FaGithub className="text-gray-300" />} label="GitHub" />
              <Skill icon={<FaGitAlt className="text-orange-400" />} label="Git" />
              <Skill icon={<SiVercel className="text-white" />} label="Vercel" />
              <Skill icon={<SiPostman className="text-orange-400" />} label="Postman" />
            </SkillCategory>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}

function SkillCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center bg-black/40 rounded-xl p-4 shadow hover:shadow-lg transition w-24">
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-gray-200 text-sm text-center">{label}</span>
    </div>
  );
}
