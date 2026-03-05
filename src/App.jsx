import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ChatInterface from './components/ChatInterface'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ChatInterface />
      </main>
    </div>
  )
}

export default App
