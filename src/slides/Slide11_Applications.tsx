import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide11_Applications() {
  const apps = [
    { title: "Computer Graphics", icon: "brush", desc: "Vector paths, font rendering (Bezier curves are related)" },
    { title: "Robotics", icon: "precision_manufacturing", desc: "Trajectory planning for smooth motion" },
    { title: "Audio Processing", icon: "graphic_eq", desc: "Digital signal reconstruction" },
    { title: "Finance", icon: "trending_up", desc: "Yield curve construction" },
    { title: "Medical Imaging", icon: "radiology", desc: "Contour detection in MRI/CT scans" },
    { title: "CAD/CAM", icon: "architecture", desc: "Designing smooth surfaces for manufacturing" }
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
            Real-World Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Where splines are used today
          </motion.p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">{app.icon}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{app.title}</h3>
              <p className="text-base text-slate-500 dark:text-slate-400">{app.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Real-World Applications</span>
          <span>11 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
