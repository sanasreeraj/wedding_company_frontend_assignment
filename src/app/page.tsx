'use client';

import { useState, useMemo, useCallback } from 'react';
import QuizPage from '@/app/QuizPage';
import ScorePage from '@/app/ScorePage';
import { QUIZ_QUESTIONS, calculateScore } from '@/constants/questions';

/**
 * Main page component that manages quiz state and navigation
 */
export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const score = useMemo(() => {
    return calculateScore(selectedAnswers, QUIZ_QUESTIONS);
  }, [selectedAnswers]);

  const handleSelect = useCallback((optionIndex: number) => {
    setSelectedAnswers((prev) => {
      const newSelections = [...prev];
      newSelections[currentQuestion] = optionIndex;
      return newSelections;
    });
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleSubmit = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
  }, []);

  if (isSubmitted) {
    return <ScorePage score={score} onRestart={handleRestart} />;
  }

  return (
    <QuizPage
      questions={QUIZ_QUESTIONS}
      currentQuestion={currentQuestion}
      selectedAnswers={selectedAnswers}
      onSelect={handleSelect}
      onNext={handleNext}
      onPrev={handlePrev}
      onSubmit={handleSubmit}
    />
  );
}