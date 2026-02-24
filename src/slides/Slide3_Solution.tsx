import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide3_Solution() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-green-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            The Cubic Spline Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            The "Goldilocks" of interpolation
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 flex-1 items-center">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                Definition
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                A cubic spline <span className="font-serif italic font-bold">S(x)</span> is a piecewise cubic polynomial that interpolates a set of data points while maintaining smoothness up to the second derivative.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { label: "Piecewise Cubic", desc: "Low degree polynomials on each interval [xᵢ, xᵢ₊₁]", icon: "cut" },
                { label: "C² Continuity", desc: "Function, 1st derivative, and 2nd derivative are continuous", icon: "rounded_corner" },
                { label: "Minimum Curvature", desc: "Minimizes the bending energy (like a physical spline)", icon: "architecture" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.label}</h4>
                    <p className="text-base text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="relative w-full max-w-md aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8"
             >
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Grid */}
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="300" fill="url(#grid)" className="text-slate-400" />
                  
                  {/* Curve segments */}
                  <motion.path
                    d="M 50 250 C 80 250, 100 150, 150 150"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  <motion.path
                    d="M 150 150 C 200 150, 220 50, 250 50"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                  />

                  {/* Points */}
                  <circle cx="50" cy="250" r="6" className="fill-white stroke-slate-900 stroke-2" />
                  <circle cx="150" cy="150" r="6" className="fill-white stroke-slate-900 stroke-2" />
                  <circle cx="250" cy="50" r="6" className="fill-white stroke-slate-900 stroke-2" />

                  {/* Annotations */}
                  <text x="80" y="220" className="text-[10px] fill-slate-500 font-mono">S₀(x)</text>
                  <text x="180" y="100" className="text-[10px] fill-slate-500 font-mono">S₁(x)</text>
                  
                  {/* Continuity Marker */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <circle cx="150" cy="150" r="15" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="170" y="160" className="text-[10px] fill-red-500 font-bold">C² Continuous</text>
                  </motion.g>
                </svg>
             </motion.div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>The Cubic Spline Solution</span>
          <span>03 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
