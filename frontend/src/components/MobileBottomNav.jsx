import React from 'react';
import { Home, Utensils, Dices, Refrigerator, Heart, Users } from 'lucide-react';

export default function MobileBottomNav({
  activeTab = 'all',
  onSelectTab,
  onOpenGacha,
  onOpenFridge,
  onOpenFavorites,
  favoriteCount = 0
}) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-stone-200/90 px-3 py-2 shadow-2xl safe-bottom">
      <div className="flex items-center justify-around">
        {/* Home Tab */}
        <button
          onClick={() => onSelectTab('all')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
            activeTab === 'all' ? 'text-brand-600 font-bold' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Home className={`w-5 h-5 ${activeTab === 'all' ? 'text-brand-600' : 'text-stone-500'}`} />
          <span>Trang chủ</span>
        </button>

        {/* Family Combos Tab */}
        <button
          onClick={() => onSelectTab('combos')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
            activeTab === 'combos' ? 'text-brand-600 font-bold' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Users className={`w-5 h-5 ${activeTab === 'combos' ? 'text-brand-600' : 'text-stone-500'}`} />
          <span>Mâm cơm</span>
        </button>

        {/* Center Floating Gacha */}
        <button
          onClick={onOpenGacha}
          className="-mt-5 flex flex-col items-center group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-600 to-amber-500 text-white flex items-center justify-center shadow-warm-lg ring-4 ring-white active:scale-95 transition-transform">
            <Dices className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-[10px] font-bold text-brand-600 mt-1">Gacha</span>
        </button>

        {/* Fridge */}
        <button
          onClick={onOpenFridge}
          className="flex flex-col items-center gap-1 text-stone-500 hover:text-emerald-600 text-[10px] font-semibold transition-colors"
        >
          <Refrigerator className="w-5 h-5 text-emerald-600" />
          <span>Tủ lạnh</span>
        </button>

        {/* Favorites */}
        <button
          onClick={onOpenFavorites}
          className="relative flex flex-col items-center gap-1 text-stone-500 hover:text-brand-600 text-[10px] font-semibold transition-colors"
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
