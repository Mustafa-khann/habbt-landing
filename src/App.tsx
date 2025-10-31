import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Download from './components/Download'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Download />
      <Footer />
    </div>
  )
}

export default App

