import { NotebookPen, Search } from "lucide-react";
import { Link } from "react-router";

export const SearchBarInput = () => (
  <div className="relative">
    <Link to="https://devlog.projectrunpi.com" className="flex gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg px-2 py-1"><NotebookPen />Dev Log</Link>
    {/* <input name="seacrh" type="text" placeholder="Search..." className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-teal-500" />
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"><Search /></div> */}
  </div>
)

