import { Sprout, Target } from "lucide-react";

export const AboutRight = () => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold text-teal-700 mb-6">About This Space</h3>
    
    <p className="text-gray-700 leading-relaxed mb-6">
      This site is my project hub and learning journal rolled into one. A space where experimentation and learning happen out loud.
    </p>

    <div className="bg-teal-50 rounded-xl p-6 border border-teal-200 mb-6">
      <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
        <span><Target /></span>
        <span>What I'm Doing</span>
      </h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        Building and self-hosting solo projects, learning in public, and documenting everything along the way.
      </p>
    </div>

    <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
      <h4 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
        <span><Sprout /></span>
        <span>How I Learn</span>
      </h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        Learn by building. Every project here, successful or not, taught me something valuable worth sharing.
      </p>
    </div>
  </div>
)


