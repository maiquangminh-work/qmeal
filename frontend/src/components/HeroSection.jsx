import React from 'react';
import { Dices, Refrigerator, Sparkles, Clock, Flame, ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenGacha, onOpenFridge, onExploreMeals }) {
  return (
    <section className="relative overflow-hidden pt-3 pb-4 md:pt-10 md:pb-16 bg-gradient-to-b from-brand-50/50 via-white to-[#faf9f6]">
      {/* Decorative Warm Background Blobs */}
      <div className="hidden md:block absolute top-10 right-1/4 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 left-10 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. MOBILE APP-LIKE HERO (Compact, 1-touch for Phone Users) */}
        {/* ======================================================== */}
        <div className="md:hidden bg-gradient-to-br from-brand-500 to-amber-500 rounded-3xl p-5 text-white shadow-warm-md space-y-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-amber-200" />
              Gợi ý hôm nay
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight leading-tight">
              Hôm nay bạn thèm ăn gì? 👋
            </h1>
            <p className="text-xs text-brand-50 leading-relaxed">
              Giải quyết nhanh câu hỏi "Hôm nay ăn gì?" cho cả 4 bữa trong ngày.
            </p>
          </div>

          {/* Quick Action Pills for Mobile */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={onOpenGacha}
              className="p-3 rounded-2xl bg-white text-stone-900 font-extrabold text-xs shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1.5"
            >
              <Dices className="w-4 h-4 text-brand-600" />
              <span>Quay Gacha</span>
            </button>

            <button
              onClick={onOpenFridge}
              className="p-3 rounded-2xl bg-stone-900/40 backdrop-blur-md text-white font-extrabold text-xs border border-white/20 active:scale-95 transition-transform flex items-center justify-center gap-1.5"
            >
              <Refrigerator className="w-4 h-4 text-emerald-300" />
              <span>Tủ Lạnh Có Gì?</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. DESKTOP FULL HERO (Rich Cook. Mockup Layout) */}
        {/* ======================================================== */}
        <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-spin-slow" />
              Nền tảng ẩm thực Việt Nam toàn diện
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15] font-heading">
              Ăn Ngon Mỗi Ngày Với Các Món{' '}
              <span className="text-brand-600">
                Dễ Làm
              </span>{' '}
              &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-brand-600">
                Chuẩn Vị
              </span>
            </h1>

            <p className="text-base lg:text-lg text-stone-600 max-w-2xl font-normal leading-relaxed">
              Giải quyết triệt để nỗi băn khoăn <strong className="text-stone-800">"Hôm nay ăn gì?"</strong> cho cả 4 bữa: Sáng, Trưa, Xế, Tối. 
              Xem công thức để <em>tự nấu</em> từ nguyên liệu sẵn có, hoặc mở bản đồ để <em>tìm quán ngon gần nhất</em>!
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenGacha}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-sm lg:text-base shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Dices className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Quay Gacha Chọn Món</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenFridge}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 hover:border-emerald-300 font-bold text-sm lg:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5"
              >
                <Refrigerator className="w-5 h-5 text-emerald-600" />
                <span>Tủ Lạnh Có Gì?</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-200/80 max-w-md text-left">
              <div>
                <p className="text-2xl font-black text-brand-600 font-heading">500+</p>
                <p className="text-xs text-stone-500 font-medium">Món ăn Việt Nam</p>
              </div>
              <div>
                <p className="text-2xl font-black text-stone-800 font-heading">15 Phút</p>
                <p className="text-xs text-stone-500 font-medium">Thời gian nấu TB</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600 font-heading">100%</p>
                <p className="text-xs text-stone-500 font-medium">Tích hợp Maps</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Illustration */}
          <div className="col-span-5 relative">
            <div className="relative mx-auto max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-100 group">
                <img
                  src="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&w=900&q=80"
                  alt="Ẩm thực Việt Nam ngon chuẩn vị"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/90 text-white text-xs font-bold mb-2">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    Đặc sản truyền thống
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">Hương Vị Ẩm Thực Ba Miền</h3>
                  <p className="text-xs text-stone-200 line-clamp-2 mt-1">
                    Khám phá tinh hoa ẩm thực từ Phở Hà Nội, Bún bò Huế nồng đượm đến Cơm tấm Sài Gòn trứ danh.
                  </p>
                </div>
              </div>

              {/* Floating Floating Badge 1: Recipe of the day badge */}
              <div className="absolute -top-4 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-warm-lg border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-stone-400 uppercase">Gợi ý hôm nay</p>
                  <p className="text-xs font-bold text-stone-800">Phở Bò Tái Lăn</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">★ 4.9 (246 đánh giá)</p>
                </div>
              </div>

              {/* Floating Floating Badge 2: Cooking time */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-warm-lg border border-stone-100 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-medium">Thời gian chuẩn bị</p>
                  <p className="text-xs font-extrabold text-stone-800">Chỉ từ 10 - 25 phút</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
