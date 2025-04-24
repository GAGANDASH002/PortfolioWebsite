"use client";
import { CardSpotlight } from "./ui/Card-spotlight";

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative py-24 bg-black"
      // -mt-8 pulls this section up, closing the gap with the previous section
    >
      <h4 className="text-4xl md:text-5xl font-bold text-gray-400 mb-16 text-center tracking-tight">
        My Approach
      </h4>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Phase 1 */}
        <CardSpotlight
          radius={350}
          color="#3b82f6"
          className="group relative transition-transform duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center justify-center h-72 relative">
            <div className="transition-opacity duration-300 group-hover:opacity-0 opacity-100 z-10">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text mb-2">
                Phase 1
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="text-2xl font-semibold text-white mb-2">
                Planning & Strategy
              </div>
              <div className="text-gray-300 text-center">
                Requirement analysis, architecture design, and project roadmap creation.
              </div>
            </div>
          </div>
        </CardSpotlight>
        {/* Phase 2 */}
        <CardSpotlight
          radius={350}
          color="#a21caf"
          className="group relative transition-transform duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center justify-center h-72 relative">
            <div className="transition-opacity duration-300 group-hover:opacity-0 opacity-100 z-10">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-b from-purple-400 to-purple-600 bg-clip-text mb-2">
                Phase 2
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="text-2xl font-semibold text-white mb-2">
                Development & Update
              </div>
              <div className="text-gray-300 text-center">
                Agile development with continuous integration and regular updates.
              </div>
            </div>
          </div>
        </CardSpotlight>
        {/* Phase 3 */}
        <CardSpotlight
          radius={350}
          color="#f472b6"
          className="group relative transition-transform duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center justify-center h-72 relative">
            <div className="transition-opacity duration-300 group-hover:opacity-0 opacity-100 z-10">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-b from-pink-400 to-pink-600 bg-clip-text mb-2">
                Phase 3
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="text-2xl font-semibold text-white mb-2">
                Testing & Launch
              </div>
              <div className="text-gray-300 text-center">
                Rigorous QA, optimization, and deployment for a smooth launch.
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}
