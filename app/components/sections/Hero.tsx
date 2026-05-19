import { DESCRIPTION, SITE_NAME } from "~/constant/app"
import { FloatingIcon } from "../blocks/FloatingIcon"
import { CoreStacks } from "../blocks/TechStacks/CoreStacks"
import { CTA } from "../blocks/CTA"

export const Hero = () => (
  <section className="bg-linear-to-b from-teal-100 via-cyan-100 to-blue-100 py-24 relative overflow-hidden">
    <FloatingIcon />
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Full-Stack Developer</p>
      <h1 className="text-6xl font-bold text-teal-600 mb-6 leading-tight">
        {SITE_NAME}
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
        {DESCRIPTION}
      </p>
      <CoreStacks />
      <CTA />
    </div>
  </section>
)