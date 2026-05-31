import { ArrowUpRight, Info } from "lucide-react";
import { Link } from "react-router";
import { SERVICE_PACKAGES } from "~/data/services";
 

export const ServicesSection = () => {
  return (
    <section className="bg-linear-to-b from-white to-blue-50 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">What I Offer</p>
          <h3 className="text-4xl font-bold text-teal-700 mb-4">My Services</h3>
        </div>
 
        <div className="flex flex-col md:flex-row gap-10">
          {SERVICE_PACKAGES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="flex-1 gap-4 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mb-3">
                    <Icon size={25} className="text-teal-600" />
                  </div>

                  <div className="flex gap-4 flex-1">
                    <div className="flex flex-col gap-4">
                      <span className="text-xs text-teal-500 font-semibold uppercase tracking-widest">{service.badge}</span>
                      <h3 className="text-[20px] font-bold text-teal-900">{service.name}</h3>
                      <p className=" text-gray-500 pb-3">{service.desc}</p>
                    </div>
                  </div>

                  <div className="text-gray-500 pb-3"><span className="font-semibold">{service.price}</span> {service.priceLabel}</div>
                
                


                  <div className="flex justify-center">
                    <Link to={`/services#${service.id}`} className="flex gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium">View Details  <ArrowUpRight /></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          <div className="flex justify-center gap-1 mt-5">
            <p className="bg-white flex items-center gap-1 px-3 py-1.5 rounded-full border border-teal-200 text-slate-500 text-sm">
              <span className="text-teal-300"><Info size={16} /></span> This website is built using the same stack I offer. feel free to look around as a live demo of my work.
            </p>
          </div>

      </div>
    </section>
  );
}