import React from 'react';
import { SlideProps } from '../../types';
import { Briefcase, MapPin, Users, Info } from 'lucide-react';

export const PreTask: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
      <div className="flex-1 space-y-10">
        <div>
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2 block">Context Setting</span>
          <h2 className="text-6xl font-heading font-bold text-white mb-6">Scenario: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Distopia Inc.</span></h2>
          <div className="h-2 w-32 bg-emerald-500 rounded-full"/>
        </div>
        
        <p className="text-2xl text-slate-300 leading-relaxed font-light">
          Your company is considering a strategic partnership with a firm in the small, relatively unknown country of <strong>Distopia</strong>. 
          <br/><br/>
          You are meeting today to align on strategy before the Distopian delegation arrives next month.
        </p>

        <div className="grid gap-6">
          <div className="flex items-center gap-6 glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
             <div className="p-4 bg-emerald-500/20 rounded-full">
                <Briefcase className="text-emerald-400 w-8 h-8" />
             </div>
             <span className="text-xl text-white font-medium">Determine critical information needed about Distopia.</span>
          </div>
          <div className="flex items-center gap-6 glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
             <div className="p-4 bg-emerald-500/20 rounded-full">
                <Users className="text-emerald-400 w-8 h-8" />
             </div>
             <span className="text-xl text-white font-medium">Discuss protocol for greeting the representatives.</span>
          </div>
          <div className="flex items-center gap-6 glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
             <div className="p-4 bg-emerald-500/20 rounded-full">
                <MapPin className="text-emerald-400 w-8 h-8" />
             </div>
             <span className="text-xl text-white font-medium">Prepare strategy for potential cultural differences.</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative perspective-1000">
        <div className="absolute -inset-10 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
          alt="Business Meeting" 
          className="relative rounded-3xl shadow-2xl border border-white/10 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 w-full object-cover"
        />
        
        {/* Floater Card */}
        <div className="absolute -bottom-10 -left-10 bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-rose-500/30 shadow-2xl max-w-md animate-float">
          <div className="flex items-start gap-4">
            <div className="bg-rose-500/20 p-3 rounded-full">
                <Info className="text-rose-400 w-6 h-6" />
            </div>
            <div>
                <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-2">Critical Warning</p>
                <p className="text-white text-lg font-light leading-snug">
                    You have received intelligence that cultural training might be perceived as <strong>"offensive"</strong> if not handled delicately.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};