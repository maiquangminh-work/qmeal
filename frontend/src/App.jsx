import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import HeroSection from './components/HeroSection';
import RecipeOfDay from './components/RecipeOfDay';
import CategoryBanners from './components/CategoryBanners';
import MealTabs from './components/MealTabs';
import DishCard from './components/DishCard';
import MealCombosSection from './components/MealCombosSection';
import DishDetailModal from './components/DishDetailModal';
import GachaModal from './components/GachaModal';
import FridgeModal from './components/FridgeModal';
import FavoritesModal from './components/FavoritesModal';
import GroceryListModal from './components/GroceryListModal';
import Footer from './components/Footer';
import { DISHES_DATA } from './data/dishes';
import { Sparkles, UtensilsCrossed } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMealCategory, setActiveMealCategory] = useState('all');
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

  // Filtered dishes list
  const filteredDishes = useMemo(() => {
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

      // 2. Meal Category (Breakfast / Lunch / Snack / Dinner)
      if (activeMealCategory !== 'all' && dish.mealCategory !== activeMealCategory) {
        return false;
      }

      // 3. Quick Tag Filter
      if (activeTag !== 'all') {
        if (!dish.tags.includes(activeTag)) return false;
      }

      return true;
    });
  }, [searchTerm, activeMealCategory, activeTag]);

  const favoriteDishes = useMemo(() => {
    return DISHES_DATA.filter((d) => favoriteIds.includes(d.id));
  }, [favoriteIds]);

  const handleSelectDish = (dish, tab = 'cook') => {
    setSelectedDish(dish);
    setDetailInitialTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      {/* Top Navigation */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onOpenGacha={() => setIsGachaOpen(true)}
        onOpenFridge={() => setIsFridgeOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenGroceryList={() => setIsGroceryOpen(true)}
        favoriteCount={favoriteIds.length}
        groceryCount={groceryItems.length}
        activeMealCategory={activeMealCategory}
        onSelectMealCategory={setActiveMealCategory}
        activeTag={activeTag}
        onSelectTag={setActiveTag}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-6">
        {/* 1. Hero Section (Inspired by Cook. mockup) */}
        <HeroSection
          onOpenGacha={() => setIsGachaOpen(true)}
          onOpenFridge={() => setIsFridgeOpen(true)}
          onExploreMeals={() => {
            const el = document.getElementById('meals-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Recipe of the Day (Inspired by NomNom mockup) */}
        {!searchTerm && <RecipeOfDay dish={recipeOfDayDish} onSelectDish={handleSelectDish} />}

        {/* 3. Three Category Highlight Banners (NomNom mockup) */}
        {!searchTerm && (
          <CategoryBanners
            onSelectCategory={(cat) => {
              setActiveMealCategory(cat);
              setActiveTag('all');
            }}
            onSelectTag={(tag) => {
              setActiveTag(tag);
              setActiveMealCategory('all');
            }}
          />
        )}

        {/* 4. MÂM CƠM GIA ĐÌNH (Family Meal Combos - New Feature) */}
        {!searchTerm && (
          <MealCombosSection
            onAddComboToGrocery={handleAddComboToGrocery}
            onOpenGroceryList={() => setIsGroceryOpen(true)}
          />
        )}

        {/* 5. Meal Tabs & Filter Pills (Per BRD: 4 Buổi ăn) */}
        <MealTabs
          activeCategory={activeMealCategory}
          onSelectCategory={(cat) => setActiveMealCategory(cat)}
          activeTag={activeTag}
          onSelectTag={(tag) => setActiveTag(tag)}
          dishCount={filteredDishes.length}
        />

        {/* 6. Dish Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {filteredDishes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
              <UtensilsCrossed className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-stone-800">Không tìm thấy món ăn nào</h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                Không có món nào khớp với điều kiện lọc hiện tại. Thử xóa bớt từ khóa tìm kiếm hoặc chọn "Tất cả".
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveMealCategory('all');
                  setActiveTag('all');
                }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold shadow-warm-sm"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {filteredDishes.map((dish) => (
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
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Navigation (Per BRD: Mobile-first) */}
      <MobileBottomNav
        onOpenGacha={() => setIsGachaOpen(true)}
        onOpenFridge={() => setIsFridgeOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        favoriteCount={favoriteIds.length}
      />

      {/* MODALS */}
      {/* 1. Dish Detail Modal with Dual Mode (Cook vs Eat Out with Maps) */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          initialTab={detailInitialTab}
          onClose={() => setSelectedDish(null)}
          isFavorite={favoriteIds.includes(selectedDish.id)}
          onToggleFavorite={toggleFavorite}
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
