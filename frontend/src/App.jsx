import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import HeroSection from './components/HeroSection';
import RecipeOfDay from './components/RecipeOfDay';
import CategoryBanners from './components/CategoryBanners';
import MealTabs from './components/MealTabs';
import DishCard from './components/DishCard';
import DishDetailModal from './components/DishDetailModal';
import GachaModal from './components/GachaModal';
import FridgeModal from './components/FridgeModal';
import FavoritesModal from './components/FavoritesModal';
import GroceryListModal from './components/GroceryListModal';
import Footer from './components/Footer';
import { DISHES_DATA } from './data/dishes';
import { QUICK_TAGS } from './data/categories';
import { getTimeContext } from './utils/timeContext';
import { Sparkles, UtensilsCrossed, ArrowRight, ChevronRight } from 'lucide-react';

export default function App() {
  const timeContext = useMemo(() => getTimeContext(), []);
  const [searchTerm, setSearchTerm] = useState('');
  const [intent, setIntent] = useState('cook_home'); // 'cook_home' | 'eat_out'
  const [activeTab, setActiveTab] = useState('all');
  const [activeTag, setActiveTag] = useState('all');

  // Modal States
  const [selectedDish, setSelectedDish] = useState(null);
  const [detailInitialTab, setDetailInitialTab] = useState('cook');
  const [isGachaOpen, setIsGachaOpen] = useState(false);
  const [isFridgeOpen, setIsFridgeOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isGroceryOpen, setIsGroceryOpen] = useState(false);

  // Favorites in LocalStorage
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem('qmeal_favorites');
      return saved ? JSON.parse(saved) : ['pho-bo-tai-lan', 'com-tam-suon-bi-cha'];
    } catch {
      return ['pho-bo-tai-lan', 'com-tam-suon-bi-cha'];
    }
  });

  // Grocery List in LocalStorage
  const [groceryItems, setGroceryItems] = useState(() => {
    try {
      const saved = localStorage.getItem('qmeal_grocery_list');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('qmeal_favorites', JSON.stringify(favoriteIds));
    } catch (e) {
      console.error(e);
    }
  }, [favoriteIds]);

  useEffect(() => {
    try {
      localStorage.setItem('qmeal_grocery_list', JSON.stringify(groceryItems));
    } catch (e) {
      console.error(e);
    }
  }, [groceryItems]);

  // Listen to custom footer events if triggered
  useEffect(() => {
    const handleOpenGacha = () => setIsGachaOpen(true);
    const handleOpenFridge = () => setIsFridgeOpen(true);
    window.addEventListener('open-gacha', handleOpenGacha);
    window.addEventListener('open-fridge', handleOpenFridge);
    return () => {
      window.removeEventListener('open-gacha', handleOpenGacha);
      window.removeEventListener('open-fridge', handleOpenFridge);
    };
  }, []);

  const toggleFavorite = (dish) => {
    setFavoriteIds((prev) =>
      prev.includes(dish.id)
        ? prev.filter((id) => id !== dish.id)
        : [...prev, dish.id]
    );
  };

  const removeFavorite = (dishId) => {
    setFavoriteIds((prev) => prev.filter((id) => id !== dishId));
  };

  // Grocery List Actions
  const handleAddComboToGrocery = (combo) => {
    setGroceryItems((prev) => {
      const newItems = [...prev];
      combo.ingredients.forEach((ing) => {
        const existing = newItems.find((item) => item.name.toLowerCase() === ing.name.toLowerCase());
        if (!existing) {
          newItems.push({
            id: `grocery-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            name: ing.name,
            amount: ing.amount,
            category: ing.category || 'Khác',
            checked: false
          });
        }
      });
      return newItems;
    });
  };

  const handleAddDishIngredientsToGrocery = (dish, ingredientsList, servings) => {
    setGroceryItems((prev) => {
      const newItems = [...prev];
      ingredientsList.forEach((ing) => {
        const label = `${ing.name} (${dish.name})`;
        const existing = newItems.find(
          (item) => item.name.toLowerCase() === label.toLowerCase() || item.name.toLowerCase() === ing.name.toLowerCase()
        );
        if (!existing) {
          newItems.push({
            id: `grocery-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            name: label,
            amount: ing.amount,
            category: 'Nguyên liệu nấu',
            checked: false
          });
        }
      });
      return newItems;
    });
  };

  const handleAddMissingIngredientsToGrocery = (missingIngredients, dishName) => {
    setGroceryItems((prev) => {
      const newItems = [...prev];
      missingIngredients.forEach((name) => {
        const label = `${name} (cho ${dishName})`;
        const existing = newItems.find(
          (item) => item.name.toLowerCase() === label.toLowerCase() || item.name.toLowerCase() === name.toLowerCase()
        );
        if (!existing) {
          newItems.push({
            id: `grocery-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            name: label,
            amount: '1 phần',
            category: 'Cần mua thêm',
            checked: false
          });
        }
      });
      return newItems;
    });
  };

  const handleToggleGroceryItem = (id) => {
    setGroceryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleRemoveGroceryItem = (id) => {
    setGroceryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddCustomGroceryItem = (item) => {
    setGroceryItems((prev) => [item, ...prev]);
  };

  const handleClearGrocery = () => {
    setGroceryItems([]);
  };

  // Recipe of the day dish
  const recipeOfDayDish = useMemo(() => {
    return DISHES_DATA.find((d) => d.isRecipeOfDay) || DISHES_DATA[0];
  }, []);

  // Filtered dishes list based on activeTab & search & tags
  const displayDishes = useMemo(() => {
    return DISHES_DATA.filter((dish) => {
      // 1. Search Query
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchName = dish.name.toLowerCase().includes(query);
        const matchEng = dish.englishName.toLowerCase().includes(query);
        const matchDesc = dish.description.toLowerCase().includes(query);
        const matchIng = dish.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(query)
        );
        if (!matchName && !matchEng && !matchDesc && !matchIng) return false;
      }

      // Filter by Intent
      if (intent === 'cook_home' && !dish.isHomeCooked) return false;
      if (intent === 'eat_out' && dish.isHomeCooked) return false;

      // Tab Filter
      if (activeTab !== 'all') {
        if (intent === 'cook_home' && ['man', 'canh', 'xao', 'an_vat'].includes(activeTab)) {
          if (dish.dishType !== activeTab) return false;
        }
        if (intent === 'eat_out' && ['an_sang', 'an_trua', 'an_toi'].includes(activeTab)) {
          // Simplistic mapping for Eat Out
          if (activeTab === 'an_sang' && dish.mealCategory !== 'breakfast') return false;
          if (activeTab === 'an_trua' && dish.mealCategory !== 'lunch') return false;
          if (activeTab === 'an_toi' && dish.mealCategory !== 'dinner') return false;
        }
      }

      // 3. Sub-Tag Filter
      if (activeTag !== 'all') {
        if (activeTag === 'quick') {
          if (!dish.tags.includes('quick') && dish.cookTime > 20) return false;
        } else if (activeTag === 'healthy') {
          if (!dish.tags.includes('healthy') && !dish.isHealthy) return false;
        } else if (activeTag === 'budget') {
          if (!dish.tags.includes('budget') && dish.calories > 500) return false;
        } else {
          if (!dish.tags.includes(activeTag)) return false;
        }
      }

      return true;
    });
  }, [searchTerm, activeTab, activeTag]);

  const favoriteDishes = useMemo(() => {
    return DISHES_DATA.filter((d) => favoriteIds.includes(d.id));
  }, [favoriteIds]);

  const handleSelectDish = (dish, tab = 'cook') => {
    setSelectedDish(dish);
    setDetailInitialTab(tab);
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    setActiveTag('all');
    // Smooth reset scroll to top of content without jump
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabTitles = {
    man: { title: 'Món Mặn Đưa Cơm 🍲', subtitle: 'Kho, rim, chiên, rán - linh hồn của mâm cơm gia đình Việt' },
    canh: { title: 'Canh Thanh Mát & Bổ Dưỡng 🥣', subtitle: 'Giải nhiệt, dễ tiêu, ngọt thanh từ xương nạc và rau củ tươi' },
    xao: { title: 'Rau Xanh Cân Bằng 🥬', subtitle: 'Xào tỏi, luộc chấm kho quẹt giúp cân bằng dinh dưỡng, nhiều chất xơ' },
    an_vat: { title: 'Ăn Vặt & Tráng Miệng 🍮', subtitle: 'Gỏi cuốn, chè, đồ ngọt giải lao nhẹ nhàng' },
    an_sang: { title: 'Ăn Sáng Năng Lượng 🌅', subtitle: 'Bắt đầu ngày mới với phở, bún, bánh mì chảo' },
    an_trua: { title: 'Bữa Trưa Nhanh Gọn ☀️', subtitle: 'Cơm tấm, bún chả - nạp năng lượng buổi trưa' },
    an_toi: { title: 'Bữa Tối Tụ Tập 🌙', subtitle: 'Ăn ngoài cùng bạn bè và gia đình' }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      {/* Top Navigation Bar with Pure Tab-Based Switcher */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onOpenGacha={() => setIsGachaOpen(true)}
        onOpenFridge={() => setIsFridgeOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenGroceryList={() => setIsGroceryOpen(true)}
        favoriteCount={favoriteIds.length}
        groceryCount={groceryItems.length}
        intent={intent}
        setIntent={(val) => {
          setIntent(val);
          setActiveTab('all');
        }}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main Content Area (Rendered Strictly According to Active Tab) */}
      <main className="flex-1">
        
        {/* CASE 1: SEARCH ACTIVE */}
        {searchTerm.trim() ? (
          <div key="search-view" className="animate-tab-enter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Tìm kiếm</span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Kết quả cho: "{searchTerm}"
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                Tìm thấy <strong className="text-brand-600">{displayDishes.length}</strong> món
              </p>
            </div>

            {displayDishes.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
                <UtensilsCrossed className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-stone-800">Không tìm thấy món ăn nào</h3>
                <p className="text-xs text-stone-500 mt-1">Thử gõ món khác như phở, bún chả, cơm tấm...</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
                >
                  Xóa tìm kiếm
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 pb-16">
                {displayDishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    onSelectDish={handleSelectDish}
                    isFavorite={favoriteIds.includes(dish.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* CASE 2: TAB ROUTING */
          <div key={activeTab} className="animate-tab-enter">
            {/* TAB: 'all' (Full Rich Homepage) */}
            {activeTab === 'all' && (
              <div className="space-y-6">
                <HeroSection
                  onOpenGacha={() => setIsGachaOpen(true)}
                  onOpenFridge={() => setIsFridgeOpen(true)}
                  onExploreMeals={() => handleSelectTab(timeContext?.suggestedTab || 'breakfast')}
                  timeContext={timeContext}
                />

                <RecipeOfDay dish={recipeOfDayDish} onSelectDish={handleSelectDish} />

                <CategoryBanners
                  onSelectCategory={(cat) => handleSelectTab(cat)}
                  onSelectTag={(tag) => handleSelectTab(tag)}
                />

                {/* Explore Grid Heading */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                        KHÁM PHÁ THỰC ĐƠN
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading">
                        {intent === 'cook_home' ? 'Gợi Ý Món Ngon Cho Gia Đình' : 'Địa Điểm & Món Ngon Bên Ngoài'}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-500 font-medium">
                      <strong className="text-brand-600 font-bold">{displayDishes.length}</strong> gợi ý
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    {QUICK_TAGS.map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => setActiveTag(tag.id)}
                        className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          activeTag === tag.id
                            ? 'bg-stone-900 text-white'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                        }`}
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {displayDishes.map((dish) => (
                      <DishCard
                        key={dish.id}
                        dish={dish}
                        onSelectDish={handleSelectDish}
                        isFavorite={favoriteIds.includes(dish.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* TAB: MEALS & TOPIC TABS */}
            {['man', 'canh', 'xao', 'an_vat', 'an_sang', 'an_trua', 'an_toi'].includes(activeTab) && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-16">
                {/* Tab Clean Header */}
                <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      CHUYÊN MỤC
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading">
                      {tabTitles[activeTab]?.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      {tabTitles[activeTab]?.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-500 font-medium whitespace-nowrap">
                    Có <strong className="text-brand-600 font-bold">{displayDishes.length}</strong> món phù hợp
                  </p>
                </div>

                {/* Sub-Tag Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  <span className="text-xs font-bold text-stone-400 uppercase mr-1 hidden sm:inline-block">Lọc:</span>
                  {QUICK_TAGS.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => setActiveTag(tag.id)}
                      className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        activeTag === tag.id
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                      }`}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>

                {/* Grid of Dishes for this Tab */}
                {displayDishes.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
                    <UtensilsCrossed className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                    <p className="text-sm font-bold text-stone-700">Chưa có món nào khớp bộ lọc</p>
                    <button
                      onClick={() => setActiveTag('all')}
                      className="mt-3 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
                    >
                      Xem tất cả trong mục này
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {displayDishes.map((dish) => (
                      <DishCard
                        key={dish.id}
                        dish={dish}
                        onSelectDish={handleSelectDish}
                        isFavorite={favoriteIds.includes(dish.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Navigation (Synced with Tab Switcher) */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenGacha={() => setIsGachaOpen(true)}
        onOpenFridge={() => setIsFridgeOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        favoriteCount={favoriteIds.length}
      />

      {/* MODALS */}
      {/* 1. Dish Detail Modal */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          initialTab={detailInitialTab}
          onClose={() => setSelectedDish(null)}
          isFavorite={favoriteIds.includes(selectedDish.id)}
          onToggleFavorite={toggleFavorite}
          onAddIngredientsToGrocery={handleAddDishIngredientsToGrocery}
        />
      )}

      {/* 2. CS:GO Case Opening Gacha Modal */}
      {isGachaOpen && (
        <GachaModal
          dishes={DISHES_DATA}
          onClose={() => setIsGachaOpen(false)}
          onSelectDish={handleSelectDish}
        />
      )}

      {/* 3. Smart Fridge Modal */}
      {isFridgeOpen && (
        <FridgeModal
          dishes={DISHES_DATA}
          onClose={() => setIsFridgeOpen(false)}
          onSelectDish={handleSelectDish}
          onAddMissingToGrocery={handleAddMissingIngredientsToGrocery}
        />
      )}

      {/* 4. Favorites Modal */}
      {isFavoritesOpen && (
        <FavoritesModal
          favorites={favoriteDishes}
          onClose={() => setIsFavoritesOpen(false)}
          onSelectDish={handleSelectDish}
          onRemoveFavorite={removeFavorite}
        />
      )}

      {/* 5. Smart Grocery List Modal */}
      {isGroceryOpen && (
        <GroceryListModal
          items={groceryItems}
          onClose={() => setIsGroceryOpen(false)}
          onToggleItem={handleToggleGroceryItem}
          onRemoveItem={handleRemoveGroceryItem}
          onAddItem={handleAddCustomGroceryItem}
          onClearAll={handleClearGrocery}
        />
      )}
    </div>
  );
}
