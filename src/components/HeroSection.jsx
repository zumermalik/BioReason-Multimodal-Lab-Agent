import { ArrowDown, ShieldCheck, FileSearch } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-workspace')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        In-Silico Verification of <br/>
        <span className="text-emerald-500">Wet-Lab Protocols.</span>
      </h1>
      
      <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        An autonomous agent that aligns experimental intent with physical reality. 
        Upload your protocol (PDF) and a visual of your bench setup to detect thermal, chemical, and logical hazards before execution.
      </p>

      <div className="flex justify-center">
        <button 
          onClick={scrollToDemo}
          className="flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          Initialize MVP Session <ArrowDown className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 max-w-lg mx-auto border-t border-slate-800 pt-8">
        <div className="flex flex-col items-center text-slate-500">
          <FileSearch className="w-6 h-6 mb-2 text-violet-400" />
          <span className="text-xs font-mono uppercase tracking-wider">PDF Protocol Parsing</span>
        </div>
        <div className="flex flex-col items-center text-slate-500">
          <ShieldCheck className="w-6 h-6 mb-2 text-emerald-400" />
          <span className="text-xs font-mono uppercase tracking-wider">Visual Bench Audit</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
