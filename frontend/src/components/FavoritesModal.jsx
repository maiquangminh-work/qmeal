import React from 'react';
import { X, Heart, ChefHat, Trash2, ArrowRight } from 'lucide-react';

export default function FavoritesModal({
  favorites,
  onClose,
  onSelectDish,
  onRemoveFavorite
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-rose-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl font-heading text-stone-900">
                Món Ăn Bạn Đã Lưu ({favorites.length})
              </h3>
              <p className="text-xs text-stone-500">
                Danh sách các món bạn yêu thích để xem lại bất cứ lúc nào
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

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="text-base font-bold text-stone-700">Chưa có món nào được lưu</p>
              <p className="text-xs text-stone-400 mt-1">
                Hãy bấm vào biểu tượng trái tim ở các món ăn để lưu lại vào đây nhé!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {favorites.map((dish) => (
                <div
                  key={dish.id}
                  className="p-3.5 rounded-2xl border border-stone-200 hover:border-brand-500 bg-white hover:shadow-sm transition-all flex items-center justify-between gap-3 group"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onSelectDish(dish, 'cook');
                    }}
                    className="flex items-center gap-3 flex-1 cursor-pointer"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0"
                    />
                    <div>
                      <h5 className="font-bold text-sm text-stone-900 group-hover:text-brand-600 transition-colors">
                        {dish.name}
                      </h5>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {dish.cookTime} phút • {dish.difficulty} • 🔥 {dish.calories} kcal
                      </p>
                      <span className="text-[10px] text-amber-500 font-bold">
                        ★ {dish.rating} ({dish.reviewsCount} đánh giá)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveFavorite(dish.id)}
                      className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Xoá khỏi danh sách"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectDish(dish, 'cook');
                      }}
                      className="p-2 rounded-xl bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white transition-all"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
