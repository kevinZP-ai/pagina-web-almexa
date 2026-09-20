export default function SectionHead({ num, title, sub }) {
  return (
    <div className="section-head">
      <span className="section-num">{num}</span>
      <h2>{title}</h2>
      {sub && <span className="sub">— {sub} · Folio {String(parseInt(num, 10)).padStart(3, '0')}</span>}
    </div>
  )
}