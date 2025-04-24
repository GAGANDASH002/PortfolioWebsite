import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col min-h-[40rem] w-full antialiased items-center justify-center bg-black px-4 sm:px-6">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl pb-24 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent leading-tight px-2">
          Transforming Concepts <br />into Seamless User<br /> Experiences.
        </h1>
        <p className="mx-auto mt-6 max-w-md sm:max-w-lg text-center text-base sm:text-lg font-medium text-gray-200 px-2">
          Hi! I'm Gagan, a Full Stack Developer based in India.
        </p>
      </div>
    </div>
  );
}
