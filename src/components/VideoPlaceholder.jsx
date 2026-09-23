import { useLang } from '../i18n/hook'

export default function VideoPlaceholder() {
  const { site } = useLang()
  const { ui } = site

  return (
    <div className="video-frame" role="region" aria-label={ui.video.aria}>
      <div className="video-box">
        <div className="video-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p>{ui.video.lugar}</p>
        <span className="video-tag">{ui.video.pendiente}</span>
      </div>
    </div>
  )
}