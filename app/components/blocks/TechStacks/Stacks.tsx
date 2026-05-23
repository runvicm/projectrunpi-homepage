const STACKS = [
  { category: 'Development Environment',
    info: [
      {
        label: 'VScode',
        icon: '/icons/vscode.svg',
        desc: 'My daily driver for coding. Quick and works great with everything.',
        href: 'https://code.visualstudio.com/docs'
      },
      {
        label: 'Docker Windows',
        icon: 'https://cdn.simpleicons.org/docker/2496ED',
        desc: 'Same Docker setup as production, just on Windows. Keeps dev and prod identical and my system clean.',
        href: 'https://docs.docker.com/manuals/'
      },
      {
        label: 'Dev Container',
        icon: 'https://cdn.simpleicons.org/developmentcontainers/2753E3',
        desc: 'Creates isolated environments for each project. Makes switching between projects instant and painless.',
        href: 'https://code.visualstudio.com/docs/devcontainers/containers'
      },
      {
        label: 'Git',
        icon: 'https://cdn.simpleicons.org/git/F05032',
        desc: 'Version control. Tracks changes, handles branches, lets me go back when I break things.',
        href: 'https://git-scm.com/docs'
      },
      {
        label: 'Gitea',
        icon: 'https://cdn.simpleicons.org/gitea/609926',
        desc: 'My self-hosted Git server. Gives me full control over my repos and keeps everything on my own infrastructure.',
        href: 'https://docs.gitea.com/'
      },
      {
        label: 'Github',
        icon: 'https://cdn.simpleicons.org/github/181717',
        desc: 'Backup for my repositories. Keeps an off-site copy just in case.',
        href: 'https://docs.github.com/en'
  }]},

  { category: 'Frontend',
    info: [
      {
        label: 'React',
        icon: 'https://cdn.simpleicons.org/react/61DAFB',
        desc: 'What I use for front-end work. Still learning, but it\'s powering my current projects.',
        href: 'https://react.dev/learn'
      },
      {
        label: 'Typescript',
        icon: 'https://cdn.simpleicons.org/typescript/3178C6',
        desc: 'Catches bugs before runtime. Still learning it, but already writing more reliable code.',
        href: 'https://www.typescriptlang.org/docs/'
      },
      {
        label: 'InertiaJS',
        icon: 'https://cdn.simpleicons.org/inertia/9553E9',
        desc: 'Bridges Laravel and React without needing a separate API. Makes full-stack development way smoother.',
        href: 'https://inertiajs.com/docs/v2/getting-started/index'
      },
      {
        label: 'Tailwind CSS',
        icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
        desc: 'CSS framework that makes styling quick. Still picking it up, but no more writing custom CSS',
        href: 'https://tailwindcss.com/docs/installation/using-vite'
      },
      {
        label: 'vite',
        icon: 'https://cdn.simpleicons.org/vite/9135FF',
        desc: 'Bundles and serves React during development. Super fast refresh and modern build tooling.',
        href: 'https://vite.dev/guide/'
  }]},
  { category: 'Backend',
    info: [
      {
        label: 'Laravel',
        icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
        desc: 'My go-to PHP framework. Works great with Inertia and has tons of built-in features.',
        href: 'https://laravel.com/docs/12.x'
      },
      {
        label: 'InertiaJS',
        icon: 'https://cdn.simpleicons.org/inertia/9553E9',
        desc: 'Takes care of the backend-to-frontend connection. Routes and data flow to React without an API.',
        href: 'https://inertiajs.com/docs/v2/getting-started/index'
      },
      {
        label: 'MySQL',
        icon: 'https://cdn.simpleicons.org/mysql/4479A1',
        desc: 'My go-to database for structured data. Reliable and works naturally with PHP.',
        href: 'https://dev.mysql.com/doc/'
  }]},
  { category: 'Infrastructure & Deployment',
    info: [
      {        
        label: 'Raspberry Pi 5',
        icon: 'https://cdn.simpleicons.org/raspberrypi/A22846',
        desc: 'Where it all actually runs. Small but handles all my production hosting.',
        href: 'https://www.raspberrypi.com/documentation/'
      },
      {
        label: 'Ubuntu',
        icon: 'https://cdn.simpleicons.org/ubuntu/E95420',
        desc: 'The OS behind everything. Reliable, secure, and simple to work with.',
        href: 'https://help.ubuntu.com/'
      },
      {
        label: 'Docker',
        icon: 'https://cdn.simpleicons.org/docker/2496ED',
        desc: 'Keeps everything in its own container so nothing breaks each other. Deployment\'s a breeze too.',
        href: 'https://docs.docker.com/manuals/'
      },
      {
        label: 'Apache',
        icon: 'https://cdn.simpleicons.org/apache/D22128',
        desc: 'Serves everything up. Works perfectly with PHP and gives me the control I want.',
        href: 'https://httpd.apache.org/docs-project/'
      },
      {
        label: 'Cloudflare',
        icon: 'https://cdn.simpleicons.org/cloudflare/F38020',
        desc: 'My DNS and security layer. Makes sites faster and blocks attacks before they reach my Pi.',
        href: 'https://developers.cloudflare.com/'
      },
      {
        label: 'Jenkins',
        icon: 'https://cdn.simpleicons.org/jenkins/D24939',
        desc: 'Use for my deployment pipeline and other automation',
        href: 'https://www.jenkins.io/doc/'
      },
]},

  { category: 'Admin/Management Tools',
    info: [
      {
        label: 'Filament',
        icon: 'https://cdn.simpleicons.org/filament/FDAE4B',
        desc: 'Handles admin panels and dashboards. Saves time building backend interfaces for managing data.',
        href: 'https://filamentphp.com/docs'
      },
      {
        label: 'phpMyAdmin',
        icon: 'https://cdn.simpleicons.org/phpmyadmin/6C78AF',
        desc: 'GUI for managing MySQL databases. Easier than command line for quick edits and exploration.',
        href: 'https://www.phpmyadmin.net/docs/'
      },
      {
        label: 'Webmin',
        icon: 'https://cdn.simpleicons.org/webmin/7DA0D0',
        desc: 'Makes managing the Pi and deploying apps easier without SSH-ing into everything',
        href: 'https://webmin.com/docs/'
  }]},
] as const



export const Stacks = () => {
  return (
    <>
      {STACKS.map((stack, index) => (
        <section key={index} className="max-w-6xl mx-auto px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl">
              <img src={stack.icon} alt={stack.category} />
            </div> */}
            <h3 className="text-2xl font-bold text-teal-800">{stack.category}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stack.info.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-red-100">
                <div className="flex items-start gap-4">
                    {info.icon !== null && (
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                          <img src={info.icon} alt={info.label} />
                      </div>
                    )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-800">{info.label}</h4>
                      <div className="flex items-center gap-2">
                        <a href="https://laravel.com/docs" target="_blank" className="text-xs text-teal-600 hover:text-teal-700 underline">Docs</a>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{info.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>  
        </section>
      ))}
    </>
  )
}