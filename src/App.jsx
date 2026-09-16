import Navbar from './components/Navbar'
import BodegaBg from './components/BodegaBg'
import ScrollStamp from './components/ScrollStamp'
import Hero from './components/Hero'
import Resumen from './components/Resumen'
import Introduccion from './components/Introduccion'
import Objetivos from './components/Objetivos'
import Arquitectura from './components/Arquitectura'
import Requisitos from './components/Requisitos'
import Calidad from './components/Calidad'
import Costos from './components/Costos'
import Licencia from './components/Licencia'
import Conclusiones from './components/Conclusiones'
import Anexos from './components/Anexos'
import Footer from './components/Footer'
import ToTop from './components/ToTop'

export default function App() {
  return (
    <>
      <BodegaBg />
      <Navbar />
      <main>
        <Hero />
        <Resumen />
        <Introduccion />
        <Objetivos />
        <Arquitectura />
        <Requisitos />
        <Calidad />
        <Costos />
        <Licencia />
        <Conclusiones />
        <Anexos />
      </main>
      <Footer />
      <ToTop />
      <ScrollStamp />
    </>
  )
}