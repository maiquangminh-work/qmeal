import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SavedRecipe {
  id: number | string;
  title: string;
  image: string;
  time: string;
  rating: number | string;
  tags: string[];
}

export interface GroceryItem {
  id: string;
  name: string;
  amount: string;
  recipeTitle: string;
  checked: boolean;
}

export interface UserProfile {
  name: string;
  avatarUrl?: string;
}

interface UserState {
  favorites: SavedRecipe[];
  toggleFavorite: (recipe: SavedRecipe | { id: number | string; [key: string]: any }) => void;
  isFavorite: (id: number | string) => boolean;
  
  groceryItems: GroceryItem[];
  addIngredientsToGrocery: (recipeTitle: string, ingredients: any[]) => void;
  toggleGroceryItem: (id: string) => void;
  removeGroceryItem: (id: string) => void;
  clearCompletedGrocery: () => void;
  clearAllGrocery: () => void;

  pantryIngredients: string[];
  setPantryIngredients: (list: string[]) => void;
  togglePantryIngredient: (item: string) => void;

  userProfile: UserProfile;
  setUserProfile: (patch: Partial<UserProfile>) => void;
  isProfileModalOpen: boolean;
  setProfileModalOpen: (open: boolean) => void;

  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;

  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;

  selectedRegion: 'north' | 'central' | 'south' | 'all';
  setRegion: (region: 'north' | 'central' | 'south' | 'all') => void;

  userLocationName: string;
  userDistrict?: string;
  userWard?: string;
  isLocationAuto: boolean;
  setUserLocation: (region: 'north' | 'central' | 'south' | 'all', cityName?: string, isAuto?: boolean) => void;
  setDetailedLocation: (region: 'north' | 'central' | 'south' | 'all', fullAddress: string, district?: string, ward?: string, isAuto?: boolean) => void;

  selectedDiningMode: 'all' | 'home_cook' | 'eat_out';
  setDiningMode: (mode: 'all' | 'home_cook' | 'eat_out') => void;

  viewHistory: string[];
  recordRecipeView: (id: string | number) => void;
}

export const useStore = create<UserState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (item) => set((state) => {
        const idStr = String(item.id);
        const exists = state.favorites.some(f => String(f.id) === idStr);
        if (exists) {
          return { favorites: state.favorites.filter(f => String(f.id) !== idStr) };
        } else {
          const newFav: SavedRecipe = {
            id: item.id,
            title: item.title || 'Món ăn ngon',
            image: item.image || '',
            time: item.time || '30 min',
            rating: item.rating || 4.8,
            tags: item.tags || []
          };
          return { favorites: [...state.favorites, newFav] };
        }
      }),
      isFavorite: (id) => get().favorites.some(f => String(f.id) === String(id)),

      groceryItems: [],
      addIngredientsToGrocery: (recipeTitle, ingredients) => set((state) => {
        const newItems: GroceryItem[] = ingredients
          .map((ing, idx) => {
            const rawName = typeof ing.name === 'string' 
              ? ing.name 
              : (ing.name?.vi || ing.name?.en || '');
            if (!rawName.trim()) return null;

            return {
              id: `${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 4)}`,
              name: rawName.trim(),
              amount: ing.measure || ing.amount || 'Đủ dùng',
              recipeTitle: recipeTitle || 'Món ăn',
              checked: false,
            };
          })
          .filter(Boolean) as GroceryItem[];

        return { groceryItems: [...state.groceryItems, ...newItems] };
      }),
      toggleGroceryItem: (id) => set((state) => ({
        groceryItems: state.groceryItems.map(item =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      })),
      removeGroceryItem: (id) => set((state) => ({
        groceryItems: state.groceryItems.filter(item => item.id !== id)
      })),
      clearCompletedGrocery: () => set((state) => ({
        groceryItems: state.groceryItems.filter(item => !item.checked)
      })),
      clearAllGrocery: () => set({ groceryItems: [] }),

      pantryIngredients: ['Thịt ba chỉ (ba rọi)', 'Trứng gà', 'Cà chua'],
      setPantryIngredients: (list) => set({ pantryIngredients: list }),
      togglePantryIngredient: (item) => set((state) => {
        const exists = state.pantryIngredients.includes(item);
        if (exists) {
          return { pantryIngredients: state.pantryIngredients.filter(i => i !== item) };
        } else {
          return { pantryIngredients: [...state.pantryIngredients, item] };
        }
      }),

      userProfile: {
        name: 'Quang Minh',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      },
      setUserProfile: (patch) => set((state) => ({
        userProfile: { ...state.userProfile, ...patch }
      })),
      isProfileModalOpen: false,
      setProfileModalOpen: (open) => set({ isProfileModalOpen: open }),

      isSidebarOpen: false,
      setSidebarOpen: (open) => set({ isSidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      isSidebarCollapsed: false,
      toggleSidebarCollapsed: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),

      language: 'vi',
      setLanguage: (lang) => set({ language: lang }),

      selectedRegion: 'north',
      setRegion: (region) => set({ selectedRegion: region, isLocationAuto: false }),

      userLocationName: 'Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
      userDistrict: 'Quận Cầu Giấy',
      userWard: 'Phường Dịch Vọng Hậu',
      isLocationAuto: true,
      setUserLocation: (region, cityName, isAuto = true) => set({
        selectedRegion: region,
        userLocationName: cityName || (region === 'north' ? 'Hà Nội & Bắc Bộ' : region === 'central' ? 'Đà Nẵng & Miền Trung' : region === 'south' ? 'Sài Gòn & Nam Bộ' : 'Toàn Quốc'),
        isLocationAuto: isAuto
      }),
      setDetailedLocation: (region, fullAddress, district, ward, isAuto = false) => set({
        selectedRegion: region,
        userLocationName: fullAddress,
        userDistrict: district,
        userWard: ward,
        isLocationAuto: isAuto
      }),

      selectedDiningMode: 'all',
      setDiningMode: (mode) => set({ selectedDiningMode: mode }),

      viewHistory: [],
      recordRecipeView: (id) => set((state) => {
        const idStr = String(id);
        const filtered = state.viewHistory.filter(hId => hId !== idStr);
        return { viewHistory: [idStr, ...filtered].slice(0, 20) };
      }),
    }),
    {
      name: 'qmeal-user-preferences',
    }
  )
);
