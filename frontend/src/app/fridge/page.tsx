'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import IngredientAutocomplete from '@/components/ui/IngredientAutocomplete';
import { MASTER_INGREDIENTS, MasterIngredient } from '@/data/masterIngredients';

export default function FridgePage() {
  const { language, addIngredientsToGrocery, pantryIngredients, setPantryIngredients, togglePantryIngredient } = useStore();
  
  // Local state initialized with Zustand store's pantryIngredients
  const [includeStaples, setIncludeStaples] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [filterTab, setFilterTab] = useState<'all' | 'ready' | 'missing1or2'>('all');
  const [sortBy, setSortBy] = useState<'match' | 'time' | 'calories'>('match');
  const [activeShelf, setActiveShelf] = useState<'meat' | 'vegetable' | 'egg_tofu' | 'carb'>('meat');
  const [addedRecipeId, setAddedRecipeId] = useState<string | number | null>(null);

  const t = {
    vi: {
      title: 'Tủ Lạnh Thông Minh QMeal 🧊',
      subtitle: 'Khai báo nguyên liệu trong tủ lạnh, QMeal sẽ tính toán độ khớp chính xác với 123 món ăn thuần Việt và giúp bạn đi chợ thông minh.',
      searchPlaceholder: 'Gõ tên nguyên liệu (thịt bò, tôm, cà chua, đậu phụ...)...',
      selectedTitle: 'Nguyên liệu đang có trong tủ:',
      clearAll: 'Dọn sạch tủ',
      staplesLabel: 'Gia vị cơ bản luôn có trong bếp (Nước mắm, muối, đường, tiêu, hạt nêm, dầu ăn, tỏi, hành khô)',
      shelfMeat: '🥩 Thịt & Hải sản',
      shelfVeg: '🥬 Rau củ & Nấm',
      shelfEggTofu: '🧈 Đậu, Trứng & Đồ khô',
      shelfCarb: '🍜 Bún, Phở & Tinh bột',
      findDishesBtn: 'Tìm Món Nấu Ngay',
      searching: 'Đang so khớp thực đơn 123 món...',
      allResults: 'Tất cả món gợi ý',
      readyToCookTab: 'Nấu được ngay (100%)',
      missing1or2Tab: 'Chỉ thiếu 1-2 món',
      sortMatch: 'Độ khớp cao nhất',
      sortTime: 'Nấu nhanh nhất',
      sortCal: 'Calo thấp nhất',
      inFridge: 'Trong tủ có:',
      missingNeedBuy: 'Cần mua thêm:',
      cookNow: 'Xem công thức & Nấu',
      addMissingToCart: '+ Thêm đồ thiếu vào Giỏ Đi Chợ',
      addedToCart: '✓ Đã thêm vào giỏ',
      noResultsTitle: 'Chưa tìm thấy món phù hợp',
      noResultsDesc: 'Hãy thử chọn thêm các nguyên liệu phổ biến như thịt heo, trứng, cà chua, đậu phụ hoặc rau muống nhé!',
      itemsInFridge: 'nguyên liệu trong tủ',
      fullMatchBadge: 'Đủ 100% nguyên liệu',
      quickTripBadge: 'Đi chợ siêu nhanh',
    },
    en: {
      title: 'QMeal Smart Fridge 🧊',
      subtitle: 'Select what is inside your fridge, and QMeal will match authentic Vietnamese recipes and organize your grocery list.',
      searchPlaceholder: 'Type ingredients (pork belly, beef, shrimp, eggs, tomato...)...',
      selectedTitle: 'Ingredients in fridge:',
      clearAll: 'Clear fridge',
      staplesLabel: 'Standard pantry spices available (Fish sauce, salt, sugar, pepper, cooking oil, garlic, shallot)',
      shelfMeat: '🥩 Meat & Seafood',
      shelfVeg: '🥬 Veggies & Mushrooms',
      shelfEggTofu: '🧈 Tofu, Eggs & Staples',
      shelfCarb: '🍜 Noodles & Starches',
      findDishesBtn: 'Find Recipes',
      searching: 'Matching 123 authentic recipes...',
      allResults: 'All suggestions',
      readyToCookTab: 'Ready to Cook (100%)',
      missing1or2Tab: 'Missing 1-2 items',
      sortMatch: 'Best match',
      sortTime: 'Fastest cooking',
      sortCal: 'Lowest calories',
      inFridge: 'Available:',
      missingNeedBuy: 'Need to buy:',
      cookNow: 'View Recipe & Cook',
      addMissingToCart: '+ Add missing to Grocery',
      addedToCart: '✓ Added to Grocery',
      noResultsTitle: 'No matching recipes found',
      noResultsDesc: 'Try adding common kitchen ingredients like pork belly, eggs, tomato, tofu or morning glory!',
      itemsInFridge: 'items in fridge',
      fullMatchBadge: '100% Ready to Cook',
      quickTripBadge: 'Quick Grocery Trip',
    }
  }[language];

  // Shelves definition from master ingredients
  const shelvesData = useMemo(() => {
    return {
      meat: MASTER_INGREDIENTS.filter(i => i.category === 'meat' || i.category === 'seafood'),
      vegetable: MASTER_INGREDIENTS.filter(i => i.category === 'vegetable' || i.category === 'mushroom'),
      egg_tofu: MASTER_INGREDIENTS.filter(i => i.category === 'egg_tofu' || (i.category === 'pantry' && !i.commonStaple)),
      carb: MASTER_INGREDIENTS.filter(i => i.category === 'carb'),
    };
  }, []);

  // Search recipes matching pantry
  const searchFridgeRecipes = async () => {
    if (pantryIngredients.length === 0) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);
    try {
      const encoded = encodeURIComponent(pantryIngredients.join(','));
      const res = await fetch(`/api/fridge?i=${encoded}&lang=${language}&staples=${includeStaples}`);
      const json = await res.json();
      if (json.success) {
        setResults(json.data || []);
      }
    } catch (e) {
      console.error('Failed to fetch fridge recipes:', e);
    } finally {
      setLoading(false);
    }
  };

  // Run search when pantry ingredients change or staples toggle changes
  useEffect(() => {
    if (pantryIngredients.length > 0) {
      searchFridgeRecipes();
    } else {
      setResults([]);
    }
  }, [pantryIngredients, includeStaples, language]);

  // Handle autocomplete ingredient addition
  const handleSelectAutocomplete = (item: MasterIngredient | string) => {
    const itemName = typeof item === 'string' ? item : item.name[language] || item.name.vi;
    if (!pantryIngredients.includes(itemName)) {
      setPantryIngredients([...pantryIngredients, itemName]);
    }
  };

  const handleAddMissingToGrocery = (recipe: any) => {
    if (recipe.missingIngredients && recipe.missingIngredients.length > 0) {
      addIngredientsToGrocery(recipe.title, recipe.missingIngredients);
      setAddedRecipeId(recipe.id);
      setTimeout(() => setAddedRecipeId(null), 3000);
    }
  };

  // Filter & Sort Results
  const readyMatches = useMemo(() => results.filter(r => r.missingCount === 0), [results]);
  const missing1or2Matches = useMemo(() => results.filter(r => r.missingCount >= 1 && r.missingCount <= 2), [results]);

  const filteredResults = useMemo(() => {
    let list = results;
    if (filterTab === 'ready') list = readyMatches;
    if (filterTab === 'missing1or2') list = missing1or2Matches;

    return [...list].sort((a, b) => {
      if (sortBy === 'match') {
        if (a.missingCount !== b.missingCount) return a.missingCount - b.missingCount;
        return b.matchPercentage - a.matchPercentage;
      }
      if (sortBy === 'time') {
        const timeA = parseInt(a.time) || 60;
        const timeB = parseInt(b.time) || 60;
        return timeA - timeB;
      }
      if (sortBy === 'calories') {
        return (a.calories || 500) - (b.calories || 500);
      }
      return 0;
    });
  }, [results, filterTab, sortBy, readyMatches, missing1or2Matches]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-orange-500/10 mb-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-3">
            <span>🧊</span>
            <span>Trợ Lý Bếp QMeal</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight">
            {t.title}
          </h1>
          <p className="text-orange-50 text-sm sm:text-base leading-relaxed mb-6 font-medium">
            {t.subtitle}
          </p>

          {/* Autocomplete Input Search */}
          <div className="bg-white p-2 rounded-2xl shadow-lg">
            <IngredientAutocomplete
              onSelect={handleSelectAutocomplete}
              placeholder={t.searchPlaceholder}
              language={language}
              alreadySelected={pantryIngredients}
              className="w-full text-stone-800"
            />
          </div>
        </div>
      </div>

      {/* Main Fridge Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Left Col: Pantry Shelves (Ngăn tủ đồ) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
                  <span>🏪</span>
                  <span>Ngăn Tủ Trữ Đồ Tiện Lợi</span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">Bấm nhanh để chọn các nguyên liệu bạn đang có sẵn</p>
              </div>

              {/* Shelf category tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 rounded-2xl">
                <button
                  onClick={() => setActiveShelf('meat')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeShelf === 'meat' ? 'bg-white text-orange-600 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t.shelfMeat}
                </button>
                <button
                  onClick={() => setActiveShelf('vegetable')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeShelf === 'vegetable' ? 'bg-white text-emerald-600 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t.shelfVeg}
                </button>
                <button
                  onClick={() => setActiveShelf('egg_tofu')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeShelf === 'egg_tofu' ? 'bg-white text-amber-600 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t.shelfEggTofu}
                </button>
                <button
                  onClick={() => setActiveShelf('carb')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeShelf === 'carb' ? 'bg-white text-blue-600 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t.shelfCarb}
                </button>
              </div>
            </div>

            {/* Shelf Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
              {shelvesData[activeShelf].map(item => {
                const itemName = item.name[language] || item.name.vi;
                const isSelected = pantryIngredients.some(
                  pi => pi.toLowerCase().includes(item.name.vi.toLowerCase()) || 
                        item.aliases.some(a => pi.toLowerCase().includes(a.toLowerCase()))
                );

                return (
                  <button
                    key={item.id}
                    onClick={() => togglePantryIngredient(itemName)}
                    className={`flex items-center gap-2 p-2.5 rounded-2xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/20 scale-[1.02]'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200/80 hover:border-stone-300'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="truncate flex-1">{itemName}</span>
                    <span className="text-[10px] opacity-70">{isSelected ? '✓' : '+'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pantry Staples Toggle */}
          <div className="bg-amber-50/70 border border-amber-200/70 rounded-3xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="text-2xl p-2.5 bg-amber-100 rounded-2xl text-amber-700">🧂</span>
              <div>
                <h4 className="text-sm font-bold text-amber-950">Gia Vị Cơ Bản Trong Bếp</h4>
                <p className="text-xs text-amber-800/80 mt-0.5 max-w-xl">{t.staplesLabel}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input 
                type="checkbox" 
                checked={includeStaples} 
                onChange={(e) => setIncludeStaples(e.target.checked)} 
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
            </label>
          </div>
        </div>

        {/* Right Col: Selected Ingredients Tray */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                  <span>🧺</span>
                  <span>{t.selectedTitle}</span>
                </h3>
                <span className="text-xs text-stone-500">
                  {pantryIngredients.length} {t.itemsInFridge}
                </span>
              </div>

              {pantryIngredients.length > 0 && (
                <button
                  onClick={() => setPantryIngredients([])}
                  className="text-xs font-bold text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {t.clearAll}
                </button>
              )}
            </div>

            {/* Selected Pills */}
            <div className="flex-1 min-h-[160px] max-h-[260px] overflow-y-auto mb-4">
              {pantryIngredients.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-stone-200 rounded-2xl text-stone-400">
                  <span className="text-3xl mb-2">🧊</span>
                  <p className="text-xs font-medium">Tủ lạnh đang trống. Hãy chọn hoặc gõ nguyên liệu ở trên!</p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {pantryIngredients.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 shadow-xs"
                    >
                      <span>{item}</span>
                      <button
                        onClick={() => togglePantryIngredient(item)}
                        className="hover:text-red-600 hover:bg-orange-100 rounded-md p-0.5 transition-colors cursor-pointer"
                        title="Xóa"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Match Button */}
            <button
              disabled={pantryIngredients.length === 0 || loading}
              onClick={searchFridgeRecipes}
              className={`w-full py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                pantryIngredients.length === 0 || loading
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200'
                  : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25 active:scale-[0.98]'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t.searching}</span>
                </>
              ) : (
                <>
                  <span>🔥</span>
                  <span>{t.findDishesBtn} ({pantryIngredients.length})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Dishes Section */}
      {results.length > 0 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/80 shadow-xs">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterTab('all')}
                className={`px-4 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                  filterTab === 'all'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t.allResults} ({results.length})
              </button>

              <button
                onClick={() => setFilterTab('ready')}
                className={`px-4 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  filterTab === 'ready'
                    ? 'bg-emerald-600 text-white shadow-emerald-600/20 shadow-sm'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/60'
                }`}
              >
                <span>✨ {t.readyToCookTab}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-700 text-white text-[10px]">
                  {readyMatches.length}
                </span>
              </button>

              <button
                onClick={() => setFilterTab('missing1or2')}
                className={`px-4 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  filterTab === 'missing1or2'
                    ? 'bg-amber-600 text-white shadow-amber-600/20 shadow-sm'
                    : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200/60'
                }`}
              >
                <span>🛒 {t.missing1or2Tab}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-amber-700 text-white text-[10px]">
                  {missing1or2Matches.length}
                </span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 text-xs font-bold text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
              >
                <option value="match">{t.sortMatch}</option>
                <option value="time">{t.sortTime}</option>
                <option value="calories">{t.sortCal}</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((recipe: any) => {
              const isFullMatch = recipe.missingCount === 0;
              const isAdded = addedRecipeId === recipe.id;

              return (
                <div
                  key={recipe.id}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={
                        recipe.image?.includes('wikimedia.org') || recipe.image?.includes('wikipedia.org')
                          ? `/api/image-proxy?url=${encodeURIComponent(recipe.image)}`
                          : recipe.image
                      }
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/api/image-proxy';
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Match Meter Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black backdrop-blur-md text-white bg-stone-900/80 shadow-md">
                      <span>{isFullMatch ? '🌟' : '⚡'}</span>
                      <span>Khớp {recipe.matchPercentage}% ({recipe.matchCount}/{recipe.totalIngredients})</span>
                    </div>

                    {/* Status Badge */}
                    {isFullMatch ? (
                      <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {t.fullMatchBadge}
                      </div>
                    ) : recipe.missingCount <= 2 ? (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {t.quickTripBadge}
                      </div>
                    ) : null}

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                      <span className="bg-orange-600/90 backdrop-blur-xs px-2.5 py-0.5 rounded-lg">
                        {recipe.category}
                      </span>
                      <div className="flex items-center gap-2 drop-shadow-md">
                        <span>⏱ {recipe.time}</span>
                        <span>🔥 {recipe.calories} kcal</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <Link href={`/recipe/${recipe.id}`} className="block mb-3">
                      <h3 className="text-lg font-black text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {recipe.title}
                      </h3>
                    </Link>

                    {/* Match Progress Bar */}
                    <div className="w-full bg-stone-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isFullMatch
                            ? 'bg-emerald-500'
                            : recipe.matchPercentage >= 60
                            ? 'bg-amber-500'
                            : 'bg-orange-400'
                        }`}
                        style={{ width: `${recipe.matchPercentage}%` }}
                      ></div>
                    </div>

                    {/* Ingredient Breakdown */}
                    <div className="space-y-2 mb-5 flex-1 text-xs">
                      {/* In Fridge */}
                      <div className="bg-emerald-50/70 p-2.5 rounded-2xl border border-emerald-100">
                        <span className="font-bold text-emerald-800 block mb-1">
                          ✓ {t.inFridge} ({recipe.matchedIngredients.length})
                        </span>
                        <p className="text-stone-700 leading-relaxed font-medium">
                          {recipe.matchedIngredients.map((m: any) => m.name).join(', ')}
                        </p>
                      </div>

                      {/* Missing */}
                      {recipe.missingIngredients.length > 0 ? (
                        <div className="bg-amber-50/70 p-2.5 rounded-2xl border border-amber-100">
                          <span className="font-bold text-amber-800 block mb-1">
                            🛒 {t.missingNeedBuy} ({recipe.missingIngredients.length} món)
                          </span>
                          <p className="text-stone-600 leading-relaxed">
                            {recipe.missingIngredients.map((m: any) => m.name).join(', ')}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-emerald-100/70 p-2.5 rounded-2xl text-emerald-800 font-bold text-center">
                          🎉 Đã đủ toàn bộ nguyên liệu! Vào bếp thôi!
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                      <Link
                        href={`/recipe/${recipe.id}`}
                        className="flex-1 text-center py-2.5 rounded-xl font-bold text-xs bg-stone-900 hover:bg-stone-800 text-white transition-colors"
                      >
                        {t.cookNow}
                      </Link>

                      {recipe.missingIngredients.length > 0 && (
                        <button
                          onClick={() => handleAddMissingToGrocery(recipe)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer border ${
                            isAdded
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'
                          }`}
                          title={t.addMissingToCart}
                        >
                          {isAdded ? t.addedToCart : '+ Giỏ Đi Chợ'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty State after search */}
      {hasSearched && results.length === 0 && !loading && (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8 shadow-sm">
          <span className="text-5xl block mb-4">🥣</span>
          <h3 className="text-xl font-black text-stone-900 mb-2">{t.noResultsTitle}</h3>
          <p className="text-stone-500 max-w-md mx-auto text-sm">{t.noResultsDesc}</p>
        </div>
      )}
    </div>
  );
}