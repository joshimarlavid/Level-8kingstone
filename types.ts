export interface SlideProps {
  onNext: () => void;
  setGoal?: (goal: string) => void;
  goal?: string;
}

export interface VocabularyItem {
  term: string;
  definition: string;
  example: string;
}

export interface GrammarPoint {
  collocation: string;
  meaning: string;
  example: string;
}

export interface RoleCard {
  role: string;
  description: string;
  objective: string;
}

export interface PerformanceScenario {
  id: number;
  title: string;
  context: string;
  roles: RoleCard[];
  duration: number; // in seconds
}