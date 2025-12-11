/**
 * Type definitions for the Quiz application
 */

export interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number; // 0-based index
}

export interface QuizPageProps {
  questions: Question[];
  currentQuestion: number;
  selectedAnswers: number[];
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export interface ScorePageProps {
  score: number;
  onRestart: () => void;
}

export interface QuestionCardProps {
  question: string;
  questionNumber: number;
}

export interface OptionsProps {
  options: string[];
  selected?: number;
  onSelect: (index: number) => void;
}

export interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
}

export interface ProgressSliderProps {
  current: number;
  total: number;
}

