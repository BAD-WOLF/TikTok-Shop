import React from 'react';

// SVG imports
import ConvitesColaboracaoSvg from './convitesColaboracao.svg?react';
import GerenciarAmostrasSvg from './gerenciarAmostras.svg?react';
import GerenciarVitrineSvg from './gerenciarVitrine.svg?react';
import LiveSvg from './live.svg?react';
import MercadoProdutosSvg from './mercadoProdutos.svg?react';
import ReceitaSvg from './receita.svg?react';
import VideoSvg from './video.svg?react';

// Importar ícones PNG como fallback para ícones não disponíveis em SVG
import ShoppingBagPng from './bag.png';
import UsersPng from './users.png';
import DollarSignPng from './dollar-sign.png';
import GiftPng from './gift.png';
import MailPng from './mail.png';
import ChevronRightPng from './chevron-right.png';
import AnalyticsPng from './analytics.png';
import EyePng from './eye.png';
import HeartPng from './heart.png';
import SharePng from './share.png';
import PlayPng from './play.png';
import CreatePng from './create.png';

// Wrapper components usando SVGs quando disponível
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
  <ConvitesColaboracaoSvg className={className} />
);

// Novos componentes usando SVGs
export const TikTokMercadoProdutos = ({ className = "h-5 w-5" }: { className?: string }) => (
  <MercadoProdutosSvg className={className} />
);

export const TikTokGerenciarVitrine = ({ className = "h-5 w-5" }: { className?: string }) => (
  <GerenciarVitrineSvg className={className} />
);

export const TikTokReceita = ({ className = "h-5 w-5" }: { className?: string }) => (
  <ReceitaSvg className={className} />
);

export const TikTokGerenciarAmostras = ({ className = "h-5 w-5" }: { className?: string }) => (
  <GerenciarAmostrasSvg className={className} />
);

export const TikTokConvitesColaboracao = ({ className = "h-5 w-5" }: { className?: string }) => (
  <ConvitesColaboracaoSvg className={className} />
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

// Ícones da seção de performance usando SVGs
export const TikTokPackage = ({ className = "h-8 w-8" }: { className?: string }) => (
  <MercadoProdutosSvg className={className} />
);

export const TikTokPlay = ({ className = "h-8 w-8" }: { className?: string }) => (
  <VideoSvg className={className} />
);

export const TikTokTv = ({ className = "h-8 w-8" }: { className?: string }) => (
  <LiveSvg className={className} />
);

// export const TikTokTeste = ({ className = "h-4 w-4" }: { className?: string }) => (
//   <img src={TestePng} alt="Teste" className={className} />
// );