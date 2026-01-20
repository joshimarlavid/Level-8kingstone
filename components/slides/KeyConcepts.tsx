import React, { useState } from 'react';
import { SlideProps, VocabularyItem } from '../../types';
import { VOCABULARY } from '../../constants';
import { RefreshCw, Volume2, BookOpen, Layers } from 'lucide-react';

// Narrative images mapping to the vocabulary sequence
const NARRATIVE_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", // facilitate (team meeting)
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", // monopolize (one person talking)
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // receptive (listening/smiling)
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80", // nonthreatening (relaxed coffee)
  "https://images.unsplash.com/photo-1586282391129-76a6df840fd0?auto=format&fit=crop&w=800&q=80", // off track (confused/messy papers)
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"  // hand the floor (gesturing)
];

const NarrativeCard: React.FC<{ item: VocabularyItem; index: number; image: string }> = ({ item, index, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(item.term);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className="group perspective-1000 w-full h-96 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-700 preserve-3d shadow-2xl rounded-2xl ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side (Image + Term) */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-white/10 group-hover:border-emerald-500/50 transition-colors">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={item.term} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
            <div className="absolute top-6 left-6 bg-emerald-500/90 backdrop-blur-md px-3 py-1.5 rounded text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              Scene 0{index + 1}
            </div>

            <button 
              onClick={handleSpeak}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/40 hover:bg-emerald-500 text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10"
            >
              <Volume2 className="w-5 h-5" />
            </button>

            <h3 className="text-4xl font-heading font-bold text-white mb-2 drop-shadow-2xl tracking-tight">{item.term}</h3>
            
            <div className="flex items-center gap-3 text-emerald-400 text-sm font-bold uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
              <RefreshCw className="w-4 h-4" />
              <span>Click to Reveal</span>
            </div>
          </div>
        </div>

        {/* Back Side (Definition + Example) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 rounded-2xl overflow-hidden border border-emerald-500/30 p-8 flex flex-col justify-between glass-panel">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
          
          <div className="relative z-10 space-y-4">
             <div className="flex items-center gap-2 text-emerald-400">
                <BookOpen className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Definition</span>
             </div>
             <p className="text-white text-xl font-medium leading-relaxed">{item.definition}</p>
          </div>
          
          <div className="relative z-10 bg-black/40 rounded-xl p-6 border-l-4 border-emerald-500">
             <p className="text-emerald-100 text-lg italic font-light leading-relaxed">"{item.example}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KeyConcepts: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-full flex flex-col justify-center animate-fade-in py-8">
      <div className="flex items-end justify-between mb-12 px-2 border-b border-white/5 pb-8">
        <div>
           <h2 className="text-6xl font-heading font-bold text-white tracking-tight flex items-center gap-4 mb-2">
             <Layers className="text-emerald-400 w-12 h-12" />
             The Facilitator's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Journey</span>
           </h2>
           <p className="text-slate-400 text-xl font-light ml-16 max-w-2xl">
             Follow the sequence of a successful meeting. Master these key concepts to control the room.
           </p>
        </div>
        <div className="text-right hidden xl:block">
           <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">Interactive Storyboard</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {VOCABULARY.map((item, idx) => (
          <NarrativeCard 
            key={idx} 
            item={item} 
            index={idx} 
            image={NARRATIVE_IMAGES[idx]}
          />
        ))}
      </div>
    </div>
  );
};