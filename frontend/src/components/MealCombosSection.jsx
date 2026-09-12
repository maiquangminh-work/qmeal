import React, { useState } from 'react';
import { MEAL_COMBOS_DATA } from '../data/combos';
import { 
  Users, 
  Clock, 
  Wallet, 
  ShoppingCart, 
  Check, 
  Sparkles
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
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
              Chuẩn 3 món: <strong>1 Mặn + 1 Canh + 1 Rau</strong> • <span className="text-brand-600 font-semibold sm:hidden">Vuốt ngang để xem 👉</span>
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

        {/* Combos Grid: Image on LEFT, Clean Text on RIGHT */}
        <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
          {MEAL_COMBOS_DATA.map((combo) => {
            const isAdded = addedCombos[combo.id];

            return (
              <div
                key={combo.id}
                className="w-[88vw] sm:w-auto flex-shrink-0 snap-center bg-white rounded-3xl p-3.5 sm:p-5 border border-stone-200/90 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 group"
              >
                {/* 1. LEFT SIDE: Appetizing Food Image */}
                <div className="relative w-full sm:w-44 md:w-48 aspect-[16/10] sm:aspect-square rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden"></div>
                  
                  {/* Badges on image */}
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>{combo.totalTime}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Users className="w-3 h-3 text-amber-200" />
                    <span>{combo.servings}</span>
                  </div>
                </div>

                {/* 2. RIGHT SIDE: Concise, Streamlined Content (No long paragraphs!) */}
                <div className="flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                  
                  {/* Title & Estimated Cost */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold text-brand-700 uppercase tracking-wider bg-brand-50 border border-brand-100 px-2 py-0.5 rounded">
                        MÂM CƠM
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                        {combo.estimatedCost}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading mt-1 group-hover:text-brand-600 transition-colors">
                      {combo.name}
                    </h3>
                  </div>

                  {/* 3 Dishes List: Crisp and clear (Title only) */}
                  <div className="space-y-1.5 bg-stone-50/90 p-2.5 sm:p-3 rounded-2xl border border-stone-100">
                    {combo.dishes.map((dish, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-white border border-stone-200 text-brand-700 flex-shrink-0">
                          {dish.role}
                        </span>
                        <span className="font-semibold text-stone-800 truncate text-[11px] sm:text-xs">
                          {dish.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action: Add to Grocery List */}
                  <div className="pt-1 flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] text-stone-400 font-medium">
                      {combo.ingredients.length} nguyên liệu
                    </span>

                    <button
                      onClick={() => handleAdd(combo)}
                      className={`px-3.5 py-2 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-brand-600 hover:bg-brand-500 active:scale-95 text-white shadow-warm-sm'
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

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
