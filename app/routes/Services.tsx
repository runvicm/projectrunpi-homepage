import { ServicesCard } from "~/components/blocks/cards/ServicesCard";
import type { Route } from "./+types/Services";
import { SITE_NAME } from "~/constant/app";
import { SERVICE_PACKAGES } from "~/constant/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE_NAME} - Services` },
    { name: `${SITE_NAME}`, content: `${SITE_NAME} services offer` },
  ];
}

export const Services = () => (
  <div className="bg-linear-to-br from-cyan-50 to-teal-50 min-h-screen">
    {/* <!-- Decorative shapes --> */}
    <div className="fixed top-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
    <div className="fixed bottom-20 left-10 w-40 h-40 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
    <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-teal-300 opacity-10 rotate-45"></div>
        
    {/* <!-- Hero Section --> */}
    <section className="max-w-6xl mx-auto px-8 py-16 text-center relative">
      <div className="absolute top-0 left-1/4 w-16 h-16 bg-teal-200 rounded-lg opacity-30 rotate-12"></div>
      <p className="text-teal-600 font-semibold mb-2">What I Offer</p>
      <h2 className="text-5xl font-bold text-teal-800 mb-4">Services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        From simple landing pages to full-stack web apps. All built with a modern, production-ready stack.
      </p>
    </section>
    
    <div className="max-w-6xl mx-auto px-6">

      {/* Cards */}
      <div className="flex flex-col gap-6 items-start px-3 pb-10">
        {SERVICE_PACKAGES.map((service) => {
          return (
            <ServicesCard {...service} key={service.id}/>
          );
        })}
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    </div>
  </div>
);


export default Services;