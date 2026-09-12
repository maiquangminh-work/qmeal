import React from 'react';
import { ArrowRight, Leaf, Sparkles, Coffee } from 'lucide-react';

export default function CategoryBanners({ onSelectCategory, onSelectTag }) {
  const banners = [
    {
      id: 'healthy',
      title: 'Món Ăn Healthy',
      subtitle: 'THANH ĐẠM & HEALTHY',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      tag: 'healthy',
      icon: Leaf,
      color: 'from-emerald-900/80 to-stone-900/40'
    },
    {
      id: 'specialty',
      title: 'Đặc Sản 3 Miền',
      subtitle: 'TINH HOA ẨM THỰC',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80',
      tag: 'specialty',
      icon: Sparkles,
      color: 'from-brand-900/80 to-amber-900/40'
    },
    {
      id: 'snack',
      title: 'Ăn Vặt & Trà Chiều',
      subtitle: 'HỘI BẠN TỤ TẬP',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
      category: 'snack',
      icon: Coffee,
      color: 'from-rose-900/80 to-stone-900/40'
    }
  ];

  const handleClick = (banner) => {
    if (banner.tag) {
      onSelectTag(banner.tag);
    } else if (banner.category) {
      onSelectCategory(banner.category);
    }
    const el = document.getElementById('meals-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-2 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
        {banners.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className="w-[72vw] sm:w-auto flex-shrink-0 snap-center relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer aspect-[16/10] md:aspect-[4/3] flex flex-col justify-end p-4 sm:p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`}></div>

              <div className="relative z-10 text-white space-y-0.5 sm:space-y-1">
                <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-300 uppercase">
                  <Icon className="w-3 h-3" />
                  {item.subtitle}
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold font-heading">{item.title}</h3>
                <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-stone-200 pt-0.5">
                  <span>Khám phá ngay</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
