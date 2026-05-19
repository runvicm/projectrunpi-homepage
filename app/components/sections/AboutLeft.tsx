export const AboutLeft = () => (  
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold text-teal-700 mb-9">Explore My Work</h3>
  
    <div className="space-y-9">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-xl">🚀</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Projects:</h4>
          <p className="text-gray-600 text-sm">Solo builds and creative experiments I've shipped.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-xl">🛠️</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Tech Stack & Learnings:</h4>
          <p className="text-gray-600 text-sm">Notes and insights from tools I've worked with.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-xl">📈</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Progress & Growth:</h4>
          <p className="text-gray-600 text-sm">How I'm evolving as a developer through hands-on building.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-xl">💡</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2"> Recent Updates:</h4>
          <p className="text-gray-600 text-sm">Latest things I'm working on and learning.</p>
        </div>
      </div>
    </div>
  </div>
)

