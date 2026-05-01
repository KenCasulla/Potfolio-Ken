import { useEffect, useState } from 'react'
import { evaluate } from 'mathjs'

function Calculator() {
  const [value, setValue] = useState('')
  const [prev, setPrev] = useState('')

  const handleClick = (val) => setValue((p) => p + val)

  const calculate = () => {
    try {
      const result = evaluate(value).toString()
      setPrev(value + ' =')
      setValue(result)
    } catch {
      setValue('Error')
    }
  }

  const clear = () => {
    setValue('')
    setPrev('')
  }

  const backspace = () => setValue((p) => p.slice(0, -1))

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ('0123456789+-*/.'.includes(e.key)) setValue((p) => p + e.key)
      if (e.key === 'Enter') { e.preventDefault(); calculate() }
      if (e.key === 'Backspace') backspace()
      if (e.key === 'Escape') clear()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [value])

  const buttons = [
    { label: 'C', action: clear, style: 'border-ink/20 text-ink/50 hover:bg-ink/5' },
    { label: '⌫', action: backspace, style: 'border-ink/20 text-ink/50 hover:bg-ink/5' },
    { label: '%', action: () => handleClick('%'), style: 'border-ink/20 text-ink/50 hover:bg-ink/5' },
    { label: '÷', action: () => handleClick('/'), style: 'border-ink bg-ink text-paper hover:bg-ink/80' },
    ...['7','8','9'].map(n => ({ label: n, action: () => handleClick(n), style: 'border-ink/10 hover:bg-ink/5' })),
    { label: '×', action: () => handleClick('*'), style: 'border-ink bg-ink text-paper hover:bg-ink/80' },
    ...['4','5','6'].map(n => ({ label: n, action: () => handleClick(n), style: 'border-ink/10 hover:bg-ink/5' })),
    { label: '−', action: () => handleClick('-'), style: 'border-ink bg-ink text-paper hover:bg-ink/80' },
    ...['1','2','3'].map(n => ({ label: n, action: () => handleClick(n), style: 'border-ink/10 hover:bg-ink/5' })),
    { label: '+', action: () => handleClick('+'), style: 'border-ink bg-ink text-paper hover:bg-ink/80' },
    { label: '0', action: () => handleClick('0'), style: 'col-span-2 border-ink/10 hover:bg-ink/5' },
    { label: '.', action: () => handleClick('.'), style: 'border-ink/10 hover:bg-ink/5' },
    { label: '=', action: calculate, style: 'border-ink bg-ink text-paper hover:bg-ink/80' },
  ]

  return (
    <div className="w-full max-w-xs mx-auto select-none">
      {/* Display */}
      <div className="bg-ink text-paper p-5 mb-4 min-h-[100px] flex flex-col justify-end text-right">
        <p className="font-mono text-[10px] text-paper/30 mb-1 h-4 truncate">{prev}</p>
        <p className="font-mono text-3xl font-light tracking-tight truncate">{value || '0'}</p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            className={`font-mono text-sm py-4 border transition-colors duration-150 ${btn.style} ${btn.label === '0' ? 'col-span-2' : ''}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calculator
