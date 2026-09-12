import React from 'react';

export default function Logo({ className = '', size = 'md' }) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2 select-none cursor-pointer group ${className}`}>
      {/* Sleek Minimalist Culinary Cloche Icon */}
      <div className={`relative ${iconSizes[size]} bg-gradient-to-tr from-brand-600 to-amber-500 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          <path
            d="M4 18H20M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15H5ZM12 8V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Modern High-end Wordmark (inspired by NomNom & Cook.) */}
      <div className="flex items-baseline">
        <span className={`font-black tracking-tight text-stone-900 ${textSizes[size]}`}>
          QMeal<span className="text-brand-600">.</span>
        </span>
      </div>
    </div>
  );
}
