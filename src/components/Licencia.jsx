import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { useLang } from '../i18n/hook'

export default function Licencia({ num = '08' }) {
  const { site } = useLang()
  const { licencia, versiones, ui } = site
  const sec = ui.sections.licencia

  return (
    <section id="licencia" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num={num} title={sec.titulo} sub={sec.sub} />
        <div className="lic-card mb-34">
          <div className="lic-big">
            <div className="lic-name">{licencia.nombre}</div>
            <div className="lic-type">{licencia.tipo}</div>
          </div>
          <div className="lic-detalle">
            <p>{licencia.detalle}</p>
            <div className="lic-links">
              <a
                className="btn btn-sm btn-ghost"
                href={`${import.meta.env.BASE_URL}anexos/08-Licencia/LICENCIA_BSL.txt`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.licencia.verTextoEn}
              </a>
              <a
                className="btn btn-sm btn-ghost"
                href={`${import.meta.env.BASE_URL}anexos/08-Licencia/LICENCIA_BSL_ES.txt`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.licencia.verTextoEs}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-2">
          <div>
            <h3 className="disp h3disp">{ui.licencia.esquemas}</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>{ui.licencia.thEsquema}</th>
                    <th>{ui.licencia.thCaracteristica}</th>
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
            <h3 className="disp h3disp">{ui.licencia.controlVersiones}</h3>
            <ul className="timeline">
              {versiones.map((v) => (
                <li key={v.version}>
                  <div className="v-ver">{ui.licencia.version} {v.version}</div>
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