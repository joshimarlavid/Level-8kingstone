import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { Target, Sparkles } from 'lucide-react';

export const Goal: React.FC<SlideProps> = ({ setGoal }) => {
  const [inputValue, setInputValue] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (inputValue.trim() && setGoal) {
      setGoal(inputValue);
      setSaved(true);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh] animate-fade-in-up">
      <div className="text-center mb-16 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px] -z-10" />
         <Target className="w-24 h-24 text-emerald-400 mx-auto mb-8 drop-shadow-[0_0_25px_rgba(52,211,153,0.6)]" />
         <h2 className="text-7xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-2xl">Set Your Intention</h2>
         <p className="text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
           What specific facilitation skill will you <span className="text-emerald-400 font-medium">master</span> in this session?
         </p>
      </div>

      <div className="w-full relative group transform transition-all duration-500 hover:scale-[1.02]">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-3 flex items-center shadow-2xl border border-white/10">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={saved}
            placeholder="e.g. I want to learn how to control a monopolizer..."
            className="w-full bg-transparent text-white text-3xl font-light p-6 focus:outline-none placeholder-slate-600/50"
            autoFocus
          />
          <button
            onClick={handleSave}
            disabled={!inputValue.trim() || saved}
            className={`
              flex-shrink-0 px-12 py-6 rounded-xl font-heading font-bold text-lg tracking-widest uppercase transition-all duration-300
              ${saved 
                ? 'bg-emerald-500 text-white cursor-default shadow-[0_0_20px_rgba(16,185,129,0.5)]' 
                : !inputValue.trim() 
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                  : 'bg-white text-slate-900 hover:bg-emerald-400 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]'}
            `}
          >
            {saved ? 'Locked In' : 'Commit'}
          </button>
        </div>
      </div>

      <div className={`mt-12 flex items-center gap-3 transition-all duration-700 ${saved ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Sparkles className="text-emerald-400 w-8 h-8 animate-pulse" />
        <p className="text-2xl text-emerald-400 font-light">Goal locked. Check the header.</p>
      </div>
    </div>
  );
};