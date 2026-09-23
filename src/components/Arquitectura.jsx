import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { useLang } from '../i18n/hook'

export default function Arquitectura({ num = '04' }) {
  const { site } = useLang()
  const { arquitectura, entidades, casosUso, ui } = site
  const sec = ui.sections.arquitectura

  return (
    <section id="arquitectura" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
        <p className="lead">{arquitectura.enfoque}</p>
        <div className="arch-caps mb-24">
          {arquitectura.capas.map((c, i) => (
            <div className="arch-cap" key={c.nombre}>
              <div className="cap-num">{ui.arquitectura.capa.replace('{1}', i + 1)}</div>
              <div className="ic">{c.icono}</div>
              <h3>{c.nombre}</h3>
              <p>{c.detalle}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-2 mb-24">
          <div>
            <h3 className="disp h3disp">{ui.arquitectura.stack}</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{ui.arquitectura.thComponente}</th>
                    <th>{ui.arquitectura.thTecnologia}</th>
                    <th>{ui.arquitectura.thRol}</th>
                  </tr>
                </thead>
                <tbody>
                  {arquitectura.stack.map((s) => (
                    <tr key={s.tecnologia}>
                      <td className="mono-cell">{s.componente}</td>
                      <td>
                        <b>{s.tecnologia}</b>
                      </td>
                      <td>{s.rol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableBox>
          </div>

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
        </div>

        <div>
          <h3 className="disp h3disp">{ui.arquitectura.comportamiento}</h3>
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
      </div>
    </section>
  )
}