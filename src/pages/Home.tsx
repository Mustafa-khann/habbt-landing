import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Download from '../components/Download'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
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

