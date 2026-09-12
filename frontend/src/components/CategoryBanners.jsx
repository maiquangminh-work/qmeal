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
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer aspect-[16/9] md:aspect-[4/3] flex flex-col justify-end p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`}></div>

              <div className="relative z-10 text-white space-y-1">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest text-amber-300 uppercase">
                  <Icon className="w-3.5 h-3.5" />
                  {item.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">{item.title}</h3>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-stone-200 group-hover:text-white pt-1">
                  <span>Khám phá ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
