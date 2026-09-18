'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';
import { 
  Home, 
  Refrigerator, 
  ShoppingCart, 
  Dices, 
  Heart, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Clock, 
  Sparkles,
  UtensilsCrossed,
  CheckCircle2
} from 'lucide-react';
import { useMemo } from 'react';
import UserAvatar from '@/components/ui/UserAvatar';

export default function AppSidebar() {
  const pathname = usePathname();
  const {
    isSidebarOpen,
    setSidebarOpen,
    isSidebarCollapsed,
    toggleSidebarCollapsed,
    userLocationName,
    favorites,
    groceryItems,
    pantryIngredients,
    viewHistory,
    toggleGroceryItem,
    userProfile,
    setProfileModalOpen
  } = useStore();

  // Find recent dishes from viewHistory
  const recentRecipes = useMemo(() => {
    return viewHistory
      .slice(0, 3)
      .map(id => vietnameseRecipes.find(r => String(r.id) === String(id)))
      .filter(Boolean);
  }, [viewHistory]);

  const navLinks = [
    {
      href: '/',
      label: 'Khám Phá Thực Đơn',
      icon: Home,
      badge: null
    },
    {
      href: '/fridge',
      label: 'Tủ Lạnh Thông Minh',
      icon: Refrigerator,
      badge: pantryIngredients.length > 0 ? `${pantryIngredients.length} có sẵn` : null,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      href: '/grocery',
      label: 'Giỏ Đi Chợ',
      icon: ShoppingCart,
      badge: groceryItems.length > 0 ? `${groceryItems.filter(i => !i.checked).length}` : null,
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      href: '/gacha',
      label: 'Vòng Quay Gacha',
      icon: Dices,
      badge: null,
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      href: '/swipe',
      label: 'Quẹt Món Tinder',
      icon: Sparkles,
      badge: 'HOT',
      badgeColor: 'bg-rose-100 text-rose-700 border-rose-300'
    },
    {
      href: '/dine-out',
      label: 'Ăn Ngoài & Đi Ăn Hàng',
      icon: UtensilsCrossed,
      badge: 'MỚI',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      href: '/favorites',
      label: 'Món Yêu Thích',
      icon: Heart,
      badge: favorites.length > 0 ? `${favorites.length}` : null,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        />
      )}

      {/* Sidebar Drawer Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-white border-r border-stone-200/90 flex flex-col transition-transform duration-300 ease-out shadow-2xl w-72 sm:w-80 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-stone-100 flex-shrink-0">
          <Link 
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2.5 overflow-hidden group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            {!isSidebarCollapsed && (
              <div className="leading-tight">
                <span className="font-extrabold text-stone-900 text-base tracking-tight flex items-center gap-1">
                  QMeal
                  <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.2 rounded">v2.5</span>
                </span>
                <p className="text-[10px] text-stone-600 font-medium">Ẩm thực chuẩn vị Việt</p>
              </div>
            )}
          </Link>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={toggleSidebarCollapsed}
            className="hidden lg:flex w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 items-center justify-center transition-colors cursor-pointer"
            title={isSidebarCollapsed ? 'Mở rộng sidebar' : 'Thu gọn sidebar'}
          >
            {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden w-8 h-8 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-none">
          {/* Location Badge (Full mode only) */}
          {!isSidebarCollapsed && (
            <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3 text-xs">
              <div className="flex items-center gap-1.5 text-stone-500 font-semibold mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span className="text-[11px] uppercase tracking-wider font-bold">Vị trí ẩm thực</span>
              </div>
              <p className="font-bold text-stone-800 truncate" title={userLocationName}>
                {userLocationName || 'Hà Nội & Bắc Bộ'}
              </p>
            </div>
          )}

          {/* Navigation Menu */}
          <div className="space-y-1">
            {!isSidebarCollapsed && (
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                Menu Chính
              </span>
            )}
            <nav className="space-y-1 mt-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all group ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                    title={isSidebarCollapsed ? link.label : undefined}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-orange-400' : 'text-stone-500 group-hover:text-stone-900'}`} />
                      {!isSidebarCollapsed && <span className="truncate">{link.label}</span>}
                    </div>

                    {!isSidebarCollapsed && link.badge && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border flex-shrink-0 ${link.badgeColor}`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mini Grocery Tracker Widget */}
          {!isSidebarCollapsed && groceryItems.length > 0 && (
            <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-3.5 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShoppingCart className="w-3.5 h-3.5 text-orange-600" />
                  <span className="text-xs font-bold text-stone-900">Giỏ Đi Chợ Nhanh</span>
                </div>
                <span className="text-[10px] font-bold text-orange-700 bg-orange-100/80 px-1.5 py-0.2 rounded">
                  {groceryItems.filter(i => !i.checked).length} cần mua
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                {groceryItems.slice(0, 3).map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => toggleGroceryItem(item.id)}
                    className="flex items-center gap-2 p-1.5 bg-white/90 hover:bg-white rounded-lg border border-orange-100 cursor-pointer transition-colors"
                  >
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => {}} 
                      className="w-3.5 h-3.5 rounded text-orange-600 accent-orange-600 cursor-pointer"
                    />
                    <span className={`text-[11px] truncate flex-1 ${item.checked ? 'line-through text-stone-400' : 'text-stone-700 font-medium'}`}>
                      {item.name}
                    </span>
                    <span className="text-[10px] text-stone-400">{item.amount}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/grocery"
                onClick={() => setSidebarOpen(false)}
                className="block text-center text-[11px] font-bold text-orange-700 hover:text-orange-800 pt-1"
              >
                Mở giỏ hàng đầy đủ ({groceryItems.length}) →
              </Link>
            </div>
          )}

          {/* Recently Viewed Recipes */}
          {!isSidebarCollapsed && recentRecipes.length > 0 && (
            <div className="space-y-2">
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <Clock className="w-3 h-3 text-stone-400" />
                <span>Món vừa xem gần đây</span>
              </span>
              <div className="space-y-1">
                {recentRecipes.map((recipe: any) => (
                  <Link
                    key={recipe.id}
                    href={`/recipe/${recipe.id}`}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-stone-100 transition-colors group"
                  >
                    <img 
                      src={recipe.image} 
                      alt={recipe.title.vi}
                      className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-stone-200"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-stone-800 group-hover:text-orange-600 truncate transition-colors">
                        {recipe.title.vi}
                      </p>
                      <p className="text-[10px] text-stone-600">{recipe.calories} kcal • {recipe.time}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Footer with User Profile */}
        <div className="p-3 border-t border-stone-200/80 bg-stone-50/80 text-xs text-stone-600 flex-shrink-0 space-y-2.5">
          {!isSidebarCollapsed ? (
            <>
              {/* User Profile Mini Card */}
              <div 
                onClick={() => setProfileModalOpen(true)}
                className="p-2 rounded-2xl bg-white border border-stone-200/80 hover:border-orange-400 flex items-center gap-2.5 cursor-pointer transition-all shadow-2xs hover:shadow-xs group"
                title="Tùy chỉnh hồ sơ & Avatar"
              >
                <UserAvatar size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-stone-900 truncate group-hover:text-orange-600 transition-colors">
                    {userProfile.name}
                  </p>
                </div>
                <span className="text-[10px] text-stone-400 group-hover:text-orange-600 font-semibold px-1.5 py-0.5 rounded bg-stone-100 group-hover:bg-orange-50 transition-colors">Sửa</span>
              </div>

              <div className="flex items-center justify-between text-[11px] px-1 text-stone-500">
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles className="w-3 h-3 text-orange-600" /> Dữ liệu chuẩn NIN
                </span>
                <span className="text-stone-600 font-semibold">123 Món Việt</span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <UserAvatar size="xs" />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
