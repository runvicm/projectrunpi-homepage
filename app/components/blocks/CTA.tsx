import { Rocket } from "lucide-react";
import { Link } from "react-router";

export const CTA = () => (
  <div className="flex flex-wrap justify-center gap-6 mt-15">
    <Link to="/services" className="w-44 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 border-2 border-transparent">
      <Rocket />
      <span>Services</span>
    </Link>
    <a href="https://github.com/runvicm" className="w-44 px-6 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
      <span style={{ color: '#181717'}}><img src="https://cdn.simpleicons.org/github" alt="github" width={30} /></span>
      <span>Repository</span>
    </a>
  </div>
)
