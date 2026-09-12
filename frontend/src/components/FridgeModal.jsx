import React, { useState } from 'react';
import { X, Refrigerator, Check, Sparkles, ChefHat, Plus, Trash2, ArrowRight } from 'lucide-react';
import { COMMON_INGREDIENTS } from '../data/categories';

export default function FridgeModal({ dishes, onClose, onSelectDish }) {
  const [selectedIngredients, setSelectedIngredients] = useState(['trung', 'ca_chua']);
  const [customInput, setCustomInput] = useState('');

  const toggleIngredient = (id) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const clearAll = () => setSelectedIngredients([]);

  // Calculate matching scores for dishes
  const matchedDishes = dishes.map((dish) => {
    const requiredKeys = dish.ingredientKeys || [];
    if (requiredKeys.length === 0) return { dish, matchCount: 0, percentage: 0 };

    const matchedKeys = requiredKeys.filter((key) => selectedIngredients.includes(key));
    const percentage = Math.round((matchedKeys.length / requiredKeys.length) * 100);

    return {
      dish,
      matchCount: matchedKeys.length,
      totalCount: requiredKeys.length,
      percentage,
      matchedKeys
    };
  })
  .filter((item) => item.matchCount > 0)
  .sort((a, b) => b.percentage - a.percentage || b.matchCount - a.matchCount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-emerald-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Refrigerator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl font-heading text-stone-900 flex items-center gap-2">
                <span>Tủ Lạnh Có Gì? - Nấu Theo Nguyên Liệu</span>
              </h3>
              <p className="text-xs text-stone-500">
                Chọn nguyên liệu sẵn có, hệ thống sẽ đề xuất các món bạn có thể nấu ngay
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-stone-200/70 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Ingredient Selector Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                1. Chọn nguyên liệu bạn đang có ({selectedIngredients.length} đã chọn):
              </span>
              {selectedIngredients.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Trash2 className="w-3 h-3" />
                  Xoá chọn tất cả
                </button>
              )}
            </div>

            {/* Pill chips grid */}
            <div className="flex flex-wrap gap-2">
              {COMMON_INGREDIENTS.map((item) => {
                const isSelected = selectedIngredients.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleIngredient(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600 ring-offset-1'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                2. Các món có thể nấu ({matchedDishes.length} món phù hợp):
              </span>
              <span className="text-xs text-stone-400">
                Ưu tiên món có tỷ lệ khớp cao nhất
              </span>
            </div>

            {matchedDishes.length === 0 ? (
              <div className="text-center py-10 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <Refrigerator className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-stone-700">Chưa có món nào khớp</p>
                <p className="text-xs text-stone-400 mt-1">
                  Hãy thử chọn thêm một vài nguyên liệu như Trứng, Cà chua hoặc Thịt bò nhé!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchedDishes.map(({ dish, matchCount, totalCount, percentage }) => (
                  <div
                    key={dish.id}
                    onClick={() => {
                      onClose();
                      onSelectDish(dish, 'cook');
                    }}
                    className="p-3.5 rounded-2xl border border-stone-200 hover:border-emerald-500 bg-white hover:shadow-warm-sm transition-all flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0"
                      />
                      <div>
                        <h5 className="font-bold text-sm text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                          {dish.name}
                        </h5>
                        <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                          Thời gian nấu: {dish.cookTime}p • {dish.difficulty}
                        </p>
                        
                        {/* Match Bar */}
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="w-20 bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-emerald-500 h-full rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-extrabold text-emerald-600">
                            Khớp {matchCount}/{totalCount} nguyên liệu ({percentage}%)
                          </span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs sm:text-sm hover:bg-stone-800 transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
