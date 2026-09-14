'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { Home, Refrigerator, Dices, ShoppingCart, Heart } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { language, favorites, groceryItems } = useStore();

  const t = {
    vi: {
      home: 'Trang chủ',
      fridge: 'Tủ lạnh',
      gacha: 'Quay món',
      grocery: 'Đi chợ',
      favorites: 'Yêu thích'
    },
    en: {
      home: 'Home',
      fridge: 'Fridge',
      gacha: 'Gacha',
      grocery: 'Grocery',
      favorites: 'Saved'
    }
  }[language];

  const uncheckedGroceryCount = groceryItems.filter(i => !i.checked).length;
  const favCount = favorites.length;

  const navItems = [
    { href: '/', label: t.home, icon: Home },
    { href: '/fridge', label: t.fridge, icon: Refrigerator },
    { href: '/gacha', label: t.gacha, icon: Dices, highlight: true },
    { href: '/grocery', label: t.grocery, icon: ShoppingCart, badge: uncheckedGroceryCount },
    { href: '/favorites', label: t.favorites, icon: Heart, badge: favCount },
  ];

  return (
    <nav aria-label="Mobile Navigation" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.highlight) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 transform active:scale-95 transition-transform">
                  <Icon className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-bold text-orange-600 mt-1">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative ${
                isActive ? 'text-orange-600 font-bold' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {item.badge && item.badge > 0 ? (
                  <span className="absolute -top-1.5 -right-2.5 bg-orange-500 text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}