import { useState } from 'react'
import SectionHead from './SectionHead'
import TableBox from './TableBox'
import { useLang } from '../i18n/hook'

const SWATCH = {
  'Recursos humanos': '#25518F',
  'Human resources': '#25518F',
  Hardware: '#8A6A2F',
  Otros: '#5E6975',
  Other: '#5E6975',
  Software: '#2F6B4F',
  'Imprevistos (10 %)': '#B33A3A',
  'Contingency (10%)': '#B33A3A',
}

const pct = (c) => parseFloat(c.participacion.replace(',', '.'))
const fmt = (n) => `${n.toLocaleString('es-CO', { maximumFractionDigits: 1 })}%`

export default function Costos() {
  const { site } = useLang()
  const { costos, ui } = site
  const sec = ui.sections.costos
  const [idx, setIdx] = useState(0)
  const es = costos.escenarios[idx]
  const segs = es.categorias.filter((c) => pct(c) > 0)
  const totalPct = segs.reduce((s, c) => s + pct(c), 0)

  return (
    <section id="costos" className="alt" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num="07" title={sec.titulo} sub={`${sec.sub} · ${costos.duracion}`} />

        <div className="tabs mb-18" role="tablist" aria-label={sec.titulo}>
          {costos.escenarios.map((s, i) => (
            <button
              key={s.nombre}
              type="button"
              className={`tab${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              role="tab"
              aria-selected={i === idx}
            >
              {s.nombre}
            </button>
          ))}
        </div>

        <div className="grid grid-2">
          <div>
            <div className="grid grid-2 mb-18">
              {es.categorias.map((c) => (
                <div className="card" key={c.categoria}>
                  <h3 className="coste-cat">{c.categoria}</h3>
                  <div className="coste-val">{c.monto}</div>
                  <div className="reqs">{c.participacion}</div>
                </div>
              ))}
            </div>

            <h3 className="h3disp mt-40">{ui.costos.distribucion}</h3>
            <div className="budget-bar">
              <div className="bb-track" role="img" aria-label={ui.costos.ariaBarra}>
                {segs.map((c) => (
                  <span
                    key={c.categoria}
                    className="bb-seg"
                    style={{ width: `${(pct(c) / totalPct) * 100}%`, background: SWATCH[c.categoria] || '#25518F' }}
                  />
                ))}
              </div>
              {segs.map((c) => (
                <div className="bb-leg" key={c.categoria}>
                  <span
                    className="sw"
                    style={{ background: SWATCH[c.categoria] || '#25518F' }}
                  />
                  <span className="b-nombre">{c.categoria}</span>
                  <span className="pct">
                    {c.monto} · {fmt(pct(c))}
                  </span>
                </div>
              ))}
            </div>

            <div className="banner">
              <div className="strip">{ui.costos.total} · {costos.moneda} · {costos.duracion}</div>
              <div className="b1">
                <small>{es.nombre}</small>
                {es.total}
              </div>
              <div className="b2">{es.nota}</div>
            </div>

            <div className="card note-card">
              <p className="para">{ui.costos.nota}</p>
            </div>
          </div>

          <div className="grid-col">
            <div>
              <h3 className="h3disp">{ui.costos.rh(es.horas)}</h3>
              <TableBox>
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>{ui.costos.thRol}</th>
                      <th className="right">{ui.costos.thHoras}</th>
                      <th className="right">{ui.costos.thTarifa}</th>
                      <th className="right">{ui.costos.thCosto}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {es.rh.map((r) => (
                      <tr key={`${idx}-${r.rol}`}>
                        <td>
                          <b>{r.rol}</b>
                        </td>
                        <td className="mono-cell right">{r.horas}</td>
                        <td className="mono-cell right">{r.tarifa}</td>
                        <td className="mono-cell right">{r.costo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableBox>
            </div>

            <div>
              <h3 className="h3disp">{ui.costos.hardware}</h3>
              <TableBox>
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>{ui.costos.thEquipo}</th>
                      <th className="right">{ui.costos.thCant}</th>
                      <th className="right">{ui.costos.thValor}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {es.hardware.map((h) => (
                      <tr key={h.equipo}>
                        <td>
                          <b>{h.equipo}</b>
                          <div className="cell-sub">{h.uso}</div>
                        </td>
                        <td className="mono-cell right">{h.cantidad}</td>
                        <td className="mono-cell right">{h.valor}</td>
                      </tr>
                    ))}
                    <tr className="foot-row">
                      <td colSpan={2}>{ui.costos.hwSubtotal}</td>
                      <td className="mono-cell right">
                        <b>{es.hardwareSubtotal}</b>
                      </td>
                    </tr>
                    <tr className="foot-row">
                      <td colSpan={2}>{ui.costos.hwImputacion}</td>
                      <td className="mono-cell right">
                        <b>{es.hardwareImputacion}</b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="cell-note">
                        {ui.costos.hwNota}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableBox>
            </div>

            <div>
              <h3 className="h3disp">{ui.costos.otros}</h3>
              <TableBox>
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>{ui.costos.thRubro}</th>
                      <th className="right">{ui.costos.thMonto}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {es.otros.map((o) => (
                      <tr key={`${idx}-${o.nombre}`}>
                        <td>{o.nombre}</td>
                        <td className="mono-cell right">
                          <b>{o.monto}</b>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}