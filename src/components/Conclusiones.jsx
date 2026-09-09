import SectionHead from './SectionHead'
import { conclusiones, recomendaciones } from '../data/proyecto'

export default function Conclusiones() {
  return (
    <section id="conclusiones" className="alt" aria-label="Conclusiones y recomendaciones">
      <div className="wrap">
        <SectionHead num="09" title="Conclusiones y recomendaciones" sub="Cierre del proyecto" />
        <div className="grid grid-2">
          <div>
            <h3 className="disp h3disp">Conclusiones</h3>
            {conclusiones.map((c, i) => (
              <p className="para" key={i}>
                {c}
              </p>
            ))}
          </div>
          <div>
            <h3 className="disp h3disp">Recomendaciones</h3>
            <ul className="check-list">
              {recomendaciones.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}