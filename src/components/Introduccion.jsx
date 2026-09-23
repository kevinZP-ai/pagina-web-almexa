import SectionHead from './SectionHead'
import { useLang } from '../i18n/hook'

export default function Introduccion({ num = '02' }) {
  const { site } = useLang()
  const { introduccion, ui } = site
  const sec = ui.sections.introduccion

  return (
    <section id="introduccion" className="alt" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
        {introduccion.parrafos.map((p, i) => (
          <p className={i === 0 ? 'lead' : 'para'} key={i}>
            {p}
          </p>
        ))}
        <div className="grid grid-2 mb-34">
          <div className="card">
            <div className="card-head">
              <div className="card-icon tone-0">A</div>
              <h3>{ui.introduccion.alcance}</h3>
            </div>
            <ul className="check-list green">
              {introduccion.alcance.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="card-head">
              <div className="card-icon tone-1">R</div>
              <h3>{ui.introduccion.restricciones}</h3>
            </div>
            <ul className="check-list">
              {introduccion.restricciones.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}