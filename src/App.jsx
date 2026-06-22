import Header from './components/Header'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Problemas from './components/Problemas'
import Servicos from './components/Servicos'
import ComoFunciona from './components/ComoFunciona'
import Acompanhamento from './components/Acompanhamento'
import Confianca from './components/Confianca'
import Depoimentos from './components/Depoimentos'
import Localizacao from './components/Localizacao'
import FAQ from './components/FAQ'
import ChamadaFinal from './components/ChamadaFinal'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Problemas />
        <Servicos />
        <ComoFunciona />
        <Acompanhamento />
        <Confianca />
        <Depoimentos />
        <Localizacao />
        <FAQ />
        <ChamadaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
