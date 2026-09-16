import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { modulos, noFuncionales } from '../data/proyecto'

export default function Requisitos() {
  return (
    <section id="requisitos" className="alt" aria-label="Análisis de requisitos">
      <div className="wrap">
        <SectionHead num="05" title="Análisis de requisitos" sub="8 módulos · 53 requisitos" />
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

        <h3 className="disp h3disp">Requisitos no funcionales</h3>
        <div className="legend">
          <span className="lg"><abbr title="requisito no funcional"><b>RNF</b></abbr> · requisito no funcional</span>
          <span className="lg"><abbr title="requisito funcional elemental"><b>ERF</b></abbr> · requisito funcional elemental</span>
        </div>
        <p className="para">
          Derivados de la norma ISO/IEC 25010. Sus metas medibles se validarán sobre la
          implementación definitiva mediante pruebas de carga y de usuario.
        </p>
        <TableBox>
          <table className="tbl">
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoría</th>
                <th>Criterio</th>
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