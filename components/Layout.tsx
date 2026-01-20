import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  goal: string;
  slideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onBack: () => void;
  quote: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  goal, 
  slideIndex, 
  totalSlides, 
  onNext,
  onBack,
  quote 
}) => {
  const progressPercentage = ((slideIndex + 1) / totalSlides) * 100;

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]" /> {/* Deepest Slate */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2560&q=80" 
          alt="Office Abstract" 
          className="w-full h-full object-cover opacity-15 filter blur-sm scale-105"
        />
        {/* Cinematic Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-[#020617]/80" />
      </div>

      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-600 to-cyan-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 h-24 flex items-center justify-between px-12 border-b border-white/5 backdrop-blur-xl bg-black/10">
        <div className="flex flex-col">
           <span className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase mb-1">Advanced Business English</span>
           <span className="text-white/80 text-lg font-heading font-semibold tracking-wide">
             Unit 5: Involve Participants
           </span>
        </div>

        {goal && (
          <div className="flex items-center gap-4 animate-fade-in glass-panel px-6 py-2 rounded-full border-emerald-500/20">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Target:</span>
            <span className="text-white text-base font-medium">
              {goal}
            </span>
          </div>
        )}
      </header>

      {/* Main Content Area - 4K Optimized Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-12 w-full max-w-[1920px] mx-auto">
        <div className="w-full h-full flex flex-col justify-center">
           {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 h-24 flex items-center justify-between px-12 border-t border-white/5 bg-[#020617]/50 backdrop-blur-xl">
        <div className="flex-1 text-slate-400 text-sm font-light italic max-w-3xl truncate mr-8 opacity-80">
          "{quote}"
        </div>
        
        <div className="flex items-center gap-8">
           <div className="text-right hidden xl:block">
             <div className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mb-0.5">
               Developed by
             </div>
             <div className="text-sm text-white font-heading font-bold tracking-widest">
               JOSHIMAR LAVID
             </div>
           </div>

           <div className="flex items-center gap-4">
             {/* Back Button */}
             <button 
               onClick={onBack}
               disabled={slideIndex === 0}
               className={`
                 group/back flex items-center justify-center w-14 h-14 rounded-full 
                 border transition-all duration-300 backdrop-blur-md
                 ${slideIndex === 0 
                   ? 'opacity-0 pointer-events-none -translate-x-4' 
                   : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/50 text-slate-400 hover:text-white'}
               `}
             >
               <ArrowLeft className="w-6 h-6 transition-transform group-hover/back:-translate-x-1" />
             </button>

             {/* Next Button */}
             <button 
               onClick={onNext}
               disabled={slideIndex === totalSlides - 1}
               className={`
                 group flex items-center gap-3 px-8 py-4 rounded-full 
                 font-heading font-bold tracking-widest text-base transition-all duration-300
                 ${slideIndex === totalSlides - 1 
                   ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed' 
                   : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] hover:px-10 border border-emerald-500/50'}
               `}
             >
               {slideIndex === totalSlides - 1 ? 'LESSON COMPLETE' : 'CONTINUE'}
               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
             </button>
           </div>
        </div>
      </footer>
    </div>
  );
};