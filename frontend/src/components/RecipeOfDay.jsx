import React from 'react';
import { Star, Clock, Flame, MapPin, ChefHat, ArrowUpRight } from 'lucide-react';

export default function RecipeOfDay({ dish, onSelectDish }) {
  if (!dish) return null;

  return (
    <section className="py-2 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-stone-200/90 shadow-warm-sm hover:shadow-warm-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          
          {/* Left: Big Rounded Dish Photo with Badges */}
          <div className="lg:col-span-6 relative group cursor-pointer" onClick={() => onSelectDish(dish, 'cook')}>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-stone-100 shadow-sm">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-600 text-white text-[10px] sm:text-xs font-extrabold uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md tracking-wider">
                Món Ngon Trong Ngày
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white text-[11px] sm:text-xs">
                <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium">
                  <Clock className="w-3 h-3 text-amber-300" />
                  {dish.cookTime} phút
                </span>
                <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium">
                  <Flame className="w-3 h-3 text-rose-400" />
                  {dish.calories} kcal
                </span>
              </div>
            </div>
          </div>

          {/* Right: Recipe Information & Action Controls */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-600">
                GỢI Ý HÔM NAY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
              <span className="text-[11px] sm:text-xs font-medium text-stone-500">
                Buổi Sáng Năng Lượng
              </span>
            </div>

            <h2 
              onClick={() => onSelectDish(dish, 'cook')}
              className="text-xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-heading hover:text-brand-600 transition-colors cursor-pointer leading-snug"
            >
              {dish.name}
            </h2>

            {/* Author / Chef & Rating */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  <ChefHat className="w-3.5 h-3.5" />
                </div>
                <span>Bởi <strong>{dish.author}</strong></span>
              </div>

              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-stone-700 ml-1 text-xs">({dish.reviewsCount})</span>
              </div>
            </div>

            <p className="text-xs sm:text-base text-stone-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
              {dish.description}
            </p>

            {/* Action Buttons: side-by-side on mobile */}
            <div className="pt-1 grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-3">
              <button
                onClick={() => onSelectDish(dish, 'cook')}
                className="w-full sm:w-auto px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-warm-sm transition-all flex items-center justify-center gap-1.5"
              >
                <ChefHat className="w-4 h-4" />
                <span className="truncate">Tự Nấu</span>
              </button>

              <button
                onClick={() => onSelectDish(dish, 'eat-out')}
                className="w-full sm:w-auto px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-stone-100 hover:bg-brand-50 active:scale-95 text-stone-800 hover:text-brand-700 font-bold text-xs sm:text-sm border border-stone-200 transition-all flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-brand-600" />
                <span className="truncate">Ăn Ngoài (Maps)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
