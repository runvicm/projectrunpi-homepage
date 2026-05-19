import { Layers, Globe, Database, GitBranch, Check } from "lucide-react";
import type { Route } from "./+types/Services";
import { SITE_NAME } from "~/constant/app";

const services = [
  {
    title: "Static",
    description: "A fast, modern static website built with the latest frontend stack.",
    icon: Layers,
    features: [
      "React + TypeScript",
      "Tailwind CSS styling",
      "Responsive design",
      "Component-based architecture",
    ],
    highlight: false,
  },
  {
    title: "Hosted",
    description: "Everything in Static, plus I'll host and deploy it for you.",
    icon: Globe,
    features: [
      "Everything in Static",
      "Self-hosted deployment",
      "Custom domain setup",
      "Basic maintenance",
    ],
    highlight: false,
  },
  {
    title: "Full Stack",
    description: "A complete web application with a backend, database, and more.",
    icon: Database,
    features: [
      "Everything in Hosted",
      "Laravel backend",
      "Database integration",
      "API development",
    ],
    highlight: true,
  },
  {
    title: "Full Stack + CI/CD",
    description: "Full stack with automated pipelines, testing, and deployment workflows.",
    icon: GitBranch,
    features: [
      "Everything in Full Stack",
      "CI/CD pipeline setup",
      "Automated testing",
      "Deployment automation",
    ],
    highlight: false,
  },
];


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
          From simple static sites to full-stack applications with CI/CD — pick the tier that fits your needs.
      </p>
    </section>
    
    <div className="max-w-6xl mx-auto px-6">

      {/* Cards */}
      <div className="grid grid-cols md:grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                service.highlight
                  ? "bg-teal-600 border-teal-600 text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.highlight ? "bg-teal-500" : "bg-teal-50"
                }`}
              >
                <Icon
                  size={22}
                  className={service.highlight ? "text-white" : "text-teal-600"}
                />
              </div>

              <h3
                className={`text-xl font-bold mt-3 mb-2 ${
                  service.highlight ? "text-white" : "text-teal-900"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.highlight ? "text-teal-100" : "text-gray-500"
                }`}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      size={15}
                      className={service.highlight ? "text-teal-200" : "text-teal-500"}
                    />
                    <span className={service.highlight ? "text-teal-50" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  service.highlight
                    ? "bg-white text-teal-700 hover:bg-teal-50"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);


export default Services;