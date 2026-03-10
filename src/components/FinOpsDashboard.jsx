import { LayoutDashboard, FlaskConical, ShoppingCart, Settings, ArrowUpRight, ArrowDownRight, DollarSign, ShieldAlert } from 'lucide-react';

const FinOpsDashboard = () => {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA] border-t border-slate-200 relative overflow-hidden">
      
      {/* Background glowing gradients for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#D9FA50]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono mb-4 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D9FA50] animate-pulse"></span>
            v0.2 FinOps Active
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
            R&D Economics <span className="italic text-slate-500">Telemetry.</span>
          </h2>
        </div>

        {/* The Dashboard Card (Modeled after SaaZCraft) */}
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-[#F8F9F5] p-6 border-r border-slate-100 flex flex-col gap-8">
            <div className="flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-[#D9FA50]" />
              </div>
              <span className="font-bold text-slate-900">BioEconomics</span>
            </div>

            <nav className="flex flex-col gap-2">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-slate-100 text-slate-900 font-medium transition-all">
                <LayoutDashboard className="w-4 h-4 text-[#D9FA50] fill-[#D9FA50]/20" /> Dashboard
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all font-medium">
                <FlaskConical className="w-4 h-4" /> Protocols
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all font-medium">
                <ShoppingCart className="w-4 h-4" /> Vendors
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all font-medium mt-auto">
                <Settings className="w-4 h-4" /> Settings
              </button>
            </nav>
          </div>

          {/* Main Dashboard Content */}
          <div className="flex-1 p-8 md:p-10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-slate-900">Reaction Overview</h3>
              <button className="text-sm font-medium text-slate-500 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-lg">
                Export CSV
              </button>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-sm text-slate-500 mb-1">Cost Per Reaction</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$142.50</div>
                <div className="flex items-center text-emerald-600 text-xs font-medium">
                  <ArrowDownRight className="w-3 h-3 mr-1" /> 12% vs last month
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-sm text-slate-500 mb-1">Vendor Arbitrage Savings</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$8,450</div>
                <div className="flex items-center text-emerald-600 text-xs font-medium">
                  <ArrowUpRight className="w-3 h-3 mr-1" /> Optimized via AI
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#D9FA50]/10 border border-[#D9FA50]/30 relative overflow-hidden">
                <ShieldAlert className="absolute -right-4 -bottom-4 w-24 h-24 text-[#D9FA50]/20" />
                <div className="text-sm text-slate-700 mb-1 relative z-10">Liabilities Mitigated</div>
                <div className="text-3xl font-bold text-slate-900 mb-2 relative z-10">$1.2M</div>
                <div className="flex items-center text-slate-600 text-xs font-medium relative z-10">
                  Based on safety audit flags
                </div>
              </div>
            </div>

            {/* Chart & Members Area (SaaZCraft Style) */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Fake Bar Chart */}
              <div className="md:col-span-2 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-bold text-slate-900">Reagent Spend</div>
                  <div className="flex gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1 text-slate-500"><div className="w-2 h-2 rounded-full bg-slate-800"></div> Allocated</div>
                    <div className="flex items-center gap-1 text-slate-500"><div className="w-2 h-2 rounded-full bg-[#D9FA50]"></div> Actual</div>
                  </div>
                </div>
                
                {/* CSS Bar Chart */}
                <div className="flex items-end justify-between h-48 gap-2 px-2">
                  <div className="flex gap-1 items-end h-full w-full justify-center">
                    <div className="w-full max-w-[20px] bg-slate-800 rounded-t-md h-[40%] transition-all hover:opacity-80"></div>
                    <div className="w-full max-w-[20px] bg-[#D9FA50] rounded-t-md h-[60%] transition-all hover:opacity-80"></div>
                  </div>
                  <div className="flex gap-1 items-end h-full w-full justify-center">
                    <div className="w-full max-w-[20px] bg-slate-800 rounded-t-md h-[70%] transition-all hover:opacity-80"></div>
                    <div className="w-full max-w-[20px] bg-[#D9FA50] rounded-t-md h-[40%] transition-all hover:opacity-80"></div>
                  </div>
                  <div className="flex gap-1 items-end h-full w-full justify-center">
                    <div className="w-full max-w-[20px] bg-slate-800 rounded-t-md h-[50%] transition-all hover:opacity-80"></div>
                    <div className="w-full max-w-[20px] bg-[#D9FA50] rounded-t-md h-[55%] transition-all hover:opacity-80"></div>
                  </div>
                  <div className="flex gap-1 items-end h-full w-full justify-center">
                    <div className="w-full max-w-[20px] bg-slate-800 rounded-t-md h-[90%] transition-all hover:opacity-80"></div>
                    <div className="w-full max-w-[20px] bg-[#D9FA50] rounded-t-md h-[65%] transition-all hover:opacity-80"></div>
                  </div>
                </div>
              </div>

              {/* Verified Vendors List */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col">
                <div className="font-bold text-slate-900 mb-6">Optimized Vendors</div>
                <div className="space-y-4 flex-1">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">S</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Sigma-Aldrich</div>
                        <div className="text-xs text-slate-500">Primary Supplier</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">T</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Thermo Fisher</div>
                        <div className="text-xs text-slate-500">Equipment</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">N</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">NEB</div>
                        <div className="text-xs text-slate-500">Enzymes</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinOpsDashboard;
