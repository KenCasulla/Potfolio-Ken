import { useState } from 'react'
import WeatherPic from '../assets/weather.jpg'
import ProfilePic from '../assets/profile.jpg'
import AuthImage from '../assets/image.png'
import BlogImage from '..//assets/Blog.jpg'
import CalcImage from '../assets/Calculator.jpg'
import Modal from './Modal.jsx'
import Calculator from './Calculator.jsx'
import Weather from './Weather.jsx'
import AuthPage from './AuthPage.jsx'

const projects = [
  {
    id: 'calculator',
    index: '01',
    title: 'Calculator',
    type: 'Web App',
    description: 'A keyboard-supported calculator built with React and mathjs. Features real-time evaluation and a minimal interface.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'mathjs'],
    image: CalcImage,
  },
  {
    id: 'weather',
    index: '02',
    title: 'Weather App',
    type: 'API Integration',
    description: 'Real-time weather data fetched from OpenWeatherMap via a Node.js/Express backend. Displays temperature, humidity, and conditions.',
    stack: ['React', 'Node.js', 'Express', 'OpenWeatherMap API'],
    image: WeatherPic,
  },
  {
    id: 'auth',
    index: '03',
    title: 'Auth System',
    type: 'Full Stack',
    description: 'A complete login and registration flow with JWT authentication, bcrypt password hashing, and MongoDB user storage.',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    image: AuthImage,
  },

  {
    id: `blogpost`,
    index: `04`,
    title: `blogPost App`,
    type: `Full Stack`,
    description: `A full-stack blogging platform with authentication, CRUD operation, and mongoDb integration`,
    stack: [`react`, `node.js`, `express`, `mongodb`, `jwt`, `docker`, `rest API`],
    image: BlogImage,
    external: true,
    githubLink: `https://github.com/KenCasulla/Luto-Blog.git`
  },
]

function Projects() {
  const [active, setActive] = useState(null)
  const [calcOpen, setCalcOpen] = useState(false)
  const [weatherOpen, setWeatherOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)

  const openProject = (project) => {
    if(project.external) {
      window.open(project.githubLink, `blank`)
      return
    }

    setActive(project.id)
  }


  const closeProject = () => setActive(null)

  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-paper">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="font-mono text-xs tracking-widest uppercase text-ink/30 mb-12">
          // 02 — Projects
        </p>

        <h2 className="font-display text-4xl md:text-5xl mb-16 leading-tight">
          Featured<br /><span className="italic">Work</span>
        </h2>

        {/* Project list */}
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col md:flex-row md:items-center gap-4 py-8 cursor-pointer hover:bg-ink/[0.02] transition-colors -mx-4 px-4"
              onClick={() => openProject(project)}
            >
              {/* Index */}
              <span className="font-mono text-xs text-ink/20 w-8 shrink-0">{project.index}</span>

              {/* Thumbnail */}
              <div className="w-full md:w-20 h-14 shrink-0 overflow-hidden bg-ink/5 border border-ink/10">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 transition-opacity" />
                ) : (
                  <div className="w-full h-full bg-ink/5 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-ink/20 uppercase tracking-widest">soon</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl">{project.title}</h3>
                  <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest hidden md:inline">{project.type}</span>
                </div>
                <p className="font-body text-sm text-ink/40 mt-1 line-clamp-1">{project.description}</p>
              </div>

              {/* Stack pills */}
              <div className="hidden lg:flex flex-wrap gap-1.5 max-w-[220px] justify-end">
                {project.stack.slice(0, 3).map((s) => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-ink/10 text-ink/30">
                    {s}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="font-mono text-ink/20 group-hover:text-ink group-hover:translate-x-1 transition-all duration-200 text-sm">
                →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Calculator Project Modal ── */}
      <Modal
        isOpen={active === 'calculator'}
        onClose={closeProject}
        title="01 — Calculator"
      >
        <h2 className="font-display text-2xl mb-2">Calculator</h2>
        <p className="font-body text-sm text-ink/50 mb-6 leading-relaxed">
          Built with Vite + React and styled with Tailwind CSS. Features keyboard support, real-time evaluation via mathjs, and clean single-screen UI.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {projects[0].stack.map(s => (
            <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-ink/10 text-ink/40">{s}</span>
          ))}
        </div>
        <button
          onClick={() => { closeProject(); setCalcOpen(true) }}
          className="w-full font-mono text-xs tracking-widest uppercase py-3 bg-ink text-paper hover:bg-ink/80 transition-colors"
        >
          Open Calculator →
        </button>
      </Modal>

      <Modal isOpen={calcOpen} onClose={() => setCalcOpen(false)} title="Calculator App">
        <Calculator />
      </Modal>

      {/* ── Weather Project Modal ── */}
      <Modal
        isOpen={active === 'weather'}
        onClose={closeProject}
        title="02 — Weather App"
      >
        <h2 className="font-display text-2xl mb-2">Weather App</h2>
        <p className="font-body text-sm text-ink/50 mb-6 leading-relaxed">
          Fetches real-time weather data from OpenWeatherMap through a custom Express backend. Displays temperature, conditions, humidity, and wind speed.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {projects[1].stack.map(s => (
            <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-ink/10 text-ink/40">{s}</span>
          ))}
        </div>
        <button
          onClick={() => { closeProject(); setWeatherOpen(true) }}
          className="w-full font-mono text-xs tracking-widest uppercase py-3 bg-ink text-paper hover:bg-ink/80 transition-colors"
        >
          Open Weather App →
        </button>
      </Modal>

      <Modal isOpen={weatherOpen} onClose={() => setWeatherOpen(false)} title="Weather App">
        <Weather />
      </Modal>

      {/* ── Auth Project Modal ── */}
      <Modal
        isOpen={active === 'auth'}
        onClose={closeProject}
        title="03 — Auth System"
      >
        <h2 className="font-display text-2xl mb-2">Auth System</h2>
        <p className="font-body text-sm text-ink/50 mb-6 leading-relaxed">
          Full-stack login and registration with JWT tokens, bcrypt hashing, and MongoDB. Built to learn authentication patterns from scratch.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {projects[2].stack.map(s => (
            <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-ink/10 text-ink/40">{s}</span>
          ))}
        </div>
        <button
          onClick={() => { closeProject(); setAuthOpen(true) }}
          className="w-full font-mono text-xs tracking-widest uppercase py-3 bg-ink text-paper hover:bg-ink/80 transition-colors"
        >
          Open Auth Demo →
        </button>
      </Modal>

      <Modal isOpen={authOpen} onClose={() => setAuthOpen(false)} title="Auth System Demo">
        <AuthPage />
      </Modal>
    </section>
  )
}

export default Projects
