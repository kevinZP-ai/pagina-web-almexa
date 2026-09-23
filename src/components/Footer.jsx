import { useLang } from '../i18n/hook'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { site } = useLang()
  const { proyecto, ui } = site

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <div className="f-brand">
            ALMEXA<span className="dot">.</span>
          </div>
          <p>
            {ui.footer.desc}
            <br />
            {proyecto.centro} · {proyecto.ficha}
          </p>
        </div>
        <div className="f-meta">
          <b>{proyecto.grupo}</b>
          <br />
          {proyecto.integrantes.join(' · ')}
          <br />
          {proyecto.instructor}
          <br />
          {ui.footer.fin} · {proyecto.fecha} · {ui.footer.folio}
          <br />
          <Link to="/" className="f-top">{ui.footer.volver}</Link>
        </div>
      </div>
    </footer>
  )
}