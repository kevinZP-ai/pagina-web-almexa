import { useMemo, useState } from 'react'
import SectionHead from './SectionHead'
import { anexos, categoriasAnexos } from '../data/anexos'
import { abrirODescargar, etiquetaAccion } from '../utils/anexos'

const extClass = (ext) => {
  const e = ext.replace(/^\./, '').toLowerCase()
  return `ft-${e}`
}

export default function Anexos() {
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
  }, [query, categoriaActiva])

  const totales = useMemo(() => {
    const q = query.trim().toLowerCase()
    return anexos.filter(
      (a) =>
        q === '' ||
        a.titulo.toLowerCase().includes(q) ||
        a.descripcion.toLowerCase().includes(q),
    ).length
  }, [query])

  const catInfo = (id) => categoriasAnexos.find((c) => c.id === id)

  const pills = [{ id: 'todas', nombre: 'Todas' }, ...categoriasAnexos]

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

  return (
    <section id="anexos" className="alt" aria-label="Anexos del informe">
      <div className="wrap">
        <SectionHead num="10" title="Anexos del informe" sub="39 recursos del proyecto" />

        <div className="anexos-toolbar">
          <div className="anexos-search">
            <input
              type="text"
              placeholder="Buscar anexo, categoría o tipo de archivo…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
            />
            {query !== '' && (
              <button
                type="button"
                className="search-clear"
                aria-label="Limpiar búsqueda"
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
            aria-label="Filtrar por categoría"
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
          Mostrando <b>{totales}</b> de {anexos.length} anexos
          {categoriaActiva !== 'todas'
            ? ` · categoría “${catInfo(categoriaActiva)?.nombre}”`
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
                    {items.length} {items.length === 1 ? 'recurso' : 'recursos'}
                  </span>
                </div>
                <div className="anexos-grid">
                  {items.map((a) => (
                    <AnexoCard key={a.archivo} anexo={a} />
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          <div className="anexos-grid">
            {Object.keys(porCategoria).length === 0 ? (
              <div className="card empty-card">
                <p className="para">No se encontraron anexos que coincidan con tu búsqueda.</p>
              </div>
            ) : (
              Object.values(porCategoria)
                .flat()
                .map((a) => <AnexoCard key={a.archivo} anexo={a} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function folioDe(anexo) {
  const i = anexos.findIndex((a) => a.archivo === anexo.archivo)
  return `Folio ${String(i + 1).padStart(3, '0')}`
}

function AnexoCard({ anexo }) {
  const cat = categoriasAnexos.find((c) => c.id === anexo.categoria)
  const accion = abrirODescargar(anexo)
  return (
    <div className="anexo-card">
      <div className="anexo-top">
        <div className="anexo-badge" style={{ background: cat.color, color: '#F5F0E0' }}>
          {cat.icono}
        </div>
        <div>
          <div className="anexo-cat-label" style={{ color: cat.color }}>
            {cat.nombre}
          </div>
          <h3>{anexo.titulo}</h3>
        </div>
      </div>
      <p className="anexo-desc">{anexo.descripcion}</p>
      <div className="anexo-foot">
        <span className="anexo-folio">{folioDe(anexo)}</span>
        <span className={`file-type ${extClass(anexo.extension)}`}>{anexo.extension}</span>
        <a className="btn btn-sm btn-primary" href={accion.url} target={accion.target} rel={accion.rel} download={accion.descargar || undefined}>
          {etiquetaAccion(anexo)} ⟶
        </a>
      </div>
    </div>
  )
}