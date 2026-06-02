import { Link, useLocation } from "react-router";
import { Main_Links } from "~/constant/main-links";



export const MainNavLink = () => {
  const { pathname } = useLocation()
 
  const disabled = 'px-4 py-2 text-gray-700 rounded-full hover:bg-teal-50 hover:text-teal-600 text-sm font-medium transition';
  const active = 'px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition';

  const getClassName = (href: string) => {
    if (href === "/")
      { return pathname === "/" ? active : disabled }
    
    return pathname.startsWith(href) ? active : disabled;
  };
  
  return (
    <div className="mx-1 items-center hidden lg:flex">
      {Main_Links.map((link) => (
          <Link key={link.label} to={link.href} className={getClassName(link.href)}>{link.label}</Link>
      ))}
    </div>
  )
}