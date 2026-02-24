import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";
import React from "react";

const Slide12_Conclusion: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-xl text-white"
        >
          <span className="material-symbols-outlined text-5xl">check</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
        >
          Conclusion
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl space-y-6 text-xl text-slate-600 dark:text-slate-300 mb-12"
        >
          <p>
            Cubic Spline Interpolation is a powerful tool that balances <span className="font-bold text-blue-600">accuracy</span> and <span className="font-bold text-blue-600">smoothness</span>.
          </p>
          <p>
            By solving a tridiagonal linear system, we can construct curves that mimic physical elasticity, making them ideal for engineering and design.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={onRestart}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 px-10 py-5 rounded-full shadow-lg font-bold text-lg transition-all hover:-translate-y-1"
        >
          <span className="material-symbols-outlined">replay</span>
          <span>Restart Presentation</span>
        </motion.button>

        <div className="absolute bottom-8 w-full px-12 flex justify-between items-center text-slate-400 text-sm">
          <span>Conclusion & Future Work</span>
          <span>12 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide12_Conclusion;
