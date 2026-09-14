'use client';
import { useStore } from '@/store/useStore';

interface UserAvatarProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  xs: 'w-7 h-7 text-sm',
  sm: 'w-8 h-8 text-base',
  md: 'w-9 h-9 text-lg',
  lg: 'w-14 h-14 text-2xl',
  xl: 'w-20 h-20 text-4xl',
};

export default function UserAvatar({
  className = '',
  size = 'md',
  showBadge = false,
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

  const isCustom = userProfile.avatarType === 'custom' && userProfile.avatarValue?.startsWith('http') || userProfile.avatarValue?.startsWith('data:image');

  return (
    <div 
      onClick={handleClick}
      className={`relative rounded-full overflow-hidden border-2 border-orange-500/80 hover:border-orange-600 transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 flex-shrink-0 select-none ${sizeClasses[size]} ${className}`}
      title="Tùy chỉnh hồ sơ & Avatar"
    >
      {isCustom ? (
        <img 
          src={userProfile.avatarValue} 
          alt={userProfile.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // fallback if custom url breaks
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-tr ${userProfile.avatarBg || 'from-orange-500 to-amber-500'} text-white font-bold`}>
          <span>{userProfile.avatarValue || '👨‍🍳'}</span>
        </div>
      )}

      {showBadge && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
}
