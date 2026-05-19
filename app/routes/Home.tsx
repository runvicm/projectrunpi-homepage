import { SITE_NAME } from "~/constant/app";
import type { Route } from "./+types/Home";
import { Hero } from "~/components/sections/Hero";
import { PersonalProjects } from "~/components/sections/PersonalProject";
import { Services } from "~/components/sections/Services";
import { Devlog } from "~/components/sections/DevLog";


export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE_NAME} - Home` },
    { name: `${SITE_NAME}`, content: `Welcome to ${SITE_NAME}` },
  ];
}

const Home = () => (
  <main>
    <Hero />
    <Services />
    <PersonalProjects />
    <Devlog />
  </main>
);

export default Home;