import { SITE_NAME } from "~/constant/app";
import type { Route } from "./+types/Home";
import { Hero } from "~/components/sections/Hero";
import { FeatureProject } from "~/components/sections/FeatureProject";
import { PersonalProjects } from "~/components/sections/PersonalProject";
import { ServicesSection } from "~/components/sections/ServicesSection";
import { Devlog } from "~/components/sections/DevLog";
import { useLoaderData, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import { env } from "cloudflare:workers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE_NAME} - Web Dev, Projects & Services` },
    { name: `${SITE_NAME}`, content: `Welcome to ${SITE_NAME}` },
  ];
}

export const loader = () => {
  const API_URL = env.API_URL;
  const API_KEY = env.API_KEY;

  const devlog = fetch(`${API_URL}/api/homepage/devlog`, {
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
  }})
  .then((res) => res.json()); // no await!

  return { devlog };
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const slug = formData.get("slug") as string;
  const API_URL = env.API_URL;
  const API_KEY = env.API_KEY;
 
  await fetch(`${API_URL}/api/devlog/view/${slug}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  return null;
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureProject />
      <PersonalProjects />
      <ServicesSection />
      <Devlog />
    </>
  )
};

export default Home;


