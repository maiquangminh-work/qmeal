'use client';
import { useStore } from '@/store/useStore';
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import IngredientAutocomplete from '@/components/ui/IngredientAutocomplete';
import { removeVietnameseDiacritics } from '@/data/masterIngredients';
import { 
  ShoppingCart, 
  Copy, 
  Check, 
  Trash2, 
  Plus, 
  Store, 
  Utensils, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Share2
} from 'lucide-react';

export default function GroceryPage() {
  const {
    groceryItems,
    toggleGroceryItem,
    removeGroceryItem,
    clearCompletedGrocery,
    clearAllGrocery,
    addIngredientsToGrocery,
    language
  } = useStore();

  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<'aisles' | 'recipes'>('aisles');
  const [copied, setCopied] = useState(false);
  const [showPurchased, setShowPurchased] = useState(true);

  useEffect(() => {
    setMounted(true);
    document.title = language === 'vi' ? 'Giỏ Đi Chợ Thông Minh | QMeal' : 'Grocery List | QMeal';
  }, [language]);

  const currentLang = mounted ? language : 'vi';

  const items = mounted ? groceryItems : [];
  const toBuyItems = useMemo(() => items.filter(i => !i.checked), [items]);
  const purchasedItems = useMemo(() => items.filter(i => i.checked), [items]);
  const progressPercent = items.length > 0 ? Math.round((purchasedItems.length / items.length) * 100) : 0;

  // Categorize an ingredient into Store Aisles
  const getAisleForIngredient = (name: string): 'meat' | 'produce' | 'dry' => {
    const clean = removeVietnameseDiacritics(name);
    
    // Meat, seafood, eggs
    if (
      clean.includes('thit') || clean.includes('heo') || clean.includes('lon') || 
      clean.includes('bo') || clean.includes('ga') || clean.includes('vit') || 
      clean.includes('suon') || clean.includes('gio') || clean.includes('cha') || 
      clean.includes('tom') || clean.includes('cua') || clean.includes('ca ') || 
      clean.includes('muc') || clean.includes('ngao') || clean.includes('oc') || 
      clean.includes('trung') || clean.includes('hen') || clean.includes('luon')
    ) {
      return 'meat';
    }

    // Produce (Vegetables, roots, herbs, mushrooms)
    if (
      clean.includes('rau') || clean.includes('cai') || clean.includes('ca chua') || 
      clean.includes('hanh') || clean.includes('toi') || clean.includes('ot') || 
      clean.includes('gung') || clean.includes('sa') || clean.includes('bi') || 
      clean.includes('bau') || clean.includes('muop') || clean.includes('kho qua') || 
      clean.includes('khoai') || clean.includes('ca rot') || clean.includes('nam') || 
      clean.includes('moc nhi') || clean.includes('dua leo') || clean.includes('gia') || 
      clean.includes('chanh') || clean.includes('sau') || clean.includes('me') ||
      clean.includes('ngo') || clean.includes('sen') || clean.includes('mang')
    ) {
      return 'produce';
    }

    // Dry goods, staples & spices
    return 'dry';
  };

  // Group to-buy items by Store Aisles
  const groupedByAisle = useMemo(() => {
    const groups: {
      meat: typeof items;
      produce: typeof items;
      dry: typeof items;
    } = {
      produce: [],
      meat: [],
      dry: []
    };

    toBuyItems.forEach(item => {
      const aisle = getAisleForIngredient(item.name);
      groups[aisle].push(item);
    });

    return groups;
  }, [toBuyItems]);

  // Group to-buy items by Recipe Source
  const groupedByRecipe = useMemo(() => {
    return toBuyItems.reduce((acc, item) => {
      const key = item.recipeTitle || 'Nguyên liệu tự thêm';
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {} as Record<string, typeof items>);
  }, [toBuyItems]);

  // Copy to Zalo / SMS format
  const handleCopyZalo = () => {
    if (items.length === 0) return;

    let text = `🛒 DANH SÁCH ĐI CHỢ - QMEAL (${toBuyItems.length} món cần mua)\n\n`;

    if (groupedByAisle.produce.length > 0) {
      text += `🥬 QUẦY RAU CỦ & NẤM:\n`;
      groupedByAisle.produce.forEach(i => {
        text += `- ${i.name}: ${i.amount} (${i.recipeTitle})\n`;
      });
      text += `\n`;
    }

    if (groupedByAisle.meat.length > 0) {
      text += `🥩 QUẦY THỊT, CÁ & TRỨNG:\n`;
      groupedByAisle.meat.forEach(i => {
        text += `- ${i.name}: ${i.amount} (${i.recipeTitle})\n`;
      });
      text += `\n`;
    }

    if (groupedByAisle.dry.length > 0) {
      text += `🧂 QUẦY GIA VỊ, ĐẬU & ĐỒ KHÔ:\n`;
      groupedByAisle.dry.forEach(i => {
        text += `- ${i.name}: ${i.amount} (${i.recipeTitle})\n`;
      });
      text += `\n`;
    }

    text += `👉 Tạo từ ứng dụng gợi ý món ngon QMeal`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleAddCustomIngredient = (name: string) => {
    addIngredientsToGrocery('Tự thêm ngoài chợ', [{ name, amount: 'Đủ dùng' }]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 min-h-[80vh]">
      {/* Header */}
      <div className="mb-6 pb-6 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-600 font-bold">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Giỏ Đi Chợ Thông Minh
              </h1>
              <p className="text-xs text-stone-500 mt-0.5">
                Tự động gom nguyên liệu theo quầy hàng chợ dân sinh & siêu thị
              </p>
            </div>
          </div>
        </div>

        {/* Global Actions */}
        {items.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyZalo}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              title="Sao chép danh sách phân nhóm để dán vào Zalo/SMS gửi người thân"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Đã sao chép Zalo!' : 'Copy gửi Zalo'}</span>
            </button>

            {purchasedItems.length > 0 && (
              <button
                onClick={clearCompletedGrocery}
                className="px-3 py-2 rounded-xl text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors cursor-pointer"
              >
                Xóa đã mua ({purchasedItems.length})
              </button>
            )}

            <button
              onClick={clearAllGrocery}
              className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 border border-stone-200 transition-colors cursor-pointer"
              title="Xóa toàn bộ giỏ đi chợ"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Quick Add Custom Ingredient Bar with Autocomplete */}
      <div className="mb-6 bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5 text-orange-600" />
          <span>Thêm nhanh nguyên liệu vào giỏ đi chợ</span>
        </label>
        <IngredientAutocomplete
          onSelect={handleAddCustomIngredient}
          alreadySelected={items.map(i => i.name)}
          placeholder="Gõ tên nguyên liệu cần mua thêm... (VD: hành lá, cà chua, thịt ba chỉ)"
        />
      </div>

      {items.length > 0 ? (
        <div className="space-y-6">
          {/* Progress Tracker & View Switcher */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-800">
                <span>Tiến độ đi chợ:</span>
                <span className="text-orange-600 font-extrabold">{purchasedItems.length} / {items.length} món</span>
                <span className="text-stone-400">({progressPercent}%)</span>
              </div>

              {/* View Mode Toggle: Aisles vs Recipes */}
              <div className="flex items-center bg-stone-100 p-1 rounded-xl text-xs font-bold self-start sm:self-auto border border-stone-200/60">
                <button
                  onClick={() => setViewMode('aisles')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'aisles'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Theo Quầy Hàng</span>
                </button>
                <button
                  onClick={() => setViewMode('recipes')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'recipes'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Theo Món Ăn</span>
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* MAIN TO-BUY SECTION */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <span>Cần Mua Ngay</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-bold">
                  {toBuyItems.length}
                </span>
              </h2>
            </div>

            {viewMode === 'aisles' ? (
              /* Aisle-based organization */
              <div className="space-y-4">
                {/* 1. Produce Aisle */}
                {groupedByAisle.produce.length > 0 && (
                  <div className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden">
                    <div className="bg-emerald-50/70 px-5 py-2.5 border-b border-emerald-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
                        <span className="text-lg">🥬</span>
                        <span>Quầy Rau Củ Quả & Nấm ({groupedByAisle.produce.length})</span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold">Ghé hàng rau</span>
                    </div>

                    <div className="divide-y divide-stone-100">
                      {groupedByAisle.produce.map(item => (
                        <GroceryItemRow 
                          key={item.id} 
                          item={item} 
                          onToggle={toggleGroceryItem} 
                          onRemove={removeGroceryItem} 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Meat & Seafood Aisle */}
                {groupedByAisle.meat.length > 0 && (
                  <div className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden">
                    <div className="bg-rose-50/70 px-5 py-2.5 border-b border-rose-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-900">
                        <span className="text-lg">🥩</span>
                        <span>Quầy Thịt, Cá & Thủy Hải Sản ({groupedByAisle.meat.length})</span>
                      </div>
                      <span className="text-[11px] text-rose-700 font-semibold">Ghé hàng thịt tươi</span>
                    </div>

                    <div className="divide-y divide-stone-100">
                      {groupedByAisle.meat.map(item => (
                        <GroceryItemRow 
                          key={item.id} 
                          item={item} 
                          onToggle={toggleGroceryItem} 
                          onRemove={removeGroceryItem} 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Dry Goods & Pantry Aisle */}
                {groupedByAisle.dry.length > 0 && (
                  <div className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden">
                    <div className="bg-amber-50/70 px-5 py-2.5 border-b border-amber-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-900">
                        <span className="text-lg">🧂</span>
                        <span>Quầy Đồ Khô, Đậu & Gia Vị ({groupedByAisle.dry.length})</span>
                      </div>
                      <span className="text-[11px] text-amber-700 font-semibold">Ghé hàng khô / bún</span>
                    </div>

                    <div className="divide-y divide-stone-100">
                      {groupedByAisle.dry.map(item => (
                        <GroceryItemRow 
                          key={item.id} 
                          item={item} 
                          onToggle={toggleGroceryItem} 
                          onRemove={removeGroceryItem} 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {toBuyItems.length === 0 && (
                  <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 text-stone-500">
                    🎉 Tuyệt vời! Bạn đã mua đủ toàn bộ nguyên liệu.
                  </div>
                )}
              </div>
            ) : (
              /* Recipe-based organization */
              <div className="space-y-4">
                {Object.entries(groupedByRecipe).map(([recipeTitle, recipeItems]) => (
                  <div key={recipeTitle} className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden">
                    <div className="bg-stone-50 px-5 py-2.5 border-b border-stone-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-3.5 h-3.5 text-orange-600" />
                        <span className="font-bold text-xs sm:text-sm text-stone-800">{recipeTitle}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-stone-500">
                        {recipeItems.length} nguyên liệu
                      </span>
                    </div>

                    <div className="divide-y divide-stone-100">
                      {recipeItems.map(item => (
                        <GroceryItemRow 
                          key={item.id} 
                          item={item} 
                          onToggle={toggleGroceryItem} 
                          onRemove={removeGroceryItem} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PURCHASED / COMPLETED SECTION (Collapsible) */}
          {purchasedItems.length > 0 && (
            <div className="mt-8 bg-stone-100/60 rounded-2xl border border-stone-200/80 overflow-hidden">
              <button
                onClick={() => setShowPurchased(!showPurchased)}
                className="w-full px-5 py-3 flex items-center justify-between text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Đã mua xong ({purchasedItems.length} món)</span>
                </div>
                {showPurchased ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showPurchased && (
                <div className="divide-y divide-stone-200/60 bg-white/50 border-t border-stone-200/60">
                  {purchasedItems.map(item => (
                    <GroceryItemRow 
                      key={item.id} 
                      item={item} 
                      onToggle={toggleGroceryItem} 
                      onRemove={removeGroceryItem} 
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-xl mx-auto p-8">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner text-orange-600">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-1">Giỏ đi chợ của bạn đang trống</h2>
          <p className="text-stone-500 text-xs mb-6 max-w-sm mx-auto leading-relaxed">
            Khi xem bất kỳ công thức nào, bấm nút &ldquo;Thêm vào Giỏ Đi Chợ&rdquo; để hệ thống tự động sắp xếp theo từng quầy hàng giúp bạn.
          </p>
          <Link 
            href="/"
            className="inline-block bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-bold py-2.5 px-6 rounded-xl shadow-md shadow-orange-600/20 text-xs transition-all"
          >
            Khám phá món ngon ngay →
          </Link>
        </div>
      )}
    </div>
  );
}

// Sub-component: Individual Item Row
function GroceryItemRow({
  item,
  onToggle,
  onRemove
}: {
  item: any;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div 
      onClick={() => onToggle(item.id)}
      className={`flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-stone-50 transition-colors select-none group ${
        item.checked ? 'bg-stone-50/70' : ''
      }`}
    >
      <div className="flex items-center gap-3.5 flex-1 min-w-0">
        <input 
          type="checkbox" 
          checked={item.checked} 
          onChange={() => {}} 
          className="w-4 h-4 rounded text-orange-600 accent-orange-600 cursor-pointer flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <span className={`text-xs sm:text-sm font-semibold transition-all block truncate ${
            item.checked ? 'line-through text-stone-400' : 'text-stone-800 group-hover:text-orange-700'
          }`}>
            {item.name}
          </span>
          <span className="text-[10px] text-stone-400 block truncate">
            {item.recipeTitle}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 ml-3 flex-shrink-0">
        <span className="text-[11px] font-bold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-lg border border-stone-200/60">
          {item.amount}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(item.id);
          }}
          className="text-stone-300 hover:text-red-500 p-1 rounded-md transition-colors"
          title="Xóa nguyên liệu"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
