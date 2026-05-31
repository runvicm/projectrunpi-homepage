import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Main_Links } from "~/constant/main-links";
import { SearchBarInput } from "./SearchBarInput";

export const MobileMainNavLink = () => {
  const { pathname } = useLocation()

  const [isOpen, setIsOpen] = useState(false);
  const disabled = 'block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition';
  const active = 'block px-4 py-2 bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition';

  const getClassName = (href: string) => {
    if (href === "/")
      { return pathname === "/" ? active : disabled }
    
    return pathname.startsWith(href) ? active : disabled;
  };

  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-teal-600 transition-colors relative w-10 h-10"
        aria-label="Toggle menu"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </div>
      </button>

      {/* Mobile menu dropdown */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 z-50 mx-3 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-2 mx-3">
          {Main_Links.map((link) => (
            <Link key={link.label} to={link.href} className={getClassName(link.href)}>{link.label}</Link>
          ))}
        <SearchBarInput />
        </div>
      </div>
    </div>
  )
}