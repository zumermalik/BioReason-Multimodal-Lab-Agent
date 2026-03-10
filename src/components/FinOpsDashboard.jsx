import { useState } from 'react';
import { 
  LayoutDashboard, FlaskConical, ShoppingCart, Settings, 
  ArrowUpRight, ArrowDownRight, DollarSign, ShieldAlert, 
  FileText, CheckCircle2, Download, Lock, FileSignature 
} from 'lucide-react';

const FinOpsDashboard = () => {
  // This state tracks which tab is currently active
  const [activeTab, setActiveTab] = useState('dashboard');

  // Helper function to style the active sidebar buttons
  const getTabClass = (tabName) => {
    return activeTab === tabName 
      ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-slate-100 text-slate-900 font-medium transition-all cursor-pointer w-full text-left"
      : "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all font-medium cursor-pointer w-full text-left";
  };

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] border-t border-slate-200 relative overflow-hidden">
      
      {/* Background glowing gradients for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#D9FA50]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              v0.2 FinOps
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9FA50]/20 border border-[#D9FA50]/50 text-slate-800 text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#D9FA50] animate-pulse"></span>
              v0.3 Compliance
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
            R&D Economics & <span className="italic text-slate-500">Telemetry.</span>
          </h2>
        </div>

        {/* The Dashboard Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-[#F8F9F5] p-6 border-r border-slate-100 flex flex-col gap-8">
            <div className="flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-[#D9FA50]" />
              </div>
              <span className="font-bold text-slate-900">BioEconomics</span>
            </div>

            <nav className="flex flex-col gap-2">
              <button onClick={() => setActiveTab('dashboard')} className={getTabClass('dashboard')}>
                <LayoutDashboard className={`w-4 h-4 ${activeTab === 'dashboard' ? 'text-[#D9FA50] fill-[#D9FA50]/20' : ''}`} /> Dashboard
              </button>
              <button onClick={() => setActiveTab('protocols')} className={getTabClass('protocols')}>
                <FlaskConical className={`w-4 h-4 ${activeTab === 'protocols' ? 'text-emerald-500' : ''}`} /> Protocols
              </button>
              <button onClick={() => setActiveTab('vendors')} className={getTabClass('vendors')}>
                <ShoppingCart className={`w-4 h-4 ${activeTab === 'vendors' ? 'text-blue-500' : ''}`} /> Vendors
              </button>
              <button onClick={() => setActiveTab('compliance')} className={getTabClass('compliance')}>
                <FileSignature className={`w-4 h-4 ${activeTab === 'compliance' ? 'text-violet-500' : ''}`} /> Compliance
              </button>
              <button onClick={() => setActiveTab('settings')} className={`${getTabClass('settings')} mt-auto`}>
                <Settings className={`w-4 h-4 ${activeTab === 'settings' ? 'text-slate-900' : ''}`} /> Settings
              </button>
            </nav>
          </div>

          {/* Main Content Area (Dynamic based on activeTab state) */}
          <div className="flex-1 p-8 md:p-10 bg-white">
            
            {/* ----------------- TAB 1: DASHBOARD (Default) ----------------- */}
            {activeTab === 'dashboard' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-bold text-slate-900">Reaction Overview</h3>
                  <button className="text-sm font-medium text-slate-500 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-lg transition-colors hover:bg-slate-50">
                    Export CSV
                  </button>
                </div>

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
                      Based on safety audits
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                      <div className="font-bold text-slate-900">Reagent Spend</div>
                      <div className="flex gap-4 text-xs font-medium">
                        <div className="flex items-center gap-1 text-slate-500"><div className="w-2 h-2 rounded-full bg-slate-800"></div> Allocated</div>
                        <div className="flex items-center gap-1 text-slate-500"><div className="w-2 h-2 rounded-full bg-[#D9FA50]"></div> Actual</div>
                      </div>
                    </div>
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
                  <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col">
                    <div className="font-bold text-slate-900 mb-6">Optimized Vendors</div>
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">S</div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Sigma-Aldrich</div>
                          <div className="text-xs text-slate-500">Primary Supplier</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">T</div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Thermo Fisher</div>
                          <div className="text-xs text-slate-500">Equipment</div>
                        </div>
                      </div>
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
            )}

            {/* ----------------- TAB 2: PROTOCOLS ----------------- */}
            {activeTab === 'protocols' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Audited Protocols</h3>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-2">Protocol Name</div>
                    <div>Status</div>
                    <div>Date Processed</div>
                  </div>
                  
                  {/* Mock Protocol Rows */}
                  <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-100 items-center bg-white">
                    <div className="col-span-2 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <span className="font-medium text-slate-900">Rapid Ethanol Precipitation</span>
                    </div>
                    <div><span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">CRITICAL</span></div>
                    <div className="text-sm text-slate-500">Today, 10:42 AM</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-100 items-center bg-white">
                    <div className="col-span-2 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <span className="font-medium text-slate-900">CRISPR Cas9 Transfection</span>
                    </div>
                    <div><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">SAFE</span></div>
                    <div className="text-sm text-slate-500">Yesterday, 4:15 PM</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 p-4 items-center bg-white">
                    <div className="col-span-2 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <span className="font-medium text-slate-900">Protein Lysis Buffer Prep</span>
                    </div>
                    <div><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">WARNING</span></div>
                    <div className="text-sm text-slate-500">Mar 8, 2026</div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- TAB 3: VENDORS ----------------- */}
            {activeTab === 'vendors' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Supply Chain Arbitrage</h3>
                <div className="grid gap-4">
                  
                  <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">S</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Sigma-Aldrich</h4>
                        <p className="text-sm text-slate-500">7 Active Orders • $4,200 total</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors">
                      Review Cart
                    </button>
                  </div>

                  <div className="p-6 bg-[#D9FA50]/10 border border-[#D9FA50]/30 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-600 font-bold text-lg">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">AI Optimization Found</h4>
                        <p className="text-sm text-slate-600">Switching Acetone suppliers saves $45.00/L</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#D9FA50] hover:bg-[#c9eb3b] text-slate-900 rounded-lg text-sm font-bold transition-colors">
                      Apply Savings
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* ----------------- TAB 4: COMPLIANCE (v0.3) ----------------- */}
            {activeTab === 'compliance' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Auto-Reporting Engine</h3>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-bold">v0.3 Active</span>
                </div>
                <p className="text-slate-500 mb-8">BioReason automatically formats your safety audits into OSHA and EPA compliant logs for instant filing.</p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                      <ShieldAlert className="w-5 h-5 text-violet-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">OSHA Hazard Log (Form 300)</h4>
                    <p className="text-sm text-slate-500 mb-6">Automatically updated based on detected thermal and chemical conflicts.</p>
                    <button className="flex items-center text-sm font-medium text-violet-600 hover:text-violet-700">
                      <Download className="w-4 h-4 mr-2" /> Download Auto-Fill PDF
                    </button>
                  </div>

                  <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">EPA Chemical Tracking</h4>
                    <p className="text-sm text-slate-500 mb-6">Reagent quantities synced from AI-parsed protocols for environmental compliance.</p>
                    <button className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700">
                      <Download className="w-4 h-4 mr-2" /> Export Inventory Log
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* ----------------- TAB 5: SETTINGS ----------------- */}
            {activeTab === 'settings' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Authentication Required</h3>
                <p className="text-slate-500 mb-6 max-w-sm">You must be logged in as an Organization Admin to modify pipeline settings and API keys.</p>
                <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors">
                  Login to Access
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinOpsDashboard;
