import { useState } from "react";
import { Upload, ArrowUp, Loader2, AlertTriangle, File, Image as ImageIcon } from "lucide-react";
import { analyzeSafetyMVP } from "../utils/gemini";

const ChatInterface = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleFileSelect = (e) => {
    if (e.target.files) {
      setSelectedFiles((prev) => [...prev, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(selectedFiles.filter((_, index) => index !== indexToRemove));
  };

  const runAnalysis = async () => {
    // Check if they provided AT LEAST text OR a file
    if (selectedFiles.length === 0 && !textInput.trim()) {
      return alert("Please upload a file or paste protocol text.");
    }
    
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      // Pass both the files and the text to the Brain
      const result = await analyzeSafetyMVP(selectedFiles, textInput);
      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      alert(error.message || "Analysis failed. Check console.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="demo-workspace" className="py-20 px-6"> 
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-[#0A0F1C] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] ring-1 ring-white/10 overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800 bg-slate-900">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="ml-3 text-xs text-slate-500 font-mono">
              bioreason — Gemini 3 Experimental (Multimodal) — active
            </span>
          </div>

          {/* Results Area */}
          <div className="p-6 min-h-[350px] flex flex-col font-mono">
            {isAnalyzing && (
              <div className="m-auto flex flex-col items-center text-[#D9FA50] animate-pulse">
                <Loader2 className="w-8 h-8 mb-4 animate-spin" /> 
                <span>Parsing Multimodal Inputs...</span>
              </div>
            )}

            {analysisResult && !isAnalyzing && (
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 w-full">
                <div className="flex justify-between items-start mb-4 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{analysisResult.title}</h3>
                    <div className={`mt-2 inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      analysisResult.status === 'SAFE' ? 'bg-emerald-900/50 text-emerald-400' : 
                      analysisResult.status === 'WARNING' ? 'bg-yellow-900/50 text-yellow-400' : 
                      'bg-red-900/50 text-red-400'
                    }`}>
                      {analysisResult.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-slate-200">{analysisResult.safetyScore}%</div>
                    <div className="text-xs text-slate-500 uppercase">Safety Score</div>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <p className="text-slate-400"><strong>Reasoning:</strong> {analysisResult.reasoning}</p>
                  {analysisResult.hazards?.map((h, i) => (
                    <div key={i} className="flex items-start text-red-300 mt-2">
                      <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" /> 
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {!isAnalyzing && !analysisResult && (
               <div className="m-auto text-slate-600 flex flex-col items-center">
                 <Upload className="w-10 h-10 mb-4 opacity-50" />
                 <p className="text-center">Paste protocol text below,<br/>or upload a PDF and Lab Setup (Image) to begin audit.</p>
               </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-800 p-4 bg-slate-900 flex flex-col gap-4">
            
            {/* Display Selected Files */}
            {selectedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 px-2">
                {selectedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-300">
                    {file.type.includes('pdf') ? <File className="w-3 h-3 text-violet-400"/> : <ImageIcon className="w-3 h-3 text-emerald-400"/>}
                    <span className="truncate max-w-[150px]">{file.name}</span>
                    <button onClick={() => removeFile(idx)} className="text-slate-500 hover:text-red-400 ml-1">✕</button>
                  </div>
                ))}
              </div>
            )}

            {/* NEW Text Bar + Upload Setup */}
            <div className="flex gap-3">
              <div className="flex-1 relative flex items-center bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 focus-within:border-[#D9FA50]/50 transition-colors">
                
                {/* Text Input */}
                <input 
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Paste protocol text or add context..."
                  className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-slate-500 py-2"
                />
                
                {/* Separator Line */}
                <div className="h-6 w-px bg-slate-800 mx-3"></div>
                
                {/* File Upload Icon */}
                <input 
                  type="file" 
                  multiple 
                  accept="image/*, application/pdf" 
                  onChange={handleFileSelect} 
                  className="hidden" 
                  id="file-upload" 
                />
                <label htmlFor="file-upload" className="cursor-pointer flex items-center text-slate-400 hover:text-[#D9FA50] transition-colors flex-shrink-0" title="Upload PDF or Image">
                  <Upload className="w-5 h-5" />
                </label>
              </div>
              
              {/* Submit Button */}
              <button
                onClick={runAnalysis}
                disabled={isAnalyzing || (selectedFiles.length === 0 && !textInput.trim())}
                className="px-6 rounded-xl bg-[#D9FA50] text-slate-900 hover:bg-[#c9eb3b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm font-semibold"
              >
                {isAnalyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowUp className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
