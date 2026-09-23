import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { useLang } from '../i18n/hook'

export default function Requisitos({ num = '05' }) {
  const { site } = useLang()
  const { modulos, noFuncionales, ui } = site
  const sec = ui.sections.requisitos

  return (
    <section id="requisitos" className="alt" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
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

        <h3 className="disp h3disp">{ui.requisitos.noFuncionales}</h3>
        <div className="legend">
          <span className="lg"><abbr title={ui.requisitos.legendRNF}><b>RNF</b></abbr> · {ui.requisitos.legendRNF}</span>
          <span className="lg"><abbr title={ui.requisitos.legendERF}><b>ERF</b></abbr> · {ui.requisitos.legendERF}</span>
        </div>
        <p className="para">
          {ui.requisitos.para}
        </p>
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
  )
}