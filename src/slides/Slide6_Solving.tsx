import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide6_Solving() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-teal-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Solving the Linear System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            The Tridiagonal Matrix Algorithm (TDMA)
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-4xl bg-slate-900 rounded-2xl p-8 shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
            
            <div className="font-mono text-base md:text-lg text-slate-300 leading-relaxed overflow-x-auto">
              <div className="grid grid-cols-[auto_auto_auto] gap-4 items-center">
                {/* Matrix A */}
                <div className="border-l-2 border-r-2 border-slate-600 px-4 py-2 grid grid-rows-5 gap-2 text-center">
                  <div className="grid grid-cols-5 gap-4">
                    <span className="text-teal-400">1</span><span className="text-slate-600">0</span><span className="text-slate-600">0</span><span className="text-slate-600">...</span><span className="text-slate-600">0</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <span className="text-blue-400">h₀</span><span className="text-teal-400">2(h₀+h₁)</span><span className="text-blue-400">h₁</span><span className="text-slate-600">...</span><span className="text-slate-600">0</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <span className="text-slate-600">0</span><span className="text-blue-400">h₁</span><span className="text-teal-400">2(h₁+h₂)</span><span className="text-blue-400">h₂</span><span className="text-slate-600">0</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <span className="text-slate-600">...</span><span className="text-slate-600">...</span><span className="text-slate-600">...</span><span className="text-slate-600">...</span><span className="text-slate-600">...</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <span className="text-slate-600">0</span><span className="text-slate-600">...</span><span className="text-slate-600">0</span><span className="text-slate-600">0</span><span className="text-teal-400">1</span>
                  </div>
                </div>

                {/* Vector x */}
                <div className="border-l-2 border-r-2 border-slate-600 px-4 py-2 grid grid-rows-5 gap-2 text-center">
                  <span className="text-pink-400">c₀</span>
                  <span className="text-pink-400">c₁</span>
                  <span className="text-pink-400">c₂</span>
                  <span className="text-slate-500">...</span>
                  <span className="text-pink-400">cₙ</span>
                </div>

                {/* Vector b */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-white">=</span>
                  <div className="border-l-2 border-r-2 border-slate-600 px-4 py-2 grid grid-rows-5 gap-2 text-center">
                    <span className="text-slate-400">0</span>
                    <span className="text-yellow-400">3(Δy₁/h₁ - Δy₀/h₀)</span>
                    <span className="text-yellow-400">3(Δy₂/h₂ - Δy₁/h₁)</span>
                    <span className="text-slate-500">...</span>
                    <span className="text-slate-400">0</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              { title: "Sparse Matrix", desc: "Mostly zeros, efficient storage", icon: "grid_on" },
              { title: "Diagonally Dominant", desc: "Guaranteed convergence", icon: "check_circle" },
              { title: "O(n) Complexity", desc: "Solved in linear time via Thomas Algorithm", icon: "speed" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-full flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-base text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Solving the Linear System</span>
          <span>06 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
