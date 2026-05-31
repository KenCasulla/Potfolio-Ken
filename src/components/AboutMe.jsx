import ProfilePic from '../assets/profile.jpg'
import ImageKo from '../assets/ProfileImage.jpg'

function AboutMe() {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'Vite', 'Figma', 'Docker', 'Bootstrap']

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24 bg-ink text-paper">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section label */}
        <p className="font-mono text-xs tracking-widest uppercase text-paper/30 mb-12">
          // 01 — About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className="relative">
            <div className="relative w-full max-w-sm">
              {/* Offset border frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-paper/10" />
              <img
                src={ImageKo}
                alt="Ken Casulla"
                className="w-full aspect-square object-cover grayscale"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="w-full aspect-square bg-paper/5 border border-paper/10 items-center justify-center hidden"
              >
                <span className="font-mono text-xs text-paper/30">profile.jpg</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                I build minimal,<br />
                <span className="italic">purposeful apps.</span>
              </h2>
              <p className="font-body text-paper/50 leading-relaxed text-sm">
                I'm a junior web developer passionate about building clean, fast, and functional web experiences. I focus on writing code that is readable, well-structured, and easy to maintain.
              </p>
              <p className="font-body text-paper/50 leading-relaxed text-sm">
                Outside of development, I enjoy exploring new technologies, contributing to projects, and refining my eye for clean design.
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-paper/30 mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] tracking-wide uppercase px-3 py-1.5 border border-paper/10 text-paper/50 hover:border-paper/30 hover:text-paper/80 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
