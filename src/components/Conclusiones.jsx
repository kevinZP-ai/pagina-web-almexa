import SectionHead from './SectionHead'
import { useLang } from '../i18n/hook'

export default function Conclusiones({ num = '09' }) {
  const { site } = useLang()
  const { conclusiones, recomendaciones, ui } = site
  const sec = ui.sections.conclusiones

  return (
    <section id="conclusiones" className="alt" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
        <div className="grid grid-2">
          <div>
            <h3 className="disp h3disp">{ui.conclusiones.conclusiones}</h3>
            {conclusiones.map((c, i) => (
              <p className="para" key={i}>
                {c}
              </p>
            ))}
          </div>
          <div>
            <h3 className="disp h3disp">{ui.conclusiones.recomendaciones}</h3>
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