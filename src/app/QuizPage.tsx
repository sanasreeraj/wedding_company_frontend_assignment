import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressSlider from '@/app/ProgressSlider';
import QuestionCard from '@/app/QuestionCard';
import Options from '@/app/Options';
import Navigation from '@/app/Navigation';
import GifBox from '@/app/GifBox';

interface QuizPageProps {
  questions: { id: number; text: string; options: string[]; correct: number }[];
  currentQuestion: number;
  selectedAnswers: number[];
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const QuizPage: FC<QuizPageProps> = ({
  questions,
  currentQuestion,
  selectedAnswers,
  onSelect,
  onNext,
  onPrev,
  onSubmit,
}) => {
  const [direction, setDirection] = useState(0);
  const currentQ = questions[currentQuestion];
  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === questions.length - 1;
  const hasSelection = selectedAnswers[currentQuestion] !== undefined;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  const handlePrev = () => {
    setDirection(-1);
    onPrev();
  };

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center p-2 md:p-4">
      {/* Background with gradient and blur */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'linear-gradient(135deg,#BECFEE 0%,#71C6E2 50%,#D9F4FA 75%,#BECFEE 100%)',
        }}
      />
      <div
        className="absolute inset-[-25%] -z-10 blur-[200px]"
        style={{
          background:
            'linear-gradient(135deg,#BECFEE 0%,#71C6E2 50%,#D9F4FA 75%,#BECFEE 100%)',
        }}
      />
      
      {/* Glass Morphism Card (Outer Layer) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-6xl mx-auto rounded-[50px] p-4 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.12) 47%, rgba(255,255,255,0.4) 100%)',
        }}
      >
        {/* Inner Content Card (contains all quiz content) */}
        <div className="bg-[#F4FDFF] rounded-[42px] p-4 md:p-6 relative">
          {/* Header Section */}
          <div className="text-center mb-3">
            <h1
              className="text-3xl md:text-5xl font-normal italic tracking-tighter text-center pb-1 pr-1 mb-2"
              style={{
                background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: 'var(--font-dm-serif)'
              }}
            >
              Test Your Knowledge
            </h1>
            <div className="bg-white rounded-lg py-1 px-4 mb-4 inline-block">
              <p
                className="font-medium text-sm md:text-base text-[#15313D]"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Answer all questions to see your results
              </p>
            </div>
          </div>

          {/* Progress Slider */}
          <ProgressSlider current={currentQuestion + 1} total={questions.length} />

          {/* Question Card and Options with Animation */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentQuestion}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full max-w-2xl mx-auto"
            >
              {/* Question Card */}
              <QuestionCard question={currentQ.text} questionNumber={currentQ.id} />

              {/* Options */}
              <Options
                options={currentQ.options}
                selected={selectedAnswers[currentQuestion]}
                onSelect={onSelect}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {!isLast ? (
            <Navigation
              onPrev={handlePrev}
              onNext={handleNext}
              disabledPrev={isFirst}
              disabledNext={!hasSelection}
            />
          ) : (
            <div className="flex justify-end w-full max-w-2xl mx-auto mt-3 gap-2">
              <motion.button
                onClick={onSubmit}
                disabled={!hasSelection}
                className="px-4 py-2 rounded-md bg-linear-to-tr from-[#C6E9F7] to-[#E5F8FF] border border-[#96E5FF] text-[#1c728a] font-semibold text-sm disabled:opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: hasSelection ? 1 : 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          )}

          {/* First Page GIF Box - Inside the inner content card, left bottom */}
          {isFirst && <GifBox />}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizPage;