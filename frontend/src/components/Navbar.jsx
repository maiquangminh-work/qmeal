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
  Users
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
  activeMealCategory,
  onSelectMealCategory,
  onSelectTag,
  activeTag
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'all', label: 'Tất Cả', type: 'meal' },
    { id: 'breakfast', label: 'Bữa Sáng', type: 'meal' },
    { id: 'lunch', label: 'Bữa Trưa', type: 'meal' },
    { id: 'snack', label: 'Ăn Vặt / Xế', type: 'meal' },
    { id: 'dinner', label: 'Bữa Tối', type: 'meal' },
    { id: 'family-combos', label: 'Mâm Cơm Gia Đình', type: 'scroll' },
    { id: 'specialty', label: 'Đặc Sản 3 Miền', type: 'tag' },
    { id: 'healthy', label: 'Món Healthy', type: 'tag' },
  ];

  const handleNavClick = (item) => {
    if (item.type === 'scroll') {
      const el = document.getElementById(item.id);
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (item.type === 'meal') {
      onSelectMealCategory(item.id);
      onSelectTag('all');
    } else {
      onSelectTag(item.id);
    }
    const el = document.getElementById('meals-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      {/* 1. Main Navigation Bar (NomNom top line) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-8">
          
          {/* Brand Wordmark Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => {
              onSelectMealCategory('all');
              onSelectTag('all');
              setSearchTerm('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo size="md" />
          </div>

          {/* Centered Spacious Search Bar (Directly from NomNom mockup) */}
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

          {/* Right Action Controls (NomNom & Cook mockup style) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Fridge Tool Link */}
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
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-600 hover:text-brand-600 transition-colors"
              title="Món ăn đã lưu"
            >
              <Heart className="w-5 h-5" />
              {favoriteCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Smart Grocery Cart */}
            <button
              onClick={onOpenGroceryList}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-600 hover:text-emerald-600 transition-colors"
              title="Danh sách đi chợ"
            >
              <ShoppingCart className="w-5 h-5" />
              {groceryCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {groceryCount}
                </span>
              )}
            </button>

            {/* Orange Pill CTA Button (Inspired by Cook. "Latest Contest" & NomNom "Subscribe") */}
            <button
              onClick={onOpenGacha}
              className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-warm-md hover:-translate-y-0.5 transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <Dices className="w-4 h-4" />
              <span>Quay Gacha</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors ml-1"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              placeholder="Tìm phở bò, bún chả, cơm tấm..."
              className="w-full pl-10 pr-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-2.5" />
          </div>
        </div>

        {/* 2. Sub-Nav Bar (Clean NomNom horizontal link row) */}
        <nav className="hidden md:flex items-center justify-center gap-8 py-3 border-t border-stone-100 text-xs sm:text-sm font-medium text-stone-600">
          {navLinks.map((item) => {
            const isActive = item.type === 'meal' 
              ? activeMealCategory === item.id && activeTag === 'all'
              : activeTag === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative py-1 hover:text-stone-900 transition-colors ${
                  isActive ? 'text-brand-600 font-bold' : 'text-stone-600'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full -mb-3"></span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-2 shadow-xl animate-fadeIn">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 pt-1">
            Danh Mục Món Ăn
          </div>
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick(item);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl font-medium text-sm text-stone-700 hover:bg-stone-50 hover:text-brand-600 transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
            </button>
          ))}

          <div className="pt-2 border-t border-stone-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFridge();
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl font-medium text-sm text-emerald-700 bg-emerald-50 flex items-center gap-2"
            >
              <Refrigerator className="w-4 h-4" />
              <span>Tủ Lạnh Có Gì?</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
