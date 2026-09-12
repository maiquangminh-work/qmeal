import React from 'react';
import { Home, Utensils, Dices, Refrigerator, Heart } from 'lucide-react';

export default function MobileBottomNav({
  activeTab = 'home',
  onOpenGacha,
  onOpenFridge,
  onOpenFavorites,
  favoriteCount = 0
}) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-stone-200/90 px-3 py-2 shadow-2xl safe-bottom">
      <div className="flex items-center justify-around">
        {/* Home */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 text-stone-600 hover:text-brand-600 focus:text-brand-600 text-[10px] font-semibold"
        >
          <Home className="w-5 h-5 text-brand-600" />
          <span>Trang chủ</span>
        </button>

        {/* 4 Buổi */}
        <button
          onClick={() => {
            const el = document.getElementById('meals-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 text-stone-600 hover:text-brand-600 text-[10px] font-semibold"
        >
          <Utensils className="w-5 h-5" />
          <span>4 Bữa ăn</span>
        </button>

        {/* Elevated Center Gacha Button */}
        <button
          onClick={onOpenGacha}
          className="-mt-5 flex flex-col items-center group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-600 to-amber-500 text-white flex items-center justify-center shadow-warm-lg ring-4 ring-white group-active:scale-95 transition-transform">
            <Dices className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-[10px] font-bold text-brand-600 mt-1">Gacha</span>
        </button>

        {/* Fridge */}
        <button
          onClick={onOpenFridge}
          className="flex flex-col items-center gap-1 text-stone-600 hover:text-brand-600 text-[10px] font-semibold"
        >
          <Refrigerator className="w-5 h-5 text-emerald-600" />
          <span>Tủ lạnh</span>
        </button>

        {/* Favorites */}
        <button
          onClick={onOpenFavorites}
          className="relative flex flex-col items-center gap-1 text-stone-600 hover:text-brand-600 text-[10px] font-semibold"
        >
          <div className="relative">
            <Heart className="w-5 h-5 text-rose-500" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-brand-600 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </div>
          <span>Đã lưu</span>
        </button>
      </div>
    </div>
  );
}
