import { SlideWrapper } from "../components/SlideWrapper";
import { motion } from "motion/react";

export default function Slide8_Python() {
  const code = `def cubic_spline(x, y):
    n = len(x) - 1
    h = np.diff(x)
    
    # Build Tridiagonal Matrix
    A = np.zeros((n+1, n+1))
    A[0,0] = 1; A[n,n] = 1
    
    for i in range(1, n):
        A[i, i-1] = h[i-1]
        A[i, i] = 2 * (h[i-1] + h[i])
        A[i, i+1] = h[i]
        
    # Solve for c (second derivatives)
    c = np.linalg.solve(A, rhs)
    
    # Calculate b and d
    b = (y[1:] - y[:-1])/h - h*(2*c[:-1] + c[1:])/3
    d = (c[1:] - c[:-1]) / (3*h)
    
    return a, b, c, d`;

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8 md:p-12 relative">
        <div className="mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-1.5 bg-yellow-500 mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Python Implementation Logic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400"
          >
            Using NumPy and SciPy
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 bg-[#1e1e1e] rounded-xl p-6 shadow-2xl overflow-auto font-mono text-base leading-relaxed"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-slate-300">
              <code>{code}</code>
            </pre>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border border-yellow-100 dark:border-yellow-900/20"
            >
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-600">library_books</span>
                Libraries
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                While we can implement from scratch for understanding, <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">scipy.interpolate.CubicSpline</code> is the production standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/20"
            >
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">memory</span>
                Efficiency
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                SciPy uses LAPACK routines to solve the banded system efficiently in O(n) time.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-slate-400 text-sm">
          <span>Python Implementation Logic</span>
          <span>08 / 12</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
