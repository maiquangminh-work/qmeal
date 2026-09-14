'use client';
import { useStore } from '@/store/useStore';
import { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import RecipeCard from '@/components/ui/RecipeCard';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';

export default function Home() {
  const { language } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const t = {
    vi: {
      featuredTitle: "🔥 Món Ngon Nổi Bật",
      categoriesTitle: "Khám Phá Theo Thể Loại",
      allCategory: "✨ Tất cả món",
      quickEasyTitle: "Món Nhanh & Thanh Mát ⚡",
      viewAll: "Xem tất cả →",
      calUnit: "kcal (Chuẩn NIN)"
    },
    en: {
      featuredTitle: "🔥 Featured Vietnamese Recipes",
      categoriesTitle: "Explore by Category",
      allCategory: "✨ All Dishes",
      quickEasyTitle: "Quick & Refreshing Dishes ⚡",
      viewAll: "View all →",
      calUnit: "kcal (NIN Verified)"
    }
  }[language];

  // Extract unique categories in current language
  const categories = Array.from(
    new Set(vietnameseRecipes.map(r => r.category[language]))
  );

  // Filter recipes based on selected category
  const filteredRecipes = selectedCategory
    ? vietnameseRecipes.filter(r => r.category[language] === selectedCategory)
    : vietnameseRecipes;

  // Format master recipes for RecipeCard
  const formattedAll = filteredRecipes.map(r => ({
    id: r.id,
    title: r.title[language] || r.title.vi,
    image: r.image,
    time: r.time,
    rating: 4.9,
    tags: r.dietaryTags[language] || r.dietaryTags.vi,
    calories: r.calories,
    nutritionSource: r.nutritionSource[language] || r.nutritionSource.vi,
    recipeSource: r.recipeSource[language] || r.recipeSource.vi
  }));

  const featured = formattedAll.slice(0, 4);
  const quickEasy = formattedAll.slice(4, 8).length > 0 ? formattedAll.slice(4, 8) : formattedAll;

  return (
    <div className="bg-stone-50 min-h-screen pb-16">
      {/* Hero Section */}
      <HeroSection language={language} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
        {/* Categories Filter with Active State */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-6">
            {t.categoriesTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-sm transform hover:-translate-y-0.5 cursor-pointer ${
                selectedCategory === null
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {t.allCategory} ({vietnameseRecipes.length})
            </button>
            {categories.map((cat) => {
              const count = vietnameseRecipes.filter(r => r.category[language] === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-sm transform hover:-translate-y-0.5 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* If a category is selected: show all recipes matching that category */}
        {selectedCategory ? (
          <section className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {selectedCategory}
                </h2>
                <p className="text-stone-500 text-sm mt-1">
                  {language === 'vi' 
                    ? `Tìm thấy ${formattedAll.length} món ăn chuẩn vị Việt Nam` 
                    : `Found ${formattedAll.length} authentic Vietnamese recipes`}
                </p>
              </div>
              <span className="text-stone-400 text-sm font-medium hidden sm:block">
                100% Ảnh Thực Tế & Số Liệu Viện Dinh Dưỡng
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {formattedAll.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        ) : (
          <>
            {/* Featured Recipes Section */}
            <section className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    {t.featuredTitle}
                  </h2>
                </div>
                <span className="text-stone-400 text-sm font-medium hidden sm:block">
                  100% Ảnh Thực Tế & Số Liệu Viện Dinh Dưỡng
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featured.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </section>

            {/* Complete Menu / All Dishes Grid */}
            <section className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    {language === 'vi' ? '🥢 Tinh Hoa Ẩm Thực Việt Nam' : '🥢 All Authentic Vietnamese Dishes'}
                  </h2>
                  <p className="text-stone-500 text-sm mt-1">
                    {language === 'vi' 
                      ? `Toàn bộ ${formattedAll.length} món ăn truyền thống được kiểm định dinh dưỡng`
                      : `All ${formattedAll.length} traditional dishes verified by NIN`}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {formattedAll.slice(4).map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
