import { useEffect, useState } from 'react'
import { useLang } from '../i18n/hook'

const SECTION_HREFS = [
  '#inicio',
  '#resumen',
  '#introduccion',
  '#objetivos',
  '#conclusiones',
  '#arquitectura',
  '#requisitos',
  '#calidad',
  '#costos',
  '#licencia',
  '#anexos',
]

function buildNavItems(ui) {
  return [
    { label: ui.nav.inicio, href: '#inicio' },
    {
      label: ui.nav.informe,
      sub: [
        { label: ui.nav.resumen, href: '#resumen' },
        { label: ui.nav.introduccion, href: '#introduccion' },
        { label: ui.nav.objetivos, href: '#objetivos' },
        { label: ui.nav.conclusiones, href: '#conclusiones' },
      ],
    },
    {
      label: ui.nav.tecnico,
      sub: [
        { label: ui.nav.arquitectura, href: '#arquitectura' },
        { label: ui.nav.requisitos, href: '#requisitos' },
        { label: ui.nav.calidad, href: '#calidad' },
      ],
    },
    {
      label: ui.nav.presupuesto,
      sub: [
        { label: ui.nav.costos, href: '#costos' },
        { label: ui.nav.licencia, href: '#licencia' },
      ],
    },
    { label: ui.nav.anexos, href: '#anexos' },
  ]
}

export default function Navbar() {
  const { lang, setLang, site } = useLang()
  const { ui } = site
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  const navItems = buildNavItems(ui)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const el = SECTION_HREFS
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
          <span className="exp-no">{ui.nav.expedienteCorto}</span>
        </a>
        <nav aria-label={ui.nav.ariaNav}>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {navItems.map((item) => {
              const isActive =
                item.href === active ||
                (item.sub && groupOf(active, navItems) === item)
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
        <div className="lang-toggle" aria-label="Idioma / Language">
          {['es', 'en'].map((l) => (
            <button
              key={l}
              type="button"
              className={`lang-btn${lang === l ? ' active' : ''}`}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className="nav-burger"
          onClick={() => {
            setOpen((o) => !o)
            setOpenGroup(null)
          }}
          aria-label={ui.nav.ariaMenu}
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

function groupOf(href, navItems) {
  return navItems.find((n) => n.sub?.some((s) => s.href === href))
}