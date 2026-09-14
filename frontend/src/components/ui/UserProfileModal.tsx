'use client';
import { useState, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { X, Upload, Sparkles, Check, RefreshCw, Camera } from 'lucide-react';

const PRESET_EMOJIS = [
  { emoji: '👨‍🍳', label: 'Bếp Trưởng' },
  { emoji: '👩‍🍳', label: 'Nữ Đầu Bếp' },
  { emoji: '🍲', label: 'Cơm Nhà' },
  { emoji: '🍜', label: 'Mê Bún Phở' },
  { emoji: '🥩', label: 'Đạo Thịt' },
  { emoji: '🦐', label: 'Hải Sản' },
  { emoji: '🥗', label: 'Healthy' },
  { emoji: '🥑', label: 'Eat Clean' },
  { emoji: '🌶️', label: 'Thích Ăn Cay' },
  { emoji: '🧋', label: 'Ăn Vặt' },
  { emoji: '🥢', label: 'Sành Ẩm Thực' },
  { emoji: '🍱', label: 'Cơm Hộp' },
];

const PRESET_GRADIENTS = [
  { id: 'orange', class: 'from-orange-500 to-amber-500', label: 'Cam QMeal' },
  { id: 'emerald', class: 'from-emerald-500 to-teal-600', label: 'Ngọc Lục Bảo' },
  { id: 'blue', class: 'from-blue-500 to-indigo-600', label: 'Biển Sâu' },
  { id: 'purple', class: 'from-purple-500 to-pink-500', label: 'Tím Thạch Anh' },
  { id: 'rose', class: 'from-rose-500 to-red-600', label: 'Đỏ Ruby' },
  { id: 'stone', class: 'from-stone-700 to-stone-900', label: 'Than Chì' },
];

const ROLE_BADGES = [
  'Yêu Bếp Việt',
  'Bếp Trưởng Gia Đình',
  'Tín Đồ Healthy',
  'Đạo Thịt Nướng',
  'Sành Ăn Phố Cổ',
  'Nấu Ăn Cấp Tốc',
];

export default function UserProfileModal() {
  const { userProfile, setUserProfile, isProfileModalOpen, setProfileModalOpen } = useStore();
  
  const [tab, setTab] = useState<'emoji' | 'custom'>('emoji');
  const [name, setName] = useState(userProfile.name);
  const [roleBadge, setRoleBadge] = useState(userProfile.roleBadge || 'Yêu Bếp Việt');
  const [selectedEmoji, setSelectedEmoji] = useState(userProfile.avatarType === 'emoji' ? userProfile.avatarValue : '👨‍🍳');
  const [selectedBg, setSelectedBg] = useState(userProfile.avatarBg || 'from-orange-500 to-amber-500');
  const [customUrl, setCustomUrl] = useState(userProfile.avatarType === 'custom' ? userProfile.avatarValue : '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isProfileModalOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Limit file size to 2MB
      if (file.size > 2 * 1024 * 1024) {
        alert('Vui lòng chọn ảnh có kích thước dưới 2MB!');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomUrl(reader.result);
          setTab('custom');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (tab === 'custom' && customUrl.trim()) {
      setUserProfile({
        name: name.trim() || 'Bếp Trưởng QMeal',
        roleBadge,
        avatarType: 'custom',
        avatarValue: customUrl.trim(),
      });
    } else {
      setUserProfile({
        name: name.trim() || 'Bếp Trưởng QMeal',
        roleBadge,
        avatarType: 'emoji',
        avatarValue: selectedEmoji,
        avatarBg: selectedBg,
      });
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setProfileModalOpen(false);
    }, 600);
  };

  const handleReset = () => {
    setName('Bếp Trưởng QMeal');
    setRoleBadge('Yêu Bếp Việt');
    setSelectedEmoji('👨‍🍳');
    setSelectedBg('from-orange-500 to-amber-500');
    setCustomUrl('');
    setTab('emoji');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 flex items-center gap-2">
              <span>🧑‍🍳</span>
              <span>Hồ Sơ & Avatar Cá Nhân</span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">Tùy biến phong cách ẩm thực và diện mạo của bạn</p>
          </div>
          <button 
            onClick={() => setProfileModalOpen(false)}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
          {/* Live Preview Card */}
          <div className="bg-gradient-to-br from-stone-50 to-orange-50/40 p-4 rounded-2xl border border-stone-200/80 flex items-center gap-4">
            <div className="relative">
              {tab === 'custom' && customUrl ? (
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 shadow-md">
                  <img src={customUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-tr ${selectedBg} text-white text-3xl shadow-md border-2 border-white`}>
                  {selectedEmoji}
                </div>
              )}
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-stone-900 text-base truncate">{name || 'Bếp Trưởng QMeal'}</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                {roleBadge}
              </span>
              <p className="text-[11px] text-stone-400 mt-0.5">Hiển thị trên thanh điều hướng & trang cá nhân</p>
            </div>
          </div>

          {/* Name & Role Input */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Tên hiển thị:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
                placeholder="Ví dụ: Minh Bếp Trưởng, Mẹ Sóc..."
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-orange-500 text-sm font-semibold text-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Danh hiệu ẩm thực:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {ROLE_BADGES.map((b) => (
                  <button
                    key={b}
                    onClick={() => setRoleBadge(b)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      roleBadge === b
                        ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar Tabs */}
          <div>
            <div className="flex border-b border-stone-200 mb-4">
              <button
                onClick={() => setTab('emoji')}
                className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                  tab === 'emoji'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                ✨ Biểu Tượng & Màu Sắc
              </button>
              <button
                onClick={() => setTab('custom')}
                className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                  tab === 'custom'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                📷 Tải Ảnh Cá Nhân / Dán Link
              </button>
            </div>

            {/* Tab 1: Emoji & Gradients */}
            {tab === 'emoji' && (
              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-bold text-stone-600 mb-2">1. Chọn hình tượng đầu bếp:</span>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {PRESET_EMOJIS.map((item) => (
                      <button
                        key={item.emoji}
                        onClick={() => setSelectedEmoji(item.emoji)}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                          selectedEmoji === item.emoji
                            ? 'bg-orange-50 border-orange-500 shadow-sm scale-105'
                            : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        <span className="text-2xl mb-1">{item.emoji}</span>
                        <span className="text-[10px] text-stone-600 font-semibold truncate w-full text-center">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-stone-600 mb-2">2. Chọn màu nền Gradient:</span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {PRESET_GRADIENTS.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setSelectedBg(g.class)}
                        className={`h-10 rounded-xl bg-gradient-to-tr ${g.class} relative flex items-center justify-center cursor-pointer transition-all shadow-xs ${
                          selectedBg === g.class ? 'ring-2 ring-offset-2 ring-stone-900 scale-105' : 'hover:scale-102'
                        }`}
                        title={g.label}
                      >
                        {selectedBg === g.class && <Check className="w-4 h-4 text-white drop-shadow-sm" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Custom Photo Upload / URL */}
            {tab === 'custom' && (
              <div className="space-y-4">
                {/* Upload Button */}
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-4 border-2 border-dashed border-orange-300 hover:border-orange-500 bg-orange-50/50 hover:bg-orange-50 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all group"
                  >
                    <Upload className="w-6 h-6 text-orange-500 mb-1.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-xs font-bold text-stone-800">Tải ảnh từ điện thoại hoặc máy tính</span>
                    <span className="text-[11px] text-stone-500 mt-0.5">Hỗ trợ JPG, PNG, WEBP (Tối đa 2MB)</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-stone-200"></div>
                  <span className="text-xs text-stone-400 font-semibold">hoặc dán đường link ảnh</span>
                  <div className="flex-1 h-px bg-stone-200"></div>
                </div>

                <div>
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://example.com/my-photo.jpg"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-orange-500 text-xs text-stone-900 font-medium"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 text-xs font-bold text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Mặc định</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setProfileModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              className={`px-6 py-2 rounded-xl text-xs font-bold text-white transition-all cursor-pointer shadow-md flex items-center gap-1.5 ${
                savedSuccess ? 'bg-emerald-600 shadow-emerald-600/20' : 'bg-orange-600 hover:bg-orange-700 shadow-orange-600/20'
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Đã lưu!</span>
                </>
              ) : (
                <>
                  <span>Lưu Hồ Sơ</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
