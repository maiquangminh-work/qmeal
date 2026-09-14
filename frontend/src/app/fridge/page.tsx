'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';

export default function FridgePage() {
  const { language, addIngredientsToGrocery } = useStore();
  const [ingredients, setIngredients] = useState<string[]>(['Thịt ba chỉ', 'Trứng']);
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [sortBy, setSortBy] = useState<'match' | 'time' | 'calories'>('match');
  const [addedRecipeId, setAddedRecipeId] = useState<string | null>(null);

  const t = {
    vi: {
      title: 'Tủ Lạnh Thông Minh Của Bạn 🧊',
      desc: 'Chọn hoặc nhập các nguyên liệu bạn đang có, QMeal sẽ tính toán độ khớp và gợi ý món ăn chuẩn vị nhất.',
      placeholder: 'Ví dụ: thịt bò, tôm, cà chua, đậu phụ... (Nhấn Enter hoặc nút +)',
      popularTitle: '💡 Nguyên liệu phổ biến trong bếp Việt:',
      clearAll: 'Xóa tất cả',
      searchBtn: 'Tìm Món Ngay',
      searching: 'Đang so khớp thực đơn...',
      suggestTitle: 'Món Gợi Ý Phù Hợp',
      sortMatch: 'Độ khớp cao nhất',
      sortTime: 'Nấu nhanh nhất',
      sortCal: 'Calo thấp nhất',
      haveLabel: 'Đã có:',
      missingLabel: 'Còn thiếu:',
      allIngredientsHave: 'Đã đủ toàn bộ nguyên liệu! Nấu ngay thôi!',
      addToCartBtn: 'Thêm đồ thiếu vào Giỏ Đi Chợ',
      addedToCart: '✓ Đã thêm vào Giỏ Đi Chợ!',
      noResults: 'Chưa tìm thấy món Việt nào phù hợp với các nguyên liệu này.',
      noResultsSub: 'Hãy thử thêm nguyên liệu cơ bản như thịt, trứng, cà chua, tôm, hoặc đậu phụ nhé!',
      cookNowBadge: 'Nấu được ngay',
      missingCountBadge: 'nguyên liệu'
    },
    en: {
      title: "Your Smart Fridge 🧊",
      desc: 'Select or enter ingredients you have, and QMeal will calculate recipe matches and suggest authentic dishes.',
      placeholder: 'E.g., pork, beef, shrimp, eggs, tomato... (Press Enter or +)',
      popularTitle: '💡 Common kitchen ingredients:',
      clearAll: 'Clear all',
      searchBtn: 'Find Recipes',
      searching: 'Matching ingredients...',
      suggestTitle: 'Suggested Dishes',
      sortMatch: 'Best match',
      sortTime: 'Fastest cooking',
      sortCal: 'Lowest calories',
      haveLabel: 'In fridge:',
      missingLabel: 'Need to buy:',
      allIngredientsHave: 'You have all ingredients! Ready to cook!',
      addToCartBtn: 'Add missing items to Grocery',
      addedToCart: '✓ Added to Grocery List!',
      noResults: 'No matching Vietnamese dishes found for these ingredients.',
      noResultsSub: 'Try adding staple ingredients like pork, eggs, shrimp, tomato, or tofu!',
      cookNowBadge: 'Ready to cook',
      missingCountBadge: 'ingredients'
    }
  }[language];

  const popularChips = [
    { label: language === 'vi' ? '🥩 Thịt ba chỉ' : '🥩 Pork belly', val: language === 'vi' ? 'Thịt ba chỉ' : 'pork belly' },
    { label: language === 'vi' ? '🥩 Thịt bò' : '🥩 Beef', val: language === 'vi' ? 'Thịt bò' : 'beef' },
    { label: language === 'vi' ? '🍗 Thịt gà' : '🍗 Chicken', val: language === 'vi' ? 'Thịt gà' : 'chicken' },
    { label: language === 'vi' ? '🦐 Tôm tươi' : '🦐 Shrimp', val: language === 'vi' ? 'Tôm tươi' : 'shrimp' },
    { label: language === 'vi' ? '🥚 Trứng' : '🥚 Eggs', val: language === 'vi' ? 'Trứng' : 'eggs' },
    { label: language === 'vi' ? '🍅 Cà chua' : '🍅 Tomato', val: language === 'vi' ? 'Cà chua' : 'tomato' },
    { label: language === 'vi' ? '🧈 Đậu phụ' : '🧈 Tofu', val: language === 'vi' ? 'Đậu phụ' : 'tofu' },
    { label: language === 'vi' ? '🥬 Rau muống' : '🥬 Morning glory', val: language === 'vi' ? 'Rau muống' : 'water spinach' },
    { label: language === 'vi' ? '🥥 Nước dừa' : '🥥 Coconut water', val: language === 'vi' ? 'Nước dừa' : 'coconut water' },
    { label: language === 'vi' ? '🥖 Bánh mì' : '🥖 Baguette', val: language === 'vi' ? 'Bánh mì' : 'baguette' },
    { label: language === 'vi' ? '🍜 Bún / Phở' : '🍜 Rice noodles', val: language === 'vi' ? 'Bún' : 'noodles' }
  ];

  const handleAddIngredient = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const clean = inputValue.trim();
      if (!ingredients.includes(clean)) {
        setIngredients([...ingredients, clean]);
      }
      setInputValue('');
    }
  };

  const toggleChip = (val: string) => {
    if (ingredients.includes(val)) {
      setIngredients(ingredients.filter(i => i !== val));
    } else {
      setIngredients([...ingredients, val]);
    }
  };

  const removeIngredient = (ingToRemove: string) => {
    setIngredients(ingredients.filter(ing => ing !== ingToRemove));
  };

  const handleSearch = async () => {
    if (ingredients.length === 0) return;
    setLoading(true);
    setHasSearched(true);
    try {
      const encoded = encodeURIComponent(ingredients.join(','));
      const res = await fetch(`/api/fridge?i=${encoded}&lang=${language}`);
      const json = await res.json();
      if (json.success) {
        setResults(json.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMissingToGrocery = (recipe: any) => {
    if (recipe.missingIngredients && recipe.missingIngredients.length > 0) {
      addIngredientsToGrocery(recipe.title, recipe.missingIngredients);
      setAddedRecipeId(recipe.id);
      setTimeout(() => setAddedRecipeId(null), 3000);
    }
  };

  // Sort results
  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === 'match') {
      if (b.matchCount !== a.matchCount) return b.matchCount - a.matchCount;
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      {/* Fridge Input Box */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">🧊</span>
          <h1 className="text-3xl font-extrabold text-stone-900">{t.title}</h1>
        </div>
        <p className="text-stone-600 mb-6 text-base">{t.desc}</p>
        
        {/* Input Bar */}
        <div className="relative max-w-3xl mb-6">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddIngredient}
            placeholder={t.placeholder} 
            className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-6 pr-14 text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-base sm:text-lg shadow-inner"
          />
          <button 
            className="absolute right-3 top-2.5 bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
            onClick={() => {
              if (inputValue.trim()) {
                const clean = inputValue.trim();
                if (!ingredients.includes(clean)) {
                  setIngredients([...ingredients, clean]);
                }
                setInputValue('');
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>

        {/* Popular Ingredient Quick Chips */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">{t.popularTitle}</p>
          <div className="flex flex-wrap gap-2">
            {popularChips.map(chip => {
              const active = ingredients.some(i => i.toLowerCase() === chip.val.toLowerCase());
              return (
                <button
                  key={chip.val}
                  onClick={() => toggleChip(chip.val)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                    active 
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/20' 
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {active ? `✓ ${chip.label}` : `+ ${chip.label}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Ingredients Tags */}
        <div className="pt-4 border-t border-stone-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-bold text-stone-700">
              {language === 'vi' ? 'Nguyên liệu đang chọn:' : 'Selected Ingredients:'} ({ingredients.length})
            </span>
            {ingredients.length > 0 && (
              <button 
                onClick={() => setIngredients([])} 
                className="text-stone-400 hover:text-red-500 text-xs font-semibold cursor-pointer transition-colors"
              >
                {t.clearAll}
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {ingredients.map((ing) => (
              <div key={ing} className="flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-3.5 py-1.5 rounded-xl font-medium text-sm shadow-xs">
                <span>{ing}</span>
                <button onClick={() => removeIngredient(ing)} className="hover:text-red-600 transition-colors bg-orange-100 rounded-full p-0.5 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Search Button */}
        <div className="mt-8">
          <button 
            disabled={ingredients.length === 0 || loading}
            onClick={handleSearch}
            className={`px-8 py-3.5 rounded-2xl font-bold shadow-md transition-all flex items-center gap-2 text-base cursor-pointer ${
              ingredients.length === 0 || loading
                ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20 transform hover:-translate-y-0.5'
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{t.searching}</span>
              </>
            ) : (
              <>
                <span>🔍</span>
                <span>{t.searchBtn}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {results.length > 0 && (
        <div className="animate-in fade-in duration-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-stone-900">
                {t.suggestTitle} ({results.length})
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                {language === 'vi' 
                  ? 'Được sắp xếp theo số lượng và tỷ lệ nguyên liệu có sẵn' 
                  : 'Ranked by available ingredient match rate'}
              </p>
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-stone-200 shadow-xs">
              <span className="text-xs font-bold text-stone-400 uppercase">Sắp xếp:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-none text-stone-700 font-bold text-sm cursor-pointer focus:ring-0 pr-4"
              >
                <option value="match">{t.sortMatch}</option>
                <option value="time">{t.sortTime}</option>
                <option value="calories">{t.sortCal}</option>
              </select>
            </div>
          </div>

          {/* Results Grid with Smart Fridge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedResults.map((recipe: any) => {
              const isFullMatch = recipe.missingIngredients.length === 0;
              const isHighMatch = recipe.matchPercentage >= 50;
              const isAdded = addedRecipeId === recipe.id;

              return (
                <div 
                  key={recipe.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col group"
                >
                  {/* Image & Match Percentage Ribbon */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img 
                      src={recipe.image?.includes('wikimedia.org') || recipe.image?.includes('wikipedia.org') ? `/api/image-proxy?url=${encodeURIComponent(recipe.image)}` : recipe.image} 
                      alt={recipe.title} 
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/api/image-proxy';
                      }}
                    />
                    
                    {/* Match Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 shadow-md px-3 py-1.5 rounded-full text-xs font-black backdrop-blur-md text-white bg-stone-900/80">
                      <span>{isHighMatch ? '🔥' : '⚡'}</span>
                      <span>Khớp {recipe.matchPercentage}% ({recipe.matchCount}/{recipe.totalIngredients})</span>
                    </div>

                    {/* Ready to Cook Badge */}
                    {isHighMatch && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                        {t.cookNowBadge}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Category & Info */}
                    <div className="flex justify-between items-center mb-2 text-xs text-stone-500 font-semibold">
                      <span className="text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100">
                        {recipe.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span>⏱ {recipe.time}</span>
                        <span>🔥 {recipe.calories} kcal</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/recipe/${recipe.id}`} className="block">
                      <h3 className="text-lg font-bold text-stone-900 hover:text-orange-500 transition-colors line-clamp-1 mb-4">
                        {recipe.title}
                      </h3>
                    </Link>

                    {/* Match Breakdown */}
                    <div className="space-y-2 mb-5 flex-1 text-xs">
                      {/* Have */}
                      <div className="bg-green-50/60 p-2.5 rounded-xl border border-green-100">
                        <span className="font-bold text-green-800 block mb-1">
                          ✓ {t.haveLabel} ({recipe.matchedIngredients.length})
                        </span>
                        <p className="text-stone-700 leading-relaxed font-medium">
                          {recipe.matchedIngredients.map((m: any) => m.name).join(', ')}
                        </p>
                      </div>

                      {/* Missing */}
                      {recipe.missingIngredients.length > 0 ? (
                        <div className="bg-amber-50/60 p-2.5 rounded-xl border border-amber-100">
                          <span className="font-bold text-amber-800 block mb-1">
                            🛒 {t.missingLabel} ({recipe.missingIngredients.length} {t.missingCountBadge})
                          </span>
                          <p className="text-stone-600 leading-relaxed">
                            {recipe.missingIngredients.slice(0, 3).map((m: any) => m.name).join(', ')}
                            {recipe.missingIngredients.length > 3 ? '...' : ''}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-green-100/70 p-2.5 rounded-xl text-green-800 font-bold text-center">
                          🎉 {t.allIngredientsHave}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                      <Link 
                        href={`/recipe/${recipe.id}`}
                        className="flex-1 text-center py-2.5 rounded-xl font-bold text-xs bg-stone-900 hover:bg-stone-800 text-white transition-colors"
                      >
                        {language === 'vi' ? 'Xem Công Thức' : 'View Recipe'}
                      </Link>

                      {recipe.missingIngredients.length > 0 && (
                        <button
                          onClick={() => handleAddMissingToGrocery(recipe)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer border ${
                            isAdded 
                              ? 'bg-green-600 text-white border-green-600' 
                              : 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'
                          }`}
                          title={t.addToCartBtn}
                        >
                          {isAdded ? '✓ Đã thêm' : '🛒 Mua thêm'}
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
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-100 p-8">
          <span className="text-5xl block mb-4">🥣</span>
          <h3 className="text-xl font-bold text-stone-800 mb-2">{t.noResults}</h3>
          <p className="text-stone-500 max-w-md mx-auto text-sm">{t.noResultsSub}</p>
        </div>
      )}
    </div>
  );
}