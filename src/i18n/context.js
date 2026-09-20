import { createContext } from 'react'
import * as dataEs from '../data/proyecto'
import * as anexosEs from '../data/anexos'
import { en as dataEn } from '../data/en'
import { UI } from './ui'

export const SITE = {
  es: { ui: UI.es, ...dataEs, ...anexosEs },
  en: { ui: UI.en, ...dataEn },
}

export const LangContext = createContext(null)