'use client';
import { useState, useRef, useEffect } from 'react';
import { MasterIngredient, searchMasterIngredients } from '@/data/masterIngredients';
import { Search, Plus, Sparkles, Check } from 'lucide-react';

interface IngredientAutocompleteProps {
  onSelect: (ingredientName: string) => void;
  alreadySelected?: string[];
  placeholder?: string;
  className?: string;
  language?: 'vi' | 'en';
}

export default function IngredientAutocomplete({
  onSelect,
  alreadySelected = [],
  placeholder = 'Gõ nguyên liệu... (VD: thịt bò, tôm, cà chua, nấm hương)',
  className = '',
  language = 'vi',
}: IngredientAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = searchMasterIngredients(query, 8);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (name: string) => {
    onSelect(name);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (suggestions.length + (query ? 1 : 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0 && selectedIndex < suggestions.length) {
        handleSelect(suggestions[selectedIndex].name.vi);
      } else if (query.trim()) {
        handleSelect(query.trim());
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-24 py-3 bg-white border border-stone-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 shadow-2xs outline-none transition-all"
        />
        {query.trim() && (
          <button
            onClick={() => handleSelect(query.trim())}
            className="absolute right-2 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm</span>
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && (suggestions.length > 0 || query.trim()) && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-stone-200 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 max-h-72 overflow-y-auto">
          <div className="p-1.5 space-y-0.5">
            {suggestions.map((item, idx) => {
              const isSelected = alreadySelected.includes(item.name.vi);
              const isHighlighted = selectedIndex === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.name.vi)}
                  disabled={isSelected}
                  className={`w-full px-3 py-2 rounded-lg text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'opacity-40 bg-stone-50 cursor-not-allowed'
                      : isHighlighted
                      ? 'bg-orange-50 text-orange-950 font-semibold'
                      : 'hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base sm:text-lg">{item.icon}</span>
                    <div>
                      <span className="font-semibold text-stone-900">{item.name.vi}</span>
                      <span className="text-xs text-stone-400 ml-2 hidden sm:inline">({item.name.en})</span>
                    </div>
                  </div>

                  {isSelected ? (
                    <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Đã có trong tủ
                    </span>
                  ) : (
                    <span className="text-[11px] text-orange-600 font-medium opacity-80 group-hover:opacity-100">
                      + Chọn
                    </span>
                  )}
                </button>
              );
            })}

            {/* Fallback option if user types custom keyword */}
            {query.trim() && !suggestions.some(s => s.name.vi.toLowerCase() === query.trim().toLowerCase()) && (
              <button
                onClick={() => handleSelect(query.trim())}
                className="w-full px-3 py-2 rounded-lg text-left text-xs sm:text-sm flex items-center gap-2 bg-stone-50 hover:bg-orange-50 text-stone-700 hover:text-orange-900 border-t border-stone-100 transition-colors cursor-pointer font-medium"
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Thêm nguyên liệu tùy chỉnh: <strong>&ldquo;{query.trim()}&rdquo;</strong></span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
