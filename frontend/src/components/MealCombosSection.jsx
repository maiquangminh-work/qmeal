import React, { useState } from 'react';
import { MEAL_COMBOS_DATA } from '../data/combos';
import { 
  Users, 
  Clock, 
  Wallet, 
  ShoppingCart, 
  Check, 
  Sparkles, 
  ChevronRight,
  Utensils
} from 'lucide-react';

export default function MealCombosSection({ onAddComboToGrocery, onOpenGroceryList }) {
  const [addedCombos, setAddedCombos] = useState({});

  const handleAdd = (combo) => {
    onAddComboToGrocery(combo);
    setAddedCombos((prev) => ({ ...prev, [combo.id]: true }));
    setTimeout(() => {
      setAddedCombos((prev) => ({ ...prev, [combo.id]: false }));
    }, 2500);
  };

  return (
    <section id="family-combos" className="py-6 sm:py-10 bg-gradient-to-b from-[#faf9f6] via-brand-50/40 to-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-100 text-brand-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-brand-600" />
              Công Thức Bữa Cơm Tròn Vị
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-stone-900 font-heading">
              Gợi Ý Mâm Cơm Gia Đình
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Đúng chuẩn: <strong>1 Mặn + 1 Canh + 1 Rau</strong> • <span className="text-brand-600 font-semibold sm:hidden">Vuốt ngang để xem 4 mâm cơm 👉</span>
            </p>
          </div>

          <button
            onClick={onOpenGroceryList}
            className="self-start sm:self-auto px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2 flex-shrink-0"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-brand-600" />
            <span>Xem Giỏ Đi Chợ</span>
          </button>
        </div>

        {/* Horizontal Swipe Carousel on Mobile, 2-Column Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
          {MEAL_COMBOS_DATA.map((combo) => {
            const isAdded = addedCombos[combo.id];

            return (
              <div
                key={combo.id}
                className="w-[86vw] sm:w-auto flex-shrink-0 snap-center bg-white rounded-3xl p-4 sm:p-6 border border-stone-200/90 shadow-warm-sm flex flex-col justify-between space-y-4 group"
              >
                {/* Top Info */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs font-extrabold text-brand-600 uppercase tracking-wider">
                      MÂM CƠM GIA ĐÌNH
                    </span>
                    <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-stone-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-stone-400" />
                        {combo.servings}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {combo.totalTime}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-stone-900 font-heading group-hover:text-brand-600 transition-colors">
                      {combo.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-2">
                      {combo.tagline}
                    </p>
                  </div>

                  {/* Estimated Cost Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-[11px] sm:text-xs font-bold border border-amber-200/60">
                    <Wallet className="w-3.5 h-3.5 text-amber-600" />
                    <span>Ước tính: {combo.estimatedCost}</span>
                  </div>
                </div>

                {/* 3 Dishes Breakdown List */}
                <div className="space-y-2 bg-stone-50/80 p-3 sm:p-3.5 rounded-2xl border border-stone-100">
                  {combo.dishes.map((dish, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <span className="font-extrabold px-2 py-0.5 rounded-md bg-white border border-stone-200 text-brand-700 text-[10px] sm:text-xs flex-shrink-0 whitespace-nowrap">
                        {dish.role}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-stone-800 truncate">{dish.name}</p>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 line-clamp-1">{dish.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions: Add to grocery list */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs text-stone-400 font-medium">
                    {combo.ingredients.length} món cần mua
                  </span>

                  <button
                    onClick={() => handleAdd(combo)}
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-600 hover:bg-brand-500 text-white shadow-warm-sm active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Đã thêm!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Thêm Vào Giỏ Đi Chợ</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
