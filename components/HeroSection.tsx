import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-[40rem] w-full antialiased md:items-center md:justify-center bg-black">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pb-24 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-7xl">
          Transforming Concepts <br/>into Seamless User<br/> Experiences.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg font-medium text-gray-200">
          Hi! I'm Gagan, a Full Stack Developer based in India.
        </p>
      </div>
    </div>
  );
}
