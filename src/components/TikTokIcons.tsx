import React from 'react';

// Importar ícones da pasta icons
export {
  TikTokShoppingBag,
  TikTokUsers,
  TikTokDollarSign,
  TikTokGift,
  TikTokMail,
  TikTokChevronRight,
  TikTokAnalytics,
  TikTokEye,
  TikTokHeart,
  TikTokShare
} from './icons';

export const TikTokVideo = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);



export const TikTokCreate = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12l3.5 2 8.5-6v12H3V8l6 4z"/>
    <path d="M3 7a1 1 0 011-1h12a1 1 0 011 1v1l4-2v8l-4-2v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/>
  </svg>
);