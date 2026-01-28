import React from "react";

export default function StatsCard() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {/* Happy Clients Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-team-name transition hover:-translate-y-2">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#002B5B]">
          20+
        </h3>
        <p className="text-gray-500 text-sm md:text-base mt-2 font-medium">
          Happy Clients
        </p>
      </div>

      {/* Projects Done Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-[#002B5B] transition hover:-translate-y-2">
        <h3 className="text-3xl md:text-4xl font-extrabold text-team-name">
          30+
        </h3>
        <p className="text-gray-500 text-sm md:text-base mt-2 font-medium">
          Projects Done
        </p>
      </div>

      {/* Experience Years */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-team-name transition hover:-translate-y-2">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#002B5B]">
          5+
        </h3>
        <p className="text-gray-500 text-sm md:text-base mt-2 font-medium">
          Years Exp.
        </p>
      </div>

      {/* Team Members */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-[#002B5B] transition hover:-translate-y-2">
        <h3 className="text-3xl md:text-4xl font-extrabold text-team-name">
          10+
        </h3>
        <p className="text-gray-500 text-sm md:text-base mt-2 font-medium">
          Team Experts
        </p>
      </div>
    </div>
  );
}
