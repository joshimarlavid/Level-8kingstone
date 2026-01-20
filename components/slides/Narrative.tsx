import React from 'react';
import { SlideProps } from '../../types';

export const Narrative: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center h-full w-full">
      {/* Visual Side */}
      <div className="flex-1 w-full h-[60vh] lg:h-[70vh] relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80" 
          alt="Meeting Scene" 
          className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-10">
          <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10">
             <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-1">Scenario Analysis</span>
             <span className="text-white italic text-lg">A typical boardroom dynamic...</span>
          </div>
        </div>
        
        {/* Interactive Hotspots (Visual only) */}
        <div className="absolute top-1/3 left-1/3 w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center animate-ping opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-lg"></div>
      </div>

      {/* Content Side */}
      <div className="flex-1 space-y-12 max-w-2xl">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase">
            Visual Inquiry
          </div>
          <h2 className="text-5xl font-heading font-bold text-white leading-tight">Narrative Warm-up</h2>
          <p className="text-xl text-slate-400 font-light">
            Analyze the scene. Focus on the non-verbal cues and power dynamics at play.
          </p>
        </div>

        <div className="space-y-6">
          {[
            { id: 1, text: "Does the atmosphere feel <strong>receptive</strong> or <strong>tense</strong>?", icon: "👀" },
            { id: 2, text: "Who seems to be <strong>holding the floor</strong>? Is anyone trying to interject?", icon: "🗣️" },
            { id: 3, text: "If you were the facilitator here, what would be your <strong>first move</strong>?", icon: "♟️" }
          ].map((item) => (
            <div key={item.id} className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:translate-x-2">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-500/10 text-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <p className="text-xl text-slate-200 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};