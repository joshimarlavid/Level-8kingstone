import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { Check, X, Award } from 'lucide-react';

const QUESTIONS = [
  {
    question: "When someone talks too much, they are ________ the discussion.",
    options: ["facilitating", "monopolizing", "jotting down"],
    correct: "monopolizing"
  },
  {
    question: "A good leader creates a ________ environment.",
    options: ["foolish", "nonthreatening", "cross-cultural"],
    correct: "nonthreatening"
  },
  {
    question: "If the discussion goes ________, bring it back to the agenda.",
    options: ["off track", "on flow", "receptive"],
    correct: "off track"
  },
  {
    question: "I'd like to ________ a suggestion about the timeline.",
    options: ["do", "make", "have"],
    correct: "make"
  }
];

export const Practice: React.FC<SlideProps> = () => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qIndex: number, option: string) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const score = Object.keys(answers).reduce((acc, key) => {
    return acc + (answers[parseInt(key)] === QUESTIONS[parseInt(key)].correct ? 1 : 0);
  }, 0);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h2 className="text-5xl font-heading font-bold text-white">Controlled Practice</h2>
          <p className="text-xl text-slate-400 mt-2 font-light">Select the correct term to complete the sentence.</p>
        </div>
        {showResults && (
          <div className="flex items-center gap-4 bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-500/20 animate-scale-in">
            <Award className="w-8 h-8 text-yellow-400" />
            <div className="text-3xl font-bold text-emerald-400">
              Score: {score}/{QUESTIONS.length}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {QUESTIONS.map((q, idx) => {
          const isCorrect = answers[idx] === q.correct;
          const userAnswer = answers[idx];

          return (
            <div key={idx} className="glass-panel p-8 rounded-2xl transition-colors hover:bg-white/5">
              <div className="flex flex-col xl:flex-row xl:items-center gap-6">
                <div className="flex-1">
                  <p className="text-2xl text-white font-medium leading-normal">
                    <span className="text-emerald-500 font-bold mr-3">{idx + 1}.</span>
                    {q.question.split('________').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className={`
                            inline-block min-w-[150px] border-b-2 text-center px-2 font-bold mx-1
                            ${showResults 
                              ? (isCorrect ? 'text-emerald-400 border-emerald-500' : 'text-red-400 border-red-500') 
                              : 'text-emerald-400/50 border-white/20'}
                          `}>
                            {showResults ? (userAnswer === q.correct ? q.correct : userAnswer || "___") : (userAnswer || "________")}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(idx, opt)}
                      disabled={showResults}
                      className={`
                        px-6 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 min-w-[160px]
                        ${showResults && opt === q.correct 
                          ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] border border-emerald-400' 
                          : showResults && opt === userAnswer && opt !== q.correct
                          ? 'bg-red-900/50 text-red-200 border border-red-500 opacity-50'
                          : userAnswer === opt
                          ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/5'}
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              
              {showResults && !isCorrect && (
                 <div className="mt-4 flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider animate-fade-in">
                    <X className="w-5 h-5"/> Correct answer: {q.correct}
                 </div>
              )}
            </div>
          );
        })}
      </div>

      {!showResults && Object.keys(answers).length === QUESTIONS.length && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setShowResults(true)}
            className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-xl font-bold shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 transition-all"
          >
            Check Answers
          </button>
        </div>
      )}
    </div>
  );
};