import { Link } from 'react-router-dom'
import Hero from '../Hero'
import Resumen from '../Resumen'
import Objetivos from '../Objetivos'
import SectionHead from '../SectionHead'
import VideoPlaceholder from '../VideoPlaceholder'
import { useLang } from '../../i18n/hook'

export default function Index() {
  const { site } = useLang()
  const { modulos, seccionesIndex, ui } = site

  return (
    <>
      <Hero />
      <Resumen num="01" />
      <Objetivos num="02" />

      <section id="modulos" aria-label={ui.sections.modulos.titulo}>
        <div className="wrap">
          <SectionHead num="03" title={ui.sections.modulos.titulo} sub={ui.sections.modulos.sub} />
          <div className="grid grid-3 mb-34">
            {modulos.map((m, i) => (
              <div className="card" key={m.id}>
                <div className="card-head">
                  <div className={`card-icon tone-${i % 8}`}>{m.id.slice(2)}</div>
                  <div>
                    <h3>{m.nombre}</h3>
                    <div className="reqs">{m.reqs}</div>
                  </div>
                </div>
                <p className="desc">{m.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="secciones" aria-label={ui.sections.secciones.titulo}>
        <div className="wrap">
          <SectionHead num="04" title={ui.sections.secciones.titulo} sub={ui.sections.secciones.sub} />
          <div className="grid grid-3 mb-34">
            {seccionesIndex.map((s) => (
              <Link className="card card-link" to={s.to} key={s.to}>
                <div className="card-head">
                  <div className="card-icon tone-2">{s.icono}</div>
                  <h3>
                    {ui.nav[s.to === '/srs' ? 'srs' : s.to === '/informe-analisis' ? 'analisis' : 'tecnico']}
                  </h3>
                </div>
                <p className="desc">{ui.index[s.descKey]}</p>
                <span className="card-go">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="alt" aria-label={ui.sections.video.titulo}>
        <div className="wrap">
          <SectionHead num="05" title={ui.sections.video.titulo} sub={ui.sections.video.sub} />
          <VideoPlaceholder />
        </div>
      </section>
    </>
  )
}