import { Activity } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <Activity className="w-5 h-5 text-[#D9FA50]" />
          </div>
          <span className="font-serif font-bold text-xl text-slate-900 tracking-tight">BioReason</span>
        </div>

        {/* Links & Auth */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 mr-4">
            <a href="#demo-workspace" className="hover:text-slate-900 transition-colors">Workspace</a>
            <a href="#methodology" className="hover:text-slate-900 transition-colors">Methodology</a>
            <a href="#security" className="hover:text-slate-900 transition-colors">Security</a>
          </div>

          {/* Clerk Auth UI */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 text-sm font-bold text-slate-900 bg-[#D9FA50] hover:bg-[#c9eb3b] rounded-xl transition-colors shadow-sm">
                Admin Login
              </button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <span className="text-sm font-medium text-slate-600 hidden sm:block">Verified Workspace</span>
              {/* This renders the user's profile picture and account management dropdown */}
              <UserButton /> 
            </div>
          </SignedIn>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
