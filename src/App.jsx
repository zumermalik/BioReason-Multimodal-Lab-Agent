import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ChatInterface from './components/ChatInterface'
import InfoSections from './components/InfoSections'

function App() {
  return (
    // REMOVED bg-slate-950 and replaced with our clean off-white
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans selection:bg-[#D9FA50] selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ChatInterface />
        {/* ADDED the new write-up sections below the terminal */}
        <InfoSections />
      </main>
    </div>
  )
}

export default App
