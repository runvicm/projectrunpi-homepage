import { SITE_NAME } from "~/constant/app";
import type { Route } from "./+types/Home";
import { Hero } from "~/components/sections/Hero";
import { PersonalProjects } from "~/components/sections/PersonalProject";
import { ServicesSection } from "~/components/sections/ServicesSection";
import { Devlog } from "~/components/sections/DevLog";
import { FeatureProject } from "~/components/sections/FeatureProject";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE_NAME} - Home` },
    { name: `${SITE_NAME}`, content: `Welcome to ${SITE_NAME}` },
  ];
}

const Home = () => (
  <main>
    <Hero />
    <FeatureProject />
    <PersonalProjects />
    <ServicesSection />
    <Devlog />
  </main>
);

export default Home;