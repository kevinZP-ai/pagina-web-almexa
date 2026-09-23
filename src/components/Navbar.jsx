import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang } from '../i18n/hook'

const ROUTES = ['/', '/srs', '/informe-analisis', '/informe-tecnico']

function labelFor(ui, to) {
  if (to === '/srs') return ui.nav.srs
  if (to === '/informe-analisis') return ui.nav.analisis
  if (to === '/informe-tecnico') return ui.nav.tecnico
  return ui.nav.inicio
}

export default function Navbar() {
  const { lang, setLang, site } = useLang()
  const { ui } = site
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="ALMEXA" />
          ALMEXA<span className="dot">.</span>
          <span className="exp-no">{ui.nav.expedienteCorto}</span>
        </Link>
        <nav aria-label={ui.nav.ariaNav}>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {ROUTES.map((to) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeAll}
                >
                  {labelFor(ui, to)}
                </NavLink>
              </li>
            ))}
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
          onClick={() => setOpen((o) => !o)}
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