import React from 'react';

export default function Logo({ className = '', size = 'md' }) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none cursor-pointer group ${className}`}>
      {/* Dynamic Animated Logo Badge */}
      <div className={`relative ${iconSizes[size]} bg-gradient-to-tr from-brand-600 to-brand-400 rounded-2xl flex items-center justify-center shadow-warm-md group-hover:scale-105 transition-transform duration-300`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4 text-white drop-shadow-sm"
        >
          {/* Steaming Cloche / Bowl */}
          <path
            d="M6 24C6 24 9 27 18 27C27 27 30 24 30 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M8 22C8 16.4772 12.4772 12 18 12C23.5228 12 28 16.4772 28 22H8Z"
            fill="currentColor"
          />
          {/* Chef's Hat Top Puff */}
          <circle cx="18" cy="10" r="3" fill="currentColor" />
          <circle cx="13" cy="11.5" r="2.5" fill="currentColor" />
          <circle cx="23" cy="11.5" r="2.5" fill="currentColor" />
          {/* Aromatic Steam Waves */}
          <path
            d="M13 6C13 4.5 15 4 15 2"
            stroke="#fed7aa"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 5C18 3.5 20 3 20 1"
            stroke="#fed7aa"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M23 6C23 4.5 25 4 25 2"
            stroke="#fed7aa"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full"></span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`font-extrabold tracking-tight text-stone-900 ${textSizes[size]} font-heading`}>
            Q<span className="text-brand-600">Meal</span>
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-brand-100 text-brand-700 rounded-md">
            VN
          </span>
        </div>
        <span className="text-[10px] font-semibold text-stone-400 tracking-wider -mt-1 hidden sm:block">
          HÔM NAY ĂN GÌ?
        </span>
      </div>
    </div>
  );
}
