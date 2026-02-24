import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide5_Continuity() {
  const conditions = [
    {
      title: "1. Interpolation Conditions",
      math: "S_i(x_i) = y_i, S_i(x_{i+1}) = y_{i+1}",
      desc: "The spline must pass through all data points.",
      count: "2(n-1) equations"
    },
    {
      title: "2. Continuity of S(x)",
      math: "S_i(x_{i+1}) = S_{i+1}(x_{i+1})",
      desc: "Segments must meet at the knots.",
      count: "Already covered"
    },
    {
      title: "3. Continuity of S'(x)",
      math: "S'_i(x_{i+1}) = S'_{i+1}(x_{i+1})",
      desc: "The slope must be continuous (no sharp corners).",
      count: "n-2 equations"
    },
    {
      title: "4. Continuity of S''(x)",
      math: "S''_i(x_{i+1}) = S''_{i+1}(x_{i+1})",
      desc: "The curvature must be continuous.",
      count: "n-2 equations"
    },
    {
      title: "5. Boundary Conditions",
      math: "S''_0(x_0) = 0, S''_{n-1}(x_n) = 0",
      desc: "Natural Spline: Zero curvature at endpoints.",
      count: "2 equations"
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-indigo-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Conditions for Continuity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Building the system of equations
          </motion.p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4 max-w-5xl mx-auto">
            {conditions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-base mb-2">{item.desc}</p>
                  <div className="font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 py-2 px-3 rounded inline-block text-base">
                    {item.math}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Contribution</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{item.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg mx-auto max-w-2xl"
          >
            <p className="font-semibold text-lg text-slate-700 dark:text-slate-300">
              Total Equations: <span className="text-indigo-600">4(n-1)</span>
            </p>
            <p className="text-base text-slate-500">Matches the number of unknowns exactly.</p>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Conditions for Continuity</span>
          <span>05 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
