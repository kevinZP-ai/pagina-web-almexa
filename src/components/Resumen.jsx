import SectionHead from './SectionHead'
import { useLang } from '../i18n/hook'

export default function Resumen({ num = '01' }) {
  const { site } = useLang()
  const { resumenEjecutivo, ui } = site
  const sec = ui.sections.resumen

  return (
    <section id="resumen" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
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