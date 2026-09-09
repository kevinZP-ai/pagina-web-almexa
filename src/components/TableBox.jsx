import { useEffect, useRef, useState } from 'react'

export default function TableBox({ children }) {
  const ref = useRef(null)
  const [scrollable, setScrollable] = useState(false)
  const [atEnd, setAtEnd] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      setScrollable(el.scrollWidth > el.clientWidth + 4)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 16)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div ref={ref} className={`table-wrap${scrollable && !atEnd ? ' scrollable' : ''}`}>
      {children}
    </div>
  )
}