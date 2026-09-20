import { useEffect, useState } from 'react'
import { useLang } from '../i18n/hook'

export default function ScrollStamp() {
  const { site } = useLang()
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let ticking = false
    const update = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        setPct(h > 0 ? Math.min(1, window.scrollY / h) : 0)
        ticking = false
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="scroll-stamp" aria-hidden="true">
      <span className="ss-label">{site.ui.nav.dossier}</span>
      <div className="ss-track">
        <span className="ss-fill" style={{ width: `${Math.round(pct * 100)}%` }} />
      </div>
      <span className="ss-pct">{Math.round(pct * 100)}%</span>
    </div>
  )
}