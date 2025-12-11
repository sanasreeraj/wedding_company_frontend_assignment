import { FC, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProgressSliderProps } from '@/types/quiz';

/**
 * ProgressSlider Component
 * Displays progress bars for each question in the quiz
 */
const ProgressSlider: FC<ProgressSliderProps> = ({ current, total }) => {
  const progressBars = useMemo(() => {
    return Array.from({ length: total }, (_, idx) => idx);
  }, [total]);

  return (
    <div className="w-full flex gap-2 md:gap-4 mb-4 max-w-2xl mx-auto px-4 md:px-0">
      {progressBars.map((idx) => (
        <div
          key={idx}
          className="flex-1 h-2 rounded-full bg-[#E3E3E3] relative overflow-hidden"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: idx < current ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-full rounded-full bg-[#15313D]"
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressSlider;