import { Network, ShieldCheck, BarChart2, Check } from "lucide-react";

const InfoSections = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto space-y-32">
      
      {/* Methodology Section */}
      <div id="methodology" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-[#D9FA50] flex items-center justify-center mb-6 shadow-sm">
            <Network className="w-6 h-6 text-slate-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 tracking-tight">
            Neuro-Symbolic <br/><span className="italic text-slate-500">Architecture.</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Large Language Models are probabilistic by nature; they guess. In a wet-lab environment, a 99% accuracy rate is a catastrophic liability. 
          </p>
          <p className="text-slate-600 leading-relaxed">
            BioReason utilizes a proprietary <strong>Neuro-Symbolic pipeline</strong>. We leverage multimodal neural networks strictly as visual and semantic translators to read protocols and observe bench setups. That unstructured data is then fed into a deterministic Knowledge Graph, mathematically proving chemical and thermal compliance before execution. Zero hallucinations.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="space-y-4 font-mono text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-500">
              <span className="text-emerald-600 font-bold">1. PERCEPTION:</span> Gemini 3 extracts environment state.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-500">
              <span className="text-violet-600 font-bold">2. TRANSLATION:</span> Unstructured reality mapped to JSON.
            </div>
            <div className="p-4 rounded-xl bg-[#D9FA50]/20 border border-[#D9FA50] text-slate-800 font-medium">
              <span className="text-slate-900 font-bold">3. SYMBOLIC LOGIC:</span> Graph traversal verifies safety compliance.
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div id="security" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 text-slate-300 font-mono text-sm">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-slate-500">audit_log.sh</span>
          </div>
          <p className="mb-2"><span className="text-emerald-400">SUCCESS:</span> File stream established via TLS 1.3</p>
          <p className="mb-2"><span className="text-emerald-400">SUCCESS:</span> Ephemeral container spun up.</p>
          <p className="mb-2"><span className="text-yellow-400">ACTION:</span> Purging protocol data from memory...</p>
          <p><span className="text-emerald-400">SUCCESS:</span> Zero byte retention verified.</p>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-slate-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 tracking-tight">
            Zero-Retention <br/><span className="italic text-slate-500">Data Policy.</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Your experimental protocols are your most valuable Intellectual Property. BioReason is built for enterprise FinOps and strict compliance.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our infrastructure operates on an ephemeral processing model. Uploaded PDFs and visual lab data are processed in-memory for the duration of the audit and immediately purged. <strong>Your proprietary R&D data is never stored, and never used to train our base models.</strong>
          </p>
        </div>
      </div>

      {/* Future Features / FinOps Section */}
      <div id="features" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center pt-20 border-t border-slate-200">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#D9FA50] flex items-center justify-center mb-6 shadow-sm">
            <BarChart2 className="w-6 h-6 text-slate-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 tracking-tight">
            R&D Economics <br/><span className="italic text-slate-500">Copilot.</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Make data-driven procurement decisions with real-time FinOps analytics built directly into your protocol workflow. Coming in v0.2.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center text-slate-700 font-medium">
              <Check className="w-5 h-5 text-slate-900 mr-3" />
              Vendor Arbitrage & Invoice Parsing
            </li>
            <li className="flex items-center text-slate-700 font-medium">
              <Check className="w-5 h-5 text-slate-900 mr-3" />
              Per-Reaction Cost Optimization
            </li>
            <li className="flex items-center text-slate-700 font-medium">
              <Check className="w-5 h-5 text-slate-900 mr-3" />
              Customizable Financial Dashboards
            </li>
            <li className="flex items-center text-slate-700 font-medium">
              <Check className="w-5 h-5 text-slate-900 mr-3" />
              Predictive Burn-Rate Analysis
            </li>
          </ul>
        </div>
        
        {/* Soft Graphic Container */}
        <div className="bg-[#F8F9F5] p-8 sm:p-12 rounded-[2rem] border border-slate-100 flex items-center justify-center relative overflow-hidden">
          {/* Decorative dashed rings */}
          <div className="absolute inset-4 border border-dashed border-slate-200 rounded-[1.5rem]"></div>
          <div className="absolute inset-8 border border-dashed border-slate-200 rounded-[1rem]"></div>
          
          {/* Mock Chart Graphic */}
          <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-100 flex items-end gap-3 h-48 w-full max-w-sm">
            <div className="w-1/4 bg-[#E2E8F0] rounded-t-lg h-[40%]"></div>
            <div className="w-1/4 bg-[#94A3B8] rounded-t-lg h-[80%]"></div>
            <div className="w-1/4 bg-[#E2E8F0] rounded-t-lg h-[60%]"></div>
            <div className="w-1/4 bg-[#CBD5E1] rounded-t-lg h-[30%]"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default InfoSections;
