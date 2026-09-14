'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const router = useRouter();
  const { language, setLanguage, favorites, groceryItems } = useStore();
  const [mounted, setMounted] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang = mounted ? language : 'vi';

  // Debounce search
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery.trim())}&lang=${currentLang}`);
        const data = await res.json();
        if (data.success) {
          setSearchResults(data.data.slice(0, 5));
          setShowDropdown(true);
        }
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setIsSearching(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [searchQuery, currentLang]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowDropdown(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const t = {
    vi: {
      search: 'Tìm kiếm món ăn...',
      explore: 'Khám phá',
      gacha: 'Gacha Món Ăn',
      fridge: 'Tủ lạnh có gì',
      favorites: 'Món đã lưu',
      grocery: 'Giỏ đi chợ',
      viewAll: 'Xem tất cả kết quả cho',
      searching: 'Đang tìm kiếm...',
      noResults: 'Không tìm thấy món ăn phù hợp'
    },
    en: {
      search: 'Search recipes...',
      explore: 'Explore',
      gacha: 'Meal Gacha',
      fridge: 'Smart Fridge',
      favorites: 'Saved Recipes',
      grocery: 'Grocery List',
      viewAll: 'View all results for',
      searching: 'Searching...',
      noResults: 'No matching recipes found'
    }
  }[currentLang];

  const favCount = mounted ? favorites.length : 0;
  const groceryCount = mounted ? groceryItems.length : 0;

  return (
    <nav className="w-full bg-white py-3.5 px-4 sm:px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm shadow-orange-500/20 group-hover:shadow-md transition-all">
          <img src="/logo.jpg" alt="QMeal Logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-2xl font-black text-orange-600 hidden sm:block tracking-tighter">QMeal</span>
      </Link>

      {/* Live Search Bar with Dropdown */}
      <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-md mx-6 relative">
        <form onSubmit={handleSearchSubmit} className="w-full relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => { if (searchResults.length > 0) setShowDropdown(true); }}
            placeholder={t.search} 
            className="w-full bg-stone-100 rounded-full py-2 px-4 pl-10 pr-9 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all border border-transparent focus:border-orange-100"
          />
          <button type="submit" className="absolute left-3.5 top-2.5 text-stone-400 hover:text-orange-500 transition-colors">
            {isSearching ? (
              <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            )}
          </button>
          {searchQuery && (
            <button 
              type="button" 
              onClick={() => { setSearchQuery(''); setSearchResults([]); setShowDropdown(false); }}
              className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 text-xs bg-stone-200 rounded-full w-4 h-4 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </form>

        {/* Live Search Suggestions Dropdown */}
        {showDropdown && searchQuery.trim().length >= 2 && (
          <div className="absolute top-12 left-0 right-0 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {searchResults.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-1.5 text-xs font-bold text-stone-400 uppercase tracking-wider">Gợi ý món ăn</div>
                {searchResults.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/recipe/${item.id}`}
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 transition-colors group"
                  >
                    <img src={item.image} alt={item.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-stone-800 truncate group-hover:text-orange-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-stone-400 flex items-center gap-2">
                        <span>⏱ {item.time}</span>
                        <span>★ {item.rating}</span>
                      </p>
                    </div>
                  </Link>
                ))}
                <div className="border-t border-stone-100 p-2 text-center bg-stone-50">
                  <button 
                    onClick={handleSearchSubmit}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 block w-full py-1"
                  >
                    {t.viewAll} "{searchQuery}" →
                  </button>
                </div>
              </div>
            ) : !isSearching ? (
              <div className="p-6 text-center text-sm text-stone-500">
                {t.noResults}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Navigation Links & Actions */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-600">
          <Link href="/" className="hover:text-orange-500 transition-colors">{t.explore}</Link>
          <Link href="/gacha" className="hover:text-orange-500 transition-colors">{t.gacha}</Link>
          <Link href="/fridge" className="hover:text-orange-500 transition-colors">{t.fridge}</Link>
        </div>

        {/* Favorites Heart Icon */}
        <Link 
          href="/favorites" 
          title={t.favorites}
          className="relative p-2 text-stone-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          {favCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in">
              {favCount > 9 ? '9+' : favCount}
            </span>
          )}
        </Link>

        {/* Grocery Cart Icon */}
        <Link 
          href="/grocery" 
          title={t.grocery}
          className="relative p-2 text-stone-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          {groceryCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in">
              {groceryCount > 9 ? '9+' : groceryCount}
            </span>
          )}
        </Link>
        
        {/* Language Toggle (Smooth Slider) */}
        <div 
          className="relative flex bg-stone-200 rounded-full p-1 cursor-pointer w-24 h-9 shadow-inner" 
          onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
        >
          <div className={`absolute top-1 bottom-1 w-11 bg-white rounded-full shadow-sm transition-transform duration-300 ease-out flex items-center justify-center ${language === 'vi' ? 'translate-x-0' : 'translate-x-11'}`}></div>
          <div className={`flex-1 flex justify-center items-center z-10 text-xs font-bold transition-colors duration-300 ${language === 'vi' ? 'text-orange-500' : 'text-stone-500'}`}>
            VIE
          </div>
          <div className={`flex-1 flex justify-center items-center z-10 text-xs font-bold transition-colors duration-300 ${language === 'en' ? 'text-orange-500' : 'text-stone-500'}`}>
            ENG
          </div>
        </div>

        {/* User Profile Avatar */}
        <div className="w-9 h-9 rounded-full bg-stone-200 overflow-hidden border-2 border-orange-500 cursor-pointer shadow-sm flex-shrink-0">
          <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
}
