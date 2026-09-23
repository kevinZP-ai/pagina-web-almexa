import SectionHead from '../SectionHead'
import DriveButton from '../DriveButton'
import TableBox from '../TableBox'
import { useLang } from '../../i18n/hook'

export default function Srs() {
  const { site } = useLang()
  const { ui, modulos, noFuncionales, entidades, casosUso, links } = site

  return (
    <>
      <section id="srs" aria-label={ui.sections.srs.titulo}>
        <div className="wrap">
          <SectionHead num="01" title={ui.sections.srs.titulo} sub={ui.sections.srs.sub} />
          <p className="lead">{ui.srsPage.descripcion}</p>
          <div className="drive-row">
            <DriveButton url={links.driveSRS} label={ui.drive.ver} />
            <a
              className="btn btn-ghost"
              href={`${import.meta.env.BASE_URL}${links.srsDoc}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.srsPage.descargar}
            </a>
          </div>
        </div>
      </section>

      <section id="srs-modulos" className="alt" aria-label={ui.sections.modulos.titulo}>
        <div className="wrap">
          <SectionHead num="02" title={ui.sections.modulos.titulo} sub={ui.sections.modulos.sub} />
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

      <section id="srs-rnf" aria-label={ui.requisitos.noFuncionales}>
        <div className="wrap">
          <SectionHead num="03" title={ui.requisitos.noFuncionales} sub={ui.requisitos.legendRNF} />
          <TableBox>
            <table className="tbl">
              <thead>
                <tr>
                  <th>{ui.requisitos.thId}</th>
                  <th>{ui.requisitos.thCategoria}</th>
                  <th>{ui.requisitos.thCriterio}</th>
                </tr>
              </thead>
              <tbody>
                {noFuncionales.map((r) => (
                  <tr key={r.id}>
                    <td className="mono-cell">
                      <b>{r.id}</b>
                    </td>
                    <td>{r.categoria}</td>
                    <td>{r.criterio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableBox>
        </div>
      </section>

      <section id="srs-entidades" className="alt" aria-label={ui.arquitectura.entidades}>
        <div className="wrap">
          <SectionHead num="04" title={ui.arquitectura.entidades} sub={ui.srsPage.actores} />
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
      </section>

      <section id="srs-cu" aria-label={ui.arquitectura.comportamiento}>
        <div className="wrap">
          <SectionHead num="05" title={ui.arquitectura.comportamiento} sub={ui.srsPage.actores} />
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
    </>
  )
}