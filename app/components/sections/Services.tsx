import { Layers, Globe, Database } from "lucide-react";
 
const SERVICES = [
  { tier: "Tier 1", title: "Static Only", description: "React + TypeScript + Tailwind static website.", icon: Layers },
  { tier: "Tier 2", title: "Static + Hosting", description: "Static site with self-hosted deployment.", icon: Globe },
  { tier: "Tier 3", title: "Full Stack", description: "Complete app with Laravel backend & database.", icon: Database },
];
 
export const Services = () => {
  return (
    <section className="bg-linear-to-b from-blue-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">What I Offer</p>
          <h3 className="text-4xl font-bold text-teal-700 mb-4">Services</h3>
        </div>
 
        <div className="flex flex-col md:flex-row gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.tier} className="flex-1 flex items-center gap-4 bg-white rounded-2xl border border-gray-200 px-6 py-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-teal-600" />
                </div>
                <div>
                  <span className="text-xs text-teal-500 font-semibold uppercase tracking-widest">{service.tier}</span>
                  <h3 className="text-base font-bold text-teal-900">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}