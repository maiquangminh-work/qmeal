import React, { useState } from 'react';
import { 
  X, 
  ChefHat, 
  MapPin, 
  Clock, 
  Flame, 
  Star, 
  Heart, 
  CheckCircle2, 
  Circle,
  Users,
  Plus,
  Minus,
  Play,
  ShoppingCart,
  Check,
  Sparkles
} from 'lucide-react';
import MapViewer from './MapViewer';
import CookingModeModal from './CookingModeModal';
import { formatScaledIngredient, scaleIngredientAmount, scaleCalories } from '../utils/recipeScaler';

export default function DishDetailModal({
  dish,
  initialTab = 'cook', // 'cook' | 'eat-out'
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddIngredientsToGrocery
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [servings, setServings] = useState(2);
  const [isCookingModeOpen, setIsCookingModeOpen] = useState(false);
  const [addedGroceryToast, setAddedGroceryToast] = useState(false);

  if (!dish) return null;

  const currentCalories = scaleCalories(dish.calories, servings, 2);
  const totalTime = (dish.prepTime || 0) + (dish.cookTime || 0);

  const toggleCheck = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleAddToGrocery = () => {
    if (onAddIngredientsToGrocery) {
      const itemsToAdd = dish.ingredients.map((ing) => ({
        name: ing.name,
        amount: formatScaledIngredient(ing, servings, 2),
        category: ing.isCore ? 'Nguyên liệu chính' : 'Gia vị & Phụ'
      }));
      onAddIngredientsToGrocery(dish, itemsToAdd, servings);
      setAddedGroceryToast(true);
      setTimeout(() => setAddedGroceryToast(false), 2500);
    }
  };

  return (
    <>
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
                    ? 'bg-rose-500 text-white shadow-warm-sm'
                    : 'bg-black/40 hover:bg-black/60 text-white'
                }`}
                title="Yêu thích món này"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all"
                title="Đóng"
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

          {/* Dual Mode Switcher Tabs */}
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
              <span>Ăn Ngoài & Đặt Ship</span>
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
            {activeTab === 'cook' ? (
              /* TAB 1: TỰ NẤU */
              <div className="space-y-6">
                
                {/* Quick Specs Bar with Prep, Cook & Calories */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100 text-center">
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase">Thời gian thực tế</p>
                    <p className="text-sm sm:text-base font-extrabold text-brand-700 flex items-center justify-center gap-1 mt-0.5">
                      <Clock className="w-4 h-4" />
                      {totalTime} phút
                    </p>
                    <p className="text-[10px] text-stone-500 mt-0.5">
                      {dish.prepTime ? `${dish.prepTime}p sơ chế + ${dish.cookTime}p nấu` : `${dish.cookTime}p nấu`}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase">Năng lượng ({servings}P)</p>
                    <p className="text-sm sm:text-base font-extrabold text-brand-700 flex items-center justify-center gap-1 mt-0.5">
                      <Flame className="w-4 h-4" />
                      {currentCalories} kcal
                    </p>
                    <p className="text-[10px] text-stone-500 mt-0.5">
                      Độ khó: <strong>{dish.difficulty}</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase">Mức độ phổ biến</p>
                    <p className="text-sm sm:text-base font-extrabold text-brand-700 mt-0.5 flex items-center justify-center gap-1">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      {dish.popularityScore ? `${dish.popularityScore}%` : 'Món Ngon'}
                    </p>
                    <p className="text-[10px] text-stone-500 mt-0.5">
                      {dish.isHomeCooked ? '🏠 Cơm gia đình' : 'Quán đặc sản'}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-700 text-sm leading-relaxed">
                  {dish.description}
                </p>

                {/* ACTION CTA ROW: Bắt Đầu Nấu Từng Bước & Thêm Vào Giỏ Đi Chợ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsCookingModeOpen(true)}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-amber-500 hover:from-brand-700 hover:to-brand-600 text-white font-extrabold text-sm shadow-warm-md hover:shadow-warm-lg active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Bắt Đầu Nấu Từng Bước</span>
                    <Sparkles className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleAddToGrocery}
                    className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    {addedGroceryToast ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-extrabold">Đã thêm vào giỏ đi chợ!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 text-emerald-600" />
                        <span>Thêm nguyên liệu vào giỏ đi chợ</span>
                      </>
                    )}
                  </button>
                </div>

                {/* SERVING SIZE SCALER CONTROLLER */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">
                        Tùy chỉnh khẩu phần ăn:
                      </span>
                      <span className="text-[11px] text-stone-500">
                        Định lượng nguyên liệu bên dưới sẽ tự động nhân theo số người
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      disabled={servings <= 1}
                      className="w-8 h-8 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center justify-center font-bold text-stone-700 hover:bg-stone-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      aria-label="Giảm 1 người"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="px-3.5 py-1 bg-white rounded-xl border border-brand-300 shadow-xs text-center min-w-[76px]">
                      <span className="font-extrabold text-sm text-brand-700">{servings}</span>
                      <span className="text-xs font-semibold text-stone-600 ml-1">người</span>
                    </div>

                    <button
                      onClick={() => setServings(Math.min(12, servings + 1))}
                      disabled={servings >= 12}
                      className="w-8 h-8 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center justify-center font-bold text-stone-700 hover:bg-stone-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      aria-label="Tăng 1 người"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Checklist Nguyên liệu */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-base font-heading flex items-center gap-2">
                      <span>🥗 Nguyên Liệu Cần Chuẩn Bị</span>
                      <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-sans">
                        {dish.ingredients.length} mục
                      </span>
                    </h4>
                    <span className="text-xs text-stone-400 hidden sm:inline">
                      Bấm để đánh dấu nguyên liệu đã có sẵn
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {dish.ingredients.map((ing, idx) => {
                      const isDone = checkedIngredients[idx];
                      const scaledAmount = formatScaledIngredient(ing, servings, 2);

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
                          <span className="text-xs font-bold text-stone-600 bg-white px-2 py-0.5 rounded-md border border-stone-200 flex-shrink-0">
                            {scaledAmount}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hướng dẫn từng bước */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-base font-heading">
                      👨‍🍳 Các Bước Nấu Chuẩn Vị ({dish.steps.length} bước)
                    </h4>
                    <button
                      onClick={() => setIsCookingModeOpen(true)}
                      className="text-xs text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1"
                    >
                      <span>Mở chế độ rảnh tay</span>
                      <Play className="w-3 h-3 fill-brand-600" />
                    </button>
                  </div>

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
              /* TAB 2: ĂN NGOÀI & ĐẶT SHIP (BẢN ĐỒ GOOGLE MAPS & DELIVERY) */
              <MapViewer dish={dish} />
            )}
          </div>

          {/* Modal Bottom Footer */}
          <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
            <div className="text-xs text-stone-500">
              {activeTab === 'cook' ? 'Chúc bạn nấu thành công món ngon!' : 'Gợi ý vị trí & giao hàng'}
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

      {/* FULL-SCREEN COOKING MODE (Step-by-step with Wake Lock, without timer) */}
      {isCookingModeOpen && (
        <CookingModeModal
          dish={dish}
          servings={servings}
          onClose={() => setIsCookingModeOpen(false)}
        />
      )}
    </>
  );
}
