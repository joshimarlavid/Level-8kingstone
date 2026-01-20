import React, { useState, useEffect } from 'react';
import { SlideProps, PerformanceScenario } from '../../types';
import { SCENARIOS, VOCABULARY } from '../../constants';
import { User, Play, RotateCcw, CheckCircle2, Clock, ShieldAlert, Target, Mic, Briefcase, ArrowLeft } from 'lucide-react';

export const Performance: React.FC<SlideProps> = () => {
  const [selectedScenario, setSelectedScenario] = useState<PerformanceScenario | null>(null);
  const [selectedRoleIdx, setSelectedRoleIdx] = useState<number | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  // Sync timeLeft when scenario is selected
  useEffect(() => {
    if (selectedScenario) {
      setTimeLeft(selectedScenario.duration);
    }
  }, [selectedScenario]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, timeLeft]);

  const handleStart = () => setIsStarted(true);
  
  const handleReset = () => {
    setIsStarted(false);
    setTimeLeft(selectedScenario?.duration || 300);
  };

  const handleFullReset = () => {
    setIsStarted(false);
    setSelectedRoleIdx(null);
    setSelectedScenario(null);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 1. Scenario Selection View
  if (!selectedScenario) {
    return (
      <div className="w-full max-w-[1920px] mx-auto h-full flex flex-col justify-center px-12 animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-heading font-black text-white tracking-tight mb-4">Select Simulation</h2>
          <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-light">
            Choose a high-stakes scenario to practice your facilitation skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {SCENARIOS.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario)}
              className="group relative flex flex-col items-start text-left p-10 rounded-[2.5rem] glass-panel hover:bg-slate-800/80 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                 <Briefcase className="w-8 h-8 text-slate-300 group-hover:text-white" />
              </div>

              <h3 className="text-4xl font-heading font-bold text-white mb-4 leading-tight">{scenario.title}</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-light flex-grow mb-8">
                {scenario.context}
              </p>

              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
                <span>Engage</span>
                <Play className="w-4 h-4 fill-current" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. Live Simulation View
  if (isStarted && selectedRoleIdx !== null) {
    const role = selectedScenario.roles[selectedRoleIdx];
    const progress = (timeLeft / selectedScenario.duration) * 100;

    return (
      <div className="w-full max-w-[1600px] mx-auto h-full flex flex-col items-center justify-center animate-fade-in px-8">
        <div className="glass-panel w-full rounded-[2.5rem] relative overflow-hidden shadow-2xl border-emerald-500/20">
          {/* Progress Bar Top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800" />
          <div 
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)] transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
          
          <div className="p-12">
            <div className="flex justify-between items-start mb-12 border-b border-white/5 pb-8">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 p-1 shadow-2xl">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                     <User className="w-10 h-10 text-white" />
                   </div>
                </div>
                <div>
                  <h2 className="text-5xl font-heading font-bold text-white tracking-tight">{role.role}</h2>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                       <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Live: {selectedScenario.title}</span>
                    </div>
                    
                    {/* Timer Badge */}
                    <div className={`flex items-center gap-3 px-6 py-2 rounded-full border text-lg font-mono font-medium shadow-inner transition-colors ${timeLeft < 30 ? 'bg-red-900/50 border-red-500 text-red-200 animate-pulse' : 'bg-black/40 border-white/10 text-white'}`}>
                      <Clock className={`w-5 h-5 ${timeLeft < 30 ? 'text-red-500' : 'text-emerald-500'}`} />
                      <span>{formatTime(timeLeft)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleReset}
                className="group flex items-center gap-3 px-6 py-3 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
              >
                <span className="text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Abort</span>
                <RotateCcw className="w-8 h-8 group-hover:-rotate-180 transition-transform duration-700" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Persona Column */}
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldAlert className="text-indigo-400 w-6 h-6" />
                    <h3 className="text-indigo-200 text-sm font-bold uppercase tracking-[0.2em]">Your Persona</h3>
                </div>
                <p className="text-2xl text-white font-light leading-relaxed">{role.description}</p>
              </div>

              {/* Objective Column (Wide) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-emerald-900/20 to-slate-900/40 p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Target className="text-emerald-400 w-6 h-6" />
                    <h3 className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em]">Primary Objective</h3>
                </div>
                <p className="text-3xl text-emerald-50 font-medium leading-normal relative z-10">{role.objective}</p>
              </div>

              {/* Vocabulary Footer */}
              <div className="lg:col-span-3 mt-4">
                 <div className="flex items-center gap-3 mb-4">
                    <Mic className="text-slate-400 w-5 h-5" />
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Recommended Vocabulary</h3>
                 </div>
                 <div className="flex flex-wrap gap-3">
                   {VOCABULARY.slice(0, 6).map((v, i) => (
                     <span key={i} className="px-5 py-2 bg-white/5 rounded-full text-slate-300 text-sm font-medium border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-colors cursor-default">
                       {v.term}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Role Selection View
  return (
    <div className="w-full max-w-[1920px] mx-auto h-full flex flex-col relative justify-center px-12 animate-fade-in-up">
      <button 
        onClick={handleFullReset}
        className="absolute top-0 left-12 flex items-center gap-2 text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
      >
        <ArrowLeft className="w-4 h-4" /> Change Scenario
      </button>

      <div className="text-center mb-12 flex-shrink-0">
        <h2 className="text-7xl font-heading font-black text-white tracking-tight mb-4">{selectedScenario.title}</h2>
        
        {/* Timer Display Added Here */}
        <div className="flex justify-center mb-8 animate-fade-in">
           <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-slate-800/50 border border-white/10 text-emerald-400 shadow-lg backdrop-blur-sm">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-xl font-medium tracking-widest text-white">
                {formatTime(selectedScenario.duration)}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1 border-l border-white/10 pl-3">Time Limit</span>
           </div>
        </div>

        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light">{selectedScenario.context}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto w-full">
        {selectedScenario.roles.map((role, idx) => {
          const isSelected = selectedRoleIdx === idx;
          return (
            <button 
              key={idx} 
              onClick={() => setSelectedRoleIdx(idx)}
              className={`
                group relative text-left rounded-[2rem] p-8 flex flex-col transition-all duration-500 outline-none
                ${isSelected 
                  ? 'bg-slate-800 ring-4 ring-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.3)] scale-105 z-20' 
                  : 'glass-panel hover:bg-slate-800/80 hover:-translate-y-2 hover:shadow-2xl hover:z-30 hover:border-emerald-500/30'}
              `}
            >
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                ${isSelected 
                  ? 'bg-emerald-500 text-white shadow-lg rotate-3' 
                  : 'bg-slate-700/50 text-slate-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:rotate-6'}
              `}>
                {isSelected ? <CheckCircle2 className="w-8 h-8" /> : <User className="w-8 h-8" />}
              </div>

              <h3 className={`text-2xl font-bold mb-3 transition-colors ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>{role.role}</h3>
              <p className={`text-base mb-8 flex-grow leading-relaxed transition-colors ${isSelected ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-300'}`}>{role.description}</p>
              
              <div className={`
                pt-6 border-t transition-all duration-500
                ${isSelected ? 'border-emerald-500/30 opacity-100 translate-y-0' : 'border-white/5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}
              `}>
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Play className="w-3 h-3 fill-current" />
                  Ready
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="h-20 flex justify-center items-center flex-shrink-0">
        {selectedRoleIdx !== null ? (
          <button
            onClick={handleStart}
            className="flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full font-bold text-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all transform hover:scale-105 animate-fade-in-up"
          >
            <Play className="w-6 h-6 fill-current" />
            INITIATE SIMULATION
          </button>
        ) : (
          <div className="text-slate-500 font-light italic animate-pulse">
            Select a persona to proceed...
          </div>
        )}
      </div>
    </div>
  );
};