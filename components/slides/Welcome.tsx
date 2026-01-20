import React from 'react';
import { SlideProps } from '../../types';

export const Welcome: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-16 animate-fade-in-up">
      <div className="text-center space-y-6 relative">
        {/* Decorative elements behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
        
        <h2 className="text-emerald-400 font-bold tracking-[0.3em] text-xl uppercase animate-slide-down">Level 8 - Lesson 6</h2>
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter leading-[1.1] drop-shadow-2xl">
          Facilitating <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-300% animate-gradient">
            Discussions
          </span>
        </h1>
        <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          Mastering the art of involvement, flow control, and strategic participation in high-stakes professional settings.
        </p>
      </div>

      <div className="w-full max-w-6xl glass-panel rounded-3xl p-10 transform transition hover:scale-[1.01] duration-500">
        <h3 className="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-4">
          <span className="bg-emerald-500 w-2 h-10 rounded-full"/>
          Bridge Question: This or That?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="group relative p-8 bg-indigo-950/30 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/50 cursor-pointer transition-all duration-300 hover:bg-indigo-900/40">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/></svg>
            </div>
            <h4 className="text-3xl font-bold text-indigo-200 mb-3 group-hover:text-white transition-colors">Online Meetings</h4>
            <p className="text-lg text-indigo-200/60 font-light">Efficient, scalable, yet physically distant.</p>
          </div>
          
          <div className="flex items-center justify-center">
             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50 font-bold border border-white/10">VS</div>
          </div>

          <div className="group relative p-8 bg-rose-950/30 rounded-2xl border border-rose-500/20 hover:border-rose-400/50 cursor-pointer transition-all duration-300 hover:bg-rose-900/40">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <h4 className="text-3xl font-bold text-rose-200 mb-3 group-hover:text-white transition-colors">In-Person Meetings</h4>
            <p className="text-lg text-rose-200/60 font-light">Tangible connection, nuanced body language.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-black/20 rounded-xl border-l-4 border-emerald-500">
           <p className="text-xl text-slate-300 italic font-light">
            "Which do you prefer facilitating? Why is it harder to get people to speak in one versus the other?"
          </p>
        </div>
      </div>
    </div>
  );
};