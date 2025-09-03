import React, {ReactElement} from 'react';

// SVG imports
import Mail from './svg/mail.svg?react';
import Live from './svg/live.svg?react';
import Video from './svg/video.svg?react';
import ShoppingBag from './svg/bag.svg?react';
import Users from './svg/users.svg?react';
import Gift from './svg/gift.svg?react';
import DollarSign from './svg/dollar-sign.svg?react';
import Analytics from './svg/analytics.svg?react';
import ChevronRight from './svg/chevron-right.svg?react';

import EyePng from './eye.png';
import HeartPng from './heart.png';
import SharePng from './share.png';

export const TikTokShoppingBag = ({className = "h-2 w-2"}): ReactElement => (
    <ShoppingBag className={className}/>
);

export const TikTokUsers = ({className = "h-5 w-5"}): ReactElement => (
    <Users className={className}/>
);

export const TikTokDollarSign = ({className = "h-5 w-5"}): ReactElement => (
    <DollarSign className={className}/>
);

export const TikTokGift = ({className = "h-5 w-5"}): ReactElement => (
    <Gift className={className}/>
);

export const TikTokMail = ({className = "h-5 w-5"}): ReactElement => (
    <Mail className={className}/>
);

export const TikTokChevronRight = ({className = "h-5 w-5"}): ReactElement => (
    <ChevronRight className={className}/>
);

export const TikTokAnalytics = ({className = "h-5 w-5"}): ReactElement => (
    <Analytics className={className}/>
);

export const TikTokEye = ({className = "h-5 w-5"}): ReactElement => (
    <img src={EyePng} alt="Eye" className={className}/>
);

export const TikTokHeart = ({className = "h-5 w-5"}): ReactElement => (
    <img src={HeartPng} alt="Heart" className={className}/>
);

export const TikTokShare = ({className = "h-5 w-5"}): ReactElement => (
    <img src={SharePng} alt="Share" className={className}/>
);

export const TikTokPackage = ({className = "h-8 w-8"}): ReactElement => (
    <ShoppingBag className={className}/>
);

export const TikTokPlay = ({className = "h-8 w-8"}): ReactElement => (
    <Video className={className}/>
);

export const TikTokTv = ({className = "h-8 w-8"}): ReactElement => (
    <Live className={className}/>
);
