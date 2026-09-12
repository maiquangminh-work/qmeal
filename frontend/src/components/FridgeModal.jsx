import React, { useState, useMemo } from 'react';
import { X, Refrigerator, Check, Sparkles, ChefHat, Plus, Trash2, ArrowRight, CornerDownLeft } from 'lucide-react';
import { COMMON_INGREDIENTS } from '../data/categories';

export default function FridgeModal({ dishes, onClose, onSelectDish }) {
  // Pre-selected default ingredients
  const [selectedIngredientIds, setSelectedIngredientIds] = useState(['trung', 'ca_chua']);
  // Custom user-added ingredients: [{ id: string, name: string }]
  const [customIngredients, setCustomIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Toggle predefined ingredients
  const toggleIngredient = (id) => {
    setSelectedIngredientIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Add custom ingredient typed by user
  const handleAddCustom = (e) => {
    e?.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Check if already exists in predefined
    const matchedCommon = COMMON_INGREDIENTS.find(
      (c) => c.name.toLowerCase().includes(trimmed.toLowerCase()) || c.id === trimmed.toLowerCase()
    );
    if (matchedCommon) {
      if (!selectedIngredientIds.includes(matchedCommon.id)) {
        setSelectedIngredientIds((prev) => [...prev, matchedCommon.id]);
      }
      setInputValue('');
      return;
    }

    // Check if already in custom
    if (customIngredients.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      setInputValue('');
      return;
    }

    const newCustom = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: trimmed,
    };

    setCustomIngredients((prev) => [...prev, newCustom]);
    setSelectedIngredientIds((prev) => [...prev, newCustom.id]);
    setInputValue('');
  };

  // Remove custom ingredient
  const removeCustomIngredient = (id) => {
    setCustomIngredients((prev) => prev.filter((c) => c.id !== id));
    setSelectedIngredientIds((prev) => prev.filter((i) => i !== id));
  };

  const clearAll = () => {
    setSelectedIngredientIds([]);
    setCustomIngredients([]);
  };

  // Combine all active ingredient names for matching
  const activeIngredientNames = useMemo(() => {
    const list = [];
    selectedIngredientIds.forEach((id) => {
      const common = COMMON_INGREDIENTS.find((c) => c.id === id);
      if (common) {
        list.push({ id: common.id, name: common.name.toLowerCase(), isCommon: true });
      }
      const custom = customIngredients.find((c) => c.id === id);
      if (custom) {
        list.push({ id: custom.id, name: custom.name.toLowerCase(), isCommon: false });
      }
    });
    return list;
  }, [selectedIngredientIds, customIngredients]);

  // Calculate matching scores for dishes
  const matchedDishes = useMemo(() => {
    if (activeIngredientNames.length === 0) return [];

    return dishes.map((dish) => {
      const requiredKeys = dish.ingredientKeys || [];
      const dishIngredients = dish.ingredients || [];

      // Find all matched ingredients
      const matchedList = [];
      const missingList = [];

      dishIngredients.forEach((ing) => {
        const ingNameLower = ing.name.toLowerCase();
        // Check if any active ingredient matches
        const isMatched = activeIngredientNames.some((active) => {
          // Key match
          if (active.isCommon && requiredKeys.includes(active.id)) {
            // Further verify name context
            return true;
          }
          // Direct text substring match (e.g. "thịt heo", "cá", "tôm", "cà chua")
          const keywords = active.name.split(/[\s,/]+/);
          return keywords.some((kw) => kw.length > 1 && ingNameLower.includes(kw));
        });

        if (isMatched) {
          matchedList.push(ing.name);
        } else {
          missingList.push(ing.name);
        }
      });

      const totalRequired = dishIngredients.length;
      const matchCount = matchedList.length;
      const percentage = totalRequired > 0 ? Math.round((matchCount / totalRequired) * 100) : 0;

      return {
        dish,
        matchCount,
        totalCount: totalRequired,
        percentage,
        matchedList,
        missingList
      };
    })
    .filter((item) => item.matchCount > 0)
    .sort((a, b) => b.percentage - a.percentage || b.matchCount - a.matchCount);
  }, [dishes, activeIngredientNames]);

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
                Nhập hoặc chọn các nguyên liệu bạn đang có sẵn, hệ thống sẽ đề xuất món nấu được ngay
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
          
          {/* Custom Ingredient Input Bar */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
              Thêm nguyên liệu có trong tủ lạnh của bạn:
            </label>
            <form onSubmit={handleAddCustom} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Gõ nguyên liệu bất kỳ (ví dụ: cá hồi, nấm đùi gà, thịt bò, rau cải...)"
                  className="w-full pl-4 pr-10 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center gap-1.5 transition-all flex-shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm</span>
              </button>
            </form>

            {/* Custom Added Chips */}
            {customIngredients.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-semibold text-stone-500">Đã thêm riêng:</span>
                {customIngredients.map((item) => (
                  <span
                    key={item.id}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs"
                  >
                    <span>✨ {item.name}</span>
                    <button
                      type="button"
                      onClick={() => removeCustomIngredient(item.id)}
                      className="hover:text-emerald-950 p-0.5 rounded-full"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Ingredient Selector Section (Popular Quick Picks) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Gợi ý chọn nhanh nguyên liệu phổ biến ({selectedIngredientIds.length} đang chọn):
              </span>
              {selectedIngredientIds.length > 0 && (
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
                const isSelected = selectedIngredientIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleIngredient(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600 ring-offset-1 scale-[1.02]'
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
                Các món gợi ý nấu được ({matchedDishes.length} món):
              </span>
              <span className="text-xs text-stone-400">
                Xếp hạng theo độ sẵn sàng của nguyên liệu
              </span>
            </div>

            {matchedDishes.length === 0 ? (
              <div className="text-center py-10 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <Refrigerator className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-stone-700">Chưa có món nào khớp</p>
                <p className="text-xs text-stone-400 mt-1">
                  Hãy nhập hoặc chọn thêm nguyên liệu bạn có sẵn ở trên nhé!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {matchedDishes.map(({ dish, matchCount, totalCount, percentage, matchedList, missingList }) => (
                  <div
                    key={dish.id}
                    onClick={() => {
                      onClose();
                      onSelectDish(dish, 'cook');
                    }}
                    className="p-4 rounded-2xl border border-stone-200 hover:border-emerald-500 bg-white hover:shadow-warm-sm transition-all flex flex-col justify-between gap-3 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-sm text-stone-900 group-hover:text-emerald-700 transition-colors truncate">
                            {dish.name}
                          </h5>
                          <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </div>

                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {dish.cookTime}p • Độ khó: {dish.difficulty} • {dish.calories} kcal
                        </p>
                        
                        {/* Progress Match Bar */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 bg-stone-100 h-2 rounded-full overflow-hidden border border-stone-200">
                            <div
                              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[11px] font-extrabold text-emerald-600 whitespace-nowrap">
                            {percentage}% ({matchCount}/{totalCount})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Matched vs Missing Tags */}
                    <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1 text-[10px]">
                      {matchedList.slice(0, 3).map((m, i) => (
                        <span key={i} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-semibold flex items-center gap-0.5">
                          ✓ {m}
                        </span>
                      ))}
                      {missingList.length > 0 && (
                        <span className="px-2 py-0.5 bg-stone-100 text-stone-500 rounded-md">
                          Thiếu: {missingList[0]} {missingList.length > 1 ? `+${missingList.length - 1}` : ''}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Mẹo: Bạn có thể bấm vào bất kỳ món nào để xem công thức chi tiết
          </span>
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
