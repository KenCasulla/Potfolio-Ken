import { useState, useEffect } from 'react'

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError('')
    setWeather(null)
    try {
      const res = await fetch(`http://localhost:5001/weather?city=${encodeURIComponent(city)}`)
      if (!res.ok) throw new Error('City not found')
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Enter') fetchWeather() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [city])

  return (
    <div className="space-y-4">
      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city…"
          className="flex-1 font-mono text-sm border border-ink/20 bg-transparent px-3 py-2.5 outline-none focus:border-ink transition-colors placeholder:text-ink/30"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="font-mono text-xs tracking-widest uppercase px-4 py-2.5 bg-ink text-paper hover:bg-ink/80 transition-colors"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="font-mono text-xs text-ink/40 text-center py-4">Loading…</p>
      )}

      {error && (
        <p className="font-mono text-xs text-ink/60 text-center py-4 border border-ink/10 bg-ink/5">
          {error}
        </p>
      )}

      {weather && (
        <div className="border border-ink/10 p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display text-2xl">{weather.name}</h3>
              <p className="font-mono text-xs text-ink/40 uppercase tracking-widest mt-1">
                {weather.weather[0].description}
              </p>
            </div>
            <p className="font-display text-4xl italic">{Math.round(weather.main.temp)}°</p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-ink/10">
            {[
              { label: 'Feels like', value: `${Math.round(weather.main.feels_like)}°C` },
              { label: 'Humidity', value: `${weather.main.humidity}%` },
              { label: 'Wind', value: `${Math.round(weather.wind.speed)} m/s` },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/30">{label}</p>
                <p className="font-mono text-sm text-ink mt-1">{value}</p>
              </div>
            ))}
          </div>

          <p className={`font-mono text-xs tracking-wide ${weather.weather[0].main === 'Rain' ? 'text-ink/60' : 'text-ink/60'}`}>
            {weather.weather[0].main === 'Rain' ? '☂ Bring an umbrella today.' : '☀ Nice weather today.'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Weather
