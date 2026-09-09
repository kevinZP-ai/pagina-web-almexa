import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { costos } from '../data/proyecto'

const SWATCH = {
  'Recursos humanos': '#25518F',
  Hardware: '#8A6A2F',
  Otros: '#5E6975',
  Software: '#2F6B4F',
}

const pct = (c) => parseFloat(c.participacion.replace(',', '.'))
const fmt = (n) => `${n.toLocaleString('es-CO', { maximumFractionDigits: 1 })}%`

export default function Costos() {
  const segs = costos.categorias.filter((c) => pct(c) > 0)
  const totalPct = segs.reduce((s, c) => s + pct(c), 0)

  return (
    <section id="costos" className="alt" aria-label="Costos del proyecto">
      <div className="wrap">
        <SectionHead num="07" title="Costos del proyecto" sub="Presupuesto estimado" />

        <div className="grid grid-2 mb-18">
          <div>
            <div className="grid grid-2 mb-18">
              {costos.categorias.map((c) => (
                <div className="card" key={c.categoria}>
                  <h3 className="coste-cat">{c.categoria}</h3>
                  <div className="coste-val">{c.monto}</div>
                  <div className="reqs">{c.participacion}</div>
                </div>
              ))}
            </div>

            <h3 className="h3disp mt-40">DistribuciÃ³n por categorÃ­a</h3>
            <div className="budget-bar">
              <div className="bb-track" role="img" aria-label="DistribuciÃ³n del presupuesto por categorÃ­a">
                {segs.map((c) => (
                  <span
                    key={c.categoria}
                    className="bb-seg"
                    style={{ width: `${(pct(c) / totalPct) * 100}%`, background: SWATCH[c.categoria] || '#25518F' }}
                  />
                ))}
              </div>
              {costos.categorias.map((c) => (
                <div className="bb-leg" key={c.categoria}>
                  <span
                    className="sw"
                    style={{ background: SWATCH[c.categoria] || '#25518F' }}
                  />
                  <span className="b-nombre">{c.categoria}</span>
                  <span className="pct">
                    {c.monto} Â· {fmt(pct(c))}
                  </span>
                </div>
              ))}
            </div>

            <div className="banner">
              <div className="strip">Saldo final Â· Presupuesto estimado de inversiÃ³n</div>
              <div className="b1">
                <small>Total estimado Â· {costos.moneda}</small>
                {costos.total}
              </div>
              <div className="b2">
                Presupuesto del proyecto proyectado a 18 meses. El software es cÃ³digo
                abierto (costo de licencia $0) y recursos humanos valora las horas del
                proceso formativo en un escenario comercial.
              </div>
            </div>
          </div>

          <div>
            <h3 className="h3disp">Recursos humanos Â· 810 horas-persona</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Rol</th>
                    <th className="right">Horas</th>
                    <th className="right">Costo est.</th>
                  </tr>
                </thead>
                <tbody>
                  {costos.rh.map((r) => (
                    <tr key={r.rol}>
                      <td>
                        <b>{r.rol}</b>
                      </td>
                      <td className="mono-cell right">{r.horas}</td>
                      <td className="mono-cell right">{r.costo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableBox>
          </div>
        </div>

        <div className="grid grid-2">
          <div>
            <h3 className="h3disp">Hardware contemplado</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Equipo</th>
                    <th className="right">Cant.</th>
                    <th className="right">Valor unit.</th>
                  </tr>
                </thead>
                <tbody>
                  {costos.hardware.map((h) => (
                    <tr key={h.equipo}>
                      <td>
                        <b>{h.equipo}</b>
                        <div className="cell-sub">{h.uso}</div>
                      </td>
                      <td className="mono-cell right">{h.cantidad}</td>
                      <td className="mono-cell right">{h.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableBox>
          </div>

          <div>
            <h3 className="h3disp">Otros gastos operativos</h3>
            <TableBox>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Rubro</th>
                    <th className="right">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {costos.otros.map((o) => (
                    <tr key={o.nombre}>
                      <td>{o.nombre}</td>
                      <td className="mono-cell right">
                        <b>{o.monto}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableBox>
            <p className="note">
              Software: todo el stack es de cÃ³digo abierto con costos de licencia $0. El
              presupuesto contempla como opcional el rubro de hosting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
