import SectionHead from './SectionHead'
import { resumenEjecutivo } from '../data/proyecto'

export default function Resumen() {
  return (
    <section id="resumen" aria-label="Resumen ejecutivo">
      <div className="wrap">
        <SectionHead num="01" title="Resumen ejecutivo" sub="Qué es ALMEXA" />
        {resumenEjecutivo.parrafos.map((p, i) => (
          <p className={i === 0 ? 'lead' : 'para'} key={i}>
            {p}
          </p>
        ))}
        <div className="stats">
          {resumenEjecutivo.stats.map((s) => (
            <div className="stat" key={s.etiqueta}>
              <div className="value">{s.valor}</div>
              <div className="label">{s.etiqueta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}