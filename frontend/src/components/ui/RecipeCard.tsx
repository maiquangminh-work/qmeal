'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { useEffect, useState } from 'react';

interface RecipeCardProps {
  id?: number | string;
  title?: string;
  image?: string;
  time?: string;
  rating?: number | string;
  tags?: string[];
  calories?: number;
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
  const recipeSource = r.recipeSource;
  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  const toggleFavorite = useStore(state => state.toggleFavorite);
  const isFavStore = useStore(state => state.isFavorite(id));
  
  // Tránh lỗi Hydration mismatch của Next.js khi dùng localStorage
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(isFavStore);
  }, [isFavStore]);

  return (
    <Link href={`/recipe/${id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-stone-100 flex flex-col h-full transform hover:-translate-y-1 relative block">
      {/* Image Container with aspect ratio */}
      <div className="relative w-full pt-[75%] overflow-hidden bg-stone-100">
        <img 
          src={imgSrc} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={() => {
            setImgSrc('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80');
          }}
        />
        {/* Heart Icon */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite({ id, title, image, time, rating, tags });
          }}
          className={`absolute top-3 right-3 w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors shadow-sm ${isFavorite ? 'bg-orange-500 text-white' : 'bg-white/90 text-stone-400 hover:text-orange-500'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={isFavorite ? 0 : 2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100/50">
              {tag}
            </span>
          ))}
          {calories && (
            <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
              🔥 {calories} kcal
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-stone-800 text-lg mb-2 line-clamp-2 leading-tight group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        {/* Credibility & Source Badges */}
        <div className="flex items-center gap-1.5 mb-3 text-[11px] text-stone-500 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-md border border-emerald-200/60" title="Dữ liệu dinh dưỡng được kiểm định bởi Viện Dinh Dưỡng Quốc Gia">
            🏛️ NIN
          </span>
          {recipeSource && (
            <span className="inline-flex items-center gap-1 bg-stone-50 text-stone-600 font-medium px-2 py-0.5 rounded-md border border-stone-100 truncate max-w-[180px]" title={`Nguồn công thức: ${recipeSource}`}>
              📖 {recipeSource}
            </span>
          )}
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-1"></div>

        {/* Footer info (Time & Rating) */}
        <div className="flex items-center justify-between text-sm text-stone-500 mt-2 font-medium pt-3 border-t border-stone-100">
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-stone-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {time}
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-700 font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
