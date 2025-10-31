import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import SocialFeatures from './components/SocialFeatures'
import Download from './components/Download'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <SocialFeatures />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  )
}

export default App

