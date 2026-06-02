const STACKS = [
  { category: 'Development Environment',
    info: [
      {
        label: 'VScode',
        icon: '/icons/vscode.svg',
        desc: 'My daily driver for coding. Quick and works great with everything.',
        href: 'https://code.visualstudio.com/docs',
        active: 'Active'
      },
      {
        label: 'Docker Windows',
        icon: 'https://cdn.simpleicons.org/docker/2496ED',
        desc: 'Same Docker setup as production, just on Windows. Keeps dev and prod identical and my system clean.',
        href: 'https://docs.docker.com/manuals/',
        active: 'Active'
      },
      {
        label: 'Dev Container',
        icon: 'https://cdn.simpleicons.org/developmentcontainers/2753E3',
        desc: 'Creates isolated environments for each project. Makes switching between projects instant and painless.',
        href: 'https://code.visualstudio.com/docs/devcontainers/containers',
        active: 'Active'
      },
      {
        label: 'Git',
        icon: 'https://cdn.simpleicons.org/git/F05032',
        desc: 'Version control. Tracks changes, handles branches, lets me go back when I break things.',
        href: 'https://git-scm.com/docs',
        active: 'Active'
      },
      {
        label: 'Gitea',
        icon: 'https://cdn.simpleicons.org/gitea/609926',
        desc: 'Self-hosted Git server I ran on my Pi. Moved back to GitHub to keep things simpler.',
        href: 'https://docs.gitea.com/',
        active: 'Used'
      },
      {
        label: 'Github',
        icon: 'https://cdn.simpleicons.org/github/181717',
        desc: 'Backup for my repositories. Keeps an off-site copy just in case.',
        href: 'https://docs.github.com/en',
        active: 'Active'
      }
    ]
  },
  { category: 'Frontend',
    info: [
      {
        label: 'React',
        icon: 'https://cdn.simpleicons.org/react/61DAFB',
        desc: 'What I use for front-end work. Still learning, but it\'s powering my current projects.',
        href: 'https://react.dev/learn',
        active: 'Active'
      },
      {
        label: 'React Router 7',
        icon: 'https://cdn.simpleicons.org/reactrouter/CA4245',
        desc: 'Currently my go-to for frontend routing. Switched to it for the built-in SSR support out of the box.',
        href: 'https://reactrouter.com/home',
        active: 'Active'
      },
      {
        label: 'Typescript',
        icon: 'https://cdn.simpleicons.org/typescript/3178C6',
        desc: 'Catches bugs before runtime. Still learning it, but already writing more reliable code.',
        href: 'https://www.typescriptlang.org/docs/',
        active: 'Active'
      },
      {
        label: 'InertiaJS',
        icon: 'https://cdn.simpleicons.org/inertia/9553E9',
        desc: 'Bridges Laravel and React without needing a separate API. Makes full-stack development way smoother.',
        href: 'https://inertiajs.com/docs/v2/getting-started/index',
        active: 'Active'
      },
      {
        label: 'Tailwind CSS',
        icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
        desc: 'CSS framework that makes styling quick. Still picking it up, but no more writing custom CSS.',
        href: 'https://tailwindcss.com/docs/installation/using-vite',
        active: 'Active'
      },
      {
        label: 'Vite',
        icon: 'https://cdn.simpleicons.org/vite/9135FF',
        desc: 'Bundles and serves React during development. Super fast refresh and modern build tooling.',
        href: 'https://vite.dev/guide/',
        active: 'Active'
      }
    ]
  },
  { category: 'Backend',
    info: [
      {
        label: 'Laravel',
        icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
        desc: 'My go-to PHP framework. Works great with Inertia and has tons of built-in features.',
        href: 'https://laravel.com/docs/12.x',
        active: 'Active'
      },
      {
        label: 'InertiaJS',
        icon: 'https://cdn.simpleicons.org/inertia/9553E9',
        desc: 'Takes care of the backend-to-frontend connection. Routes and data flow to React without an API.',
        href: 'https://inertiajs.com/docs/v2/getting-started/index',
        active: 'Active'
      },
      {
        label: 'MySQL',
        icon: 'https://cdn.simpleicons.org/mysql/4479A1',
        desc: 'My go-to database for structured data. Reliable and works naturally with PHP.',
        href: 'https://dev.mysql.com/doc/',
        active: 'used'
      },
      {
        label: 'PostgreSQL',
        icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
        desc: 'Switching to this database for a lighter and more powerful schema.',
        href: 'https://www.postgresql.org/docs/',
        active: 'Active'
      }
    ]
  },
  { category: 'Infrastructure & Deployment',
    info: [
      {        
        label: 'Raspberry Pi 5',
        icon: 'https://cdn.simpleicons.org/raspberrypi/A22846',
        desc: 'Where it all actually runs. Small but handles all my production hosting.',
        href: 'https://www.raspberrypi.com/documentation/',
        active: 'Active'
      },
      {
        label: 'Ubuntu',
        icon: 'https://cdn.simpleicons.org/ubuntu/E95420',
        desc: 'The OS behind everything. Reliable, secure, and simple to work with.',
        href: 'https://help.ubuntu.com/',
        active: 'Active'
      },
      {
        label: 'Docker',
        icon: 'https://cdn.simpleicons.org/docker/2496ED',
        desc: 'Keeps everything in its own container so nothing breaks each other. Deployment\'s a breeze too.',
        href: 'https://docs.docker.com/manuals/',
        active: 'Active'
      },
      {
        label: 'Apache',
        icon: 'https://cdn.simpleicons.org/apache/D22128',
        desc: 'Serves everything up. Works perfectly with PHP and gives me the control I want.',
        href: 'https://httpd.apache.org/docs-project/',
        active: 'Used'
      },
        {
        label: 'Nginx',
        icon: 'https://cdn.simpleicons.org/nginx/009639',
        desc: '"My web server of choice. Handles reverse proxying and serves everything cleanly on the Pi.',
        href: 'https://nginx.org/en/docs/index.html',
        active: 'Active'
      },
      {
        label: 'Cloudflare',
        icon: 'https://cdn.simpleicons.org/cloudflare/F38020',
        desc: 'My DNS and security layer. Makes sites faster and blocks attacks before they reach my Pi.',
        href: 'https://developers.cloudflare.com/',
        active: 'Active'
      },
       {
        label: 'Cloudflare Workers & Pages',
        icon: 'https://cdn.simpleicons.org/cloudflareworkers/F38020',
        desc: 'Hosts all my SPAs. Supports SSR and easy to deploy.',
        href: 'https://developers.cloudflare.com/workers/',
        active: 'Active'
      },
      {
        label: 'Jenkins',
        icon: 'https://cdn.simpleicons.org/jenkins/D24939',
        desc: 'Used for my deployment pipeline and other automation.',
        href: 'https://www.jenkins.io/doc/',
        active: 'Used'
      },
    ]
  },
  { category: 'Admin/Management Tools',
    info: [
      {
        label: 'Filament',
        icon: 'https://cdn.simpleicons.org/filament/FDAE4B',
        desc: 'Handles admin panels and dashboards. Saves time building backend interfaces for managing data.',
        href: 'https://filamentphp.com/docs',
        active: 'Active'
      },
      {
        label: 'Cockpit',
        icon: 'https://cdn.simpleicons.org/cockpit/0066CC',
        desc: 'Handles admin panels, dashboards and Docker Management.',
        href: 'https://cockpit-project.org/documentation.html',
        active: 'Active'
      },
      {
        label: 'Webmin',
        icon: 'https://cdn.simpleicons.org/webmin/7DA0D0',
        desc: 'Makes managing the Pi and deploying apps easier without SSH-ing into everything.',
        href: 'https://webmin.com/docs/',
        active: 'Active'
      },
      {
        label: 'phpMyAdmin',
        icon: 'https://cdn.simpleicons.org/phpmyadmin/6C78AF',
        desc: 'GUI for managing MySQL databases. Easier than command line for quick edits and exploration.',
        href: 'https://www.phpmyadmin.net/docs/',
        active: 'Used'
      },
        {
        label: 'pgAdmin',
        icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
        desc: 'GUI for managing PostgreSQL. Handles users and database management.',
        href: 'https://www.pgadmin.org/docs/pgadmin4/latest/index.html',
        active: 'Active'
      },
    ]
  },
] as const


export const Stacks = () => {
  return (
    <>
      {STACKS.map((stack, index) => (
        <section key={index} className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
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
                        <div className={`border rounded-full px-2 text-xs ${info.active === 'Active' ? 'text-green-700 bg-green-200' : 'text-gray-700 bg-gray-300'}`}>{info.active}</div>
                        <a href="https://laravel.com/docs" target="_blank" className="text-sm text-teal-600 hover:text-teal-700 underline">Docs</a>
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