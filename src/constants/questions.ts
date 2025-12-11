/**
 * Quiz questions data
 * This file contains all the quiz questions and their correct answers
 */

import { Question } from '@/types/quiz';

export const QUIZ_QUESTIONS: Question[] = [
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

/**
 * Calculate score based on selected answers
 * @param selectedAnswers - Array of selected answer indices
 * @param questions - Array of questions with correct answers
 * @returns Score percentage (0-100)
 */
export const calculateScore = (
  selectedAnswers: number[],
  questions: Question[]
): number => {
  if (selectedAnswers.length === 0 || questions.length === 0) {
    return 0;
  }

  const correctAnswers = selectedAnswers.reduce((acc, selectedIndex, i) => {
    return acc + (selectedIndex === questions[i]?.correct ? 1 : 0);
  }, 0);

  return Math.round((correctAnswers / questions.length) * 100);
};

