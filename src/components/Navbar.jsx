import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  {
    label: 'Informe',
    sub: [
      { label: 'Resumen ejecutivo', href: '#resumen' },
      { label: 'Introducción', href: '#introduccion' },
      { label: 'Objetivos', href: '#objetivos' },
      { label: 'Conclusiones', href: '#conclusiones' },
    ],
  },
  {
    label: 'Técnico',
    sub: [
      { label: 'Arquitectura', href: '#arquitectura' },
      { label: 'Requisitos', href: '#requisitos' },
      { label: 'Calidad', href: '#calidad' },
    ],
  },
  {
    label: 'Presupuesto',
    sub: [
      { label: 'Costos', href: '#costos' },
      { label: 'Licencia', href: '#licencia' },
    ],
  },
  { label: 'Anexos', href: '#anexos' },
]

const flatHrefs = navItems.flatMap((n) =>
  n.sub ? n.sub.map((s) => s.href) : [n.href]
)

function groupOf(href) {
  return navItems.find((n) => n.sub?.some((s) => s.href === href))
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const el = flatHrefs
        .map((h) => document.querySelector(h))
        .filter(Boolean)
        .findLast((n) => n.getBoundingClientRect().top <= 90)
      if (el) setActive(`#${el.id}`)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => {
    setOpen(false)
    setOpenGroup(null)
  }

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo" onClick={closeAll}>
          <img src="/favicon.svg" alt="ALMEXA" />
          ALMEXA<span className="dot">.</span>
          <span className="exp-no">Expediente ALM-2026-001</span>
        </a>
        <nav aria-label="Navegación principal">
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {navItems.map((item) => {
              const isActive =
                item.href === active ||
                (item.sub && groupOf(active) === item)
              if (item.sub) {
                const grpOpen = openGroup === item.label
                return (
                  <li className={`nav-group${grpOpen ? ' open' : ''}`} key={item.label}>
                    <button
                      type="button"
                      className={`nav-group-btn${isActive ? ' active' : ''}`}
                      aria-expanded={grpOpen}
                      aria-controls={`drop-${item.label}`}
                      onClick={() => setOpenGroup(grpOpen ? null : item.label)}
                    >
                      {item.label}
                      <span className="arr" aria-hidden="true">▸</span>
                    </button>
                    <ul className={`nav-drop${grpOpen ? ' open' : ''}`} id={`drop-${item.label}`}>
                      {item.sub.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            className={active === s.href ? 'active' : ''}
                            onClick={closeAll}
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active === item.href ? 'active' : ''}
                    onClick={closeAll}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <button
          className="nav-burger"
          onClick={() => {
            setOpen((o) => !o)
            setOpenGroup(null)
          }}
          aria-label="Menú"
          aria-expanded={open}
        >
          {open ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}