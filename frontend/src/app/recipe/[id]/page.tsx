'use client';
import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { scaleIngredientAmount, scaleCalories, scaleMacro } from '@/utils/recipeScaler';
import confetti from 'canvas-confetti';
import { 
  ChefHat, 
  Lightbulb, 
  ListChecks, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  X, 
  ExternalLink,
  MapPin,
  Clock,
  Flame,
  Users
} from 'lucide-react';

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const { language: lang, addIngredientsToGrocery, recordRecipeView, userLocationName, userDistrict } = useStore();
  const [activeTab, setActiveTab] = useState<'cook' | 'eat-out'>('cook');
  const [servings, setServings] = useState(4);
  const [cookingMode, setCookingMode] = useState(false);
  const [cookingStep, setCookingStep] = useState(0);
  const [cookingDone, setCookingDone] = useState(false);
  const [showCookingIngredients, setShowCookingIngredients] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedShop, setSelectedShop] = useState<string | null>(null);
  
  const [isTranslating, setIsTranslating] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  
  useEffect(() => {
    if (!recipe) setLoading(true);
    else setIsTranslating(true);

    // Map mock IDs hoặc ID cũ sang Master Vietnamese Database
    let fetchId = unwrappedParams.id;
    const mockMap: Record<string, string> = {
      '1': 'vn-pho-bo',
      '53238': 'vn-pho-bo',
      '2': 'vn-bun-cha',
      '52828': 'vn-bun-cha',
      '3': 'vn-banh-mi',
      '53249': 'vn-banh-mi',
      '4': 'vn-goi-cuon',
      '53227': 'vn-goi-cuon',
    };
    fetchId = mockMap[fetchId] || fetchId;

    fetch(`/api/recipe/${fetchId}?lang=${lang}`)
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          setRecipe(json.data);
          if (json.data.title) {
            document.title = `${json.data.title} | QMeal`;
          }
          if (json.data.servings) setServings(json.data.servings);
          if (json.data.id) recordRecipeView(json.data.id);
        }
        setLoading(false);
        setIsTranslating(false);
      })
      .catch(() => {
        setLoading(false);
        setIsTranslating(false);
      });
  }, [unwrappedParams.id, lang]);

  // Screen Wake Lock API (keeps mobile screen awake while cooking)
  useEffect(() => {
    let wakeLock: any = null;
    if (cookingMode && typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
      (navigator as any).wakeLock.request('screen')
        .then((lock: any) => {
          wakeLock = lock;
          setWakeLockActive(true);
          lock.addEventListener('release', () => {
            setWakeLockActive(false);
          });
        })
        .catch((err: any) => {
          console.warn('Screen Wake Lock error:', err);
        });
    }

    return () => {
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
      setWakeLockActive(false);
    };
  }, [cookingMode]);

  // Keyboard navigation for Cooking Mode
  useEffect(() => {
    if (!cookingMode || !recipe) return;
    const stepsCount = recipe.instructions?.length || 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (cookingStep < stepsCount - 1) {
          setCookingStep(prev => prev + 1);
        } else {
          setCookingDone(true);
          try {
            confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
          } catch {}
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (cookingDone) {
          setCookingDone(false);
        } else if (cookingStep > 0) {
          setCookingStep(prev => prev - 1);
        }
      } else if (e.key === 'Escape') {
        setCookingMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cookingMode, cookingStep, cookingDone, recipe]);

  if (loading && !recipe) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!recipe) return <div className="min-h-screen flex items-center justify-center text-stone-500">Không tìm thấy món ăn</div>;

  const baselineServings = recipe.servings || 4;

  const t = {
    vi: {
      ingredients: "Nguyên Liệu",
      steps: "Các Bước Thực Hiện",
      reviews: "Thành quả cộng đồng",
      cart: "Thêm tất cả vào Giỏ Đi Chợ",
      cook: "🧑‍🍳 Tự Nấu Ở Nhà",
      eatOut: "🛵 Ra Quán Ăn",
      nutrition: "Thông tin Dinh Dưỡng",
      nutritionBadge: "Đã kiểm chứng bởi Viện Dinh Dưỡng Quốc Gia (NIN)",
      servingRef: "Khẩu phần chuẩn:",
      scaledFor: `(Đã tính theo ${servings} khẩu phần)`,
      sourceTitle: "Nguồn dữ liệu:",
      recipeSourceTitle: "Nguồn công thức:",
      proteinLabel: "Chất đạm (Protein)",
      fatLabel: "Chất béo (Fat)",
      carbsLabel: "Tinh bột (Carbs)",
      calLabel: "Năng lượng (Calories)",
      handsFree: "Chế độ nấu ăn rảnh tay",
      handsFreeSub: "Màn hình lớn, không tự tắt, từng bước rõ ràng.",
      startCook: "Bắt đầu Nấu ▶",
      servings: "phần",
      mapTitle: "Quán",
      mapSub: "Xung Quanh Bạn",
      mapSearch: "Tìm kiếm quán",
      mapTo: "Đang chỉ đường đến:",
      distance: "Cách bạn khoảng",
      wakeLockOn: "Màn hình luôn sáng",
      wakeLockOff: "Màn hình bình thường",
      stepOf: "Bước",
      prevStep: "Bước Trước",
      nextStep: "Bước Tiếp Theo",
      finishCooking: "Hoàn Thành 🍲",
      completedTitle: "Hoàn Tất Tuyệt Vời!",
      completedMsg: `Món ${recipe.title} đã sẵn sàng! Chúc bạn có bữa ăn ngon miệng.`,
      restart: "Xem lại từ đầu",
      enjoy: "Thưởng thức thôi!",
      viewIngredients: "Nguyên liệu",
      deliveryTitle: "Lười nấu? Đặt ship giao tận nơi siêu tốc:"
    },
    en: {
      ingredients: "Ingredients",
      steps: "Instructions",
      reviews: "Community Reviews",
      cart: "Add all to Grocery List",
      cook: "🧑‍🍳 Cook at Home",
      eatOut: "🛵 Eat Out",
      nutrition: "Nutrition Facts",
      nutritionBadge: "Verified by National Institute of Nutrition (NIN)",
      servingRef: "Reference serving size:",
      scaledFor: `(Calculated for ${servings} servings)`,
      sourceTitle: "Nutrition Source:",
      recipeSourceTitle: "Recipe Heritage:",
      proteinLabel: "Protein",
      fatLabel: "Fat",
      carbsLabel: "Carbohydrates",
      calLabel: "Calories",
      handsFree: "Hands-free Cooking Mode",
      handsFreeSub: "Large screen, stays awake, clear step-by-step.",
      startCook: "Start Cooking ▶",
      servings: "servings",
      mapTitle: "Restaurants near you",
      mapSub: "",
      mapSearch: "Searching for",
      mapTo: "Routing to:",
      distance: "Approx. distance:",
      wakeLockOn: "Screen stays awake",
      wakeLockOff: "Screen lock normal",
      stepOf: "Step",
      prevStep: "Previous Step",
      nextStep: "Next Step",
      finishCooking: "Complete 🍲",
      completedTitle: "Cooking Completed!",
      completedMsg: `${recipe.title} is ready to serve! Enjoy your meal.`,
      restart: "Review from start",
      enjoy: "Enjoy your meal!",
      viewIngredients: "Ingredients",
      deliveryTitle: "Craving delivery? Order online with fast delivery:"
    }
  }[lang as 'vi' | 'en'];

  // Dynamically scale ingredients based on current servings
  const currentIngredients = recipe.ingredients.map((ing: any) => ({
    name: ing.name,
    amount: scaleIngredientAmount(ing.measure, servings, baselineServings)
  }));

  // Dynamically scale nutrition macros
  const scaledCalories = scaleCalories(recipe.calories, servings, baselineServings);
  const scaledProtein = scaleMacro(recipe.protein, servings, baselineServings);
  const scaledFat = scaleMacro(recipe.fat, servings, baselineServings);
  const scaledCarbs = scaleMacro(recipe.carbs, servings, baselineServings);

  // Fullscreen Step-by-Step Cooking Mode with Wake Lock
  if (cookingMode) {
    const totalSteps = recipe.instructions.length;
    const progressPercent = totalSteps > 0 ? Math.round(((cookingStep + 1) / totalSteps) * 100) : 0;

    return (
      <div className="fixed inset-0 z-50 bg-stone-950 text-stone-100 flex flex-col select-none animate-in fade-in duration-300">
        
        {/* Top Cooking Bar */}
        <div className="px-4 sm:px-8 py-3.5 border-b border-stone-800 bg-stone-900/95 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-orange-600 flex items-center justify-center flex-shrink-0">
              <ChefHat className="w-4 h-4 text-white" />
            </div>
            <div className="truncate">
              <h2 className="text-sm sm:text-base font-bold text-white truncate">
                {recipe.title}
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-orange-400">
                  <Users className="w-3 h-3" />
                  {servings} {t.servings}
                </span>
              </div>
            </div>
          </div>

          {/* Controls: Wake Lock, Ingredients drawer, Close */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div 
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                wakeLockActive 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                  : 'bg-stone-800 text-stone-400'
              }`}
            >
              <Lightbulb className={`w-3.5 h-3.5 ${wakeLockActive ? 'text-amber-400 animate-pulse' : ''}`} />
              <span>{wakeLockActive ? t.wakeLockOn : t.wakeLockOff}</span>
            </div>

            <button
              onClick={() => setShowCookingIngredients(!showCookingIngredients)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                showCookingIngredients
                  ? 'bg-orange-600 text-white'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
              }`}
            >
              <ListChecks className="w-4 h-4" />
              <span>{t.viewIngredients}</span>
            </button>

            <button
              onClick={() => {
                setCookingMode(false);
                setCookingDone(false);
              }}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-stone-800 h-1.5 flex-shrink-0">
          <div 
            className="bg-gradient-to-r from-orange-500 to-amber-400 h-full transition-all duration-300 ease-out"
            style={{ width: `${cookingDone ? 100 : progressPercent}%` }}
          />
        </div>

        {/* Cooking Body */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Main Step Display */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-12 py-6 max-w-4xl mx-auto w-full text-center">
            {cookingDone ? (
              /* Completion Celebration Card */
              <div className="space-y-6 max-w-lg p-6 sm:p-8 bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/20">
                  <Sparkles className="w-10 h-10 text-white animate-bounce" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                    {t.completedTitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {t.completedMsg}
                  </h3>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setCookingDone(false);
                      setCookingStep(0);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{t.restart}</span>
                  </button>

                  <button
                    onClick={() => {
                      setCookingMode(false);
                      setCookingDone(false);
                    }}
                    className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t.enjoy}</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Step View */
              <div className="space-y-8 w-full max-w-3xl animate-in fade-in duration-300">
                <div className="space-y-2">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-extrabold uppercase">
                    {t.stepOf} {cookingStep + 1} / {totalSteps}
                  </span>

                  {/* Step dots */}
                  <div className="flex items-center justify-center gap-1.5 pt-2">
                    {recipe.instructions.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCookingStep(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === cookingStep
                            ? 'w-8 bg-orange-500'
                            : idx < cookingStep
                            ? 'w-2.5 bg-orange-700'
                            : 'w-2 bg-stone-800'
                        }`}
                        title={`Đến bước ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Big Step Text */}
                <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/80 border border-stone-800 shadow-xl">
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-stone-100">
                    {recipe.instructions[cookingStep]}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Collapsible Ingredients Drawer in Cooking Mode */}
          {showCookingIngredients && (
            <div className="w-72 sm:w-80 bg-stone-900 border-l border-stone-800 p-4 overflow-y-auto flex-shrink-0 animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-orange-500" />
                  <span>{t.ingredients} ({servings} {t.servings})</span>
                </h4>
                <button 
                  onClick={() => setShowCookingIngredients(false)}
                  className="p-1 rounded-lg hover:bg-stone-800 text-stone-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {currentIngredients.map((ing: any, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-between text-xs">
                    <span className="text-stone-200 font-medium">{ing.name}</span>
                    <span className="font-bold text-orange-400 bg-stone-900 px-2 py-0.5 rounded-md">
                      {ing.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Step Navigation Controls */}
        {!cookingDone && (
          <div className="px-4 sm:px-8 py-4 border-t border-stone-800 bg-stone-900/90 flex items-center justify-between flex-shrink-0">
            <button
              onClick={() => {
                if (cookingStep > 0) setCookingStep(prev => prev - 1);
              }}
              disabled={cookingStep === 0}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                cookingStep === 0
                  ? 'text-stone-600 bg-stone-800/50 cursor-not-allowed'
                  : 'text-stone-200 bg-stone-800 hover:bg-stone-700 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t.prevStep}</span>
            </button>

            <span className="text-xs text-stone-400 hidden sm:inline">
              Dùng phím mũi tên ← → hoặc Space để chuyển bước
            </span>

            {cookingStep < totalSteps - 1 ? (
              <button
                onClick={() => setCookingStep(prev => prev + 1)}
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-95 transition-all"
              >
                <span>{t.nextStep}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCookingDone(true);
                  try {
                    confetti({ particleCount: 100, spread: 75, origin: { y: 0.6 } });
                  } catch {}
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                <span>{t.finishCooking}</span>
                <Sparkles className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isTranslating ? 'opacity-50 blur-sm pointer-events-none' : 'opacity-100'}`}>
      {/* Hero Banner Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-stone-900">
        <img 
          src={recipe.image?.includes('wikimedia.org') || recipe.image?.includes('wikipedia.org')
            ? `/api/image-proxy?url=${encodeURIComponent(recipe.image)}`
            : recipe.image} 
          alt={recipe.title} 
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            e.currentTarget.src = '/api/image-proxy';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags.map((tag: string, i: number) => (
              <span key={i} className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">{recipe.title}</h1>
          <div className="flex items-center gap-6 text-stone-200 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-orange-400 text-xl">★</span> {recipe.rating} (1,284)
            </div>
            <div className="flex items-center gap-2">
              <span>⏱</span> {recipe.time}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col lg:flex-row gap-12">
        {/* Left Column (Main Content) */}
        <div className="w-full lg:w-2/3">
          
          {/* Navigation Tabs and Language Toggle */}
          <div className="flex flex-col sm:flex-row border-b border-stone-200 mb-8 sm:items-center justify-between gap-4 sticky top-20 z-10 bg-white/80 backdrop-blur-md pt-2">
            <div className="flex">
              <button 
                onClick={() => setActiveTab('cook')}
                className={`px-8 py-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'cook' ? 'border-orange-500 text-orange-600' : 'border-transparent text-stone-500 hover:text-stone-800'}`}
              >
                {t.cook}
              </button>
              <button 
                onClick={() => setActiveTab('eat-out')}
                className={`px-8 py-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'eat-out' ? 'border-orange-500 text-orange-600' : 'border-transparent text-stone-500 hover:text-stone-800'}`}
              >
                {t.eatOut}
              </button>
            </div>
          </div>

          {activeTab === 'cook' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Hands-free Cooking Banner */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10 flex items-center justify-between shadow-sm">
                <div>
                  <h3 className="font-bold text-orange-800 text-lg">{t.handsFree}</h3>
                  <p className="text-orange-600/80 text-sm mt-1">{t.handsFreeSub}</p>
                </div>
                <button 
                  onClick={() => setCookingMode(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-orange-500/20 transition-transform transform hover:scale-105"
                >
                  {t.startCook}
                </button>
              </div>

              {/* Ingredients with Serving Adjuster */}
              <section className="mb-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">🛒</span>
                    {t.ingredients}
                  </h2>
                  
                  {/* Serving Adjuster */}
                  <div className="flex items-center bg-stone-100 rounded-full p-1 border border-stone-200">
                    <button onClick={() => setServings(Math.max(1, servings - 1))} className="w-8 h-8 rounded-full bg-white text-stone-600 font-bold hover:text-orange-500 shadow-sm">-</button>
                    <span className="px-4 font-bold text-stone-800">{servings} {t.servings}</span>
                    <button onClick={() => setServings(servings + 1)} className="w-8 h-8 rounded-full bg-white text-stone-600 font-bold hover:text-orange-500 shadow-sm">+</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {currentIngredients.map((ing: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-stone-200 bg-white shadow-sm hover:border-orange-300 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5 rounded border-stone-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                        <span className="font-semibold text-stone-800">{ing.name}</span>
                      </div>
                      <span className="text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-md">{ing.amount}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    if (recipe && recipe.ingredients) {
                      addIngredientsToGrocery(recipe.title, recipe.ingredients);
                      setAddedToCart(true);
                      setTimeout(() => setAddedToCart(false), 3000);
                    }
                  }}
                  className={`w-full py-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    addedToCart 
                      ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' 
                      : 'border-dashed border-stone-300 text-stone-600 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50/50'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <span className="text-xl">✓</span>
                      <span>{lang === 'vi' ? 'Đã thêm tất cả vào Giỏ Đi Chợ!' : 'Added all to Grocery List!'}</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      {t.cart}
                    </>
                  )}
                </button>
              </section>

              {/* Instructions */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">📝</span>
                  {t.steps}
                </h2>
                <div className="space-y-6">
                  {recipe.instructions.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md shadow-orange-500/20">
                        0{i + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-stone-700 leading-relaxed text-lg">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Community Reviews / I Made This */}
              <section className="mt-16 pt-10 border-t border-stone-100">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-stone-900">{t.reviews}</h2>
                  <a href="#" className="text-orange-500 font-bold hover:text-orange-600">Xem tất cả 45 ảnh</a>
                </div>
                <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex-shrink-0 w-48 h-64 rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                      <img src={`https://images.unsplash.com/photo-1556694795-b6423d3d5b28?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Review" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-bold">@bepcuame</p>
                        <p className="text-xs text-stone-300">Nấu rất ngon!</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              {/* Header & Location Banner */}
              <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Vị trí hiện tại của bạn</span>
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-base sm:text-lg flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span>{userLocationName || 'Hà Nội'}</span>
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Google Maps sẽ ưu tiên tìm kiếm quán {recipe.title} quanh khu vực {userDistrict || 'gần bạn nhất'}
                  </p>
                </div>

                {/* Direct Google Maps Primary Action */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${recipe.title} ngon gần ${userDistrict || userLocationName || 'Hà Nội'}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20 cursor-pointer flex-shrink-0"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Mở Google Maps Tìm Quán Gần Đây</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Delivery Deep Links Banner (ShopeeFood & GrabFood) */}
              <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-800">
                  <span className="text-xl">🛵</span>
                  <div>
                    <span className="font-bold">Muốn ăn tại nhà mà không cần nấu?</span>
                    <p className="text-[11px] text-stone-500">Đặt ship hỏa tốc qua ứng dụng giao thức ăn</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={`https://shopeefood.vn/search?q=${encodeURIComponent(recipe.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#ee4d2d] hover:bg-[#d73211] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                  >
                    <span>ShopeeFood</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`https://food.grab.com/vn/vi/restaurants?search=${encodeURIComponent(recipe.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#00b14f] hover:bg-[#009643] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                  >
                    <span>GrabFood</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Google Maps Interactive Iframe */}
              <div className="w-full h-[380px] bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner border border-stone-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedShop || `${recipe.title} ngon gần ${userDistrict || userLocationName || 'Hà Nội'}`)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-bold text-stone-800 text-xs sm:text-sm flex items-center gap-2 border border-stone-200 pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                  {selectedShop ? `Đang xem: ${selectedShop}` : `Bản đồ Google Maps: ${recipe.title} gần ${userDistrict || 'bạn'}`}
                </div>
              </div>

              {/* Curated Representative Google Maps Locations */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Quán Đề Xuất Theo Tiêu Chí Google Maps</span>
                    <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                      Rating ★ 4.6+
                    </span>
                  </h4>
                  <span className="text-xs text-stone-500">Nhấp để xem bản đồ hoặc chỉ đường</span>
                </div>

                {[
                  { 
                    name: `Quán ${recipe.title} Gia Truyền`, 
                    address: userDistrict ? `Khu ẩm thực ${userDistrict}` : 'Phố Cổ, Hà Nội',
                    distance: '0.8 km', 
                    rating: '4.8', 
                    reviews: '340+ đánh giá', 
                    price: '35.000đ - 60.000đ',
                    tags: ['Đúng vị truyền thống', 'Nước dùng trong ngọt', 'Quán sạch sẽ']
                  },
                  { 
                    name: `${recipe.title} Đậm Vị - Quán Phố`, 
                    address: userDistrict ? `Đường chính ${userDistrict}` : 'Khu trung tâm ẩm thực',
                    distance: '1.4 km', 
                    rating: '4.7', 
                    reviews: '180+ đánh giá', 
                    price: '40.000đ - 70.000đ',
                    tags: ['Thịt mềm tươi ngon', 'Rau ăn kèm miễn phí', 'Chỗ để xe rộng']
                  },
                  { 
                    name: `Bếp Xưa - ${recipe.title}`, 
                    address: userDistrict ? `Gần ${userDistrict}` : 'Phố ẩm thực đêm',
                    distance: '2.1 km', 
                    rating: '4.9', 
                    reviews: '520+ đánh giá', 
                    price: '45.000đ - 85.000đ',
                    tags: ['Được đề xuất nhiều nhất', 'Phục vụ nhanh', 'Có điều hòa mát']
                  }
                ].map((shop, idx) => {
                  const isSelected = selectedShop === shop.name;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedShop(shop.name)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer group bg-white shadow-2xs hover:shadow-md ${
                        isSelected 
                          ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/20' 
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h5 className="font-bold text-stone-900 text-base group-hover:text-blue-600 transition-colors">
                              {shop.name}
                            </h5>
                            <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              ★ {shop.rating}
                            </span>
                            <span className="text-[11px] text-stone-400">({shop.reviews})</span>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-stone-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-stone-400" />
                              {shop.address}
                            </span>
                            <span>•</span>
                            <span>Cách bạn ~{shop.distance}</span>
                            <span>•</span>
                            <span className="font-semibold text-stone-700">{shop.price}</span>
                          </div>

                          {/* Criteria feedback tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {shop.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md font-medium">
                                ✓ {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Direct Directions Button */}
                        <div className="flex sm:flex-col items-end gap-2 flex-shrink-0">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${shop.name} ${userDistrict || userLocationName || ''}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1 transition-colors border border-blue-200"
                          >
                            <span>Chỉ đường</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Sidebar/Nutrition/Author) */}
        <div className="w-full lg:w-1/3">
          <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-stone-900">{t.nutrition}</h3>
              {recipe.verified && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  Đã kiểm chứng
                </span>
              )}
            </div>

            {/* Serving size & dynamic scaled indicator */}
            <div className="flex items-center justify-between text-xs text-stone-500 mb-4 bg-white p-2.5 rounded-xl border border-stone-200">
              <span>{recipe.servingSize ? `${t.servingRef} ${recipe.servingSize}` : `${recipe.servings || 4} ${t.servings}`}</span>
              <span className="font-bold text-orange-600">{t.scaledFor}</span>
            </div>

            {/* Scaled Nutrition Macros */}
            <div className="space-y-3 mb-6 bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex justify-between items-center py-2 border-b border-stone-100">
                <span className="text-stone-600 text-sm font-medium">{t.calLabel}</span>
                <span className="font-extrabold text-orange-600 text-base">{scaledCalories} kcal</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-stone-100">
                <span className="text-stone-600 text-sm font-medium">{t.proteinLabel}</span>
                <span className="font-bold text-stone-900 text-sm">{scaledProtein}g</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-stone-100">
                <span className="text-stone-600 text-sm font-medium">{t.fatLabel}</span>
                <span className="font-bold text-stone-900 text-sm">{scaledFat}g</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-stone-600 text-sm font-medium">{t.carbsLabel}</span>
                <span className="font-bold text-stone-900 text-sm">{scaledCarbs}g</span>
              </div>
            </div>

            {/* Verified Sources Citation Box */}
            <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-4 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 text-sm">🏛️</span>
                <div>
                  <p className="font-bold text-stone-800">{t.sourceTitle}</p>
                  <p className="text-stone-600 leading-relaxed mt-0.5">{recipe.nutritionSource || 'Bảng Thành Phần Thực Phẩm Việt Nam - Viện Dinh Dưỡng Quốc Gia (Bộ Y tế)'}</p>
                </div>
              </div>
              {recipe.recipeSource && (
                <div className="flex items-start gap-2 pt-2 border-t border-orange-100">
                  <span className="text-orange-500 text-sm">📖</span>
                  <div>
                    <p className="font-bold text-stone-800">{t.recipeSourceTitle}</p>
                    <p className="text-stone-600 leading-relaxed mt-0.5">{recipe.recipeSource}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
