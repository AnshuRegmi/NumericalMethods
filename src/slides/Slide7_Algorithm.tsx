import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide7_Algorithm() {
  const steps = [
    { title: "Calculate hᵢ", desc: "Compute interval widths hᵢ = xᵢ₊₁ - xᵢ" },
    { title: "Compute Differences", desc: "Calculate divided differences for the RHS vector" },
    { title: "Build Matrix", desc: "Construct the tridiagonal matrix diagonals" },
    { title: "Solve for cᵢ", desc: "Use Thomas Algorithm to find second derivatives (c)" },
    { title: "Compute aᵢ, bᵢ, dᵢ", desc: "Back-substitute to find remaining coefficients" }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-cyan-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Step-by-Step Algorithm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            From data points to coefficients
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-cyan-500 flex items-center justify-center shrink-0 shadow-lg z-10">
                    <span className="font-bold text-cyan-600 text-2xl">{i + 1}</span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-64 md:w-96">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-base text-slate-500 dark:text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Step-by-Step Algorithm</span>
          <span>07 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
