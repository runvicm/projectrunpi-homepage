import { Link } from "react-router"
import { Main_Links } from "~/constant/main-links"

export const FootNav = () => (
  <div>
    <h4 className="font-semibold text-teal-400 mb-4">Quick Links</h4>
    <div className="space-y-2">
      {Main_Links.map((link) => (
        <Link key={link.label} to={link.href} className="block text-gray-400 hover:text-teal-400 text-sm transition-colors">{link.label}</Link>
      ))}
    </div>
  </div>
)