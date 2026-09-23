import SectionHead from './SectionHead'
import { useLang } from '../i18n/hook'

export default function Objetivos({ num = '03' }) {
  const { site } = useLang()
  const { objetivos, ui } = site
  const sec = ui.sections.objetivos

  return (
    <section id="objetivos" className="alt" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
        <div className="card mb-18">
          <div className="card-head">
            <div className="card-icon tone-0">G</div>
            <div>
              <h3>{ui.objetivos.general}</h3>
            </div>
          </div>
          <p className="para">{objetivos.general}</p>
        </div>
        <div className="grid grid-2">
          {objetivos.especificos.map((o, i) => (
            <div className="card" key={i}>
              <div className="card-head">
                <div className="card-icon tone-1">{String(i + 1).padStart(2, '0')}</div>
                <h3>{ui.objetivos.especifico} {i + 1}</h3>
              </div>
              <p className="desc">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}