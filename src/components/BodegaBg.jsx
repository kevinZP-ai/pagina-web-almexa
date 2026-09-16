function Rack() {
  return (
    <svg viewBox="0 0 300 460" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2">
        <path d="M22 18v424" />
        <path d="M276 18v424" />
        <path d="M22 62h254" />
        <path d="M22 176h254" />
        <path d="M22 294h254" />
        <path d="M22 408h254" />
      </g>
      <g fill="currentColor" opacity="0.85">
        <rect x="40" y="80" width="76" height="78" />
        <rect x="128" y="80" width="52" height="52" />
        <rect x="192" y="70" width="68" height="60" />
        <rect x="40" y="198" width="60" height="78" />
        <rect x="112" y="188" width="48" height="88" />
        <rect x="172" y="196" width="86" height="46" />
        <path d="M40 196l14-8v78l-14 8z" />
        <rect x="40" y="316" width="92" height="74" />
        <rect x="146" y="324" width="112" height="66" />
      </g>
      <g fill="#F5F0E0" fontFamily="monospace" fontSize="12" letterSpacing="1">
        <text x="46" y="101">PQT-01</text>
        <text x="200" y="95">LTE-4</text>
        <text x="46" y="224">INV-02</text>
        <text x="118" y="228">CAJ-1</text>
        <text x="182" y="218">UTL</text>
        <text x="46" y="346">STK-9</text>
        <text x="154" y="354">BDG</text>
      </g>
    </svg>
  )
}

export default function BodegaBg() {
  return (
    <div className="bodega" aria-hidden="true">
      <div className="bodega-grid" />
      <div className="route-rail" />
      <div className="bodega-shelf">
        <Rack />
      </div>
    </div>
  )
}