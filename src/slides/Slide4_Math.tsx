import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide4_Math() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-purple-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Mathematical Formulation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Defining the polynomial on each interval
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-12 max-w-4xl w-full text-center"
          >
            <p className="text-slate-400 mb-6 font-mono text-base uppercase tracking-widest">General Form for interval [xᵢ, xᵢ₊₁]</p>
            <div className="text-3xl md:text-5xl font-serif italic leading-relaxed">
              S<sub className="text-2xl">i</sub>(x) = a<sub className="text-2xl">i</sub> + b<sub className="text-2xl">i</sub>(x - x<sub className="text-2xl">i</sub>) + c<sub className="text-2xl">i</sub>(x - x<sub className="text-2xl">i</sub>)<sup>2</sup> + d<sub className="text-2xl">i</sub>(x - x<sub className="text-2xl">i</sub>)<sup>3</sup>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {[
              { coeff: "aᵢ", desc: "Function value at xᵢ (Known)", color: "bg-blue-100 text-blue-700" },
              { coeff: "bᵢ", desc: "First derivative (Slope)", color: "bg-purple-100 text-purple-700" },
              { coeff: "cᵢ", desc: "Second derivative (Curvature)", color: "bg-pink-100 text-pink-700" },
              { coeff: "dᵢ", desc: "Third derivative (Rate of change of curvature)", color: "bg-orange-100 text-orange-700" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center font-serif font-bold text-3xl mb-4`}>
                  {item.coeff}
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-slate-500 text-center max-w-2xl text-xl"
          >
            <p className="mb-2">For <span className="font-bold text-slate-900 dark:text-white">n</span> data points, we have <span className="font-bold text-slate-900 dark:text-white">n-1</span> intervals.</p>
            <p>Each interval has 4 unknowns (a, b, c, d), so we need <span className="font-bold text-slate-900 dark:text-white">4(n-1)</span> equations to solve the system.</p>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Mathematical Formulation</span>
          <span>04 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
