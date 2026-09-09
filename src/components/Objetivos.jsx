import SectionHead from './SectionHead'
import { objetivos } from '../data/proyecto'

export default function Objetivos() {
  return (
    <section id="objetivos" className="alt" aria-label="Objetivos">
      <div className="wrap">
        <SectionHead num="03" title="Objetivos" sub="Meta del sistema" />
        <div className="card mb-18">
          <div className="card-head">
            <div className="card-icon tone-0">G</div>
            <div>
              <h3>Objetivo general</h3>
            </div>
          </div>
          <p className="para">{objetivos.general}</p>
        </div>
        <div className="grid grid-2">
          {objetivos.especificos.map((o, i) => (
            <div className="card" key={i}>
              <div className="card-head">
                <div className="card-icon tone-1">{String(i + 1).padStart(2, '0')}</div>
                <h3>Objetivo específico {i + 1}</h3>
              </div>
              <p className="desc">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}