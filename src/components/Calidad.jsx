import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { useLang } from '../i18n/hook'

function nivelBadge(nivel, ui) {
  const n = nivel.toLowerCase()
  const clase =
    n === 'critical' || n === 'crítico'
      ? 'badge-critico'
      : n === 'high' || n === 'alto'
        ? 'badge-alto'
        : n === 'medium' || n === 'medio'
          ? 'badge-medio'
          : 'badge-bajo'
  const label =
    n === 'critical' || n === 'crítico'
      ? ui.calidad.badges.critico
      : n === 'high' || n === 'alto'
        ? ui.calidad.badges.alto
        : n === 'medium' || n === 'medio'
          ? ui.calidad.badges.medio
          : ui.calidad.badges.bajo
  return <span className={`badge ${clase}`}>{label}</span>
}

export default function Calidad({ num = '06' }) {
  const { site } = useLang()
  const { qa, riesgos, ui } = site
  const sec = ui.sections.calidad

  return (
    <section id="calidad" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />

        <h3 className="disp h3disp">{ui.calidad.normas}</h3>
        <div className="grid grid-3 mb-34">
          {qa.normas.map((n) => (
            <div className={`card${n.principal ? ' primary' : ''}`} key={n.sigla}>
              <div className="card-head">
                <div className={`card-icon ${n.principal ? 'tone-0' : 'tone-1'}`}>
                  ISO
                </div>
                <div>
                  <h3>{n.sigla}</h3>
                  {n.principal && <div className="reqs">{ui.calidad.principal}</div>}
                </div>
              </div>
              <p className="desc">{n.proposito}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-2 mb-34">
          <div>
            <h3 className="disp h3disp">{ui.calidad.estrategia}</h3>
            <ul className="check-list green">
              {qa.estrategia.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="disp h3disp">{ui.calidad.validacion}</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{ui.calidad.thModulo}</th>
                    <th>{ui.calidad.thRequisitos}</th>
                    <th>{ui.calidad.thEstado}</th>
                  </tr>
                </thead>
                <tbody>
                  {qa.validacion.map((v) => (
                    <tr key={v.modulo}>
                      <td>{v.modulo}</td>
                      <td className="mono-cell">{v.reqs}</td>
                      <td>
                        <span className="badge badge-ok">{v.estado}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableBox>
          </div>
        </div>

        <h3 className="disp h3disp">{ui.calidad.riesgos}</h3>
        <TableBox>
          <table className="tbl">
            <thead>
              <tr>
                <th>{ui.requisitos.thId}</th>
                <th>{ui.calidad.thRiesgo}</th>
                <th>{ui.calidad.thAfectado}</th>
                <th>{ui.calidad.thNivel}</th>
                <th>{ui.calidad.thPrioridad}</th>
              </tr>
            </thead>
            <tbody>
              {riesgos.map((r) => (
                <tr key={r.id}>
                  <td className="mono-cell">
                    <b>{r.id}</b>
                  </td>
                  <td>{r.riesgo}</td>
                  <td className="mono-cell">{r.requiere}</td>
                  <td>{nivelBadge(r.nivel, ui)}</td>
                  <td>{r.prioridad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableBox>
      </div>
    </section>
  )
}