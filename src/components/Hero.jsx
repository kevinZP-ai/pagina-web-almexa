import { proyecto } from '../data/proyecto'
import { anexos } from '../data/anexos'

const BARS = '11101100110111011001110110100110101101'

function buildBars() {
  let x = 0
  const rects = []
  BARS.split('').forEach((b, i) => {
    const w = b === '1' ? 3 : 1
    rects.push(
      <rect
        key={i}
        x={x}
        y="0"
        width={w}
        height="34"
        fill={b === '1' ? 'currentColor' : 'rgba(0,0,0,0)'}
      />,
    )
    x += w + 3
  })
  return { rects, width: x - 3 }
}

function Barcode() {
  const { rects, width } = buildBars()
  return (
    <svg width={width} height="34" viewBox={`0 0 ${width} 34`} fill="none" aria-hidden="true">
      {rects}
    </svg>
  )
}

const firma = (rol, nombres) => ({
  rol,
  nombres,
})

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Inicio">
      <div className="wrap">
        <div className="sheet">
          <span className="hero-corner tl" aria-hidden="true" />
          <span className="hero-corner tr" aria-hidden="true" />
          <span className="hero-corner bl" aria-hidden="true" />
          <span className="hero-corner br" aria-hidden="true" />

          <span className="hero-seal" aria-hidden="true">
            Recibido
          </span>

          <div className="hero-head">
            <span>
              <b>{proyecto.centro}</b>
            </span>
            <span>Programa de formación: ADSO</span>
          </div>

          <div className="hero-exp">
            <span>Expediente No. ALM-2026-001</span>
            <span>{proyecto.ficha} · {proyecto.grupo}</span>
          </div>

          <h1>
            ALME<span className="accent-word">XA</span>
          </h1>
          <div className="hero-sub">{proyecto.subtitulo}</div>
          <p className="hero-doc">{proyecto.documento}</p>

          <div className="hero-meta">
            <span className="chip">Ficha <b>3407799</b></span>
            <span className="chip">Grupo <b>1</b></span>
            <span className="chip">
              Instructor: <b>José de Jesús Motta Vargas</b>
            </span>
          </div>

          <div className="hero-team">
            <div className="team-label">Integrantes</div>
            <div className="team">
              {proyecto.integrantes.map((n) => (
                <span className="member" key={n}>
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#resumen">
              Abrir expediente
            </a>
            <a className="btn btn-ghost" href="#anexos">
              Ver anexos ({anexos.length})
            </a>
          </div>

          <div className="hero-signs">
            {[
              firma('Elaboró', proyecto.integrantes.join(', ')),
              firma('Revisó', 'José de Jesús Motta Vargas'),
              firma('Aprobó', 'SENA CIES · Mesa de evaluación'),
            ].map((s) => (
              <div className="sign-block" key={s.rol}>
                <div className="sg-rol">{s.rol}</div>
                <div className="sg-names">{s.nombres}</div>
                <div className="sg-line" />
              </div>
            ))}
          </div>

          <div className="hero-code">
            <Barcode />
            <span className="code-note">Expediente ALMEXA · registro de inventario</span>
          </div>

          <div className="hero-folio">Folio 001 · Hoja 1 de 9</div>
        </div>

        <div className="hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
          Desplácese para leer el expediente
        </div>
      </div>
    </section>
  )
}