import Image from "next/image";
import { BackgroundLines } from "./ui/BackgroundLines";
import { Github, Linkedin, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative -mt-24">
      <BackgroundLines className="bg-neutral-950">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-24">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Hi Everyone! I&apos;m Gagan, a passionate Full Stack Developer and
              Computer Science Enthusiast based in India. I specialize in
              building modern, performant web applications with cutting-edge
              technologies like Next.js, Tailwind CSS, Framer Motion, and
              mongoDB. I love transforming ideas into seamless digital
              experiences and am always eager to learn and tackle new
              challenges.
            </p>
          </div>
          {/* Image and Socials */}
          <div className="flex-1 flex flex-col items-center md:items-end mr-0 md:mr-20">
          <div className="w-56 h-56 md:w-72 md:h-72 shadow-xl bg-black-800/20 flex items-center justify-center rounded-full border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50">

              <Image
                src="/me.jpeg"
                alt="Gagan"
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover"
                priority
              />
            </div>
            {/* Social Icons */}
            <div className="flex gap-5 mr-20 mt-8">
              <a
                href="https://github.com/GAGANDASH002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/gagan-dash-596830326"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:gagandash002@gmail.com"
                className="text-gray-400 hover:text-red-400 transition"
                aria-label="Gmail"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
}
