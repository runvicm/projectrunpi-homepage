import { Check, X } from "lucide-react";
import { useLocation } from "react-router";

export interface ServiceProps  {
  id: string
  badge: string
  badgeClass: string
  name: string
  desc: string
  price: string
  priceLabel: string
  priceNote: string
  popular: boolean
  included: string[]
  notIncluded: string[]
}

export const ServicesCard = ( {...service}: ServiceProps ) => {

  const { hash } = useLocation();

  const active = hash.replace('#', '')

  return (

  <div id={service.id} className={`rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24 ${active === service.id ? "bg-white boder border-2 border-teal-400" : "border"} `}>
    <div className="flex flex-col gap-2">
      <span className={`text-xs font-medium px-3 py-1 rounded-md w-fit ${service.badgeClass}`}>
        {service.badge}
      </span>
      <h2 className="text-xl font-medium">{service.name}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.desc}
      </p>
      <p className="text-3xl font-medium mt-2">
        {service.price} <span className="text-sm font-normal text-muted-foreground">{service.priceLabel}</span>
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {service.priceNote}
      </p>

      <a
        href="https://upwork.com/your-profile"
        target="_blank"
        className="mt-auto text-center text-sm border border-border rounded-md py-2 px-4 hover:bg-muted transition-colors"
      >
        Hire me on Upwork ↗
      </a>
    </div>

    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Included</p>
      <ul className="flex flex-col gap-2">
        {service.included.map((included, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
            {included}
          </li>
        ))}
      </ul>

      <hr className="border-border my-1" />

      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Not included</p>
      <ul className="flex flex-col gap-2">
       {service.notIncluded.map((notIncluded, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <X className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
            {notIncluded}
          </li>
        ))}
      </ul>

      <p className="text-xs text-muted-foreground bg-muted rounded-md px-3 py-2 leading-relaxed mt-1">
        Source code released after clean-up and full payment. No partial releases.
      </p>
    </div>

  </div>
  )
}