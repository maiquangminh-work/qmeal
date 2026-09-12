import React, { useState, useMemo } from 'react';
import { 
  X, 
  Refrigerator, 
  Check, 
  Sparkles, 
  ChefHat, 
  Plus, 
  Trash2, 
  ArrowRight, 
  ShoppingCart, 
  AlertCircle,
  Clock,
  Flame
} from 'lucide-react';
import { COMMON_INGREDIENTS } from '../data/categories';

export default function FridgeModal({ dishes, onClose, onSelectDish, onAddMissingToGrocery }) {
  // Pre-selected default ingredients
  const [selectedIngredientIds, setSelectedIngredientIds] = useState(['thit_heo', 'trung']);
  // Custom user-added ingredients: [{ id: string, name: string }]
  const [customIngredients, setCustomIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'ready' | 'almost'
  const [addedGroceryFeedback, setAddedGroceryFeedback] = useState({});

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

  // Active ingredient items
  const activeIngredientList = useMemo(() => {
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

  // SMART FRIDGE MATCHING ENGINE (Practical 2-tier matching)
  const { readyDishes, almostReadyDishes } = useMemo(() => {
    if (activeIngredientList.length === 0) {
      return { readyDishes: [], almostReadyDishes: [] };
    }

    const ready = [];
    const almost = [];

    dishes.forEach((dish) => {
      const dishIngredients = dish.ingredients || [];
      const matchedCore = [];
      const missingCore = [];
      const matchedOptional = [];
      const missingOptional = [];

      dishIngredients.forEach((ing) => {
        const ingNameLower = ing.name.toLowerCase();
        const ingKey = ing.key;

        const isMatched = activeIngredientList.some((active) => {
          if (active.isCommon && ingKey && ingKey === active.id) {
            return true;
          }
          // Substring matching
          const keywords = active.name.split(/[\s,/]+/);
          return keywords.some((kw) => kw.length > 1 && ingNameLower.includes(kw));
        });

        if (isMatched) {
          if (ing.isCore) matchedCore.push(ing.name);
          else matchedOptional.push(ing.name);
        } else {
          if (ing.isCore) missingCore.push(ing.name);
          else missingOptional.push(ing.name);
        }
      });

      const totalCore = dishIngredients.filter((i) => i.isCore).length || 1;
      const coreMatchedCount = matchedCore.length;

      // Group 1: 🟢 NẤU ĐƯỢC NGAY (Đầy đủ 100% nguyên liệu cốt lõi)
      if (missingCore.length === 0 && coreMatchedCount > 0) {
        ready.push({
          dish,
          status: 'ready',
          matchedCore,
          missingCore: [],
          missingOptional,
          totalCore,
          percentage: 100
        });
      } 
      // Group 2: 🟡 CHỈ CẦN MUA THÊM 1-2 MÓN
      else if (coreMatchedCount > 0 && missingCore.length >= 1 && missingCore.length <= 2) {
        const percentage = Math.round((coreMatchedCount / totalCore) * 100);
        almost.push({
          dish,
          status: 'almost',
          matchedCore,
          missingCore,
          missingOptional,
          totalCore,
          percentage
        });
      }
    });

    ready.sort((a, b) => (b.dish.popularityScore || 0) - (a.dish.popularityScore || 0));
    almost.sort((a, b) => a.missingCore.length - b.missingCore.length || b.percentage - a.percentage);

    return { readyDishes: ready, almostReadyDishes: almost };
  }, [dishes, activeIngredientList]);

  const displayedResults = useMemo(() => {
    if (activeFilter === 'ready') return readyDishes;
    if (activeFilter === 'almost') return almostReadyDishes;
    return [...readyDishes, ...almostReadyDishes];
  }, [activeFilter, readyDishes, almostReadyDishes]);

  const handleAddMissing = (e, dish, missingList) => {
    e.stopPropagation();
    if (onAddMissingToGrocery && missingList.length > 0) {
      onAddMissingToGrocery(missingList, dish.name);
      setAddedGroceryFeedback((prev) => ({ ...prev, [dish.id]: true }));
      setTimeout(() => {
        setAddedGroceryFeedback((prev) => ({ ...prev, [dish.id]: false }));
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-gradient-to-r from-emerald-50 via-teal-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Refrigerator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl font-heading text-stone-900 flex items-center gap-2">
                <span>Tủ Lạnh Có Gì? - Thuật Toán Gợi Ý Bếp Nhà</span>
              </h3>
              <p className="text-xs text-stone-500">
                Nhập hoặc tích chọn nguyên liệu sẵn có. Hệ thống sẽ phân loại món nấu được ngay hoặc chỉ thiếu 1-2 món.
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
              Nhập nguyên liệu đang có trong bếp / tủ lạnh của bạn:
            </label>
            <form onSubmit={handleAddCustom} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Gõ nguyên liệu bất kỳ (ví dụ: thịt bò, nấm hương, rau cải, trứng cút...)"
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
                      className="hover:text-rose-600 ml-1 text-emerald-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Quick Click Common Ingredients */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Tích chọn nhanh các nguyên liệu phổ biến:
              </span>
              {selectedIngredientIds.length > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Trash2 className="w-3 h-3" />
                  Bỏ chọn tất cả ({selectedIngredientIds.length})
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

          {/* Results Filter Tabs */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === 'all'
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                  }`}
                >
                  Tất cả gợi ý ({readyDishes.length + almostReadyDishes.length})
                </button>

                <button
                  onClick={() => setActiveFilter('ready')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeFilter === 'ready'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  <span>🟢 Nấu được ngay</span>
                  <span className="px-1.5 py-0.2 bg-white/20 rounded-full text-[10px]">
                    {readyDishes.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveFilter('almost')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeFilter === 'almost'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  <span>🟡 Thiếu 1-2 món</span>
                  <span className="px-1.5 py-0.2 bg-white/20 rounded-full text-[10px]">
                    {almostReadyDishes.length}
                  </span>
                </button>
              </div>

              <span className="text-[11px] text-stone-400">
                Ưu tiên món đủ nguyên liệu tươi trước
              </span>
            </div>

            {/* Results Grid */}
            {displayedResults.length === 0 ? (
              <div className="text-center py-10 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <Refrigerator className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-stone-700">Chưa tìm thấy món phù hợp</p>
                <p className="text-xs text-stone-400 mt-1">
                  Hãy tích chọn thêm thịt, rau củ hoặc trứng có trong tủ lạnh của bạn nhé!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {displayedResults.map(({ dish, status, matchedCore, missingCore, percentage }) => {
                  const isReady = status === 'ready';
                  const hasAddedFeedback = addedGroceryFeedback[dish.id];

                  return (
                    <div
                      key={dish.id}
                      onClick={() => {
                        onClose();
                        onSelectDish(dish, 'cook');
                      }}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 cursor-pointer group ${
                        isReady
                          ? 'border-emerald-200 bg-emerald-50/20 hover:border-emerald-500 hover:shadow-warm-sm'
                          : 'border-stone-200 bg-white hover:border-amber-400 hover:shadow-warm-sm'
                      }`}
                    >
                      <div>
                        {/* Top Badge & Time */}
                        <div className="flex items-center justify-between mb-2">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            isReady
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {isReady ? '🟢 Đủ 100% nguyên liệu chính' : `🟡 Thiếu ${missingCore.length} món`}
                          </span>

                          <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3 text-stone-400" />
                            {(dish.prepTime || 0) + (dish.cookTime || 0)} phút
                          </span>
                        </div>

                        {/* Dish Row */}
                        <div className="flex items-start gap-3">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-16 h-16 rounded-xl object-cover shadow-xs flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-sm text-stone-900 group-hover:text-brand-600 transition-colors truncate">
                              {dish.name}
                            </h5>
                            <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                              {dish.description}
                            </p>
                            <div className="flex items-center gap-2 mt-1 text-[10px] text-stone-500 font-semibold">
                              <span>{dish.calories} kcal</span>
                              <span>•</span>
                              <span>Độ khó: {dish.difficulty}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Footer Tags & Add Missing Button */}
                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                        <div className="flex flex-wrap gap-1 text-[10px] min-w-0">
                          {matchedCore.slice(0, 2).map((m, i) => (
                            <span key={i} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-medium">
                              ✓ {m}
                            </span>
                          ))}
                        </div>

                        {/* If missing items, provide 1-click button to add missing to grocery */}
                        {!isReady && missingCore.length > 0 && (
                          <button
                            type="button"
                            onClick={(e) => handleAddMissing(e, dish, missingCore)}
                            className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-[10px] flex items-center gap-1 transition-all flex-shrink-0"
                            title="Thêm các nguyên liệu còn thiếu vào danh sách đi chợ"
                          >
                            {hasAddedFeedback ? (
                              <span className="text-emerald-700 font-bold">✓ Đã thêm!</span>
                            ) : (
                              <>
                                <ShoppingCart className="w-3 h-3 text-amber-700" />
                                <span>+ Mua đồ thiếu</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Bấm vào bất kỳ món nào để xem công thức và bắt đầu nấu từng bước
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
