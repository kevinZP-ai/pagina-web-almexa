import SectionHead from '../SectionHead'
import DriveButton from '../DriveButton'
import Introduccion from '../Introduccion'
import Arquitectura from '../Arquitectura'
import Requisitos from '../Requisitos'
import Calidad from '../Calidad'
import Costos from '../Costos'
import Licencia from '../Licencia'
import Conclusiones from '../Conclusiones'
import { useLang } from '../../i18n/hook'

export default function Tecnico() {
  const { site } = useLang()
  const { ui, links } = site

  return (
    <>
      <section id="tecnico" aria-label={ui.sections.tecnico.titulo}>
        <div className="wrap">
          <SectionHead num="01" title={ui.sections.tecnico.titulo} sub={ui.sections.tecnico.sub} />
          <p className="lead">{ui.tecnicoPage.drive}</p>
          <div className="drive-row">
            <DriveButton url={links.driveTecnico} label={ui.drive.ver} />
            <a
              className="btn btn-ghost"
              href={`${import.meta.env.BASE_URL}${links.informeTecnicoDoc}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.tecnicoPage.descargar}
            </a>
          </div>
        </div>
      </section>

      <Introduccion num="02" />
      <Arquitectura num="03" />
      <Requisitos num="04" />
      <Calidad num="05" />
      <Costos num="06" />
      <Licencia num="07" />
      <Conclusiones num="08" />
    </>
  )
}