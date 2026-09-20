import { useMemo, useState } from 'react'
import SectionHead from './SectionHead'
import { useLang } from '../i18n/hook'
import { abrirODescargar, etiquetaAccion } from '../utils/anexos'

const extClass = (ext) => {
  const e = ext.replace(/^\./, '').toLowerCase()
  return `ft-${e}`
}

export default function Anexos() {
  const { site } = useLang()
  const { anexos, categoriasAnexos, ui } = site
  const sec = ui.sections.anexos
  const [query, setQuery] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('todas')

  const porCategoria = useMemo(() => {
    const q = query.trim().toLowerCase()
    return anexos
      .filter((a) => {
        const coincideCat =
          categoriaActiva === 'todas' || a.categoria === categoriaActiva
        const coincideBusqueda =
          q === '' ||
          a.titulo.toLowerCase().includes(q) ||
          a.descripcion.toLowerCase().includes(q) ||
          a.extension.toLowerCase().includes(q)
        return coincideCat && coincideBusqueda
      })
      .reduce((acc, a) => {
        ;(acc[a.categoria] = acc[a.categoria] || []).push(a)
        return acc
      }, {})
  }, [query, categoriaActiva, anexos])

  const totales = useMemo(() => {
    const q = query.trim().toLowerCase()
    return anexos.filter(
      (a) =>
        (categoriaActiva === 'todas' || a.categoria === categoriaActiva) &&
        (q === '' ||
          a.titulo.toLowerCase().includes(q) ||
          a.descripcion.toLowerCase().includes(q)),
    ).length
  }, [query, categoriaActiva, anexos])

  const catInfo = (id) => categoriasAnexos.find((c) => c.id === id)

  const pills = [
    { id: 'todas', nombre: ui.anexos.todas },
    ...categoriasAnexos,
  ]

  const onPillsKeys = (e) => {
    const idx = pills.findIndex((p) => p.id === categoriaActiva)
    let next = null
    if (e.key === 'ArrowRight') next = pills[(idx + 1) % pills.length]
    if (e.key === 'ArrowLeft') next = pills[(idx - 1 + pills.length) % pills.length]
    if (next) {
      e.preventDefault()
      setCategoriaActiva(next.id)
    }
  }

  const folioDe = (anexo) => {
    const i = anexos.findIndex((a) => a.archivo === anexo.archivo)
    return `Folio ${String(i + 1).padStart(3, '0')}`
  }

  return (
    <section id="anexos" className="alt" aria-label={sec.titulo}>
      <div className="wrap">
        <SectionHead num="10" title={sec.titulo} sub={sec.sub(anexos.length)} />

        <div className="anexos-toolbar">
          <div className="anexos-search">
            <input
              type="text"
              placeholder={ui.anexos.buscar}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
            />
            {query !== '' && (
              <button
                type="button"
                className="search-clear"
                aria-label={ui.anexos.limpiar}
                onClick={() => setQuery('')}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              </button>
            )}
          </div>
          <div
            className="cat-pills"
            role="radiogroup"
            aria-label={ui.anexos.filtrar}
            onKeyDown={onPillsKeys}
          >
            {pills.map((p) => (
              <button
                key={p.id}
                role="radio"
                aria-checked={categoriaActiva === p.id}
                className={`pill${categoriaActiva === p.id ? ' active' : ''}`}
                onClick={() => setCategoriaActiva(p.id)}
              >
                {p.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="anexo-count">
          {ui.anexos.mostrando(totales, anexos.length)}
          {categoriaActiva !== 'todas'
            ? ` · ${ui.anexos.categoria(catInfo(categoriaActiva)?.nombre)}`
            : ''}
        </div>

        {query.trim() === '' && categoriaActiva === 'todas' ? (
          categoriasAnexos.map((cat) => {
            const items = porCategoria[cat.id]
            if (!items) return null
            return (
              <div key={cat.id}>
                <div className="cat-header">
                  <div
                    className="cat-icon"
                    style={{ background: cat.color, color: '#F5F0E0' }}
                  >
                    {cat.icono}
                  </div>
                  <h3>{cat.nombre}</h3>
                  <span className="cat-bar" />
                  <span className="cat-count">
                    {items.length} {ui.anexos.recurso(items.length)}
                  </span>
                </div>
                <div className="anexos-grid">
                  {items.map((a) => (
                    <AnexoCard key={a.archivo} anexo={a} cat={a.categoria} categoria={cat} folioDe={folioDe} ui={ui} />
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          <div className="anexos-grid">
            {Object.keys(porCategoria).length === 0 ? (
              <div className="card empty-card">
                <p className="para">{ui.anexos.sinResultados}</p>
              </div>
            ) : (
              Object.values(porCategoria)
                .flat()
                .map((a) => {
                  const cat = categoriasAnexos.find((c) => c.id === a.categoria)
                  return (
                    <AnexoCard key={a.archivo} anexo={a} cat={a.categoria} categoria={cat} folioDe={folioDe} ui={ui} />
                  )
                })
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function AnexoCard({ anexo, categoria, folioDe, ui }) {
  const accion = abrirODescargar(anexo)
  return (
    <div className="anexo-card">
      <div className="anexo-top">
        <div className="anexo-badge" style={{ background: categoria.color, color: '#F5F0E0' }}>
          {categoria.icono}
        </div>
        <div>
          <div className="anexo-cat-label" style={{ color: categoria.color }}>
            {categoria.nombre}
          </div>
          <h3>{anexo.titulo}</h3>
        </div>
      </div>
      <p className="anexo-desc">{anexo.descripcion}</p>
      <div className="anexo-foot">
        <span className="anexo-folio">{folioDe(anexo)}</span>
        <span className={`file-type ${extClass(anexo.extension)}`}>{anexo.extension}</span>
        <a className="btn btn-sm btn-primary" href={accion.url} target={accion.target} rel={accion.rel} download={accion.descargar || undefined}>
          {etiquetaAccion(anexo, ui)} ⟶
        </a>
      </div>
    </div>
  )
}