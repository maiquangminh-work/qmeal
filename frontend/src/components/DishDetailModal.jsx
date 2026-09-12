import React, { useState } from 'react';
import { X, ChefHat, MapPin, Clock, Flame, Star, Heart, CheckCircle2, Circle } from 'lucide-react';
import MapViewer from './MapViewer';

export default function DishDetailModal({
  dish,
  initialTab = 'cook', // 'cook' | 'eat-out'
  onClose,
  isFavorite,
  onToggleFavorite
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  if (!dish) return null;

  const toggleCheck = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-stone-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Image Banner & Actions */}
        <div className="relative h-56 sm:h-72 bg-stone-900 flex-shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

          {/* Close & Favorite Top Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(dish)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                isFavorite
                  ? 'bg-rose-500 text-white'
                  : 'bg-black/40 hover:bg-black/60 text-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dish Header Info over Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-md bg-brand-600 font-bold uppercase tracking-wider">
                {dish.difficulty}
              </span>
              <span className="flex items-center gap-1 bg-black/50 px-2.5 py-0.5 rounded-md font-semibold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                {dish.rating} ({dish.reviewsCount})
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              {dish.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 line-clamp-1 italic">
              {dish.englishName}
            </p>
          </div>
        </div>

        {/* Dual Mode Switcher Tabs (Per BRD Section 2.2: Tự Nấu vs Ăn Ngoài) */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-4 sm:px-6">
          <button
            onClick={() => setActiveTab('cook')}
            className={`flex-1 sm:flex-none py-3.5 px-6 font-bold text-sm flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'cook'
                ? 'border-brand-600 text-brand-600 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>Tự Nấu (Công Thức)</span>
          </button>

          <button
            onClick={() => setActiveTab('eat-out')}
            className={`flex-1 sm:flex-none py-3.5 px-6 font-bold text-sm flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'eat-out'
                ? 'border-brand-600 text-brand-600 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <MapPin className="w-4 h-4 text-brand-600" />
            <span>Ăn Ngoài (Bản Đồ Quán)</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'cook' ? (
            /* TAB 1: TỰ NẤU */
            <div className="space-y-6">
              
              {/* Quick Specs Bar */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100 text-center">
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase">Thời gian nấu</p>
                  <p className="text-base font-extrabold text-brand-700 flex items-center justify-center gap-1 mt-0.5">
                    <Clock className="w-4 h-4" />
                    {dish.cookTime} phút
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase">Năng lượng</p>
                  <p className="text-base font-extrabold text-brand-700 flex items-center justify-center gap-1 mt-0.5">
                    <Flame className="w-4 h-4" />
                    {dish.calories} kcal
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase">Độ khó</p>
                  <p className="text-base font-extrabold text-brand-700 mt-0.5">
                    {dish.difficulty}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-700 text-sm leading-relaxed">
                {dish.description}
              </p>

              {/* Checklist Nguyên liệu */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-stone-900 text-base font-heading flex items-center gap-2">
                    <span>🥗 Nguyên Liệu Cần Chuẩn Bị</span>
                    <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-sans">
                      {dish.ingredients.length} mục
                    </span>
                  </h4>
                  <span className="text-xs text-stone-400">
                    Bấm để đánh dấu nguyên liệu đã có
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {dish.ingredients.map((ing, idx) => {
                    const isDone = checkedIngredients[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleCheck(idx)}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                          isDone
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800 line-through opacity-75'
                            : 'bg-stone-50/80 border-stone-200 text-stone-800 hover:bg-stone-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-stone-400 flex-shrink-0" />
                          )}
                          <span>{ing.name}</span>
                        </div>
                        <span className="text-xs font-bold text-stone-500 bg-white px-2 py-0.5 rounded-md border border-stone-200 flex-shrink-0">
                          {ing.amount}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hướng dẫn từng bước */}
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-stone-900 text-base font-heading">
                  👨‍🍳 Các Bước Nấu Chuẩn Vị
                </h4>

                <div className="space-y-3">
                  {dish.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start gap-3.5 shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-warm-sm">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* TAB 2: ĂN NGOÀI (BẢN ĐỒ GOOGLE MAPS) */
            <MapViewer dish={dish} />
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            {activeTab === 'cook' ? 'Chúc bạn nấu thành công món ngon!' : 'Gợi ý vị trí dựa trên Google Maps'}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
