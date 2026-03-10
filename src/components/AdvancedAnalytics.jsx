import { TrendingUp, Activity, AlertCircle } from "lucide-react";

const AdvancedAnalytics = () => {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mb-4">
              Advanced <span className="italic text-slate-500">Analytics.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Go beyond single-reaction audits. BioReason aggregates your lab's entire procedural history to identify systemic risks and macro-level cost inefficiencies.
            </p>
          </div>
          <button className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-[#D9FA50]" /> View Live Report
          </button>
        </div>

        {/* Main Analytics Container */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-200 relative overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9FA50]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

          <div className="grid lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left Side: Metrics Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" /> Systemic Safety
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">99.8%</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Overall protocol compliance rate across all active lab personnel this quarter.
                </p>
              </div>

              <div className="h-px w-full bg-slate-100"></div>

              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500" /> Risk Hotspots
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Thermal</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  72% of flagged critical errors in the last 30 days originated from incorrect heating equipment parameters.
                </p>
              </div>
            </div>

            {/* Right Side: The Chart Graphic */}
            <div className="lg:col-span-8 bg-[#F8F9F5] rounded-3xl p-8 border border-slate-100 relative">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-slate-900">Quarterly Reagent Burn vs. Allocated Budget</h3>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-slate-200"></div> Budget</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#D9FA50]"></div> Actual</div>
                </div>
              </div>

              {/* Pure CSS Bar Chart with Dashed Grid */}
              <div className="relative h-64 w-full mt-4">
                
                {/* Horizontal Dashed Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between z-0">
                  <div className="w-full h-px border-t border-dashed border-slate-200"></div>
                  <div className="w-full h-px border-t border-dashed border-slate-200"></div>
                  <div className="w-full h-px border-t border-dashed border-slate-200"></div>
                  <div className="w-full h-px border-t border-solid border-slate-200"></div>
                </div>

                {/* Bars Container */}
                <div className="absolute inset-0 z-10 flex items-end justify-between px-2 md:px-8 pb-px">
                  {/* Month 1 */}
                  <div className="flex gap-2 items-end h-full w-12 group">
                    <div className="w-full bg-slate-200 rounded-t-lg h-[60%] transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="w-full bg-[#D9FA50] rounded-t-lg h-[45%] transition-all duration-500 group-hover:opacity-80"></div>
                  </div>
                  {/* Month 2 */}
                  <div className="flex gap-2 items-end h-full w-12 group">
                    <div className="w-full bg-slate-200 rounded-t-lg h-[75%] transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="w-full bg-[#D9FA50] rounded-t-lg h-[65%] transition-all duration-500 group-hover:opacity-80"></div>
                  </div>
                  {/* Month 3 */}
                  <div className="flex gap-2 items-end h-full w-12 group">
                    <div className="w-full bg-slate-200 rounded-t-lg h-[50%] transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="w-full bg-[#D9FA50] rounded-t-lg h-[80%] transition-all duration-500 group-hover:opacity-80 relative">
                       {/* Alert Tooltip Simulation */}
                       <div className="absolute -top-10 -left-6 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                         Over Budget!
                       </div>
                    </div>
                  </div>
                  {/* Month 4 */}
                  <div className="flex gap-2 items-end h-full w-12 group">
                    <div className="w-full bg-slate-200 rounded-t-lg h-[90%] transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="w-full bg-[#D9FA50] rounded-t-lg h-[70%] transition-all duration-500 group-hover:opacity-80"></div>
                  </div>
                  {/* Month 5 */}
                  <div className="flex gap-2 items-end h-full w-12 group hidden sm:flex">
                    <div className="w-full bg-slate-200 rounded-t-lg h-[65%] transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="w-full bg-[#D9FA50] rounded-t-lg h-[50%] transition-all duration-500 group-hover:opacity-80"></div>
                  </div>
                  {/* Month 6 */}
                  <div className="flex gap-2 items-end h-full w-12 group hidden md:flex">
                    <div className="w-full bg-slate-200 rounded-t-lg h-[85%] transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="w-full bg-[#D9FA50] rounded-t-lg h-[80%] transition-all duration-500 group-hover:opacity-80"></div>
                  </div>
                </div>

              </div>
              
              {/* X-Axis Labels */}
              <div className="flex justify-between px-2 md:px-8 mt-4 text-xs font-bold text-slate-400 uppercase">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span className="hidden sm:block">May</span>
                <span className="hidden md:block">Jun</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;
