import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-workspace')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-48 pb-20 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
      
      {/* Tiny Super-Heading */}
      <div className="uppercase tracking-[0.25em] text-xs font-semibold text-slate-400 mb-6">
        Autonomous Research Verification
      </div>
      
      {/* The Massive Serif Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif text-slate-900 mb-6 leading-[1.05] tracking-tight">
        In-Silico Verification <br/>
        <span className="italic text-slate-600">of Wet-Lab Protocols.</span>
      </h1>
      
      {/* Soft Body Text */}
      <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        An autonomous agent that aligns experimental intent with physical reality. 
        BioReason utilizes multimodal reasoning to detect safety hazards and logical 
        inconsistencies in real-time.
      </p>

      {/* Pill Buttons with Lime Green Accent */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
        <button 
          onClick={scrollToDemo}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D9FA50] hover:bg-[#c9eb3b] text-slate-900 rounded-full font-semibold transition-all shadow-sm w-full sm:w-auto"
        >
          Initialize Session <ArrowRight className="w-4 h-4" />
        </button>
        
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-full font-medium transition-all shadow-sm w-full sm:w-auto">
          Watch Demo <Play className="w-4 h-4 fill-slate-700" />
        </button>
      </div>

      <div className="mt-10 text-sm text-slate-400">
        Powered by Gemini 3 Experimental
      </div>
    </section>
  );
};

export default HeroSection;
