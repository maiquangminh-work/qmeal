'use client';
import { useStore } from '@/store/useStore';

interface UserAvatarProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  xs: 'w-7 h-7 text-xs',
  sm: 'w-8 h-8 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-14 h-14 text-xl',
  xl: 'w-20 h-20 text-2xl',
};

function getInitials(name: string): string {
  if (!name) return 'QM';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

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

  const isCustom = userProfile.avatarType === 'custom' && (userProfile.avatarValue?.startsWith('http') || userProfile.avatarValue?.startsWith('data:image'));
  const isPersona = userProfile.avatarType === 'persona' || (!isCustom && userProfile.avatarValue?.startsWith('/avatars/'));

  return (
    <div 
      onClick={handleClick}
      className={`relative rounded-full overflow-hidden border border-stone-300/80 hover:border-orange-500 transition-all cursor-pointer shadow-2xs hover:shadow-xs hover:scale-102 active:scale-98 flex-shrink-0 select-none bg-stone-100 ${sizeClasses[size]} ${className}`}
      title="Tùy chỉnh hồ sơ & Avatar"
    >
      {isCustom ? (
        <img 
          src={userProfile.avatarValue} 
          alt={userProfile.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : isPersona ? (
        <img 
          src={userProfile.avatarValue || '/avatars/chef-minh.svg'} 
          alt={userProfile.name} 
          className="w-full h-full object-cover bg-stone-100"
        />
      ) : (
        /* Initials Monogram Avatar (Apple/Notion style) */
        <div className="w-full h-full flex items-center justify-center bg-stone-800 text-stone-100 font-bold tracking-wider">
          <span>{getInitials(userProfile.name)}</span>
        </div>
      )}

      {showBadge && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
}
