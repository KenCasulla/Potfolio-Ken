function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14 bg-paper relative overflow-hidden">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0a0a0a 1px, transparent 1px),
            linear-gradient(90deg, #0a0a0a 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative">

        {/* Status badge */}
        <div className="flex items-center gap-2 mb-10 animate-fade-up opacity-0-init animate-delay-100">
          <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
          <span className="font-mono text-xs tracking-widest uppercase text-ink/50">
            Available for work
          </span>
        </div>

        {/* Headline */}
        <div className="mb-8">
          <h1
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-ink animate-fade-up opacity-0-init animate-delay-200"
          >
            Hi, I'm
          </h1>
          <h1
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-ink italic animate-fade-up opacity-0-init animate-delay-300"
          >
            Ken Casulla
          </h1>
        </div>

        {/* Divider + tagline row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 animate-fade-up opacity-0-init animate-delay-400">
          <div className="w-16 h-px bg-ink/30 mt-2 hidden md:block" />
          <p className="font-body text-base text-ink/50 max-w-xs leading-relaxed">
            Junior web developer building minimal apps with clean code and purposeful design.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mt-12 animate-fade-up opacity-0-init animate-delay-500">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-ink text-paper hover:bg-ink/80 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-ink/20 text-ink hover:border-ink/60 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-10 right-0 hidden md:flex flex-col items-center gap-2 opacity-30">
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>scroll</span>
          <div className="w-px h-12 bg-ink" />
        </div>
      </div>
    </section>
  )
}

export default Hero
