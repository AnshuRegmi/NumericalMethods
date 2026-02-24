import { motion } from "motion/react";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SlideWrapper = ({ children, className = "" }: SlideWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full h-full flex flex-col overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900 ${className}`}
    >
      {children}
    </motion.div>
  );
};
