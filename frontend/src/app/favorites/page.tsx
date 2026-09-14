'use client';
import { useStore } from '@/store/useStore';
import { useEffect, useState } from 'react';
import RecipeCard from '@/components/ui/RecipeCard';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites, language } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang = mounted ? language : 'vi';

  const t = {
    vi: {
      title: 'Món Ăn Đã Lưu',
      subtitle: 'Thực đơn yêu thích được lưu riêng trên thiết bị của bạn',
      count: 'món ăn',
      emptyTitle: 'Chưa có món ăn yêu thích nào!',
      emptyDesc: 'Hãy nhấn vào biểu tượng trái tim ❤️ trên bất kỳ món ăn nào để lưu lại và xem lại tại đây.',
      exploreBtn: 'Khám phá món ngon ngay'
    },
    en: {
      title: 'Saved Recipes',
      subtitle: 'Your favorite menu saved directly on your device',
      count: 'recipes',
      emptyTitle: 'No saved recipes yet!',
      emptyDesc: 'Tap the heart icon ❤️ on any recipe card to save it and view it here anytime.',
      exploreBtn: 'Explore delicious recipes'
    }
  }[currentLang];

  const favList = mounted ? favorites : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 min-h-[75vh]">
      {/* Header */}
      <div className="mb-8 border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">❤️</span>
            <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">{t.title}</h1>
          </div>
          <p className="text-stone-500 mt-1 text-sm">{t.subtitle}</p>
        </div>
        {favList.length > 0 && (
          <div className="bg-orange-50 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm self-start sm:self-auto border border-orange-200">
            {favList.length} {t.count}
          </div>
        )}
      </div>

      {/* Favorites Grid */}
      {favList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
          {favList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm max-w-2xl mx-auto p-8">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
            💖
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-2">{t.emptyTitle}</h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto leading-relaxed">{t.emptyDesc}</p>
          <Link 
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            {t.exploreBtn} →
          </Link>
        </div>
      )}
    </div>
  );
}
