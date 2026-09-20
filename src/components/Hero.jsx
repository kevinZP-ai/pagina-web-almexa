import { useLang } from '../i18n/hook'

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
  const { site } = useLang()
  const { proyecto, anexos, ui } = site

  return (
    <section id="inicio" className="hero" aria-label={ui.nav.inicio}>
      <div className="wrap">
        <div className="sheet">
          <span className="hero-corner tl" aria-hidden="true" />
          <span className="hero-corner tr" aria-hidden="true" />
          <span className="hero-corner bl" aria-hidden="true" />
          <span className="hero-corner br" aria-hidden="true" />

          <span className="hero-seal" aria-hidden="true">
            {ui.hero.recibido}
          </span>

          <div className="hero-head">
            <span>
              <b>{proyecto.centro}</b>
            </span>
            <span>{ui.hero.programa}</span>
          </div>

          <div className="hero-exp">
            <span>{ui.hero.expediente}</span>
            <span>{proyecto.ficha} · {proyecto.grupo}</span>
          </div>

          <h1>
            ALME<span className="accent-word">XA</span>
          </h1>
          <div className="hero-sub">{proyecto.subtitulo}</div>
          <p className="hero-doc">{proyecto.documento}</p>

          <div className="hero-meta">
            <span className="chip">{ui.hero.ficha} <b>3407799</b></span>
            <span className="chip">{ui.hero.grupo} <b>1</b></span>
            <span className="chip">
              {ui.hero.instructor}: <b>José de Jesús Motta Vargas</b>
            </span>
          </div>

          <div className="hero-team">
            <div className="team-label">{ui.hero.integrantes}</div>
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
              {ui.hero.abrir}
            </a>
            <a className="btn btn-ghost" href="#anexos">
              {ui.hero.verAnexos} ({anexos.length})
            </a>
          </div>

          <div className="hero-signs">
            {[
              firma(ui.hero.elaboro, proyecto.integrantes.join(', ')),
              firma(ui.hero.reviso, 'José de Jesús Motta Vargas'),
              firma(ui.hero.aprobo, ui.hero.mesaAprobacion),
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
            <span className="code-note">{ui.hero.codigo}</span>
          </div>

          <div className="hero-folio">{ui.hero.folio1}</div>
        </div>

        <div className="hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
          {ui.hero.desplazate}
        </div>
      </div>
    </section>
  )
}