import { FC } from 'react';
import { QuestionCardProps } from '@/types/quiz';

const QuestionCard: FC<QuestionCardProps> = ({ question, questionNumber }) => {
  return (
    <div
      className="rounded-[10px] p-3 md:p-4 mb-3 text-center border relative w-full max-w-2xl mx-auto"
      style={{
        background: "linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)",
        borderColor: "#96E5FF"
      }}
    >
      <h2 className="text-base md:text-lg font-semibold text-[#15313D] leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
        {questionNumber}. {question}
      </h2>
    </div>
  );
};

export default QuestionCard;