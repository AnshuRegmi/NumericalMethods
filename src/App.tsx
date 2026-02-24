import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Slide1_Title from "./slides/Slide1_Title";
import Slide2_Problem from "./slides/Slide2_Problem";
import Slide3_Solution from "./slides/Slide3_Solution";
import Slide4_Math from "./slides/Slide4_Math";
import Slide5_Continuity from "./slides/Slide5_Continuity";
import Slide6_Solving from "./slides/Slide6_Solving";
import Slide7_Algorithm from "./slides/Slide7_Algorithm";
import Slide8_Python from "./slides/Slide8_Python";
import Slide9_CaseStudy from "./slides/Slide9_CaseStudy";
import Slide10_Results from "./slides/Slide10_Results";
import Slide11_Applications from "./slides/Slide11_Applications";
import Slide12_Conclusion from "./slides/Slide12_Conclusion";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12;

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const restart = () => {
    setCurrentSlide(1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <AnimatePresence mode="wait">
        {currentSlide === 1 && <Slide1_Title key="slide1" onNext={nextSlide} />}
        {currentSlide === 2 && <Slide2_Problem key="slide2" />}
        {currentSlide === 3 && <Slide3_Solution key="slide3" />}
        {currentSlide === 4 && <Slide4_Math key="slide4" />}
        {currentSlide === 5 && <Slide5_Continuity key="slide5" />}
        {currentSlide === 6 && <Slide6_Solving key="slide6" />}
        {currentSlide === 7 && <Slide7_Algorithm key="slide7" />}
        {currentSlide === 8 && <Slide8_Python key="slide8" />}
        {currentSlide === 9 && <Slide9_CaseStudy key="slide9" />}
        {currentSlide === 10 && <Slide10_Results key="slide10" />}
        {currentSlide === 11 && <Slide11_Applications key="slide11" />}
        {currentSlide === 12 && <Slide12_Conclusion key="slide12" onRestart={restart} />}
      </AnimatePresence>

      {/* Navigation Controls (Hidden on Title Slide for aesthetic, visible on others) */}
      {currentSlide > 1 && (
        <div className="fixed bottom-8 right-8 flex gap-2 z-50">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all"
            title="Previous Slide"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              currentSlide === totalSlides
                ? "bg-white/5 text-white/20 cursor-not-allowed"
                : "bg-white/10 hover:bg-white/20 backdrop-blur text-white"
            }`}
            title="Next Slide"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}
