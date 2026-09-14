'use client';
import { useState, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { X, Upload, Check, Camera, Sparkles, User, Palette } from 'lucide-react';

const PERSONA_AVATARS = [
  { id: 'chef-minh', name: 'Minh Quang', role: 'Bếp trưởng đam mê', file: '/avatars/chef-minh.svg' },
  { id: 'foodie-linh', name: 'Thùy Linh', role: 'Blogger ẩm thực', file: '/avatars/foodie-linh.svg' },
  { id: 'baker-an', name: 'Bảo An', role: 'Thợ làm bánh ngọt', file: '/avatars/baker-an.svg' },
  { id: 'gourmet-khoa', name: 'Đăng Khoa', role: 'Sành ăn phố cổ', file: '/avatars/gourmet-khoa.svg' },
  { id: 'healthy-mai', name: 'Mai Anh', role: 'Tín đồ Eat Clean', file: '/avatars/healthy-mai.svg' },
  { id: 'grill-huy', name: 'Quốc Huy', role: 'Chuyên gia tiệc nướng', file: '/avatars/grill-huy.svg' },
  { id: 'coffee-nam', name: 'Hoàng Nam', role: 'Gu cà phê rang mộc', file: '/avatars/coffee-nam.svg' },
  { id: 'family-lan', name: 'Ngọc Lan', role: 'Mẹ nấu cơm nhà', file: '/avatars/family-lan.svg' },
  { id: 'veggie-ha', name: 'Thu Hà', role: 'Ăn chay thực dưỡng', file: '/avatars/veggie-ha.svg' },
  { id: 'streetfood-tung', name: 'Thanh Tùng', role: 'Đạo ăn vặt Sài Gòn', file: '/avatars/streetfood-tung.svg' },
  { id: 'tea-van', name: 'Khánh Vân', role: 'Thưởng trà & bánh ngọt', file: '/avatars/tea-van.svg' },
  { id: 'homecook-duc', name: 'Việt Đức', role: 'Bếp nhà cuối tuần', file: '/avatars/homecook-duc.svg' }
];

const INITIALS_PALETTES = [
  { id: 'stone', bg: 'bg-stone-900 text-stone-100', name: 'Than chì tối giản' },
  { id: 'terracotta', bg: 'bg-orange-800 text-orange-100', name: 'Đất nung ấm' },
  { id: 'olive', bg: 'bg-emerald-900 text-emerald-100', name: 'Xanh Olive' },
  { id: 'navy', bg: 'bg-slate-900 text-slate-100', name: 'Xanh chàm' },
  { id: 'wine', bg: 'bg-rose-950 text-rose-100', name: 'Rượu vang' },
  { id: 'amber', bg: 'bg-amber-900 text-amber-100', name: 'Hổ phách' }
];

const FOOD_STYLES = [
  'Bếp trưởng gia đình',
  'Yêu ẩm thực truyền thống',
  'Tín đồ Eat Clean & Healthy',
  'Sành ăn món đường phố',
  'Ăn chay thực dưỡng',
  'Đạo bún phở & món nước',
  'Nấu ăn nhanh gọn'
];

function getInitials(name: string): string {
  if (!name) return 'QM';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function UserProfileModal() {
  const { userProfile, setUserProfile, isProfileModalOpen, setProfileModalOpen } = useStore();
  
  const [activeTab, setActiveTab] = useState<'persona' | 'initials' | 'upload'>('persona');
  const [name, setName] = useState(userProfile.name);
  const [roleTitle, setRoleTitle] = useState(userProfile.roleTitle || 'Bếp trưởng gia đình');
  const [selectedPersona, setSelectedPersona] = useState(userProfile.avatarType === 'persona' ? userProfile.avatarValue : '/avatars/chef-minh.svg');
  const [selectedPalette, setSelectedPalette] = useState(userProfile.avatarType === 'initials' ? userProfile.avatarValue : 'bg-stone-900 text-stone-100');
  const [customPhoto, setCustomPhoto] = useState(userProfile.avatarType === 'custom' ? userProfile.avatarValue : '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isProfileModalOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('Vui lòng chọn ảnh có dung lượng dưới 3MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomPhoto(reader.result);
          setActiveTab('upload');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    let avatarType: 'persona' | 'initials' | 'custom' = 'persona';
    let avatarValue = selectedPersona;

    if (activeTab === 'upload' && customPhoto) {
      avatarType = 'custom';
      avatarValue = customPhoto;
    } else if (activeTab === 'initials') {
      avatarType = 'initials';
      avatarValue = selectedPalette;
    } else {
      avatarType = 'persona';
      avatarValue = selectedPersona;
    }

    setUserProfile({
      name: name.trim() || 'Quang Minh',
      roleTitle,
      avatarType,
      avatarValue
    });

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setProfileModalOpen(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200/80 overflow-hidden relative max-h-[90vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div>
            <h2 className="text-lg font-bold text-stone-900 tracking-tight">Hồ sơ cá nhân</h2>
            <p className="text-xs text-stone-500 mt-0.5">Tùy biến diện mạo và phong cách ẩm thực của bạn</p>
          </div>
          <button 
            onClick={() => setProfileModalOpen(false)}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
          {/* Identity Preview Card */}
          <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 flex items-center gap-4">
            <div className="relative flex-shrink-0">
              {activeTab === 'upload' && customPhoto ? (
                <div className="w-16 h-16 rounded-full overflow-hidden border border-stone-300 shadow-sm bg-stone-100">
                  <img src={customPhoto} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : activeTab === 'initials' ? (
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl tracking-wider shadow-sm border border-stone-200 ${selectedPalette}`}>
                  {getInitials(name)}
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full overflow-hidden border border-stone-300 shadow-sm bg-stone-100">
                  <img src={selectedPersona} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-bold text-stone-900 text-base truncate">{name || 'Quang Minh'}</p>
              <span className="inline-block mt-0.5 text-xs font-semibold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
                {roleTitle}
              </span>
              <p className="text-[11px] text-stone-400 mt-1">Đồng bộ trên thanh điều hướng và thực đơn</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Họ và tên hiển thị:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
                placeholder="Nhập tên của bạn..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-stone-900 focus:bg-white text-sm font-medium text-stone-900 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Phong cách ẩm thực:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {FOOD_STYLES.map((style) => (
                  <button
                    key={style}
                    onClick={() => setRoleTitle(style)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                      roleTitle === style
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar Source Tabs */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2.5">
              Chọn phong cách Avatar:
            </label>

            <div className="grid grid-cols-3 bg-stone-100 p-1 rounded-xl mb-4 text-xs font-semibold text-stone-600">
              <button
                onClick={() => setActiveTab('persona')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'persona' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                Nhân vật vẽ tay
              </button>
              <button
                onClick={() => setActiveTab('initials')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'initials' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                Chữ cái tối giản
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'upload' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                Tải ảnh thật
              </button>
            </div>

            {/* Tab 1: Hand-drawn Illustrated Personas */}
            {activeTab === 'persona' && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                {PERSONA_AVATARS.map((p) => {
                  const isSelected = selectedPersona === p.file;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPersona(p.file)}
                      className={`p-2 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center ${
                        isSelected 
                          ? 'border-orange-500 bg-orange-50/50 shadow-xs ring-2 ring-orange-500/20' 
                          : 'border-stone-200/80 bg-stone-50/50 hover:bg-stone-100 hover:border-stone-300'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-1.5 bg-stone-100 border border-stone-200">
                        <img src={p.file} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-xs font-bold text-stone-900 truncate w-full">{p.name}</p>
                      <p className="text-[10px] text-stone-500 truncate w-full">{p.role}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Monogram Initials */}
            {activeTab === 'initials' && (
              <div className="space-y-3">
                <p className="text-xs text-stone-500">
                  Lấy 2 chữ cái đầu theo phong cách thương hiệu tối giản:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {INITIALS_PALETTES.map((pal) => {
                    const isSelected = selectedPalette === pal.bg;
                    return (
                      <div
                        key={pal.id}
                        onClick={() => setSelectedPalette(pal.bg)}
                        className={`p-3 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-stone-900 bg-stone-50 shadow-xs ring-2 ring-stone-900/10'
                            : 'border-stone-200/80 hover:bg-stone-50'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs tracking-wider ${pal.bg}`}>
                          {getInitials(name)}
                        </div>
                        <span className="text-xs font-medium text-stone-700">{pal.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: Custom Photo Upload */}
            {activeTab === 'upload' && (
              <div className="space-y-3.5">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="p-6 border-2 border-dashed border-stone-300 hover:border-stone-800 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors group bg-stone-50/50 hover:bg-stone-50"
                >
                  <Camera className="w-8 h-8 text-stone-400 group-hover:text-stone-800 mb-2 transition-colors" />
                  <p className="text-xs font-bold text-stone-800">Tải ảnh chân dung từ thiết bị của bạn</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Hỗ trợ JPG, PNG, WEBP (tối đa 3MB)</p>
                </div>

                {customPhoto && (
                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                    <span className="text-stone-600 font-medium truncate">Ảnh đã tải lên sẵn sàng lưu</span>
                    <button 
                      onClick={() => setCustomPhoto('')}
                      className="text-stone-500 hover:text-red-600 font-semibold cursor-pointer ml-2"
                    >
                      Xóa ảnh
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-2.5">
          <button
            onClick={() => setProfileModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
          >
            Đóng
          </button>
          <button
            onClick={handleSave}
            className={`px-5 py-2 rounded-xl text-xs font-bold text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${
              savedSuccess ? 'bg-emerald-600' : 'bg-stone-900 hover:bg-stone-800'
            }`}
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Đã lưu thành công</span>
              </>
            ) : (
              <span>Lưu thay đổi</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
