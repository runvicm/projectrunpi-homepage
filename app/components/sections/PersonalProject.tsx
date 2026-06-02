import { Box, Calendar, NotebookPen } from "lucide-react"
import { PersonalProjectCard } from "../blocks/cards/PersonalProjectCard"

export const PERSONAL_PROJECTS = [
  {
    title: 'Devlog',
    icon: <NotebookPen size={35}/>,
    status: 'prod',
    description: 'A running log of what I\'m building, breaking, and shipping',
    url: `https://devlog.projectrunpi.com`
  },
  {
    title: 'MC Server',
    icon: <Box size={35} />,
    status: 'prod',
    description: 'Info Page and updates for my self-hosted Minecraft server',
    url: `https://minecraft.projectrunpi.com`
  },
  {
    title: 'Events',
    icon: <Calendar size={35} />,
    status: 'prod',
    description: 'A curated list of PH anime and cosplay events so you never miss one.',
    url: `https://events.projectrunpi.com` },
]

export const PersonalProjects = () => (
  <section className="pb-24 bg-linear-to-b from-blue-100 to-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-teal-700 mb-4">Personal Projects</h3>
        <p className="text-gray-600 text-lg mb-6">Things I build on my own time.</p>
        <div className="flex justify-center gap-2">
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Frontend</span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Backend</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Fullstack</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">DevOps</span>
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
