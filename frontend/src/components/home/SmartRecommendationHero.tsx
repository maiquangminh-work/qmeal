'use client';
import { useState, useMemo, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';
import RecipeCard from '@/components/ui/RecipeCard';
import { detectUserLocation } from '@/utils/geolocation';
import { MapPin, Clock, ChefHat, Store, Utensils, CheckCircle2, Sparkles, Navigation } from 'lucide-react';

interface SmartRecommendationHeroProps {
  language: 'vi' | 'en';
}

export default function SmartRecommendationHero({ language }: SmartRecommendationHeroProps) {
  const { 
    selectedRegion, 
    setRegion, 
    userLocationName,
    isLocationAuto,
    setUserLocation,
    selectedDiningMode, 
    setDiningMode,
    favorites,
    viewHistory
  } = useStore();

  const [activeCriteria, setActiveCriteria] = useState<'all' | 'quick' | 'healthy' | 'protein' | 'comfort'>('all');
  const [currentHour, setCurrentHour] = useState(12);
  const [showLocationOverride, setShowLocationOverride] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Auto-detect location on mount
  useEffect(() => {
    setCurrentHour(new Date().getHours());

    let isMounted = true;
    const runAutoLocation = async () => {
      // Only auto-detect if the user hasn't manually overridden
      if (isLocationAuto) {
        setIsLocating(true);
        const loc = await detectUserLocation();
        if (isMounted) {
          setUserLocation(loc.region, loc.cityName, true);
          setIsLocating(false);
        }
      }
    };
    runAutoLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  // Time context determination
  const timeContext = useMemo(() => {
    if (currentHour >= 6 && currentHour < 10) {
      return {
        slot: 'breakfast' as const,
        labelVi: 'Bữa Sáng Năng Lượng',
        labelEn: 'Morning Breakfast',
        descVi: 'Khởi đầu ngày mới với phở nóng, bún ốc, bánh mì giòn',
        descEn: 'Warm noodle soups, sticky rice, or baguettes'
      };
    } else if (currentHour >= 10 && currentHour < 14) {
      return {
        slot: 'lunch' as const,
        labelVi: 'Bữa Cơm Trưa',
        labelEn: 'Lunch Break',
        descVi: 'Món cơm trưa đậm đà, bún chả, nạp lại năng lượng ngày làm việc',
        descEn: 'Hearty rice dishes and quick meals for lunch'
      };
    } else if (currentHour >= 14 && currentHour < 17) {
      return {
        slot: 'snack' as const,
        labelVi: 'Quà Chiều & Ăn Vặt',
        labelEn: 'Afternoon Refreshment',
        descVi: 'Thức quà vặt phố cổ, nem rán giòn rụm, chè thanh mát',
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
        descVi: 'Cháo sườn sụn, bún phở hoặc món nhẹ dễ tiêu hóa',
        descEn: 'Comfort congee and soothing light meals'
      };
    }
  }, [currentHour]);

  // Extract user preference profiles from favorites and history
  const userTasteProfile = useMemo(() => {
    const categories: Record<string, number> = {};
    const tags: Record<string, number> = {};

    favorites.forEach(fav => {
      const match = vietnameseRecipes.find(r => String(r.id) === String(fav.id));
      if (match) {
        categories[match.category.vi] = (categories[match.category.vi] || 0) + 2;
        match.dietaryTags.vi.forEach(t => {
          tags[t] = (tags[t] || 0) + 1;
        });
      }
    });

    viewHistory.forEach(id => {
      const match = vietnameseRecipes.find(r => String(r.id) === String(id));
      if (match) {
        categories[match.category.vi] = (categories[match.category.vi] || 0) + 1;
      }
    });

    const hasHistory = favorites.length > 0 || viewHistory.length > 0;
    return { categories, tags, hasHistory };
  }, [favorites, viewHistory]);

  // Scoring and recommendation algorithm: 3 optimal dishes
  const recommendedDishes = useMemo(() => {
    return vietnameseRecipes.map(recipe => {
      let score = 0;
      const reasons: string[] = [];
      let recommendationType: 'personal' | 'popular' | 'time' = 'popular';

      // 1. Regional Score (Weight: 40)
      if (selectedRegion === 'all') {
        score += 30;
      } else if (recipe.region === selectedRegion) {
        score += 40;
        if (selectedRegion === 'north') reasons.push('Đặc sản Hà Nội & Bắc Bộ');
        else if (selectedRegion === 'central') reasons.push('Đặc sản Miền Trung');
        else if (selectedRegion === 'south') reasons.push('Hương vị Nam Bộ');
      } else if (recipe.region === 'national') {
        score += 25;
        reasons.push('Món quen thuộc cơm nhà');
      } else {
        // Different region: penalty so user in Hanoi won't get Southern-only dishes
        score -= 60;
      }

      // 2. Personalization vs. Popularity Score (Weight: 35)
      if (userTasteProfile.hasHistory) {
        const catWeight = userTasteProfile.categories[recipe.category.vi] || 0;
        if (catWeight > 0) {
          score += 30 + Math.min(catWeight * 5, 20);
          reasons.unshift('Hợp khẩu vị bạn hay chọn');
          recommendationType = 'personal';
        }
      } 
      
      // Popularity weighting (if new user or iconic dish)
      if (recipe.isPopular || (recipe.popularityScore && recipe.popularityScore >= 90)) {
        score += 30;
        if (!userTasteProfile.hasHistory) {
          reasons.unshift(recipe.region === 'north' ? 'Phổ biến nhất tại Hà Nội' : 'Món ăn quốc dân được yêu thích');
          recommendationType = 'popular';
        }
      }

      // 3. Time Context Score (Weight: 25)
      if (recipe.mealType.includes(timeContext.slot)) {
        score += 25;
        reasons.push(`Chuẩn ${timeContext.labelVi}`);
        if (!recommendationType) recommendationType = 'time';
      }

      // 4. Dining Type Score (Weight: 20)
      if (selectedDiningMode === 'all') {
        score += 15;
      } else if (recipe.diningType.includes(selectedDiningMode)) {
        score += 20;
        if (selectedDiningMode === 'home_cook') reasons.push('Dễ nấu tại nhà');
        if (selectedDiningMode === 'eat_out') reasons.push('Tiện ra quán / đặt ship');
      } else {
        score -= 40;
      }

      // 5. Criteria Score (Weight: 20)
      if (activeCriteria === 'quick') {
        const minutes = parseInt(recipe.time) || 30;
        if (minutes <= 25) {
          score += 20;
          reasons.push(`Nhanh ${recipe.time}`);
        }
      } else if (activeCriteria === 'healthy') {
        if (recipe.calories <= 420) {
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
          reasons.push('Món mặn đưa cơm');
        }
      }

      return {
        recipe,
        score,
        reason: reasons.slice(0, 2).join(' • '),
        badgeText: userTasteProfile.hasHistory && recommendationType === 'personal'
          ? 'Hợp khẩu vị của bạn'
          : (recipe.isPopular ? 'Món ngon phổ biến' : 'Gợi ý chuẩn giờ')
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    // EXACTLY 3 DISHES as requested by user
    .slice(0, 3);
  }, [selectedRegion, selectedDiningMode, timeContext, activeCriteria, userTasteProfile]);

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
      {/* Top Header Bar: Location Auto-Detected & Current Time Context */}
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
            Đề xuất 3 món ăn chuẩn vị theo vị trí thiết bị và thói quen ẩm thực của bạn.
          </p>
        </div>

        {/* Automatic Geolocation Badge with sleek override switch */}
        <div className="flex flex-col items-start md:items-end gap-2 self-start md:self-auto">
          <div className="flex items-center gap-2 bg-stone-800/90 px-3.5 py-2 rounded-xl border border-stone-700/80 text-xs shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
            <span className="font-semibold text-stone-100">
              {isLocating ? 'Đang xác định vị trí...' : userLocationName}
            </span>
            {isLocationAuto && (
              <span className="text-[10px] text-emerald-300 bg-emerald-950/80 border border-emerald-800/50 px-1.5 py-0.5 rounded font-medium">
                Tự động
              </span>
            )}
            <button 
              onClick={() => setShowLocationOverride(!showLocationOverride)}
              className="ml-1 text-[11px] text-stone-400 hover:text-orange-400 underline cursor-pointer transition-colors"
            >
              {showLocationOverride ? 'Đóng' : 'Đổi'}
            </button>
          </div>

          {/* Optional inline region override buttons (hidden by default to avoid clutter) */}
          {showLocationOverride && (
            <div className="bg-stone-800 p-1.5 rounded-xl border border-stone-700 flex flex-wrap gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              {regionOptions.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => {
                    setUserLocation(opt.key, opt.labelVi, false);
                    setShowLocationOverride(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedRegion === opt.key
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-stone-700'
                  }`}
                >
                  {opt.labelVi}
                </button>
              ))}
            </div>
          )}
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

      {/* 3-Dish Recommendation Grid (Format 3 món ăn chuẩn) */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg md:text-xl font-bold text-stone-900">
                3 Món Ăn Đề Xuất Tối Ưu Cho Bạn Tại {userLocationName}
              </h2>
              {userTasteProfile.hasHistory && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-800 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                  <Sparkles className="w-3 h-3 text-orange-600" />
                  Cá nhân hóa
                </span>
              )}
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Được tính toán theo khung giờ hiện tại • Phù hợp {diningOptions.find(d => d.key === selectedDiningMode)?.labelVi.toLowerCase()}
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Dữ liệu Viện Dinh Dưỡng NIN
          </span>
        </div>

        {recommendedDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedDishes.map(({ recipe, reason, badgeText }, index) => (
              <div key={recipe.id} className="flex flex-col h-full relative group">
                {/* Ranking Pill */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="text-[10px] font-bold text-white bg-stone-900/85 backdrop-blur-md px-2 py-0.5 rounded shadow-xs border border-white/20">
                    Gợi ý #{index + 1} • {badgeText}
                  </span>
                </div>

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
                  <div className="mt-2.5 px-3 py-1.5 bg-stone-50 rounded-lg text-[11px] text-stone-700 font-medium flex items-center gap-1.5 border border-stone-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{reason}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-stone-500">
            Không tìm thấy món ăn phù hợp với bộ lọc này. Hãy thử bỏ bớt tiêu chí.
          </div>
        )}
      </div>
    </section>
  );
}
