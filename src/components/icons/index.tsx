import React from 'react';

// Importar ícones PNG como imagens
import ShoppingBagPng from './png/bag.png'; // Ícone de sacola de compras
import UsersPng from './png/users.png'; // Ícone de usuários/pessoas
import DollarSignPng from './png/dollar-sign.png'; // Ícone de cifrão/dinheiro
import GiftPng from './png/gift.png'; // Ícone de presente/caixa de presente
import MailPng from './png/mail.png'; // Ícone de envelope/email
import ChevronRightPng from './png/chevron-right.png'; // Ícone de seta para direita
import AnalyticsPng from './png/analytics.png'; // Ícone de gráfico/analytics
import EyePng from './png/eye.png'; // Ícone de olho/visualizações
import HeartPng from './png/heart.png'; // Ícone de coração/curtidas
import SharePng from './png/share.png'; // Ícone de compartilhamento
import PackagePng from './png/package.png'; // Ícone de pacote/produto
import PlayPng from './png/play.png'; // Ícone de play/vídeo
import TvPng from './png/tv.png'; // Ícone de TV/live
import TestePng from './png/teste.png'; // Ícone de teste

// Wrapper components para manter a interface consistente
export const TikTokShoppingBag = ({ className = "h-2 w-2" }: { className?: string }) => (
  <img src={ShoppingBagPng} alt="Shopping Bag" className={className} />
);

export const TikTokUsers = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={UsersPng} alt="Users" className={className} />
);

export const TikTokDollarSign = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={DollarSignPng} alt="Dollar Sign" className={className} />
);

export const TikTokGift = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={GiftPng} alt="Gift" className={className} />
);

export const TikTokMail = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={MailPng} alt="Mail" className={className} />
);

// Ícones da tela de performance
export const TikTokChevronRight = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={ChevronRightPng} alt="Chevron Right" className={className} />
);

export const TikTokAnalytics = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={AnalyticsPng} alt="Analytics" className={className} />
);

export const TikTokEye = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={EyePng} alt="Eye" className={className} />
);

export const TikTokHeart = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={HeartPng} alt="Heart" className={className} />
);

export const TikTokShare = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={SharePng} alt="Share" className={className} />
);

// Ícones da seção de performance (PRODUTO, VIDEO, LIVE)
export const TikTokPackage = ({ className = "h-8 w-8" }: { className?: string }) => (
  <img src={PackagePng} alt="Package" className={className} />
);

export const TikTokPlay = ({ className = "h-8 w-8" }: { className?: string }) => (
  <img src={PlayPng} alt="Play" className={className} />
);

export const TikTokTv = ({ className = "h-8 w-8" }: { className?: string }) => (
  <img src={TvPng} alt="TV" className={className} />
);

export const TikTokTeste = ({ className = "h-4 w-4" }: { className?: string }) => (
  <img src={TestePng} alt="Teste" className={className} />
);