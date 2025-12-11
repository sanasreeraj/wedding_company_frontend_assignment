import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ScorePageProps {
  score: number;
  onRestart: () => void;
}

const ScorePage: FC<ScorePageProps> = ({ score, onRestart }) => {
  const [displayedScore, setDisplayedScore] = useState(0);
  const [showRestart, setShowRestart] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedScore((prev) => {
        if (prev < score) {
          return prev + Math.ceil((score - prev) / 10); // Smooth roll
        }
        clearInterval(timer);
        setShowRestart(true);
        return score;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#f4fdff' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md w-full"
      >
        <motion.h2
          className="text-[11px] uppercase tracking-[0.18em] text-[#6e7f86] mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Keep learning
        </motion.h2>
        <h1
          className="text-[32px] md:text-[40px] italic bg-linear-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent mb-2"
          style={{ fontFamily: 'var(--font-dm-serif)' }}
        >
          Your final score is
        </h1>
        <div className="mb-4 overflow-hidden leading-none h-[84px] md:h-[104px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={displayedScore}
              className="text-[70px] md:text-[90px] font-bold text-[#1c728a] flex items-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              {displayedScore}
              <span className="ml-1 bg-linear-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent text-[28px] md:text-[34px] font-semibold leading-tight align-super">
                %
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {showRestart && (
            <motion.button
              onClick={onRestart}
              className="px-5 py-2 rounded-md font-semibold text-sm text-[#15313D] border border-[#a9def6] bg-linear-to-tr from-[#C6E9F7] to-[#E5F8FF]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start again
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ScorePage;