const Integrations = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Seamless LIMS <span className="italic text-slate-500">Integration.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            BioReason does not live in a silo. It acts as an active middleware layer, automatically syncing your neuro-symbolic audit data with your existing enterprise stack.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Benchling Card */}
          <div className="p-8 rounded-[2rem] bg-[#F8F9F5] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
               {/* Benchling-style structural logo */}
              <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Benchling Sync</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Two-way synchronization with your electronic lab notebook. Protocols drafted in Benchling are automatically fetched and audited by BioReason before execution.
            </p>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Active API Endpoint</div>
          </div>

         {/* Quartzy/Inventory Card */}
          <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 shadow-xl group">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Workflow className="w-6 h-6 text-[#D9FA50]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Inventory ERPs</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              When a protocol is audited, BioReason instantly queries Quartzy or SAP to verify reagent stock levels, flagging supply chain bottlenecks before the experiment begins.
            </p>
            <div className="text-xs font-bold text-[#D9FA50] uppercase tracking-widest">Automated Webhooks</div>
          </div>
          {/* Slack & Teams Alert Card */}
          <div className="p-8 rounded-[2rem] bg-[#F8F9F5] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                {/* Official Slack Logo */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform delay-75">
                {/* Official Microsoft Teams Logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" alt="Teams" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Safety Alerts</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              If a CRITICAL hazard is detected during an audit, BioReason bypasses email and instantly pings the Lab Director's Slack or Microsoft Teams channel.
            </p>
            <div className="text-xs font-bold text-rose-500 uppercase tracking-widest">Push Notifications</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Integrations;
