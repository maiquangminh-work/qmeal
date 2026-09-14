'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { vietnameseRecipes, MasterRecipe } from '@/data/vietnameseRecipes';
import { playTickSound, playWinSound } from '@/utils/sound';
import confetti from 'canvas-confetti';
import { Dices, Volume2, VolumeX, Sparkles, ChefHat, RotateCcw, Flame, Clock, ArrowLeft } from 'lucide-react';

const CARD_WIDTH = 190;

export default function GachaPage() {
  const { language, selectedRegion } = useStore();
  const reelRef = useRef<HTMLDivElement>(null);

  const [isSpinning, setIsSpinning] = useState(false);
  const [winningDish, setWinningDish] = useState<MasterRecipe | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mealFilter, setMealFilter] = useState<'all' | 'breakfast' | 'lunch' | 'snack' | 'dinner'>('all');
  const [reelItems, setReelItems] = useState<(MasterRecipe & { uniqueKey: string })[]>([]);

  const t = {
    vi: {
      back: 'Quay lại Trang Chủ',
      backBtn: '← Quay lại Trang Chủ',
      title: 'Hôm Nay Ăn Gì?',
      badge: 'Vòng Quay May Mắn',
      desc: 'Băng chuyền ẩm thực tự động lướt và dừng lại ở món ăn hoàn hảo nhất cho bữa ăn của bạn!',
      filterMeal: 'Bữa ăn:',
      all: 'Tất cả',
      breakfast: 'Bữa Sáng',
      lunch: 'Bữa Trưa',
      snack: 'Ăn Vặt',
      dinner: 'Bữa Tối',
      spinBtn: '🎲 QUAY NGAY ĐỂ CHỌN MÓN',
      spinning: 'ĐANG QUAY VÒNG MAY MẮN...',
      soundHint: 'Âm thanh cơ học lách cách hồi hộp & pháo hoa chúc mừng',
      congrats: 'Chúc mừng bạn! Bữa ăn hôm nay là:',
      cookNow: 'Xem Công Thức Ngay',
      spinAgain: 'Quay Lại Lần Nữa',
      calUnit: 'kcal (Chuẩn NIN)',
      difficulty: 'Độ khó:',
      time: 'phút',
    },
    en: {
      back: 'Back to Home',
      backBtn: '← Back to Home',
      title: 'What To Eat Today?',
      badge: 'Lucky Meal Reel',
      desc: 'Watch the culinary reel spin smoothly and lock onto your perfect winning meal!',
      filterMeal: 'Meal:',
      all: 'All',
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      snack: 'Snack',
      dinner: 'Dinner',
      spinBtn: '🎲 SPIN & PICK MEAL NOW',
      spinning: 'SPINNING THE REEL...',
      soundHint: 'Thrilling tick sounds & celebration confetti on win',
      congrats: 'Congratulations! Today’s winning meal:',
      cookNow: 'View Recipe Now',
      spinAgain: 'Spin Again',
      calUnit: 'kcal (NIN Verified)',
      difficulty: 'Difficulty:',
      time: 'mins',
    }
  }[language];

  // Filter pool by meal type and selected region
  const getFilteredPool = () => {
    let pool = vietnameseRecipes;
    if (selectedRegion !== 'all') {
      pool = pool.filter(r => r.region === selectedRegion || r.region === 'national');
    }
    if (mealFilter !== 'all') {
      pool = pool.filter(r => r.mealType.includes(mealFilter));
    }
    return pool.length > 0 ? pool : vietnameseRecipes;
  };

  // Prepare a randomized reel of 45 items
  const prepareReel = () => {
    const pool = getFilteredPool();
    if (pool.length === 0) return [];
    const list: (MasterRecipe & { uniqueKey: string })[] = [];
    for (let i = 0; i < 45; i++) {
      const randomItem = pool[Math.floor(Math.random() * pool.length)];
      list.push({ ...randomItem, uniqueKey: `${randomItem.id}-${i}-${Date.now()}` });
    }
    return list;
  };

  useEffect(() => {
    setReelItems(prepareReel());
    document.title = language === 'vi' ? 'Vòng Quay Ăn Gì? | QMeal' : 'Meal Gacha | QMeal';
  }, [mealFilter, language]);

  const startSpin = () => {
    if (isSpinning) return;

    setWinningDish(null);
    setIsSpinning(true);

    const newReel = prepareReel();
    setReelItems(newReel);

    // Winning index near the end (index 34 to 40)
    const winningIndex = 34 + Math.floor(Math.random() * 6);
    const winner = newReel[winningIndex];

    const reelElement = reelRef.current;
    if (!reelElement) return;

    // Reset reel position
    reelElement.style.transition = 'none';
    reelElement.style.transform = 'translateX(0px)';

    // Container center offset
    const containerWidth = reelElement.parentElement?.offsetWidth || 800;
    const jitter = Math.floor(Math.random() * 40) - 20;
    const targetOffset = -(winningIndex * CARD_WIDTH - containerWidth / 2 + CARD_WIDTH / 2 + jitter);

    // Audio ticking loop
    let lastTick = 0;
    const startTime = performance.now();
    const duration = 5000; // 5.0 seconds spin

    const tickInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        // Ticks slow down as reel decelerates
        const tickGap = 50 + Math.pow(progress, 3) * 350;
        if (performance.now() - lastTick > tickGap) {
          if (soundEnabled) playTickSound();
          lastTick = performance.now();
        }
      } else {
        clearInterval(tickInterval);
      }
    }, 25);

    // Smooth cubic-bezier CSS spin animation
    requestAnimationFrame(() => {
      reelElement.style.transition = `transform ${duration}ms cubic-bezier(0.12, 0.8, 0.22, 1)`;
      reelElement.style.transform = `translateX(${targetOffset}px)`;
    });

    // Handle finish
    setTimeout(() => {
      setIsSpinning(false);
      setWinningDish(winner);
      if (soundEnabled) playWinSound();

      // Launch celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ea580c', '#f59e0b', '#10b981', '#3b82f6', '#ffffff']
        });
      } catch {
        // Confetti fallback
      }
    }, duration + 150);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-5">
        
        {/* Top Navigation: Back to Home */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-400 hover:text-white transition-colors bg-stone-900 border border-stone-800 hover:border-orange-500/50 px-4 py-2 rounded-2xl shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-orange-500" />
            <span>{t.back}</span>
          </Link>
          
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-2xl bg-stone-900 border border-stone-800 hover:bg-stone-800 text-stone-300 transition-colors flex items-center gap-2 text-xs font-bold shadow-sm"
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-orange-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            <span className="hidden sm:inline">{soundEnabled ? 'Bật âm' : 'Tắt âm'}</span>
          </button>
        </div>

        {/* Header Bar */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20 flex-shrink-0">
              <Dices className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight">{t.title}</h1>
                <span className="text-[10px] bg-orange-600 text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {t.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">{t.desc}</p>
            </div>
          </div>
        </div>

        {/* Pre-spin Filter Pills */}
        {!isSpinning && !winningDish && (
          <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-4 flex items-center justify-between gap-3 overflow-x-auto text-xs">
            <div className="flex items-center gap-2">
              <span className="text-stone-400 font-bold whitespace-nowrap">{t.filterMeal}</span>
              {(['all', 'breakfast', 'lunch', 'snack', 'dinner'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMealFilter(m)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                    mealFilter === m
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {t[m]}
                </button>
              ))}
            </div>
            <span className="text-stone-500 text-[11px] hidden md:inline">
              {getFilteredPool().length} món phù hợp
            </span>
          </div>
        )}

        {/* Lucky Reel Viewport */}
        <div className="relative py-10 px-2 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border border-stone-800 rounded-3xl overflow-hidden select-none shadow-2xl">
          
          {/* Center Target Indicator Needle */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-20 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-400 shadow-[0_0_18px_rgba(245,158,11,1)] pointer-events-none">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[14px] border-t-amber-400 drop-shadow"></div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[14px] border-b-amber-400 drop-shadow"></div>
          </div>

          {/* Left/Right Edge Vignette */}
          <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none"></div>

          {/* Reel Track */}
          <div className="overflow-hidden w-full">
            <div
              ref={reelRef}
              className="flex items-center gap-3 will-change-transform"
              style={{ width: `${reelItems.length * CARD_WIDTH}px` }}
            >
              {reelItems.map((item, idx) => (
                <div
                  key={item.uniqueKey || idx}
                  style={{ width: `${CARD_WIDTH - 12}px` }}
                  className="flex-shrink-0 h-48 rounded-2xl bg-stone-800/90 border border-stone-700/80 p-3 flex flex-col justify-between overflow-hidden shadow-lg hover:border-orange-500/50 transition-colors"
                >
                  <div className="relative h-28 rounded-xl overflow-hidden bg-stone-900">
                    <img
                      src={item.image?.includes('wikimedia.org') || item.image?.includes('wikipedia.org') ? `/api/image-proxy?url=${encodeURIComponent(item.image)}` : item.image}
                      alt={item.title[language] || item.title.vi}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/api/image-proxy';
                      }}
                    />
                    <span className="absolute top-1.5 left-1.5 text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/70 text-amber-300">
                      {item.time}
                    </span>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-extrabold text-stone-100 line-clamp-1">
                      {item.title[language] || item.title.vi}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-stone-400 mt-1">
                      <span className="text-orange-400 font-bold">{item.calories} kcal</span>
                      <span className="text-stone-400">★ 4.9</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spin Controls & Winning Celebration Card */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 text-center shadow-xl">
          {winningDish ? (
            <div className="space-y-5 animate-in zoom-in-95 duration-500">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>{t.congrats}</span>
              </div>

              {/* Winning Card Preview */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-stone-800/90 border-2 border-orange-500 shadow-2xl flex items-center gap-4 text-left">
                <img
                  src={winningDish.image?.includes('wikimedia.org') || winningDish.image?.includes('wikipedia.org') ? `/api/image-proxy?url=${encodeURIComponent(winningDish.image)}` : winningDish.image}
                  alt={winningDish.title[language] || winningDish.title.vi}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-24 h-24 rounded-xl object-cover shadow-md flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = '/api/image-proxy';
                  }}
                />
                <div className="space-y-1.5 min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold text-white truncate">
                    {winningDish.title[language] || winningDish.title.vi}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-stone-300">
                    <span className="flex items-center gap-1 text-orange-400 font-bold">
                      <Flame className="w-3.5 h-3.5" />
                      {winningDish.calories} {t.calUnit}
                    </span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <Clock className="w-3.5 h-3.5" />
                      {winningDish.time}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {(winningDish.dietaryTags[language] || winningDish.dietaryTags.vi).slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-stone-700 text-stone-300 px-2 py-0.5 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href={`/recipe/${winningDish.id}`}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
                >
                  <ChefHat className="w-4 h-4" />
                  <span>{t.cookNow}</span>
                </Link>

                <button
                  onClick={startSpin}
                  className="px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm border border-stone-700 flex items-center gap-2 transition-all active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.spinAgain}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={startSpin}
                disabled={isSpinning}
                className={`w-full sm:w-auto px-12 py-4 rounded-2xl font-black text-base sm:text-lg tracking-wider uppercase shadow-xl transition-all ${
                  isSpinning
                    ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-600 text-white hover:scale-105 active:scale-95 shadow-orange-500/30'
                }`}
              >
                {isSpinning ? t.spinning : t.spinBtn}
              </button>
              <p className="text-xs text-stone-400">
                {t.soundHint}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}