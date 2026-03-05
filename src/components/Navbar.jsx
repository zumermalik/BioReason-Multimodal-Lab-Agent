import { ShieldAlert } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <ShieldAlert className="text-emerald-500 w-6 h-6" />
        <span className="text-xl font-bold tracking-tight text-white">BioReason<span className="text-emerald-500">.ai</span></span>
      </div>
      <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
        v0.1 Hackathon MVP
      </div>
    </nav>
  );
};

export default Navbar;
