import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ChatInterface from './components/ChatInterface.jsx'
import FinOpsDashboard from './components/FinOpsDashboard.jsx'
import AdvancedAnalytics from './components/AdvancedAnalytics.jsx' 
import Integrations from './components/Integrations.jsx'
import InfoSections from './components/InfoSections.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans selection:bg-[#D9FA50] selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* The Multimodal AI Terminal */}
        <ChatInterface />
        
        {/* The NEW Premium FinOps Dashboard */}
        <FinOpsDashboard />
        <Integrations />
        
        {/* The Methodology and Security Explainer */}
        <InfoSections />
      </main>
    </div>
  )
}

export default App
