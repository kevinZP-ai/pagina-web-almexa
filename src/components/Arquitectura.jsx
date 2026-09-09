import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { arquitectura, entidades, casosUso } from '../data/proyecto'

export default function Arquitectura() {
  return (
    <section id="arquitectura" aria-label="Arquitectura">
      <div className="wrap">
        <SectionHead num="04" title="Arquitectura" sub="3 capas + MVC" />
        <p className="lead">{arquitectura.enfoque}</p>
        <div className="arch-caps mb-24">
          {arquitectura.capas.map((c, i) => (
            <div className="arch-cap" key={c.nombre}>
              <div className="cap-num">Capa 0{i + 1} · Arquitectura de 3 capas</div>
              <div className="ic">{c.icono}</div>
              <h3>{c.nombre}</h3>
              <p>{c.detalle}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-2 mb-24">
          <div>
            <h3 className="disp h3disp">Stack tecnológico</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Tecnología</th>
                    <th>Rol</th>
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
            <h3 className="disp h3disp">Entidades del dominio (12)</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Entidad</th>
                    <th>Qué representa</th>
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
          <h3 className="disp h3disp">Comportamiento: casos de uso y diagramas de actividad</h3>
          <div className="legend">
            <span className="lg"><b>CU</b> · caso de uso</span>
            <span className="lg"><b>DA</b> · diagrama de actividad</span>
          </div>
          <TableBox>
            <table className="tbl">
              <thead>
                <tr>
                  <th>CU</th>
                  <th>DA</th>
                  <th>Módulo</th>
                  <th>Actores</th>
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