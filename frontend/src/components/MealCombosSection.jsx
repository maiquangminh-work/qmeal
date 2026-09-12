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
  const [selectedComboForView, setSelectedComboForView] = useState(null);

  const handleAdd = (combo) => {
    onAddComboToGrocery(combo);
    setAddedCombos((prev) => ({ ...prev, [combo.id]: true }));
    setTimeout(() => {
      setAddedCombos((prev) => ({ ...prev, [combo.id]: false }));
    }, 2500);
  };

  return (
    <section id="family-combos" className="py-10 bg-gradient-to-b from-[#faf9f6] via-brand-50/40 to-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Công Thức Trọn Vẹn Bữa Ăn Việt
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading">
              Gợi Ý Mâm Cơm Gia Đình (Combo 3 Món)
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-xl">
              Đúng chuẩn truyền thống: <strong>1 Món Mặn + 1 Món Canh + 1 Món Rau</strong>. Đủ chất, tiết kiệm thời gian nghĩ ngợi và tự động tạo danh sách đi chợ!
            </p>
          </div>

          <button
            onClick={onOpenGroceryList}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-xs sm:text-sm shadow-xs hover:shadow-sm transition-all flex items-center gap-2 flex-shrink-0"
          >
            <ShoppingCart className="w-4 h-4 text-brand-600" />
            <span>Xem Giỏ Đi Chợ</span>
          </button>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MEAL_COMBOS_DATA.map((combo) => {
            const isAdded = addedCombos[combo.id];

            return (
              <div
                key={combo.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between space-y-5 group"
              >
                {/* Top Info */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-brand-600 uppercase tracking-wider">
                      MÂM CƠM GIA ĐÌNH
                    </span>
                    <div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-stone-400" />
                        {combo.servings}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {combo.totalTime}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading group-hover:text-brand-600 transition-colors">
                      {combo.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {combo.tagline}
                    </p>
                  </div>

                  {/* Estimated Cost Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/60">
                    <Wallet className="w-3.5 h-3.5 text-amber-600" />
                    <span>Chi phí ước tính: {combo.estimatedCost}</span>
                  </div>
                </div>

                {/* 3 Dishes Breakdown List */}
                <div className="space-y-2.5 bg-stone-50/80 p-3.5 rounded-2xl border border-stone-100">
                  {combo.dishes.map((dish, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <span className="font-extrabold px-2 py-0.5 rounded-md bg-white border border-stone-200 text-brand-700 flex-shrink-0 whitespace-nowrap">
                        {dish.role}
                      </span>
                      <div className="flex-1">
                        <p className="font-bold text-stone-800">{dish.name}</p>
                        <p className="text-[11px] text-stone-500 line-clamp-1">{dish.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions: Add to grocery list & View detail */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-stone-400 font-medium">
                    {combo.ingredients.length} món cần mua
                  </span>

                  <button
                    onClick={() => handleAdd(combo)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-600 hover:bg-brand-500 text-white shadow-warm-sm'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Đã thêm vào giỏ đi chợ!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>Thêm Vào Danh Sách Đi Chợ</span>
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
