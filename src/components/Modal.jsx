import { useEffect, useState } from 'react'

function Modal({ isOpen, onClose, title, children }) {
  const [visible, setVisible] = useState(false)
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setRendered(true)
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
      document.body.style.overflow = ''
      const t = setTimeout(() => setRendered(false), 300)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  if (!rendered) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative bg-paper w-full max-w-md max-h-[85vh] overflow-y-auto
          transition-all duration-300
          ${visible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
          {title && (
            <p className="font-mono text-xs tracking-widest uppercase text-ink/50">
              {title}
            </p>
          )}
          <button
            onClick={onClose}
            className="ml-auto font-mono text-xs text-ink/40 hover:text-ink transition-colors p-1"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
