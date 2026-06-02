export const CORE_STACKS = [
  {label: 'laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20', color: '#FF2D20', desc: '', href: ''},
  {label: 'React Router v7', icon: 'https://cdn.simpleicons.org/reactrouter/CA4245', color: '#CA4245', desc: '', href: ''},
  {label: 'typescript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6', desc: '', href: ''},
  {label: 'tailwindcss', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4', desc: '', href: ''},
] as const

export const CoreStacks = () => (
  <div className="mt-8">
    <p className="text-gray-500 text-sm mb-4">Proof of concept? This site runs on it.</p>
    <div className="flex items-center justify-center gap-6">
      {CORE_STACKS.map((stack, index) => (
        <a key={index} href="/tech-stack" className="group" title="React">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all">
            <img src={stack.icon} alt={stack.label} />
          </div>
        </a>
      ))}
    </div>
  </div>
)


