import React, { useState, useRef, useEffect } from 'react';
import { X, Dices, Sparkles, ChefHat, MapPin, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playTickSound, playWinSound } from '../utils/sound';

export default function GachaModal({ dishes, onClose, onSelectDish }) {
  const [mealFilter, setMealFilter] = useState('all'); // all, breakfast, lunch, snack, dinner
  const [tagFilter, setTagFilter] = useState('all'); // all, soup, dry
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningDish, setWinningDish] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const reelRef = useRef(null);
  const [reelItems, setReelItems] = useState([]);
  const CARD_WIDTH = 180; // px width of each card in the reel

  // Filter pool of eligible dishes
  const eligibleDishes = dishes.filter((d) => {
    const matchMeal = mealFilter === 'all' || d.mealCategory === mealFilter;
    const matchTag = tagFilter === 'all' || d.tags.includes(tagFilter);
    return matchMeal && matchTag;
  });

  const pool = eligibleDishes.length > 0 ? eligibleDishes : dishes;

  // Build a randomized reel with 50 items
  const prepareReel = () => {
    const list = [];
    for (let i = 0; i < 50; i++) {
      const randomItem = pool[Math.floor(Math.random() * pool.length)];
      list.push({ ...randomItem, uniqueKey: `${randomItem.id}-${i}-${Date.now()}` });
    }
    return list;
  };

  const startSpin = () => {
    if (isSpinning) return;

    setWinningDish(null);
    setIsSpinning(true);

    const newReel = prepareReel();
    setReelItems(newReel);

    // Winning index near the end (e.g. index 38)
    const winningIndex = 36 + Math.floor(Math.random() * 8);
    const winner = newReel[winningIndex];

    const reelElement = reelRef.current;
    if (!reelElement) return;

    // Reset reel position to start
    reelElement.style.transition = 'none';
    reelElement.style.transform = 'translateX(0px)';

    // Container center offset
    const containerWidth = reelElement.parentElement.offsetWidth;
    // Add minor randomized jitter (-25px to +25px) within the winning card
    const jitter = Math.floor(Math.random() * 50) - 25;
    const targetOffset = -(winningIndex * CARD_WIDTH - containerWidth / 2 + CARD_WIDTH / 2 + jitter);

    // Tick audio loop
    let lastTick = 0;
    const startTime = performance.now();
    const duration = 5500; // 5.5 seconds spin

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

    // Trigger smooth cubic-bezier CSS spin animation
    requestAnimationFrame(() => {
      reelElement.style.transition = `transform ${duration}ms cubic-bezier(0.12, 0.8, 0.22, 1)`;
      reelElement.style.transform = `translateX(${targetOffset}px)`;
    });

    // Handle Finish
    setTimeout(() => {
      setIsSpinning(false);
      setWinningDish(winner);
      if (soundEnabled) playWinSound();

      // Launch celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#f59e0b', '#10b981', '#ffffff']
      });
    }, duration + 200);
  };

  useEffect(() => {
    // Initialize initial reel
    setReelItems(prepareReel());
  }, [mealFilter, tagFilter]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-stone-900 border border-stone-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl text-white flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center shadow-warm-sm">
              <Dices className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl font-heading text-white flex items-center gap-2">
                <span>Vòng Quay Gacha Mở Hòm CS:GO</span>
                <span className="text-[10px] bg-brand-600 text-white font-bold px-2 py-0.5 rounded-full uppercase">
                  Vui Vẻ
                </span>
              </h3>
              <p className="text-xs text-stone-400">
                Không biết ăn gì? Hãy để số phận quyết định bữa ăn của bạn!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-brand-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pre-spin Filters (Per BRD Section 2.4: Phân loại theo Bữa & Thể loại) */}
        {!isSpinning && !winningDish && (
          <div className="p-4 sm:px-6 bg-stone-950/40 border-b border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-stone-400 font-semibold mr-1">Bữa ăn:</span>
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'breakfast', label: 'Sáng' },
                { id: 'lunch', label: 'Trưa' },
                { id: 'snack', label: 'Xế / Vặt' },
                { id: 'dinner', label: 'Tối' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setMealFilter(b.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                    mealFilter === b.id ? 'bg-brand-600 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-stone-400 font-semibold mr-1">Kiểu món:</span>
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'soup', label: '🍜 Nước' },
                { id: 'dry', label: '🍚 Khô' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTagFilter(t.id)}
                  className={`px-2.5 py-1.5 rounded-lg font-bold transition-colors ${
                    tagFilter === t.id ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CS:GO Reel Viewport */}
        <div className="relative py-8 px-2 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 overflow-hidden select-none">
          
          {/* Center Target Indicator Needle (CS:GO Yellow/Orange Marker) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-20 w-1 bg-gradient-to-b from-amber-400 via-brand-500 to-amber-400 shadow-[0_0_15px_rgba(245,158,11,1)] pointer-events-none">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-amber-400 drop-shadow"></div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-amber-400 drop-shadow"></div>
          </div>

          {/* Left/Right Edge Shadow Vignette */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none"></div>

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
                  className="flex-shrink-0 h-44 rounded-2xl bg-stone-800/90 border border-stone-700/80 p-2.5 flex flex-col justify-between overflow-hidden shadow-lg"
                >
                  <div className="relative h-24 rounded-xl overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-amber-300">
                      {item.cookTime}p
                    </span>
                  </div>

                  <div className="pt-1.5">
                    <p className="text-xs font-bold text-stone-100 line-clamp-1">
                      {item.name}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-stone-400 mt-1">
                      <span>★ {item.rating}</span>
                      <span className="text-brand-400 font-semibold">{item.difficulty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Spin Controls or Winning Celebration Card */}
        <div className="p-4 sm:p-6 bg-stone-950 border-t border-stone-800 text-center">
          {winningDish ? (
            /* Winner Card */
            <div className="space-y-4 animate-scaleUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
                Chúc mừng! Món trúng thưởng hôm nay:
              </div>

              <div className="max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-stone-800 to-stone-850 border-2 border-brand-500 shadow-2xl flex items-center gap-4 text-left gacha-winning-glow">
                <img
                  src={winningDish.image}
                  alt={winningDish.name}
                  className="w-20 h-20 rounded-xl object-cover shadow-md flex-shrink-0"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-heading text-white">
                    {winningDish.name}
                  </h4>
                  <p className="text-xs text-stone-300 line-clamp-2">
                    {winningDish.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onSelectDish(winningDish, 'cook');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-warm-md flex items-center gap-2"
                >
                  <ChefHat className="w-4 h-4" />
                  <span>Xem Cách Nấu Ngay</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectDish(winningDish, 'eat-out');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-bold text-xs sm:text-sm border border-stone-700 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span>Tìm Quán Gần Đây</span>
                </button>

                <button
                  onClick={startSpin}
                  className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 font-semibold text-xs flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Quay lại</span>
                </button>
              </div>
            </div>
          ) : (
            /* Spin Button */
            <div className="space-y-3">
              <button
                onClick={startSpin}
                disabled={isSpinning}
                className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-base sm:text-lg tracking-wider uppercase shadow-warm-lg transition-all ${
                  isSpinning
                    ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 via-brand-600 to-brand-500 hover:from-amber-400 hover:to-brand-600 text-white hover:scale-105 active:scale-95'
                }`}
              >
                {isSpinning ? 'Đang quay số món ăn...' : '🎲 MỞ HÒM QUAY NGAY'}
              </button>
              <p className="text-[11px] text-stone-500">
                Hiệu ứng mượt mà với âm thanh kịch tính phong cách CS:GO
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
