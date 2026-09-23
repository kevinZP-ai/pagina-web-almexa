import SectionHead from '../SectionHead'
import DriveButton from '../DriveButton'
import TableBox from '../TableBox'
import { useLang } from '../../i18n/hook'

export default function Analisis() {
  const { site } = useLang()
  const { ui, analisis, casosUso, entidades, links } = site

  return (
    <>
      <section id="analisis" aria-label={ui.sections.analisis.titulo}>
        <div className="wrap">
          <SectionHead num="01" title={ui.sections.analisis.titulo} sub={ui.sections.analisis.sub} />
          <p className="lead">{ui.analisisPage.descripcion}</p>
          <div className="drive-row">
            <DriveButton url={links.driveAnalisis} label={ui.drive.ver} />
            <a
              className="btn btn-ghost"
              href={`${import.meta.env.BASE_URL}${links.analisisDoc}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.analisisPage.descargar}
            </a>
          </div>
        </div>
      </section>

      <section id="analisis-metodologia" className="alt" aria-label={ui.analisisPage.metodologia}>
        <div className="wrap">
          <SectionHead num="02" title={ui.analisisPage.metodologia} sub={ui.analisisPage.actividades} />
          <div className="grid grid-2 mb-34">
            {analisis.actividades.map((a) => (
              <div className="card" key={a.n}>
                <div className="card-head">
                  <div className="card-icon tone-1">A{a.n}</div>
                  <div>
                    <h3>{a.actividad}</h3>
                    <div className="reqs">{a.entregable}</div>
                  </div>
                </div>
                <p className="desc">{a.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="analisis-behavior" aria-label={ui.arquitectura.comportamiento}>
        <div className="wrap">
          <SectionHead num="03" title={ui.arquitectura.comportamiento} sub={ui.analisisPage.metodologia} />
          <div className="legend">
            <span className="lg"><abbr title={ui.arquitectura.casoUso}><b>CU</b></abbr> · {ui.arquitectura.casoUso}</span>
            <span className="lg"><abbr title={ui.arquitectura.diagramaActividad}><b>DA</b></abbr> · {ui.arquitectura.diagramaActividad}</span>
          </div>
          <TableBox>
            <table className="tbl">
              <thead>
                <tr>
                  <th>CU</th>
                  <th>DA</th>
                  <th>{ui.arquitectura.thRequerimiento}</th>
                  <th>{ui.arquitectura.thActores}</th>
                </tr>
              </thead>
              <tbody>
                {casosUso.map((c) => (
                  <tr key={c.cu}>
                    <td className="mono-cell">
                      <b>{c.cu}</b>
                    </td>
                    <td className="mono-cell">{c.da}</td>
                    <td>{c.modulo}</td>
                    <td>{c.actores}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableBox>
        </div>
      </section>

      <section id="analisis-dominio" className="alt" aria-label={ui.analisisPage.dominio}>
        <div className="wrap">
          <SectionHead num="04" title={ui.analisisPage.dominio} sub={ui.analisisPage.derDetalle} />
          <div className="grid grid-2 mb-34">
            <div>
              <h3 className="disp h3disp">{ui.arquitectura.entidades}</h3>
              <TableBox>
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>{ui.arquitectura.thEntidad}</th>
                      <th>{ui.arquitectura.thQueRepresenta}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entidades.map((e) => (
                      <tr key={e.entidad}>
                        <td className="mono-cell">
                          <b>{e.entidad}</b>
                        </td>
                        <td>{e.representa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableBox>
            </div>
            <div>
              <h3 className="disp h3disp">{ui.analisisPage.der}</h3>
              <p className="para">{ui.analisisPage.derDetalle}</p>
              <ul className="check-list green">
                {analisis.der.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="analisis-checklist" aria-label={ui.analisisPage.checklist}>
        <div className="wrap">
          <SectionHead num="05" title={ui.analisisPage.checklist} sub={ui.sections.analisis.sub} />
          <div className="card">
            <ul className="check-list green grid-2-grid">
              {analisis.checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}