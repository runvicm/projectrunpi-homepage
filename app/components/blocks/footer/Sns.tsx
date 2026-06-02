const SNS = [
   {
    label: 'Upwork',
    icon: 'up',
    href: 'https://www.upwork.com/freelancers/~0100c0f1552b67ba88',
  },
   {
    label: 'Linkedin',
    icon: 'in',
    href: 'https://www.linkedin.com/in/runvcm13/',
  },
  {
    label: 'Facebook',
    icon: 'f',
    href: 'https://www.facebook.com/runv.cm.2024/',
  },
  {
    label: 'Messenger',
    icon: 'm',
    href: 'https://m.me/runv.cm.2024',
  },
] as const

export const Sns = () => (
  <div>
    <h4 className="font-semibold text-teal-400 mb-4">Find Me</h4>
    <div className="flex gap-3">
      {SNS.map((sns) => (
        <a key={sns.label} href={sns.href} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 text-[16px] text-teal-400 font-extrabold hover:text-white  transition-colors">
          {sns.icon}
        </a>
      ))}
    </div>
  </div>
)
