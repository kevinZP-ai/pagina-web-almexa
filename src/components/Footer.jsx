import { proyecto } from '../data/proyecto'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <div className="f-brand">
            ALMEXA<span className="dot">.</span>
          </div>
          <p>
            Sistema de Gestión de Inventario y Bodega · Proyecto formativo ADSO
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
          Fin del expediente · {proyecto.fecha} · Folio 009
          <br />
          <a href="#inicio" className="f-top">Volver a la portada ↑</a>
        </div>
      </div>
    </footer>
  )
}