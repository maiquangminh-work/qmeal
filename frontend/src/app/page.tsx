'use client';
import { useStore } from '@/store/useStore';
import { useState, useMemo } from 'react';
import RecipeCard from '@/components/ui/RecipeCard';
import SmartRecommendationHero from '@/components/home/SmartRecommendationHero';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';
import { ChefHat, Store, Sparkles, Filter } from 'lucide-react';

export default function Home() {
  const { language, selectedRegion, selectedDiningMode } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  // Unique categories within current regional scope
  const categories = useMemo(() => {
    const scopedDishes = selectedRegion === 'all' 
      ? vietnameseRecipes 
      : vietnameseRecipes.filter(r => r.region === selectedRegion || r.region === 'national');
    return Array.from(new Set(scopedDishes.map(r => r.category[language])));
  }, [selectedRegion, language]);

  // Split into Home Cooking and Eat Out for structured display
  const homeCookingDishes = useMemo(() => {
    return contextualRecipes.filter(r => r.diningType.includes('home_cook')).slice(0, 8);
  }, [contextualRecipes]);

  const streetFoodDishes = useMemo(() => {
    return contextualRecipes.filter(r => r.diningType.includes('eat_out')).slice(0, 8);
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
                Khám phá thực đơn {regionNames[selectedRegion]}
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

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === null
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80 shadow-2xs'
              }`}
            >
              Tất cả danh mục ({contextualRecipes.length})
            </button>
            {categories.map((cat) => {
              const count = contextualRecipes.filter(r => r.category[language] === cat).length;
              if (count === 0 && selectedCategory !== cat) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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

        {/* If a category is selected: show direct results */}
        {selectedCategory ? (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                  {selectedCategory}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Tìm thấy {contextualRecipes.length} món ăn kiểm định NIN
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contextualRecipes.map((recipe) => (
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
        ) : (
          <>
            {/* Section 1: Home Cooking Section (Cơm Nhà) */}
            {selectedDiningMode !== 'eat_out' && homeCookingDishes.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ChefHat className="w-4 h-4 text-orange-700" />
                      <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">Cơm Nhà Dễ Nấu</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                      Món Mặn & Canh Đưa Cơm {regionNames[selectedRegion]}
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

            {/* Section 2: Eat Out / Street Food Section */}
            {selectedDiningMode !== 'home_cook' && streetFoodDishes.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Store className="w-4 h-4 text-orange-700" />
                      <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">Hàng Quán & Ăn Ngoài</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                      Món Ngon Phố Xá & Quán Ăn {regionNames[selectedRegion]}
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

            {/* Section 3: All Regional Dishes Grid */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                    Tất Cả Món Ăn {regionNames[selectedRegion]} ({contextualRecipes.length})
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Được kiểm định dinh dưỡng bởi Viện Dinh Dưỡng Quốc Gia (NIN)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contextualRecipes.map((recipe) => (
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
          </>
        )}
      </main>
    </div>
  );
}
