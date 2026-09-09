import SectionHead from './SectionHead'
import { introduccion } from '../data/proyecto'

export default function Introduccion() {
  return (
    <section id="introduccion" className="alt" aria-label="Introducción y justificación">
      <div className="wrap">
        <SectionHead num="02" title="Introducción y justificación" sub="Propósito y alcance" />
        {introduccion.parrafos.map((p, i) => (
          <p className={i === 0 ? 'lead' : 'para'} key={i}>
            {p}
          </p>
        ))}
        <div className="grid grid-2 mb-34">
          <div className="card">
            <div className="card-head">
              <div className="card-icon tone-0">A</div>
              <h3>Alcance del sistema</h3>
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
              <h3>Restricciones</h3>
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