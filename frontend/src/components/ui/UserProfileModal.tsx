'use client';
import { useState, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { X, Camera, User, Trash2 } from 'lucide-react';

export default function UserProfileModal() {
  const { userProfile, setUserProfile, isProfileModalOpen, setProfileModalOpen } = useStore();
  
  const [name, setName] = useState(userProfile?.name || 'Quang Minh');
  const [avatarUrl, setAvatarUrl] = useState(userProfile?.avatarUrl || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isProfileModalOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Vui lòng chọn ảnh dung lượng dưới 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setAvatarUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUserProfile({
      name: name.trim() || 'Quang Minh',
      avatarUrl: avatarUrl.trim()
    });
    setProfileModalOpen(false);
  };

  const handleResetToDefault = () => {
    setAvatarUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border border-stone-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <h2 className="text-base font-bold text-stone-900">Hồ sơ người dùng</h2>
          <button 
            type="button"
            onClick={() => setProfileModalOpen(false)}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="py-6 flex flex-col items-center space-y-5">
          {/* Avatar Preview & Upload Trigger */}
          <div className="flex flex-col items-center space-y-3">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-stone-200 hover:border-orange-500 transition-all cursor-pointer group bg-stone-100 shadow-sm"
              title="Bấm để tải ảnh mới"
            >
              {avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-stone-200 text-stone-600">
                  <User className="w-12 h-12 text-stone-500" />
                </div>
              )}

              {/* Hover overlay with camera icon */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>

            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/*" 
              className="hidden" 
            />

            {/* Action buttons for Avatar */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-xs font-semibold text-stone-700 hover:text-orange-600 px-3 py-1 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer border border-stone-200"
              >
                Tải ảnh từ thiết bị
              </button>
              {avatarUrl && (
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="text-xs font-semibold text-stone-500 hover:text-red-600 px-2.5 py-1 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer border border-stone-200 flex items-center gap-1"
                  title="Dùng avatar mặc định"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Mặc định</span>
                </button>
              )}
            </div>
          </div>

          {/* Name Input */}
          <div className="w-full">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1.5">
              Tên hiển thị
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={30}
              placeholder="Nhập tên của bạn"
              className="w-full px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-stone-900 focus:bg-white text-sm font-medium text-stone-900 transition-colors"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={() => setProfileModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer shadow-xs"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
