import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide2_Problem() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-blue-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            The Problem of Interpolation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Why simple approaches fail for complex data
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Column 1: Polynomial Interpolation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 border border-red-100 dark:border-red-900/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                High-Degree Polynomials
              </h3>
            </div>
            
            <div className="h-64 bg-white dark:bg-slate-800 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
               {/* Runge's Phenomenon SVG */}
               <svg viewBox="0 0 200 100" className="w-full h-full p-4">
                 <path d="M10 50 Q 50 10, 100 50 T 190 50" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                 <motion.path 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2, delay: 0.5 }}
                   d="M10 90 C 40 -20, 60 120, 100 50 C 140 -20, 160 120, 190 10" 
                   fill="none" 
                   stroke="#ef4444" 
                   strokeWidth="3" 
                 />
                 <circle cx="10" cy="50" r="3" fill="#ef4444" />
                 <circle cx="55" cy="30" r="3" fill="#ef4444" />
                 <circle cx="100" cy="50" r="3" fill="#ef4444" />
                 <circle cx="145" cy="70" r="3" fill="#ef4444" />
                 <circle cx="190" cy="50" r="3" fill="#ef4444" />
               </svg>
               <div className="absolute bottom-2 right-2 text-[10px] font-mono text-red-500">Runge's Phenomenon</div>
            </div>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-red-500 mt-1">•</span>
                <span>Oscillates wildly at the edges (Runge's Phenomenon)</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-red-500 mt-1">•</span>
                <span>Computationally expensive for large N</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-red-500 mt-1">•</span>
                <span>Small change in one point affects the entire curve</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Piecewise Linear */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                <span className="material-symbols-outlined">timeline</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Piecewise Linear
              </h3>
            </div>

            <div className="h-64 bg-white dark:bg-slate-800 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
               {/* Linear SVG */}
               <svg viewBox="0 0 200 100" className="w-full h-full p-4">
                 <path d="M10 50 Q 50 10, 100 50 T 190 50" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                 <motion.path 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2, delay: 0.7 }}
                   d="M10 50 L 55 30 L 100 50 L 145 70 L 190 50" 
                   fill="none" 
                   stroke="#f97316" 
                   strokeWidth="3" 
                 />
                 <circle cx="10" cy="50" r="3" fill="#f97316" />
                 <circle cx="55" cy="30" r="3" fill="#f97316" />
                 <circle cx="100" cy="50" r="3" fill="#f97316" />
                 <circle cx="145" cy="70" r="3" fill="#f97316" />
                 <circle cx="190" cy="50" r="3" fill="#f97316" />
               </svg>
               <div className="absolute bottom-2 right-2 text-[10px] font-mono text-orange-500">Not Smooth (C⁰ only)</div>
            </div>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-orange-500 mt-1">•</span>
                <span>Continuous but not smooth (sharp corners)</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-orange-500 mt-1">•</span>
                <span>Derivative is discontinuous at knots</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-orange-500 mt-1">•</span>
                <span>Looks "unnatural" for physical phenomena</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>The Problem of Interpolation</span>
          <span>02 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
