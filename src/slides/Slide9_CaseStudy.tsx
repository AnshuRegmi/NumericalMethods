import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide9_CaseStudy() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-red-600 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Case Study: Autonomous Vehicle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Velocity Profile Tracking
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full bg-slate-900 rounded-2xl p-6 relative overflow-hidden aspect-video flex items-center justify-center"
          >
             {/* Animation of car following spline */}
             <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Path */}
                <path d="M 20 150 C 100 150, 150 50, 200 50 C 250 50, 300 150, 380 150" fill="none" stroke="#334155" strokeWidth="4" />
                
                {/* Spline Path */}
                <motion.path 
                  d="M 20 150 C 100 150, 150 50, 200 50 C 250 50, 300 150, 380 150" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />

                {/* Car */}
                <motion.g
                   animate={{ 
                     offsetDistance: "100%",
                   }}
                   transition={{ 
                     duration: 4, 
                     repeat: Infinity,
                     ease: "linear"
                   }}
                   style={{ 
                     offsetPath: "path('M 20 150 C 100 150, 150 50, 200 50 C 250 50, 300 150, 380 150')",
                     offsetRotate: "auto"
                   }}
                >
                   <rect x="-10" y="-5" width="20" height="10" fill="white" rx="2" />
                   <circle cx="-6" cy="5" r="2" fill="#94a3b8" />
                   <circle cx="6" cy="5" r="2" fill="#94a3b8" />
                </motion.g>

                {/* GPS Points */}
                {[
                  {cx: 20, cy: 150}, {cx: 120, cy: 100}, {cx: 200, cy: 50}, {cx: 280, cy: 100}, {cx: 380, cy: 150}
                ].map((pt, i) => (
                  <circle key={i} cx={pt.cx} cy={pt.cy} r="3" fill="#ef4444" opacity="0.5" />
                ))}
             </svg>
             
             <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs text-white font-mono">
               Velocity: Smooth (C²)
               <br/>
               Accel: Continuous
             </div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">The Challenge</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                GPS data is discrete and noisy. We need a continuous path for the controller to follow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Why Splines?</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-lg">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">check</span>
                  <span>Continuous acceleration (no jerky movements)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">check</span>
                  <span>Minimum energy path</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">check</span>
                  <span>Efficient real-time calculation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Case Study: Autonomous Vehicle</span>
          <span>09 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
