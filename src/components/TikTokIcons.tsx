import React from 'react';
import CreatePng from './icons/png/create.png';

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
  <img src={CreatePng} alt="Create" className={className} />
);