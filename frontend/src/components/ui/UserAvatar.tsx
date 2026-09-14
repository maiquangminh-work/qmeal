'use client';
import { useStore } from '@/store/useStore';
import { User } from 'lucide-react';

interface UserAvatarProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const sizeClasses = {
  xs: 'w-7 h-7',
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
};

const iconSizes = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-4 h-4',
  md: 'w-4.5 h-4.5',
  lg: 'w-7 h-7',
  xl: 'w-10 h-10',
};

export default function UserAvatar({
  className = '',
  size = 'md',
  onClick
}: UserAvatarProps) {
  const { userProfile, setProfileModalOpen } = useStore();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setProfileModalOpen(true);
    }
  };

  const hasCustomAvatar = Boolean(userProfile?.avatarUrl && userProfile.avatarUrl.trim());

  return (
    <button 
      type="button"
      onClick={handleClick}
      className={`relative rounded-full overflow-hidden border border-stone-200 hover:border-orange-500 transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center flex-shrink-0 bg-stone-100 ${sizeClasses[size]} ${className}`}
      title="Hồ sơ người dùng"
    >
      {hasCustomAvatar ? (
        <img 
          src={userProfile.avatarUrl} 
          alt={userProfile.name || 'User'} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-stone-200/80 text-stone-600">
          <User className={iconSizes[size]} />
        </div>
      )}
    </button>
  );
}
