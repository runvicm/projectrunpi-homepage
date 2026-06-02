import { AboutLeft } from "~/components/sections/AboutLeft";
import { AboutRight } from "~/components/sections/AboutRight";
import { HeroAbout } from "~/components/sections/HeroAbout";
import type { Route } from "./+types/About";
import { SITE_NAME } from "~/constant/app";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE_NAME} - About` },
    { name: `${SITE_NAME}`, content: `This project started when I got my hands on a Raspberry Pi 5 and decided to try self-hosting a website. What began as a curiosity about whether a tiny computer could actually run a real site turned into my testing ground for learning server management, deployment, and all the behind-the-scenes stuff that makes websites actually work.` },
  ];
}

const About = () => (
  <section className="bg-linear-to-br from-cyan-50 to-teal-50 min-h-screen">
        
    {/* <!-- Decorative shapes --> */}
    <div className="fixed top-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
    <div className="fixed bottom-20 left-10 w-40 h-40 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
    <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-teal-300 opacity-10 rotate-45"></div>
    <div className="fixed top-1/3 left-1/4 w-28 h-28 bg-cyan-100 opacity-15 rounded-lg -rotate-12"></div>
    
    {/* <!-- Hero Section --> */}
    <HeroAbout />

    {/* <!-- Two Column Section --> */}
    <div className="max-w-6xl mx-auto px-8 pt-12 pb-16">
      <div className="grid md:grid-cols-2 gap-8">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  </section>
)

export default About;