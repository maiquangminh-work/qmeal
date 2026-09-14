'use client';
import { useStore } from '@/store/useStore';
import { useState, useMemo, useEffect } from 'react';
import RecipeCard from '@/components/ui/RecipeCard';
import SmartRecommendationHero from '@/components/home/SmartRecommendationHero';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';
import { ChefHat, Store, Sparkles, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const { language, selectedRegion, selectedDiningMode, userLocationName } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset pagination to page 1 whenever region, dining mode, or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion, selectedDiningMode, selectedCategory]);

  const regionNames: Record<string, string> = {
    north: 'Hà Nội & Bắc Bộ',
    central: 'Đà Nẵng & Miền Trung',
    south: 'Sài Gòn & Nam Bộ',
    all: 'Toàn Quốc'
  };

  // Filter recipes according to active Region & Dining Mode
  const contextualRecipes = useMemo(() => {
    return vietnameseRecipes.filter(r => {
      // 1. Region filter
      if (selectedRegion !== 'all') {
        const matchesRegion = r.region === selectedRegion || r.region === 'national';
        if (!matchesRegion) return false;
      }

      // 2. Dining mode filter
      if (selectedDiningMode !== 'all') {
        const matchesDining = r.diningType.includes(selectedDiningMode);
        if (!matchesDining) return false;
      }

      // 3. Category filter (if selected)
      if (selectedCategory && r.category[language] !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [selectedRegion, selectedDiningMode, selectedCategory, language]);

  // Total pages and sliced dishes for the catalog
  const totalPages = Math.ceil(contextualRecipes.length / ITEMS_PER_PAGE) || 1;
  const paginatedRecipes = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return contextualRecipes.slice(start, start + ITEMS_PER_PAGE);
  }, [contextualRecipes, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Unique categories within current regional scope
  const categories = useMemo(() => {
    const scopedDishes = selectedRegion === 'all' 
      ? vietnameseRecipes 
      : vietnameseRecipes.filter(r => r.region === selectedRegion || r.region === 'national');
    return Array.from(new Set(scopedDishes.map(r => r.category[language])));
  }, [selectedRegion, language]);

  // Split into Home Cooking and Eat Out for structured preview display
  const homeCookingDishes = useMemo(() => {
    return contextualRecipes.filter(r => r.diningType.includes('home_cook')).slice(0, 4);
  }, [contextualRecipes]);

  const streetFoodDishes = useMemo(() => {
    return contextualRecipes.filter(r => r.diningType.includes('eat_out')).slice(0, 4);
  }, [contextualRecipes]);

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6">
        
        {/* Smart Recommendation Engine Hero */}
        <SmartRecommendationHero language={language} />

        {/* Category Browser */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                Khám phá thực đơn {userLocationName || regionNames[selectedRegion]}
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                {contextualRecipes.length} món ăn phù hợp với lựa chọn của bạn
              </p>
            </div>

            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-semibold text-orange-700 hover:text-orange-900 transition-colors cursor-pointer"
              >
                Xóa bộ lọc danh mục (x)
              </button>
            )}
          </div>

          {/* Category Chips: Horizontal Scrollable on mobile, flex-wrap on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                selectedCategory === null
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80 shadow-2xs'
              }`}
            >
              Tất cả ({contextualRecipes.length})
            </button>
            {categories.map((cat) => {
              const count = contextualRecipes.filter(r => r.category[language] === cat).length;
              if (count === 0 && selectedCategory !== cat) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80 shadow-2xs'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Catalog Section with ID for smooth scroll-to-top */}
        <div id="catalog-section" className="scroll-mt-6"></div>

        {/* If a category is selected: show paginated category results */}
        {selectedCategory ? (
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                  {selectedCategory}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Tìm thấy {contextualRecipes.length} món ăn • Trang {currentPage} / {totalPages}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedRecipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={{
                    id: recipe.id,
                    title: recipe.title[language] || recipe.title.vi,
                    image: recipe.image,
                    time: recipe.time,
                    rating: 4.9,
                    tags: recipe.dietaryTags[language] || recipe.dietaryTags.vi,
                    calories: recipe.calories,
                    region: recipe.region,
                    diningType: recipe.diningType,
                    nutritionSource: recipe.nutritionSource[language] || recipe.nutritionSource.vi,
                    recipeSource: recipe.recipeSource[language] || recipe.recipeSource.vi
                  }} 
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-stone-200/80 shadow-2xs">
                <div className="text-xs text-stone-500 font-medium">
                  Hiển thị {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, contextualRecipes.length)} trên {contextualRecipes.length} món
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Trước</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          currentPage === pageNum
                            ? 'bg-orange-600 text-white shadow-xs'
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <span>Sau</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Section 1: Home Cooking Section (Cơm Nhà) Preview */}
            {selectedDiningMode !== 'eat_out' && homeCookingDishes.length > 0 && (
              <section className="mb-14">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ChefHat className="w-4 h-4 text-orange-700" />
                      <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">Cơm Nhà Dễ Nấu</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                      Món Mặn & Canh Đưa Cơm {userLocationName || regionNames[selectedRegion]}
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Nguyên liệu dễ tìm tại chợ dân sinh • Công thức chuẩn vị gia đình
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {homeCookingDishes.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={{
                        id: recipe.id,
                        title: recipe.title[language] || recipe.title.vi,
                        image: recipe.image,
                        time: recipe.time,
                        rating: 4.9,
                        tags: recipe.dietaryTags[language] || recipe.dietaryTags.vi,
                        calories: recipe.calories,
                        region: recipe.region,
                        diningType: recipe.diningType,
                        nutritionSource: recipe.nutritionSource[language] || recipe.nutritionSource.vi,
                        recipeSource: recipe.recipeSource[language] || recipe.recipeSource.vi
                      }} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Section 2: Eat Out / Street Food Section Preview */}
            {selectedDiningMode !== 'home_cook' && streetFoodDishes.length > 0 && (
              <section className="mb-14">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Store className="w-4 h-4 text-orange-700" />
                      <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">Hàng Quán & Ăn Ngoài</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                      Món Ngon Phố Xá & Quán Ăn {userLocationName || regionNames[selectedRegion]}
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Bún, phở, bánh mì và các món ăn ngoài nổi tiếng • Có bản đồ chỉ đường & đặt ship
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {streetFoodDishes.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={{
                        id: recipe.id,
                        title: recipe.title[language] || recipe.title.vi,
                        image: recipe.image,
                        time: recipe.time,
                        rating: 4.9,
                        tags: recipe.dietaryTags[language] || recipe.dietaryTags.vi,
                        calories: recipe.calories,
                        region: recipe.region,
                        diningType: recipe.diningType,
                        nutritionSource: recipe.nutritionSource[language] || recipe.nutritionSource.vi,
                        recipeSource: recipe.recipeSource[language] || recipe.recipeSource.vi
                      }} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: All Regional Dishes Grid with Pagination (8 items/page) */}
            <section className="mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                    Tất Cả Món Ăn {regionNames[selectedRegion]} ({contextualRecipes.length})
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Được kiểm định dinh dưỡng bởi Viện Dinh Dưỡng Quốc Gia (NIN) • Trang {currentPage} / {totalPages}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedRecipes.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id} 
                    recipe={{
                      id: recipe.id,
                      title: recipe.title[language] || recipe.title.vi,
                      image: recipe.image,
                      time: recipe.time,
                      rating: 4.9,
                      tags: recipe.dietaryTags[language] || recipe.dietaryTags.vi,
                      calories: recipe.calories,
                      region: recipe.region,
                      diningType: recipe.diningType,
                      nutritionSource: recipe.nutritionSource[language] || recipe.nutritionSource.vi,
                      recipeSource: recipe.recipeSource[language] || recipe.recipeSource.vi
                    }} 
                  />
                ))}
              </div>

              {/* Clean Pagination Bar (8 items per page) */}
              {totalPages > 1 && (
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-stone-200/80 shadow-2xs">
                  <div className="text-xs text-stone-500 font-medium">
                    Hiển thị {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, contextualRecipes.length)} trên {contextualRecipes.length} món
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Trước</span>
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
                        // Display concise range if too many pages
                        if (totalPages > 7) {
                          if (pageNum !== 1 && pageNum !== totalPages && Math.abs(pageNum - currentPage) > 1) {
                            if (pageNum === 2 || pageNum === totalPages - 1) {
                              return <span key={pageNum} className="px-1 text-xs text-stone-400">...</span>;
                            }
                            return null;
                          }
                        }

                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              currentPage === pageNum
                                ? 'bg-orange-600 text-white shadow-xs'
                                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/60'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <span>Sau</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
