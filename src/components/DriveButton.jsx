import { useLang } from '../i18n/hook'

const ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v14" />
    <path d="M6 10l6 6 6-6" />
    <path d="M4 20h16" />
  </svg>
)

export default function DriveButton({ url, label, sub, className }) {
  const { site } = useLang()
  const { ui } = site
  const disabled = !url || url.length === 0

  if (disabled) {
    return (
      <button
        type="button"
        className={`btn btn-primary drive-btn${className ? ` ${className}` : ''}`}
        disabled
        aria-disabled="true"
        title={ui.drive.pedirUrl}
      >
        {ICON}
        {label}
        {sub && <span className="drive-sub">{sub}</span>}
      </button>
    )
  }

  return (
    <a
      className={`btn btn-primary drive-btn${className ? ` ${className}` : ''}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ui.drive.abrir} · ${label}`}
    >
      {ICON}
      {label}
      {sub && <span className="drive-sub">{sub}</span>}
    </a>
  )
}