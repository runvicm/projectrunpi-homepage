import { Box, Calendar, NotebookPen } from "lucide-react"
import { PersonalProjectCard } from "../blocks/cards/PersonalProjectCard"


export const PERSONAL_PROJECTS = [
  { title: 'Devlog', icon: <NotebookPen size={35}/>, status: 'prod', description: 'Developer Log', url: `https://devlog.projectrunpi.com` },
  { title: 'MC Server', icon: <Box size={35} />, status: 'prod', description: 'Minecraft Server Info Page', url: `https://minecraft.projectrunpi.com` },
  { title: 'Events', icon: <Calendar size={35} />, status: 'prod', description: 'PH Anime and Cosplay Events', url: `https://events.projectrunpi.com` },
]

export const PersonalProjects = () => (
  <section className="py-20 bg-linear-to-b from-white to-blue-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-teal-700 mb-4">Hobby Projects</h3>
        <p className="text-gray-600 text-lg mb-6">"Projects I'm building in my free time"</p>
        <div className="flex justify-center gap-3">
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Play</span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Build</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Share</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {PERSONAL_PROJECTS.map((project) => 
          <PersonalProjectCard key={project.title} {...project}  />
        )}
      </div>
    </div>
  </section>
)
