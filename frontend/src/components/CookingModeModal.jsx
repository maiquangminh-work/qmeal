import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChefHat, 
  CheckCircle2, 
  Lightbulb, 
  ListChecks, 
  RotateCcw,
  Sparkles,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { scaleIngredientAmount } from '../utils/recipeScaler';

export default function CookingModeModal({ dish, servings = 2, onClose }) {
  const steps = dish?.steps || [];
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);

  const totalSteps = steps.length;
  const progressPercent = totalSteps > 0 ? Math.round(((currentStep + 1) / totalSteps) * 100) : 0;

  // Screen Wake Lock API (keeps mobile screen awake while cooking)
  useEffect(() => {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await navigator.wakeLock.request('screen');
          setWakeLockActive(true);
          wakeLock.addEventListener('release', () => {
            setWakeLockActive(false);
          });
        }
      } catch (err) {
        console.warn('Wake Lock request error:', err);
      }
    };

    requestWakeLock();

    return () => {
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, isCompleted]);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      // Trigger festive celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if canvas-confetti is not available
      }
    }
  };

  const handlePrev = () => {
    if (isCompleted) {
      setIsCompleted(false);
      setCurrentStep(totalSteps - 1);
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setIsCompleted(false);
    setCurrentStep(0);
  };

  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 text-stone-100 flex flex-col backdrop-blur-md animate-fadeIn select-none">
      
      {/* 1. TOP STATUS BAR */}
      <div className="flex-shrink-0 px-4 sm:px-8 py-3.5 border-b border-stone-800 bg-stone-900/90 flex items-center justify-between">
        
        {/* Dish Title & Cook Badge */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0">
            <ChefHat className="w-5 h-5 text-white" />
          </div>
          <div className="truncate">
            <h2 className="text-sm sm:text-base font-bold text-white truncate">
              {dish.name}
            </h2>
            <div className="flex items-center gap-2 text-[11px] text-stone-400">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-400" />
                Khẩu phần: {servings} người
              </span>
            </div>
          </div>
        </div>

        {/* Right Controls: Wake Lock indicator, Ingredients toggle, Close */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Wake Lock Status Badge */}
          <div 
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              wakeLockActive 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                : 'bg-stone-800 text-stone-400'
            }`}
            title="Màn hình sẽ không bị tắt trong lúc bạn đang nấu"
          >
            <Lightbulb className={`w-3.5 h-3.5 ${wakeLockActive ? 'text-amber-400 animate-pulse' : ''}`} />
            <span>Màn hình luôn sáng</span>
          </div>

          {/* Toggle Ingredients Drawer */}
          <button
            onClick={() => setShowIngredients(!showIngredients)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              showIngredients
                ? 'bg-brand-600 text-white shadow-warm-sm'
                : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
            }`}
          >
            <ListChecks className="w-4 h-4" />
            <span className="hidden sm:inline">Nguyên liệu</span>
            <span className="sm:hidden">NL</span>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            title="Thoát chế độ nấu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-800 h-1.5 flex-shrink-0">
        <div 
          className="bg-gradient-to-r from-brand-500 to-amber-400 h-full transition-all duration-300 ease-out"
          style={{ width: `${isCompleted ? 100 : progressPercent}%` }}
        ></div>
      </div>

      {/* 2. MAIN COOKING BODY */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Step Display Area */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-12 py-6 max-w-4xl mx-auto w-full text-center">
          
          {isCompleted ? (
            /* COMPLETION VIEW */
            <div className="space-y-6 max-w-lg p-6 bg-stone-900/70 border border-stone-800 rounded-3xl shadow-2xl animate-scaleUp">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-600 to-amber-400 flex items-center justify-center mx-auto shadow-warm-lg">
                <Sparkles className="w-10 h-10 text-white animate-bounce" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                  Hoàn Tất Tuyệt Vời!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Món {dish.name} đã sẵn sàng! 🍲
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Chúc bạn và gia đình có một bữa ăn ngon miệng và ấm cúng bên mâm cơm Việt.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Xem lại từ đầu</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-sm shadow-warm-md transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thưởng thức thôi!</span>
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE STEP VIEW */
            <div className="space-y-8 w-full max-w-2xl animate-fadeIn">
              
              {/* Step indicator header */}
              <div className="space-y-2">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-600/20 border border-brand-500/40 text-brand-400 text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                  Bước {currentStep + 1} / {totalSteps}
                </span>

                {/* Step indicator dots */}
                <div className="flex items-center justify-center gap-1.5 pt-2">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentStep
                          ? 'w-8 bg-brand-500'
                          : idx < currentStep
                          ? 'w-2.5 bg-brand-700'
                          : 'w-2 bg-stone-700'
                      }`}
                      title={`Đến bước ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Big, High-Contrast Step Instruction */}
              <div className="bg-stone-900/60 border border-stone-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-100 leading-relaxed font-heading">
                  {steps[currentStep]}
                </p>
              </div>

              {/* Quick tip / navigation cue */}
              <p className="text-xs text-stone-500">
                Mẹo: Có thể dùng phím mũi tên [◀] [▶] hoặc phím Space để chuyển bước
              </p>
            </div>
          )}

        </div>

        {/* 3. INGREDIENTS SLIDEOVER DRAWER */}
        {showIngredients && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-96 bg-stone-900 border-l border-stone-800 p-5 shadow-2xl z-20 flex flex-col animate-slideInLeft sm:animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-brand-400" />
                <h4 className="font-bold text-white text-sm">
                  Nguyên Liệu ({servings} người)
                </h4>
              </div>
              <button
                onClick={() => setShowIngredients(false)}
                className="p-1 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1">
              {dish.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-stone-800/60 border border-stone-700/60 flex items-center justify-between text-xs"
                >
                  <span className="text-stone-200 font-medium">{ing.name}</span>
                  <span className="font-bold text-brand-400 bg-stone-900/80 px-2 py-0.5 rounded-md">
                    {scaleIngredientAmount(ing.amount, servings, 2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-400 text-center">
              Định lượng đã được tính toán cho {servings} phần ăn
            </div>
          </div>
        )}

      </div>

      {/* 4. BOTTOM ACTION CONTROLS (Extra large touch targets) */}
      <div className="flex-shrink-0 px-4 sm:px-8 py-4 border-t border-stone-800 bg-stone-900/90 flex items-center justify-between gap-4">
        
        {/* Previous Step Button */}
        <button
          onClick={handlePrev}
          disabled={currentStep === 0 && !isCompleted}
          className={`px-5 sm:px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all ${
            currentStep === 0 && !isCompleted
              ? 'opacity-30 cursor-not-allowed text-stone-500 bg-stone-800/50'
              : 'bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Bước trước</span>
        </button>

        {/* Next / Complete Step Button */}
        <button
          onClick={handleNext}
          className="flex-1 max-w-md py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-amber-500 hover:from-brand-700 hover:to-brand-600 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-warm-lg transition-all flex items-center justify-center gap-2.5"
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Đóng chế độ nấu</span>
            </>
          ) : currentStep === totalSteps - 1 ? (
            <>
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              <span>Hoàn Thành Nấu 🍲</span>
            </>
          ) : (
            <>
              <span>Bước tiếp theo</span>
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>

      </div>

    </div>
  );
}
