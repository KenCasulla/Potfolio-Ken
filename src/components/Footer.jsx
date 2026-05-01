function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-ink text-paper px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <p className="font-mono text-xs tracking-widest uppercase text-paper/30 mb-12">
          // 03 — Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Let's work<br />
              <span className="italic">together.</span>
            </h2>
          </div>
          <div className="space-y-4 md:pt-2">
            <p className="font-body text-sm text-paper/40 leading-relaxed">
              I'm open to junior roles, internships, and freelance projects. If you like what you see, reach out — I'd love to hear from you.
            </p>
            <a
              href="mailto:ken@example.com"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-paper border-b border-paper/20 pb-0.5 hover:border-paper/60 transition-colors"
            >
              ken@example.com →
            </a>
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-paper/10">
          <p className="font-mono text-xs text-paper/20 tracking-widest uppercase">
            Ken Casulla — Junior Web Developer
          </p>

          <div className="flex gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/KenCasulla' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
              { label: 'Email', href: 'mailto:ken@example.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase text-paper/30 hover:text-paper transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <p className="font-mono text-[10px] text-paper/15 mt-6">
          © {year} — Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
