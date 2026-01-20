import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { MAKE_COLLOCATIONS } from '../../constants';
import { AlertCircle, Lightbulb, ChevronRight } from 'lucide-react';

export const Grammar: React.FC<SlideProps> = () => {
  const [activeTab, setActiveTab] = useState<'collocations' | 'nuances'>('collocations');

  return (
    <div className="w-full max-w-screen-xl mx-auto h-full flex flex-col">
      <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
             <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
               <Lightbulb className="text-yellow-400 w-8 h-8" />
             </div>
             <h2 className="text-5xl font-heading font-bold text-white">Grammar Insight</h2>
          </div>
          <p className="text-2xl text-slate-400 font-light ml-20">
            Focus: The verb <span className="text-emerald-400 font-semibold">"To Make"</span>
          </p>
        </div>
        
        {/* Custom Tabs */}
        <div className="flex bg-black/30 p-1 rounded-xl backdrop-blur-md border border-white/10">
          <button
            onClick={() => setActiveTab('collocations')}
            className={`px-8 py-3 rounded-lg font-bold text-sm tracking-widest uppercase transition-all ${
              activeTab === 'collocations' 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'text-slate-500 hover:text-white hover:bg-white/5'
            }`}
          >
            Collocations
          </button>
          <button
            onClick={() => setActiveTab('nuances')}
            className={`px-8 py-3 rounded-lg font-bold text-sm tracking-widest uppercase transition-all ${
              activeTab === 'nuances' 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'text-slate-500 hover:text-white hover:bg-white/5'
            }`}
          >
            Nuances & Exceptions
          </button>
        </div>
      </div>

      <div className="flex-1 animate-fade-in">
        {activeTab === 'collocations' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MAKE_COLLOCATIONS.map((item, idx) => (
              <div key={idx} className="group bg-slate-800/40 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{item.collocation}</h3>
                   <span className="text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                     <ChevronRight />
                   </span>
                </div>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">{item.meaning}</p>
                <div className="bg-black/20 p-5 rounded-xl border-l-4 border-emerald-500">
                  <p className="text-emerald-100/90 text-lg italic font-light">"{item.example}"</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            <div className="lg:col-span-1 bg-rose-900/10 p-10 rounded-3xl border border-rose-500/20 backdrop-blur-sm">
              <h3 className="text-3xl font-heading font-bold text-rose-200 mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8" />
                DO vs. MAKE
              </h3>
              <div className="space-y-8 text-lg">
                <div>
                   <span className="block text-rose-400 font-bold mb-1 uppercase tracking-wider text-sm">Use DO for:</span>
                   <p className="text-rose-100/80">Actions, obligations, and repetitive tasks.</p>
                   <p className="text-rose-200/50 text-sm mt-1 italic">ex: do business, do your job</p>
                </div>
                <div className="w-full h-px bg-rose-500/20"></div>
                <div>
                   <span className="block text-emerald-400 font-bold mb-1 uppercase tracking-wider text-sm">Use MAKE for:</span>
                   <p className="text-emerald-100/80">Creating, producing, or deciding something.</p>
                   <p className="text-emerald-200/50 text-sm mt-1 italic">ex: make a plan, make a profit</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="glass-panel p-10 rounded-3xl">
                <h4 className="text-2xl font-bold text-white mb-4">Idiomatic Exception: "Make Sense"</h4>
                <p className="text-xl text-slate-300 font-light leading-relaxed">
                  We don't "do sense". We say <strong className="text-emerald-400">"It makes sense"</strong>. <br/>
                  It functions as a verb phrase meaning "to be logical" or "to be intelligible".
                </p>
              </div>
              <div className="glass-panel p-10 rounded-3xl">
                <h4 className="text-2xl font-bold text-white mb-4">Structure: Make + Object + Adjective</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <div className="bg-white/5 p-4 rounded-xl text-center">
                     <div className="text-slate-400 text-sm mb-1">Make yourself</div>
                     <div className="text-emerald-400 font-bold text-lg">Comfortable</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl text-center">
                     <div className="text-slate-400 text-sm mb-1">Make the meeting</div>
                     <div className="text-emerald-400 font-bold text-lg">Productive</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl text-center">
                     <div className="text-slate-400 text-sm mb-1">Don't make it</div>
                     <div className="text-emerald-400 font-bold text-lg">Awkward</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};