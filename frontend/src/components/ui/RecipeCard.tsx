'use client';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { useStore } from '@/store/useStore';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  id?: number | string;
  title?: string;
  image?: string;
  time?: string;
  rating?: number | string;
  tags?: string[];
  calories?: number;
  region?: 'north' | 'central' | 'south' | 'national' | 'korea' | 'international';
  diningType?: ('home_cook' | 'eat_out')[];
  nutritionSource?: string;
  recipeSource?: string;
  recipe?: {
    id: number | string;
    title: string;
    image: string;
    time: string;
    rating: number | string;
    tags: string[];
    calories?: number;
    region?: 'north' | 'central' | 'south' | 'national' | 'korea' | 'international';
    diningType?: ('home_cook' | 'eat_out')[];
    nutritionSource?: string;
    recipeSource?: string;
  };
}

export default function RecipeCard(props: RecipeCardProps) {
  const r = props.recipe || props;
  const id = r.id || 0;
  const title = r.title || '';
  const image = r.image || '';
  const time = r.time || '30 min';
  const rating = Number(r.rating) || 4.8;
  const tags = r.tags || [];
  const calories = r.calories;
  const region = r.region;
  const diningType = r.diningType;
  const recipeSource = r.recipeSource;
  
  const [imgSrc, setImgSrc] = useState(image);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(image);
    setHasError(false);
  }, [image]);

  const toggleFavorite = useStore(state => state.toggleFavorite);
  const isFavStore = useStore(state => state.isFavorite(id));
  
  // Tránh lỗi Hydration mismatch của Next.js khi dùng localStorage
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(isFavStore);
  }, [isFavStore]);

  const regionLabels: Record<string, string> = {
    north: 'Hà Nội & Bắc Bộ',
    central: 'Miền Trung',
    south: 'Nam Bộ',
    national: 'Cơm Nhà',
    korea: 'Hàn Quốc',
    international: 'Healthy & Eat Clean'
  };

  const FALLBACK_FOOD_IMAGE = 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop';

  const getSafeImageUrl = (url: string) => {
    if (!url) return FALLBACK_FOOD_IMAGE;
    if (url.includes('wikimedia.org') || url.includes('wikipedia.org')) {
      return `/api/image-proxy?url=${encodeURIComponent(url)}`;
    }
    return url;
  };

  return (
    <Link href={`/recipe/${id}`} className="block h-full outline-none">
      <motion.div 
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          opacity: { duration: 0.3 }
        }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer group border border-stone-200/80 flex flex-col h-full relative"
      >
      {/* Image Container with aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
        <img 
          src={hasError ? FALLBACK_FOOD_IMAGE : getSafeImageUrl(imgSrc)} 
          alt={title} 
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ viewTransitionName: `recipe-image-${id}` }}
          loading="lazy"
          onError={() => {
            if (!hasError) {
              setHasError(true);
            }
          }}
        />

        {/* Region & Dining pill overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
          {region && (
            <span className="text-[10px] font-semibold text-stone-900 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs border border-stone-200/50">
              {regionLabels[region] || region}
            </span>
          )}
          {diningType?.includes('home_cook') && !diningType?.includes('eat_out') && (
            <span className="text-[10px] font-semibold text-amber-900 bg-amber-50/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs border border-amber-200/50">
              Tự nấu
            </span>
          )}
          {diningType?.includes('eat_out') && !diningType?.includes('home_cook') && (
            <span className="text-[10px] font-semibold text-orange-900 bg-orange-50/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs border border-orange-200/50">
              Ăn quán
            </span>
          )}
        </div>

        {/* Heart Favorite Icon */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite({ id, title, image, time, rating, tags });
          }}
          aria-label="Lưu món ăn yêu thích"
          className={`absolute top-3 right-3 w-8 h-8 backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-xs ${
            isFavorite 
              ? 'bg-orange-600 text-white' 
              : 'bg-white/90 text-stone-400 hover:text-orange-600 hover:bg-white'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={isFavorite ? 0 : 2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-stone-900 text-base mb-1.5 line-clamp-2 leading-snug group-hover:text-orange-700 transition-colors">
          {title}
        </h3>

        {/* Source & NIN Credibility info */}
        <div className="flex items-center gap-1.5 mb-3 text-[11px] text-stone-500 flex-wrap">
          <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60" title="Dữ liệu dinh dưỡng đối chiếu Viện Dinh Dưỡng Quốc Gia">
            NIN Kiểm định
          </span>
          {recipeSource && (
            <span className="text-stone-600 bg-stone-100 px-2 py-0.5 rounded truncate max-w-[170px]" title={recipeSource}>
              {recipeSource}
            </span>
          )}
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-1"></div>

        {/* Footer info (Calories, Time, Rating) */}
        <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
          <div className="flex items-center gap-3">
            <span className="text-stone-700 font-semibold">
              {calories ? `${calories} kcal` : time}
            </span>
            <span className="text-stone-300">•</span>
            <span>{time}</span>
          </div>

          <div className="flex items-center gap-1 text-stone-700 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-amber-500">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}
