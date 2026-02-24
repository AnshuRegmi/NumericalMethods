import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";
import React from "react";

const Slide1_Title: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <SlideWrapper className="bg-slate-50 dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            <span className="material-symbols-outlined text-lg">functions</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">
            Presentation Mode
          </span>
          <button className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600">
            <span className="material-symbols-outlined">fullscreen</span>
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 relative">
        {/* Presentation Slide Wrapper */}
        <div className="relative w-full max-w-6xl aspect-video shadow-2xl rounded-xl overflow-hidden bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 group/slide">
          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col">
            {/* Main Body */}
            <div className="flex flex-1 flex-col md:flex-row h-full">
              {/* Left Column: Typography */}
              <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-16 z-10 relative">
                {/* Decorative Top Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="h-1.5 bg-blue-600 mb-8 rounded-full" 
                />
                
                <div className="flex flex-col gap-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-slate-900 dark:text-white text-6xl md:text-7xl font-black leading-[1.1] tracking-tight"
                  >
                    Cubic Spline Interpolation <br />
                    <span className="text-slate-400 dark:text-slate-500 font-bold">
                      and Its Applications
                    </span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl font-light leading-relaxed max-w-lg"
                  >
                    Smooth Curve Fitting for Real-World Data Analysis & Engineering
                  </motion.p>
                </div>
              </div>

              {/* Right Column: Visualization */}
              <div className="flex-1 relative flex items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 overflow-hidden">
                {/* Abstract Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#135bec 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                ></div>
                
                {/* Main Graphic */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                  className="relative w-full max-w-md aspect-square flex flex-col items-center justify-center p-8"
                >
                  {/* SVG Curve */}
                  <svg
                    className="w-full h-full drop-shadow-xl"
                    fill="none"
                    viewBox="0 0 400 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Grid Lines (Subtle) */}
                    <path
                      d="M40 260 H360"
                      stroke="#cbd5e1"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M40 40 V260"
                      stroke="#cbd5e1"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></path>
                    
                    {/* The Cubic Spline Curve */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                      className="drop-shadow-md"
                      d="M60 200 C90 200 110 80 140 80 C170 80 190 180 220 180 C250 180 270 100 300 100 C330 100 340 220 360 220"
                      fill="none"
                      stroke="#135bec"
                      strokeLinecap="round"
                      strokeWidth="6"
                    ></motion.path>
                    
                    {/* Area under curve (Gradient) */}
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      transition={{ delay: 2, duration: 1 }}
                      d="M60 200 C90 200 110 80 140 80 C170 80 190 180 220 180 C250 180 270 100 300 100 C330 100 340 220 360 220 V260 H60 Z"
                      fill="url(#gradient-fill)"
                    ></motion.path>
                    
                    {/* Data Points (Knots) */}
                    {[
                      { cx: 60, cy: 200, label: "x₀", lx: 50, ly: 225 },
                      { cx: 140, cy: 80, label: "x₁", lx: 130, ly: 65 },
                      { cx: 220, cy: 180, label: "x₂", lx: 210, ly: 205 },
                      { cx: 300, cy: 100, label: "x₃", lx: 290, ly: 85 },
                      { cx: 360, cy: 220, label: "", lx: 0, ly: 0 },
                    ].map((point, i) => (
                      <motion.g key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 + i * 0.1, type: "spring" }}
                      >
                        <circle
                          cx={point.cx}
                          cy={point.cy}
                          fill="white"
                          r="6"
                          stroke="#135bec"
                          strokeWidth="3"
                        ></circle>
                        {point.label && (
                          <text
                            fill="#64748b"
                            fontFamily="Inter"
                            fontSize="12"
                            fontWeight="600"
                            x={point.lx}
                            y={point.ly}
                          >
                            {point.label}
                          </text>
                        )}
                      </motion.g>
                    ))}

                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="gradient-fill"
                        x1="200"
                        x2="200"
                        y1="80"
                        y2="260"
                      >
                        <stop stopColor="#135bec"></stop>
                        <stop
                          offset="1"
                          stopColor="#135bec"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Legend/Caption */}
                  <div className="mt-4 flex gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Interpolant S(x)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border-2 border-blue-600 bg-white"></div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Knots
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Footer / Slide Number */}
            <div className="h-16 px-12 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 z-20">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  01
                </span>
                <span className="text-xs text-slate-400">/</span>
                <span className="text-xs text-slate-400">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Start Presentation Button (Floating Action) */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.5, type: "spring" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <button 
            onClick={onNext}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 px-8 py-4 rounded-full shadow-xl font-bold text-base transition-all hover:-translate-y-1"
          >
            <span className="material-symbols-outlined text-[24px]">
              play_circle
            </span>
            <span>Start Presentation</span>
          </button>
        </motion.div>
      </main>
    </SlideWrapper>
  );
};

export default Slide1_Title;
