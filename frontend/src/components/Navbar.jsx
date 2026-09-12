import React, { useState } from 'react';
import Logo from './Logo';
import { 
  Search, 
  Sparkles, 
  Refrigerator, 
  Heart, 
  MapPin, 
  Menu, 
  X, 
  Dices,
  Flame,
  Utensils
} from 'lucide-react';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  onOpenGacha,
  onOpenFridge,
  onOpenFavorites,
  favoriteCount = 0,
  activeMealCategory,
  onSelectMealCategory
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <div className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo size="md" />
          </div>

          {/* Search Bar - Center (Mockup style from NomNom) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Bạn thèm món gì hôm nay? (Phở, Cơm tấm, Bún bò...)"
                className="w-full pl-11 pr-4 py-2.5 bg-stone-100/90 border border-stone-200 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-3 text-xs bg-stone-200 hover:bg-stone-300 text-stone-600 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
            <button
              onClick={() => {
                const el = document.getElementById('meals-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-brand-600 transition-colors flex items-center gap-1.5 py-1"
            >
              <Utensils className="w-4 h-4 text-brand-500" />
              4 Buổi Ăn
            </button>

            <button
              onClick={onOpenFridge}
              className="hover:text-brand-600 transition-colors flex items-center gap-1.5 py-1 text-stone-700 hover:bg-brand-50 px-2.5 rounded-lg"
            >
              <Refrigerator className="w-4 h-4 text-emerald-500" />
              Tủ Lạnh Có Gì?
            </button>

            <button
              onClick={onOpenGacha}
              className="relative px-3.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-brand-600 text-white shadow-warm-sm hover:shadow-warm-md hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <Dices className="w-4 h-4 animate-spin-slow" />
              Gacha Mở Hòm
            </button>
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="flex items-center gap-3">
            {/* Favorites bookmark badge */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-600 hover:text-brand-600 transition-colors"
              title="Món đã lưu"
            >
              <Heart className="w-5 h-5" />
              {favoriteCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white animate-bounce">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Quick Gacha button for Tablet */}
            <button
              onClick={onOpenGacha}
              className="hidden sm:flex lg:hidden items-center gap-1 px-3 py-1.5 rounded-full bg-brand-600 text-white text-xs font-bold shadow-warm-sm"
            >
              <Dices className="w-3.5 h-3.5" />
              Gacha
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="md:hidden pb-3 pt-1">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm phở, cơm tấm, bún chả..."
              className="w-full pl-10 pr-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 shadow-xl animate-fadeIn">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('meals-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-brand-50 text-stone-800 font-medium text-sm text-left"
          >
            <span className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-brand-600" />
              Khám Phá 4 Buổi Ăn
            </span>
            <span className="text-xs text-stone-400">Sáng, Trưa, Xế, Tối</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFridge();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-800 font-medium text-sm text-left"
          >
            <span className="flex items-center gap-2">
              <Refrigerator className="w-4 h-4 text-emerald-600" />
              Tủ Lạnh Có Gì? (Gợi ý nấu ăn)
            </span>
            <span className="text-xs bg-emerald-200/80 px-2 py-0.5 rounded-full">Hot</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGacha();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500 to-brand-600 text-white font-bold text-sm text-left shadow-warm-sm"
          >
            <span className="flex items-center gap-2">
              <Dices className="w-4 h-4" />
              Gacha Mở Hòm CS:GO (Quay Món)
            </span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Giải trí</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFavorites();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 text-stone-700 font-medium text-sm text-left"
          >
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500" />
              Danh Sách Món Đã Lưu
            </span>
            <span className="text-xs font-bold text-brand-600">{favoriteCount} món</span>
          </button>
        </div>
      )}
    </header>
  );
}
