'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';

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

// High-quality curated Unsplash portrait for default user profile
const DEFAULT_AVATAR_URL = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
const BACKUP_AVATAR_URL = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop';

export default function UserAvatar({
  className = '',
  size = 'md',
  onClick
}: UserAvatarProps) {
  const { userProfile, setProfileModalOpen } = useStore();
  const [avatarSrc, setAvatarSrc] = useState(userProfile?.avatarUrl?.trim() || DEFAULT_AVATAR_URL);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setAvatarSrc(userProfile?.avatarUrl?.trim() || DEFAULT_AVATAR_URL);
    setHasError(false);
  }, [userProfile?.avatarUrl]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setProfileModalOpen(true);
    }
  };

  return (
    <button 
      type="button"
      onClick={handleClick}
      className={`relative rounded-full overflow-hidden border-2 border-stone-200 hover:border-orange-500 transition-all cursor-pointer shadow-xs hover:shadow-md flex items-center justify-center flex-shrink-0 bg-stone-100 group ${sizeClasses[size]} ${className}`}
      title="Hồ sơ người dùng"
    >
      <img 
        src={hasError ? BACKUP_AVATAR_URL : avatarSrc} 
        alt={userProfile?.name || 'User Profile'} 
        className="w-full h-full object-cover aspect-square rounded-full group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setAvatarSrc(BACKUP_AVATAR_URL);
          }
        }}
      />
    </button>
  );
}
