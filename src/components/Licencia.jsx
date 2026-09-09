import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { licencia, versiones } from '../data/proyecto'

export default function Licencia() {
  return (
    <section id="licencia" aria-label="Licenciamiento">
      <div className="wrap">
        <SectionHead num="08" title="Licenciamiento" sub="Apache 2.0" />
        <div className="lic-card mb-34">
          <div className="lic-big">
            <div className="lic-name">{licencia.nombre}</div>
            <div className="lic-type">{licencia.tipo}</div>
          </div>
          <div className="lic-detalle">
            <p>{licencia.detalle}</p>
            <a
              className="btn btn-sm btn-ghost"
              href="/anexos/08-Licencia/LICENCIA_Apache-2.0.txt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver texto íntegro (.txt)
            </a>
          </div>
        </div>

        <div className="grid grid-2">
          <div>
            <h3 className="disp h3disp">Esquemas de licencia representativos</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Esquema</th>
                    <th>Característica</th>
                  </tr>
                </thead>
                <tbody>
                  {licencia.esquemas.map((e) => (
                    <tr key={e.esquema}>
                      <td className="mono-cell">
                        <b>{e.esquema}</b>
                      </td>
                      <td>{e.caracteristica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableBox>
          </div>

          <div>
            <h3 className="disp h3disp">Control de versiones del informe</h3>
            <ul className="timeline">
              {versiones.map((v) => (
                <li key={v.version}>
                  <div className="v-ver">Versión {v.version}</div>
                  <div className="v-desc">{v.descripcion}</div>
                  <div className="v-meta">
                    {v.autor} · {v.fecha}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}