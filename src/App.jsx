import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ChatInterface from './components/ChatInterface.jsx'
import InfoSections from './components/InfoSections.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans selection:bg-[#D9FA50] selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ChatInterface />
        <InfoSections />
      </main>
    </div>
  )
}

export default App
