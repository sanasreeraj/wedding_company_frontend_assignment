'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizPage from '@/app/QuizPage';
import ScorePage from '@/app/ScorePage';

const questions = [
  {
    id: 1,
    text: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correct: 1, // 0-based index
  },
  {
    id: 2,
    text: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correct: 1,
  },
  {
    id: 3,
    text: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correct: 1,
  },
  {
    id: 4,
    text: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correct: 1,
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const score = useMemo(() => {
    return selectedAnswers.reduce((acc, idx, i) => acc + (idx === questions[i].correct ? 25 : 0), 0);
  }, [selectedAnswers]);

  const handleSelect = (optionIndex: number) => {
    const newSelections = [...selectedAnswers];
    newSelections[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelections);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <ScorePage score={score} onRestart={() => {
      setCurrentQuestion(0);
      setSelectedAnswers([]);
      setIsSubmitted(false);
    }} />;
  }

  return (
    <QuizPage
      questions={questions}
      currentQuestion={currentQuestion}
      selectedAnswers={selectedAnswers}
      onSelect={handleSelect}
      onNext={handleNext}
      onPrev={handlePrev}
      onSubmit={handleSubmit}
    />
  );
}