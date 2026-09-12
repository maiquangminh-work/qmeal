import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Check, 
  Trash2, 
  Copy, 
  Plus, 
  CheckCircle2, 
  Circle,
  Share2,
  Sparkles
} from 'lucide-react';

export default function GroceryListModal({
  items = [],
  onClose,
  onToggleItem,
  onRemoveItem,
  onAddItem,
  onClearAll
}) {
  const [customInput, setCustomInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    onAddItem({
      id: `grocery-custom-${Date.now()}`,
      name: customInput.trim(),
      amount: '1 phần',
      category: 'Khác',
      checked: false
    });
    setCustomInput('');
  };

  const totalCount = items.length;
  const completedCount = items.filter((i) => i.checked).length;
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Copy shopping checklist to clipboard (for Zalo, SMS, Notes)
  const handleCopyClipboard = () => {
    if (items.length === 0) return;
    let text = `🛒 DANH SÁCH ĐI CHỢ - QMEAL\n`;
    text += `---------------------------------\n`;
    items.forEach((item) => {
      text += `${item.checked ? '✅' : '⬜'} ${item.name} (${item.amount})\n`;
    });
    text += `---------------------------------\n`;
    text += `Tổng cộng: ${totalCount} món • Hoàn thành: ${completedCount}/${totalCount}`;

    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Group items by category
  const categories = ['Thịt & Đạm', 'Rau củ', 'Gia vị', 'Đồ chua & Phụ', 'Khác'];
  const groupedItems = categories.reduce((acc, cat) => {
    const list = items.filter((item) => (item.category || 'Khác') === cat);
    if (list.length > 0) acc[cat] = list;
    return acc;
  }, {});

  // Any remaining categories
  items.forEach((item) => {
    const cat = item.category || 'Khác';
    if (!categories.includes(cat)) {
      if (!groupedItems[cat]) groupedItems[cat] = [];
      groupedItems[cat].push(item);
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-brand-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl font-heading text-stone-900 flex items-center gap-2">
                <span>Danh Sách Đi Chợ Thông Minh</span>
              </h3>
              <p className="text-xs text-stone-500">
                Tích chọn khi mua tại chợ/siêu thị hoặc copy gửi cho người thân
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-stone-200/70 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {totalCount > 0 && (
          <div className="px-4 sm:px-6 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs font-semibold text-stone-600 mb-1">
                <span>Tiến độ mua sắm</span>
                <span className="text-brand-600 font-bold">{completedCount}/{totalCount} món ({progress}%)</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyClipboard}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-bold flex items-center gap-1.5 shadow-xs"
                title="Sao chép danh sách gửi qua Zalo / Tin nhắn"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Đã sao chép!' : 'Copy Zalo'}</span>
              </button>

              <button
                onClick={onClearAll}
                className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                title="Xoá toàn bộ danh sách"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Add custom item form */}
          <form onSubmit={handleAddCustom} className="flex gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Thêm món cần mua (ví dụ: Hành boa-rô, Dầu ăn, Nước mắm...)"
              className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm</span>
            </button>
          </form>

          {totalCount === 0 ? (
            <div className="text-center py-12 space-y-2">
              <ShoppingCart className="w-12 h-12 text-stone-300 mx-auto" />
              <p className="font-bold text-stone-700">Giỏ đi chợ của bạn đang trống</p>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Hãy bấm "Thêm Vào Danh Sách Đi Chợ" ở các Mâm cơm gia đình hoặc thêm nhanh ở trên nhé!
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {Object.entries(groupedItems).map(([categoryName, groupItems]) => (
                <div key={categoryName} className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100 pb-1 flex items-center justify-between">
                    <span>{categoryName}</span>
                    <span>{groupItems.length} món</span>
                  </div>

                  <div className="space-y-1.5">
                    {groupItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onToggleItem(item.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                          item.checked
                            ? 'bg-stone-50 border-stone-200 text-stone-400 line-through'
                            : 'bg-white border-stone-200 hover:border-brand-300 text-stone-800 shadow-xs'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.checked ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-stone-400 flex-shrink-0" />
                          )}
                          <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                            {item.amount}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveItem(item.id);
                            }}
                            className="p-1 text-stone-300 hover:text-rose-500 rounded-md transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Dữ liệu tự động lưu vào trình duyệt của bạn
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs sm:text-sm hover:bg-stone-800 transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
