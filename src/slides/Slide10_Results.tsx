import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide10_Results() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
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
            Results & Analysis
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Comparing Interpolation Methods
          </motion.p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-4 text-center">Error Analysis</h3>
            <div className="h-64 flex items-end justify-center gap-4 px-4">
              {[
                { label: "Linear", height: "80%", color: "bg-orange-400" },
                { label: "Poly (High N)", height: "95%", color: "bg-red-500" },
                { label: "Cubic Spline", height: "15%", color: "bg-green-500" }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-1/3 h-full justify-end group">
                  <div className="text-xs font-bold text-slate-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Max Error</div>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: bar.height }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                    className={`w-full max-w-[60px] rounded-t-lg ${bar.color} opacity-80 hover:opacity-100 transition-opacity`}
                  />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{bar.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-4 text-center">Smoothness (Max Curvature)</h3>
            <div className="h-64 flex items-end justify-center gap-4 px-4">
              {[
                { label: "Linear", height: "100%", color: "bg-orange-400", note: "Infinite" },
                { label: "Poly", height: "60%", color: "bg-red-500", note: "High" },
                { label: "Spline", height: "20%", color: "bg-green-500", note: "Minimal" }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-1/3 h-full justify-end group">
                   <div className="text-xs font-bold text-slate-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{bar.note}</div>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: bar.height }}
                    transition={{ delay: 0.7 + i * 0.2, duration: 1 }}
                    className={`w-full max-w-[60px] rounded-t-lg ${bar.color} opacity-80 hover:opacity-100 transition-opacity`}
                  />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{bar.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
           <p className="text-2xl font-medium text-slate-700 dark:text-slate-200">
             Cubic Splines offer the best trade-off between accuracy and smoothness.
           </p>
        </motion.div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Results & Analysis</span>
          <span>10 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
