import React from 'react';
import { MEAL_CATEGORIES, QUICK_TAGS } from '../data/categories';
import { UtensilsCrossed, Sunrise, Sun, Coffee, Moon } from 'lucide-react';

const ICON_MAP = {
  UtensilsCrossed,
  Sunrise,
  Sun,
  Coffee,
  Moon
};

export default function MealTabs({
  activeCategory,
  onSelectCategory,
  activeTag,
  onSelectTag,
  dishCount
}) {
  return (
    <div id="meals-section" className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            PHÂN LOẠI THEO BỮA ĂN
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading">
            Gợi Ý Theo 4 Buổi Trong Ngày
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-medium">
          Tìm thấy <strong className="text-brand-600 font-bold">{dishCount}</strong> món ăn phù hợp
        </p>
      </div>

      {/* 4 Main Meal Tabs Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2">
        {MEAL_CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || UtensilsCrossed;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-brand-600 text-white shadow-warm-md scale-[1.02]'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-500'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Quick Tag Pills Row */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
        <span className="text-xs font-bold text-stone-400 uppercase mr-1 hidden sm:inline-block">
          Lọc nhanh:
        </span>
        {QUICK_TAGS.map((tag) => {
          const isSelected = activeTag === tag.id;
          return (
            <button
              key={tag.id}
              onClick={() => onSelectTag(tag.id)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border border-transparent'
              }`}
            >
              {tag.label}
            </button>
          );
        })}
      </div>

    </div>
  );
}
