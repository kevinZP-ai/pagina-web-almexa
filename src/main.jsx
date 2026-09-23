import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './styles.css'
import App from './App.jsx'
import { LangProvider } from './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LangProvider>
        <App />
      </LangProvider>
    </HashRouter>
  </StrictMode>,
)