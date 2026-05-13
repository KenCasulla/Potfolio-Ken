import { useState } from 'react'
import image from '../assets/image.png'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const url = isLogin ? 'http://localhost:5001/login' : 'http://localhost:5001/register'
    const body = isLogin ? { email, password } : { username, email, password }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) { setMessage(data.message); return }
      if (isLogin) {
        localStorage.setItem('token', data.token)
        setIsLoggedIn(true)
      } else {
        setMessage('Registered! Now login.')
        setIsLogin(true)
      }
    } catch {
      setMessage('Server error. Is the backend running?')
    } finally {
      setLoading(false)
    }
  }

  if (isLoggedIn) {
    return (
      <div className="text-center py-8 space-y-2">
        <p className="font-display text-2xl italic">Welcome back.</p>
        <p className="font-mono text-xs text-ink/40 uppercase tracking-widest">You're logged in.</p>
      </div>
    )
  }

  const inputClass = 'w-full font-mono text-sm border border-ink/20 bg-transparent px-3 py-2.5 outline-none focus:border-ink transition-colors placeholder:text-ink/30'

  return (
    <div className="space-y-5">
      <div className="flex border border-ink/10">
        {['Login', 'Register'].map((tab) => (
          <button
            key={tab}
            onClick={() => { setIsLogin(tab === 'Login'); setMessage('') }}
            className={`flex-1 font-mono text-xs tracking-widest uppercase py-2.5 transition-colors
              ${(tab === 'Login') === isLogin ? 'bg-ink text-paper' : 'text-ink/40 hover:text-ink'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {!isLogin && (
          <input type="text" placeholder="Username" className={inputClass}
            value={username} onChange={(e) => setUsername(e.target.value)} required />
        )}
        <input type="email" placeholder="Email" className={inputClass}
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className={inputClass}
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button
          type="submit"
          disabled={loading}
          className="w-full font-mono text-xs tracking-widest uppercase py-3 bg-ink text-paper hover:bg-ink/80 disabled:opacity-40 transition-colors"
        >
          {loading ? 'Loading…' : isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      {message && (
        <p className="font-mono text-xs text-ink/50 text-center border border-ink/10 py-2 bg-ink/5">
          {message}
        </p>
      )}
    </div>
  )
}

export default AuthPage
