import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { qa, riesgos } from '../data/proyecto'

function nivelBadge(nivel) {
  const clase =
    nivel.toLowerCase() === 'crítico'
      ? 'badge-critico'
      : nivel.toLowerCase() === 'alto'
        ? 'badge-alto'
        : 'badge-medio'
  return <span className={`badge ${clase}`}>{nivel}</span>
}

export default function Calidad() {
  return (
    <section id="calidad" aria-label="Pruebas y calidad">
      <div className="wrap">
        <SectionHead num="06" title="Pruebas y calidad" sub="QA · ISO · Riesgos" />

        <h3 className="disp h3disp">Normas ISO adoptadas</h3>
        <div className="grid grid-3 mb-34">
          {qa.normas.map((n) => (
            <div className={`card${n.principal ? ' primary' : ''}`} key={n.sigla}>
              <div className="card-head">
                <div className={`card-icon ${n.principal ? 'tone-0' : 'tone-1'}`}>
                  ISO
                </div>
                <div>
                  <h3>{n.sigla}</h3>
                  {n.principal && <div className="reqs">Norma principal</div>}
                </div>
              </div>
              <p className="desc">{n.proposito}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-2 mb-34">
          <div>
            <h3 className="disp h3disp">Estrategia de pruebas</h3>
            <ul className="check-list green">
              {qa.estrategia.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="disp h3disp">Validación de requisitos funcionales</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Módulo</th>
                    <th>Requisitos</th>
                    <th>Estado</th>
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

        <h3 className="disp h3disp">Matriz de riesgos: resumen de 9 (T1–T9) de los 14 del anexo</h3>
        <TableBox>
          <table className="tbl">
            <thead>
              <tr>
                <th>ID</th>
                <th>Riesgo</th>
                <th>Requiere</th>
                <th>Nivel</th>
                <th>Prioridad</th>
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
                  <td>{nivelBadge(r.nivel)}</td>
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