'use client';
import { useState, useMemo, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';
import RecipeCard from '@/components/ui/RecipeCard';
import { MapPin, Clock, ChefHat, Store, Utensils, CheckCircle2 } from 'lucide-react';

interface SmartRecommendationHeroProps {
  language: 'vi' | 'en';
}

export default function SmartRecommendationHero({ language }: SmartRecommendationHeroProps) {
  const { 
    selectedRegion, 
    setRegion, 
    selectedDiningMode, 
    setDiningMode 
  } = useStore();

  const [activeCriteria, setActiveCriteria] = useState<'all' | 'quick' | 'healthy' | 'protein' | 'comfort'>('all');
  const [currentHour, setCurrentHour] = useState(12);

  useEffect(() => {
    setCurrentHour(new Date().getHours());
  }, []);

  // Time context determination
  const timeContext = useMemo(() => {
    if (currentHour >= 6 && currentHour < 10) {
      return {
        slot: 'breakfast' as const,
        labelVi: 'Bữa Sáng Năng Lượng',
        labelEn: 'Morning Breakfast',
        descVi: 'Khởi đầu ngày mới với các món nước ấm bụng hoặc bánh mì, xôi',
        descEn: 'Start your day with warm noodle soups, sticky rice, or baguettes'
      };
    } else if (currentHour >= 10 && currentHour < 14) {
      return {
        slot: 'lunch' as const,
        labelVi: 'Bữa Cơm Trưa',
        labelEn: 'Lunch Break',
        descVi: 'Các món đưa cơm nhanh gọn, nạp lại năng lượng ngày làm việc',
        descEn: 'Hearty rice dishes and quick meals for lunch'
      };
    } else if (currentHour >= 14 && currentHour < 17) {
      return {
        slot: 'snack' as const,
        labelVi: 'Quà Chiều & Món Nhẹ',
        labelEn: 'Afternoon Refreshment',
        descVi: 'Thức quà vặt, món gỏi, chè thanh mát cho buổi chiều',
        descEn: 'Street bites, salads, and sweet desserts'
      };
    } else if (currentHour >= 17 && currentHour < 21) {
      return {
        slot: 'dinner' as const,
        labelVi: 'Cơm Tối Gia Đình',
        labelEn: 'Family Dinner',
        descVi: 'Mâm cơm ấm cúng, đủ món mặn, canh, xào trọn vẹn dinh dưỡng',
        descEn: 'Warm dinner gathering with balanced nutrition'
      };
    } else {
      return {
        slot: 'snack' as const,
        labelVi: 'Bữa Khuya Ấm Bụng',
        labelEn: 'Late Night Bite',
        descVi: 'Cháo sườn, bún phở hoặc món nhẹ dễ tiêu hóa',
        descEn: 'Comfort congee and soothing light meals'
      };
    }
  }, [currentHour]);

  // Scoring and recommendation algorithm
  const recommendedDishes = useMemo(() => {
    return vietnameseRecipes.map(recipe => {
      let score = 0;
      const reasons: string[] = [];

      // 1. Regional Score (Weight: 40)
      if (selectedRegion === 'all') {
        score += 30;
      } else if (recipe.region === selectedRegion) {
        score += 40;
        if (selectedRegion === 'north') reasons.push('Chuẩn vị Hà Nội & Bắc Bộ');
        else if (selectedRegion === 'central') reasons.push('Đặc sản Miền Trung');
        else if (selectedRegion === 'south') reasons.push('Hương vị Nam Bộ');
      } else if (recipe.region === 'national') {
        score += 25; // Cơm nhà quốc dân
        reasons.push('Món quen thuộc cơm nhà');
      } else {
        // Different region: penalty so user in Hanoi won't get Southern-only dishes
        score -= 50;
      }

      // 2. Dining Type Score (Weight: 25)
      if (selectedDiningMode === 'all') {
        score += 20;
      } else if (recipe.diningType.includes(selectedDiningMode)) {
        score += 25;
        if (selectedDiningMode === 'home_cook') reasons.push('Dễ nấu tại nhà');
        if (selectedDiningMode === 'eat_out') reasons.push('Quán phổ biến, tiện ghé');
      } else {
        score -= 40;
      }

      // 3. Time Context Score (Weight: 20)
      if (recipe.mealType.includes(timeContext.slot)) {
        score += 20;
        reasons.push(`Hợp ${timeContext.labelVi}`);
      }

      // 4. Criteria Score (Weight: 20)
      if (activeCriteria === 'quick') {
        const minutes = parseInt(recipe.time) || 30;
        if (minutes <= 25) {
          score += 20;
          reasons.push(`Nhanh ${recipe.time}`);
        }
      } else if (activeCriteria === 'healthy') {
        if (recipe.calories <= 380) {
          score += 20;
          reasons.push(`Thanh đạm ${recipe.calories} kcal`);
        }
      } else if (activeCriteria === 'protein') {
        if (recipe.protein >= 24) {
          score += 20;
          reasons.push(`Giàu đạm ${recipe.protein}g`);
        }
      } else if (activeCriteria === 'comfort') {
        if (['Cơm Gia Đình', 'Món Canh', 'Món Hầm'].includes(recipe.category.vi)) {
          score += 20;
          reasons.push('Đậm đà đưa cơm');
        }
      }

      return {
        recipe,
        score,
        reason: reasons.slice(0, 2).join(' • ')
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
  }, [selectedRegion, selectedDiningMode, timeContext, activeCriteria]);

  const regionOptions = [
    { key: 'north' as const, labelVi: 'Hà Nội & Bắc Bộ', labelEn: 'Hanoi & North' },
    { key: 'central' as const, labelVi: 'Đà Nẵng & Miền Trung', labelEn: 'Central Vietnam' },
    { key: 'south' as const, labelVi: 'Sài Gòn & Nam Bộ', labelEn: 'Saigon & South' },
    { key: 'all' as const, labelVi: 'Toàn Quốc', labelEn: 'All Regions' }
  ];

  const diningOptions = [
    { key: 'all' as const, labelVi: 'Tất cả nhu cầu', labelEn: 'All' },
    { key: 'home_cook' as const, labelVi: 'Tự nấu tại nhà', labelEn: 'Home Cooking' },
    { key: 'eat_out' as const, labelVi: 'Ra quán / Đặt ship', labelEn: 'Eat Out / Delivery' }
  ];

  const criteriaOptions = [
    { key: 'all' as const, labelVi: 'Gợi ý tốt nhất', labelEn: 'Best Match' },
    { key: 'quick' as const, labelVi: 'Nấu nhanh ≤ 25p', labelEn: 'Quick ≤ 25m' },
    { key: 'healthy' as const, labelVi: 'Thanh đạm ít calo', labelEn: 'Light & Clean' },
    { key: 'protein' as const, labelVi: 'Giàu đạm protein', labelEn: 'High Protein' },
    { key: 'comfort' as const, labelVi: 'Món mặn đưa cơm', labelEn: 'Comfort Savory' }
  ];

  return (
    <section className="mb-12 bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden">
      {/* Top Header Bar: Location & Current Time Context */}
      <div className="p-6 md:p-8 bg-stone-900 text-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>{timeContext.labelVi} ({currentHour}:00)</span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-300 normal-case">{timeContext.descVi}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Hôm nay bạn muốn ăn gì?
          </h1>
          <p className="text-stone-400 text-sm mt-1">
            Hệ thống tự động đề xuất món ăn phù hợp với địa điểm thực tế và nhu cầu của bạn.
          </p>
        </div>

        {/* Location Region Selector */}
        <div className="bg-stone-800/90 p-1.5 rounded-xl border border-stone-700 flex items-center gap-1 self-start md:self-auto">
          <MapPin className="w-4 h-4 text-orange-400 ml-2 mr-1 flex-shrink-0" />
          <div className="flex flex-wrap gap-1">
            {regionOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => setRegion(opt.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegion === opt.key
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-stone-300 hover:text-white hover:bg-stone-700/60'
                }`}
              >
                {opt.labelVi}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Bar: Dining Mode & Criteria Chips */}
      <div className="p-5 md:p-6 bg-stone-50 border-b border-stone-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Dining Mode: Home Cook vs Eat Out */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200/90 shadow-2xs self-start">
          {diningOptions.map(opt => (
            <button
              key={opt.key}
              onClick={() => setDiningMode(opt.key)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedDiningMode === opt.key
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {opt.key === 'home_cook' && <ChefHat className="w-3.5 h-3.5" />}
              {opt.key === 'eat_out' && <Store className="w-3.5 h-3.5" />}
              {opt.key === 'all' && <Utensils className="w-3.5 h-3.5" />}
              <span>{opt.labelVi}</span>
            </button>
          ))}
        </div>

        {/* Quick Criteria Chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-stone-500 font-medium mr-1 hidden sm:inline">Tiêu chí:</span>
          {criteriaOptions.map(opt => (
            <button
              key={opt.key}
              onClick={() => setActiveCriteria(opt.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCriteria === opt.key
                  ? 'bg-orange-100 text-orange-900 font-semibold border border-orange-300'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {opt.labelVi}
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Output Grid */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-stone-900">
              Đề xuất tối ưu cho bạn tại {regionOptions.find(r => r.key === selectedRegion)?.labelVi}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Đã lọc theo {diningOptions.find(d => d.key === selectedDiningMode)?.labelVi.toLowerCase()} • Chuẩn vị & Khả thi
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Dữ liệu Viện Dinh Dưỡng NIN
          </span>
        </div>

        {recommendedDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedDishes.map(({ recipe, reason }) => (
              <div key={recipe.id} className="flex flex-col h-full">
                <div className="flex-1">
                  <RecipeCard 
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
                </div>
                {reason && (
                  <div className="mt-2 px-2.5 py-1 bg-stone-100/90 rounded text-[11px] text-stone-600 font-medium flex items-center gap-1.5 border border-stone-200/50">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{reason}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-stone-500">
            Không tìm thấy món ăn phù hợp với bộ lọc này. Hãy thử chọn "Toàn Quốc" hoặc bỏ bớt tiêu chí.
          </div>
        )}
      </div>
    </section>
  );
}
