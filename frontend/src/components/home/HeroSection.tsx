'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTimeContext, TimeContextInfo } from '@/utils/timeContext';
import { Sparkles, Dices, Refrigerator } from 'lucide-react';

export default function HeroSection({ language }: { language: 'vi' | 'en' }) {
  const [timeContext, setTimeContext] = useState<TimeContextInfo | null>(null);

  useEffect(() => {
    setTimeContext(getTimeContext());
  }, []);

  const t = {
    vi: {
      trending: '🍲 Xu hướng hôm nay',
      title1: 'Khám phá & Nấu',
      title2: 'Món ngon Việt Nam',
      desc: 'Giải quyết bài toán "Hôm nay ăn gì?" với các công thức chuẩn vị và địa điểm quán ăn hấp dẫn dành riêng cho bạn.',
      btnGacha: '🎲 Gacha Món Ngẫu Nhiên',
      btnFridge: '🥬 Tủ Lạnh Có Gì?'
    },
    en: {
      trending: '🍲 Trending Today',
      title1: 'Discover & Cook',
      title2: 'Vietnamese Cuisine',
      desc: 'Solve the daily "What to eat?" dilemma with authentic recipes and restaurant recommendations just for you.',
      btnGacha: '🎲 Random Meal Gacha',
      btnFridge: "🥬 What's in my Fridge?"
    }
  }[language];

  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 mb-12 flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-14 border border-stone-200/70 shadow-sm">
      {/* Text Content */}
      <div className="z-10 md:w-7/12 flex flex-col items-start gap-5">
        {/* Dynamic Real-time Time Context Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 text-orange-800 font-bold text-xs sm:text-sm border border-orange-200/60 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>{timeContext ? timeContext.badgeText[language] : t.trending}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight tracking-tight">
          {t.title1} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
            {t.title2}
          </span>
        </h1>

        <p className="text-stone-600 text-base md:text-lg max-w-lg leading-relaxed">
          {timeContext ? timeContext.subGreeting[language] : t.desc}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
          <Link 
            href="/gacha"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
          >
            <Dices className="w-5 h-5" />
            <span>{t.btnGacha}</span>
          </Link>
          <Link 
            href="/fridge"
            className="bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 hover:border-orange-300 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
          >
            <Refrigerator className="w-5 h-5 text-emerald-600" />
            <span>{t.btnFridge}</span>
          </Link>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="w-full md:w-5/12 mt-8 md:mt-0 relative flex justify-center md:justify-end">
        <div className="w-60 h-60 md:w-80 md:h-80 bg-orange-200/50 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="w-28 h-28 bg-amber-300/40 rounded-full blur-2xl absolute top-0 right-0 pointer-events-none z-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Delicious Vietnamese Food" 
          className="relative z-10 w-full max-w-xs sm:max-w-sm rounded-3xl shadow-xl border-4 border-white object-cover aspect-square transform rotate-1 hover:rotate-0 transition-transform duration-500"
        />
      </div>
    </section>
  );
}