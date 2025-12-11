import { FC } from 'react';
import { motion } from 'framer-motion';

interface ProgressSliderProps {
  current: number;
  total: number;
}

const ProgressSlider: FC<ProgressSliderProps> = ({ current, total }) => {
  return (
    <div className="w-full flex gap-2 md:gap-4 mb-4 max-w-2xl mx-auto px-4 md:px-0">
      {Array.from({ length: total }).map((_, idx) => (
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