import React, { useState } from 'react';
import Logo from './Logo';
import { 
  Search, 
  Heart, 
  Menu, 
  X, 
  Dices,
  Refrigerator,
  ShoppingCart,
  ChevronRight
} from 'lucide-react';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  onOpenGacha,
  onOpenFridge,
  onOpenFavorites,
  onOpenGroceryList,
  favoriteCount = 0,
  groceryCount = 0,
  activeTab = 'all',
  onSelectTab
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tab definitions (Tab-based SPA View Switcher)
  const navTabs = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'breakfast', label: 'Bữa Sáng' },
    { id: 'lunch', label: 'Bữa Trưa' },
    { id: 'snack', label: 'Ăn Vặt / Xế' },
    { id: 'dinner', label: 'Bữa Tối' },
    { id: 'combos', label: 'Mâm Cơm Gia Đình' },
    { id: 'specialty', label: 'Đặc Sản 3 Miền' },
    { id: 'healthy', label: 'Món Healthy' },
  ];

  const handleTabClick = (tabId) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-8">
          
          {/* LEFT: Mobile 3-bars Hamburger Menu + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Mobile Menu Button on the LEFT */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-1 rounded-xl text-stone-700 hover:text-brand-600 hover:bg-stone-100 transition-colors"
              aria-label="Mở menu điều hướng"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Wordmark Logo */}
            <div 
              className="cursor-pointer"
              onClick={() => {
                onSelectTab('all');
                setSearchTerm('');
              }}
            >
              <Logo size="md" />
            </div>
          </div>

          {/* Centered Spacious Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Bạn muốn nấu hoặc ăn món gì hôm nay?"
                className="w-full pl-11 pr-20 py-2.5 bg-stone-100/80 hover:bg-stone-100 border border-stone-200/80 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white transition-all shadow-sm"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3" />
              
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-2.5 text-xs text-stone-400 hover:text-stone-600 bg-stone-200/60 hover:bg-stone-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              ) : (
                <span className="hidden lg:inline-flex items-center absolute right-3.5 top-2.5 px-2 py-0.5 text-[10px] font-bold text-stone-400 bg-stone-200/60 rounded-md">
                  ⌘K
                </span>
              )}
            </div>
          </div>

          {/* RIGHT: Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Fridge Tool Link (Desktop) */}
            <button
              onClick={onOpenFridge}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <Refrigerator className="w-4 h-4 text-emerald-600" />
              <span>Tủ Lạnh Có Gì?</span>
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-full hover:bg-stone-100 text-stone-600 hover:text-brand-600 transition-colors"
              title="Món ăn đã lưu"
            >
              <Heart className="w-5 h-5" />
              {favoriteCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Smart Grocery Cart */}
            <button
              onClick={onOpenGroceryList}
              className="relative p-2 rounded-full hover:bg-stone-100 text-stone-600 hover:text-emerald-600 transition-colors"
              title="Danh sách đi chợ"
            >
              <ShoppingCart className="w-5 h-5" />
              {groceryCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {groceryCount}
                </span>
              )}
            </button>

            {/* Orange Pill CTA Button */}
            <button
              onClick={onOpenGacha}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-warm-md transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <Dices className="w-4 h-4" />
              <span className="hidden sm:inline">Quay Gacha</span>
              <span className="sm:hidden">Gacha</span>
            </button>

          </div>

        </div>

        {/* Mobile Search Bar Row (shown only on mobile screens) */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Bạn muốn nấu hoặc ăn món gì? (Phở, Cơm tấm...)"
              className="w-full pl-9 pr-8 py-2 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 2. Sub-Nav Tabs Row (Clean Tab-based Switcher without Auto-Scroll) */}
        <nav className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-2.5 sm:py-3 border-t border-stone-100 text-xs sm:text-sm font-medium text-stone-600">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative py-1 flex-shrink-0 hover:text-stone-900 transition-colors whitespace-nowrap ${
                  isActive ? 'text-brand-600 font-bold' : 'text-stone-600'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full -mb-2.5 sm:-mb-3 animate-indicator-pop"></span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* MOBILE DRAWER (SLIDES IN FROM THE LEFT) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fadeIn">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Left Drawer Panel */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto animate-slideInLeft">
            
            {/* Drawer Header */}
            <div>
              <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Feature Shortcuts in Drawer */}
              <div className="p-4 space-y-2 border-b border-stone-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGacha();
                  }}
                  className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-brand-600 text-white font-bold text-xs flex items-center justify-between shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <Dices className="w-4 h-4" />
                    Quay Gacha Mở Hòm CS:GO
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFridge();
                  }}
                  className="w-full p-3 rounded-2xl bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-between border border-emerald-200/80"
                >
                  <span className="flex items-center gap-2">
                    <Refrigerator className="w-4 h-4 text-emerald-600" />
                    Tủ Lạnh Có Gì? (Nhập Nguyên Liệu)
                  </span>
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGroceryList();
                  }}
                  className="w-full p-3 rounded-2xl bg-stone-100 text-stone-800 font-bold text-xs flex items-center justify-between border border-stone-200"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-brand-600" />
                    Danh Sách Đi Chợ ({groceryCount} món)
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              </div>

              {/* Tab Navigation in Drawer */}
              <div className="p-4 space-y-1">
                <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 py-1">
                  Chọn Chế Độ Xem
                </div>
                {navTabs.map((tab) => {
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-brand-50 text-brand-600 font-bold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-600' : 'text-stone-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom */}
            <div className="p-4 border-t border-stone-100 bg-stone-50 text-[11px] text-stone-500 text-center">
              QMeal VN • Gợi ý món ngon chuẩn vị
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
