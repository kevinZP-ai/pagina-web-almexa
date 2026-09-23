import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import BodegaBg from './components/BodegaBg'
import ScrollStamp from './components/ScrollStamp'
import Footer from './components/Footer'
import ToTop from './components/ToTop'
import Index from './components/pages/Index'
import Srs from './components/pages/Srs'
import Analisis from './components/pages/Analisis'
import Tecnico from './components/pages/Tecnico'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <BodegaBg />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/srs" element={<Srs />} />
          <Route path="/informe-analisis" element={<Analisis />} />
          <Route path="/informe-tecnico" element={<Tecnico />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </main>
      <Footer />
      <ToTop />
      <ScrollStamp />
    </>
  )
}