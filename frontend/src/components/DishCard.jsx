import React from 'react';
import { Clock, Star, Heart, ChefHat, MapPin, Sparkles } from 'lucide-react';

export default function DishCard({
  dish,
  onSelectDish,
  isFavorite,
  onToggleFavorite
}) {
  const difficultyColors = {
    'Dễ': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Vừa': 'bg-amber-100 text-amber-800 border-amber-200',
    'Khó': 'bg-rose-100 text-rose-800 border-rose-200',
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      
      {/* Image Container with Badges */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onSelectDish(dish, 'cook')}>
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>

        {/* Top Left: Time Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-md text-stone-800 text-[9px] sm:text-[11px] font-extrabold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-sm flex items-center gap-1">
          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-600" />
          <span>{dish.cookTime}P</span>
        </div>

        {/* Top Right: Difficulty Badge */}
        <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md border uppercase tracking-wider backdrop-blur-md ${difficultyColors[dish.difficulty] || 'bg-stone-100 text-stone-800'}`}>
          {dish.difficulty}
        </div>

        {/* Bottom Right: Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(dish);
          }}
          className={`absolute bottom-2 right-2 sm:bottom-3 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-black/40 hover:bg-black/60 text-white'
          }`}
          title={isFavorite ? 'Bỏ lưu' : 'Lưu món ăn'}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Bottom Left: Calories */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-white text-[9px] sm:text-[11px] font-semibold drop-shadow-sm">
          🔥 {dish.calories} kcal
        </div>
      </div>

      {/* Content Container */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-amber-500 font-bold mb-0.5 sm:mb-1">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            <span>{dish.rating}</span>
            <span className="text-stone-400 font-normal">({dish.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectDish(dish, 'cook')}
            className="font-bold text-stone-900 text-xs sm:text-base font-heading group-hover:text-brand-600 transition-colors cursor-pointer line-clamp-1"
          >
            {dish.name}
          </h3>

          {/* Description snippet - hidden on mobile for clean 2-column view */}
          <p className="hidden sm:block text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Bottom Action: "See Full Details" Button */}
        <div className="pt-1.5 sm:pt-2 border-t border-stone-100 flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onSelectDish(dish, 'cook')}
            className="flex-1 py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-[11px] sm:text-xs shadow-xs hover:shadow-warm-sm transition-all flex items-center justify-center gap-1"
          >
            <ChefHat className="w-3.5 h-3.5" />
            <span className="truncate">Chi tiết</span>
          </button>

          <button
            onClick={() => onSelectDish(dish, 'eat-out')}
            className="p-1.5 sm:p-2.5 rounded-xl bg-stone-100 hover:bg-brand-50 text-stone-700 hover:text-brand-600 border border-stone-200 transition-colors flex-shrink-0"
            title="Xem quán ăn ngoài trên bản đồ"
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
