import { createContext } from 'react'
import * as dataEs from '../data/proyecto'
import { links } from '../data/links'
import { en as dataEn } from '../data/en'
import { UI } from './ui'

export const SITE = {
  es: { ui: UI.es, ...dataEs, links },
  en: { ui: UI.en, ...dataEn, links },
}

export const LangContext = createContext(null)