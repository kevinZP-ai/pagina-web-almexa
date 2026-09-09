import { useEffect, useRef, useState } from 'react'

export default function SectionHead({ num, title, sub }) {
  const [on, setOn] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="section-head" ref={ref}>
      <span className="section-num">{num}</span>
      <h2>{title}</h2>
      {sub && <span className="sub">— {sub} · Folio 0{parseInt(num, 10)}</span>}
      <span className={`seal${on ? ' on' : ''}`} aria-hidden="true">
        Revisado
      </span>
    </div>
  )
}