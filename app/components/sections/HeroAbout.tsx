export const HeroAbout = () => (
  <section className="max-w-4xl mx-auto px-8 py-16 text-center relative">
    <div className="absolute top-0 right-1/4 w-12 h-12 bg-teal-300 rounded-lg opacity-20 rotate-12"></div>
    
    <h2 className="text-5xl font-bold text-teal-800 mb-6">About ProjectRunpi</h2>
    
    <div className="flex items-center justify-center gap-2 mb-6">
      <p className="text-2xl text-gray-700">Hi there!</p>
      <span className="text-3xl">👋</span>
    </div>
    
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100 mb-6">
      <p className="text-gray-700 leading-relaxed mb-4">
        I'm Runvi, and this is my corner of the web where I document my journey in web development.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This project started when I got my hands on a Raspberry Pi 5 and decided to try self-hosting a website. What began as a curiosity about whether a tiny computer could actually run a real site turned into my testing ground for learning server management, deployment, and all the behind-the-scenes stuff that makes websites actually work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        I built this site to keep track of the projects I'm working on, the tools I'm experimenting with, and the lessons I learn along the way. It's part portfolio, part notebook, a place where I test ideas, figure out what works (and what doesn't), and watch my skills evolve over time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What started as a simple experiment has turned into a collection of hands-on learning, challenges, and solutions. Whether I'm diving into a new framework, wrestling with a stubborn bug, optimizing my server setup, or just tinkering for fun, this is where I capture it all. It keeps me organized and gives me a way to look back and see how far I've come.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thanks for stopping by!
      </p>
    </div>
  </section>
)