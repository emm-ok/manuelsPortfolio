import { useEffect, useState } from "react"

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const count = Math.floor(window.innerWidth / 20)

    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }))

    setParticles(generated)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {particles.map(p => (
        <span
          key={p.id}
          className="bg-particle"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
