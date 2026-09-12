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

        {/* Top Left: Time Badge (NomNom style: 30 MINS) */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-stone-800 text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
          <Clock className="w-3 h-3 text-brand-600" />
          <span>{dish.cookTime} PHÚT</span>
        </div>

        {/* Top Right: Difficulty Badge (EASY/MEDIUM/HARD) */}
        <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider backdrop-blur-md ${difficultyColors[dish.difficulty] || 'bg-stone-100 text-stone-800'}`}>
          {dish.difficulty}
        </div>

        {/* Bottom Right: Quick Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(dish);
          }}
          className={`absolute bottom-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-black/40 hover:bg-black/60 text-white'
          }`}
          title={isFavorite ? 'Bỏ lưu' : 'Lưu món ăn'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Bottom Left: Calories */}
        <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium drop-shadow-sm">
          🔥 {dish.calories} kcal
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{dish.rating}</span>
            <span className="text-stone-400 font-normal">({dish.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectDish(dish, 'cook')}
            className="font-bold text-stone-900 text-base sm:text-lg font-heading group-hover:text-brand-600 transition-colors cursor-pointer line-clamp-1"
          >
            {dish.name}
          </h3>

          {/* Description snippet */}
          <p className="text-xs sm:text-sm text-stone-500 line-clamp-2 mt-1 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Bottom Action: "See Full Details" Button (Cook. mockup style) */}
        <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
          <button
            onClick={() => onSelectDish(dish, 'cook')}
            className="flex-1 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-xs sm:text-sm shadow-warm-sm hover:shadow-warm-md transition-all flex items-center justify-center gap-1.5"
          >
            <ChefHat className="w-4 h-4" />
            <span>Xem Chi Tiết</span>
          </button>

          <button
            onClick={() => onSelectDish(dish, 'eat-out')}
            className="p-2.5 rounded-xl bg-stone-100 hover:bg-brand-50 text-stone-700 hover:text-brand-600 border border-stone-200 transition-colors"
            title="Xem quán ăn ngoài trên bản đồ"
          >
            <MapPin className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
