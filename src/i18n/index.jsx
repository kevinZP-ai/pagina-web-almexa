import { useEffect, useState } from 'react'
import { LangContext, SITE } from './context'

const STORAGE_KEY = 'almexa-lang'

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* almacenamiento no disponible */
    }
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, site: SITE[lang] }}>
      {children}
    </LangContext.Provider>
  )
}