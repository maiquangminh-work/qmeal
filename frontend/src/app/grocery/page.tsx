'use client';
import { useStore } from '@/store/useStore';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GroceryPage() {
  const {
    groceryItems,
    toggleGroceryItem,
    removeGroceryItem,
    clearCompletedGrocery,
    clearAllGrocery,
    language
  } = useStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang = mounted ? language : 'vi';

  const t = {
    vi: {
      title: 'Giỏ Đi Chợ Thông Minh',
      subtitle: 'Danh sách nguyên liệu cần chuẩn bị cho bữa ăn của bạn',
      progress: 'Đã hoàn thành',
      items: 'nguyên liệu',
      clearCompleted: 'Xóa đã mua',
      clearAll: 'Xóa toàn bộ',
      emptyTitle: 'Giỏ đi chợ của bạn đang trống!',
      emptyDesc: 'Khi xem công thức nấu ăn, hãy bấm nút "Thêm tất cả vào Giỏ Đi Chợ" để tự động gom nguyên liệu vào đây.',
      exploreBtn: 'Tìm công thức nấu ăn ngay',
      source: 'Món ăn:'
    },
    en: {
      title: 'Smart Grocery Checklist',
      subtitle: 'Ingredients needed for your delicious home cooking',
      progress: 'Completed',
      items: 'items',
      clearCompleted: 'Clear bought',
      clearAll: 'Clear all',
      emptyTitle: 'Your grocery list is empty!',
      emptyDesc: 'When viewing any recipe, tap "Add all to Grocery List" to automatically collect ingredients here.',
      exploreBtn: 'Find recipes now',
      source: 'From recipe:'
    }
  }[currentLang];

  const items = mounted ? groceryItems : [];
  const completedCount = items.filter(i => i.checked).length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  // Group items by recipe
  const groupedByRecipe = items.reduce((acc, item) => {
    const key = item.recipeTitle || 'Khác';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 min-h-[75vh]">
      {/* Header */}
      <div className="mb-8 border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛒</span>
            <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">{t.title}</h1>
          </div>
          <p className="text-stone-500 mt-1 text-sm">{t.subtitle}</p>
        </div>

        {items.length > 0 && (
          <div className="flex items-center gap-3 self-start sm:self-auto">
            {completedCount > 0 && (
              <button
                onClick={clearCompletedGrocery}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                {t.clearCompleted} ({completedCount})
              </button>
            )}
            <button
              onClick={clearAllGrocery}
              className="text-xs font-bold text-stone-400 hover:text-stone-600 px-3 py-1.5 rounded-lg transition-colors border border-stone-200"
            >
              {t.clearAll}
            </button>
          </div>
        )}
      </div>

      {items.length > 0 ? (
        <div className="space-y-8">
          {/* Progress Bar */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-stone-700">
                {t.progress}: {completedCount} / {items.length} {t.items}
              </span>
              <span className="text-sm font-black text-orange-600">{progressPercent}%</span>
            </div>
            <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-orange-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Grouped Checklist */}
          {Object.entries(groupedByRecipe).map(([recipeTitle, recipeItems]) => (
            <div key={recipeTitle} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              <div className="bg-stone-50 px-6 py-3.5 border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">{t.source}</span>
                  <span className="font-bold text-stone-800 text-sm">{recipeTitle}</span>
                </div>
                <span className="text-xs text-stone-400 font-medium">
                  {recipeItems.filter(i => i.checked).length}/{recipeItems.length}
                </span>
              </div>

              <div className="divide-y divide-stone-100">
                {recipeItems.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => toggleGroceryItem(item.id)}
                    className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-stone-50 transition-colors select-none ${item.checked ? 'bg-stone-50/50' : ''}`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${item.checked ? 'bg-orange-500 border-orange-500 text-white' : 'border-stone-300 bg-white'}`}>
                        {item.checked && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`font-semibold text-sm sm:text-base transition-all ${item.checked ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                          {item.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                        {item.amount}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeGroceryItem(item.id);
                        }}
                        className="text-stone-300 hover:text-red-500 p-1 rounded-md transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm max-w-2xl mx-auto p-8">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
            🧺
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
