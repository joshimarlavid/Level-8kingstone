import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Welcome } from './components/slides/Welcome';
import { Narrative } from './components/slides/Narrative';
import { Goal } from './components/slides/Goal';
import { KeyConcepts } from './components/slides/KeyConcepts';
import { Practice } from './components/slides/Practice';
import { Grammar } from './components/slides/Grammar';
import { PreTask } from './components/slides/PreTask';
import { Performance } from './components/slides/Performance';
import { MOTIVATIONAL_QUOTES } from './constants';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goal, setGoal] = useState("");

  const slides = [
    Welcome,
    Narrative,
    Goal,
    KeyConcepts,
    Practice,
    Grammar,
    PreTask,
    Performance
  ];

  const CurrentSlideComponent = slides[currentSlide];
  const currentQuote = MOTIVATIONAL_QUOTES[currentSlide % MOTIVATIONAL_QUOTES.length];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <Layout 
      goal={goal} 
      slideIndex={currentSlide} 
      totalSlides={slides.length} 
      onNext={handleNext}
      onBack={handleBack}
      quote={currentQuote}
    >
      <div className="animate-fade-in w-full h-full flex items-center justify-center">
        <CurrentSlideComponent 
          onNext={handleNext}
          setGoal={setGoal}
          goal={goal}
        />
      </div>
    </Layout>
  );
};

export default App;