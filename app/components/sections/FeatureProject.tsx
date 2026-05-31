export const FeatureProject = () => (
   <section className="bg-linear-to-b from-cyan-50  via-blue-50 to-blue-100 pb-24 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Feature Project</p>
        <h3 className="text-4xl font-bold text-teal-700 mb-4 flex justify-center items-center">Project EnWaKou</h3>
        <div className="flex justify-center"><img src="/assets/enwakou/enwwakou_wordmark.svg" alt="enwakou-wordmark" className="mx-4" /></div>
        <p className="mt-2">Enwakou is a social role playing games</p>
      </div>

      <div className="relative grid grid-cols-3 gap-4">

          <img src="/assets/enwakou/showcase_001.jpg" alt="showcase001" className="w-full object-cover" />
          <img src="/assets/enwakou/showcase_002.jpg" alt="showcase002" className="w-full object-cover" />
          <img src="/assets/enwakou/showcase_003.jpg" alt="showcase003" className="w-full object-cover" />
       

        {/* <div className="absolute bottom-0 left-0 h-2/3 bg-linear-to-b from-transparent via-blue-50 to-blue-100 pointer-events-none  w-full"></div> */}
      </div>


      <div className="flex flex-wrap justify-center gap-3 mt-3">
        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Laravel</span>
        <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">InertiaJs</span>
        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">React</span>
        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Tailwind</span>
        <span className="px-2 py-1 bg-sky-200/30 text-sky-700 rounded-full text-sm font-medium">Docker</span>
        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">PostgreSQL</span>
        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Redis</span>
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Socket</span>
      </div>

      <div className="text-center mt-3">
        <p className="text-gray-600 text-lg mb-6">Under Developement</p>
      </div>

    </div>
   </section>
)