import { ShieldAlert } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
      <nav className="w-full max-w-5xl bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-slate-200 flex items-center justify-between transition-all">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ShieldAlert className="text-slate-900 w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-slate-900 font-serif">
            BioReason
          </span>
        </div>
        
        {/* Links (Hidden on mobile for clean UI) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Methodology</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Security</a>
          <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            v0.1 MVP
          </div>
          <button 
            onClick={() => document.getElementById('demo-workspace')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#245336] hover:bg-[#1a3d27] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md"
          >
            Launch Instance
          </button>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
