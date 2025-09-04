import React from 'react';
import { usePullToRefresh } from '@/hooks/use-pull-to-refresh';
import { cn } from '@/lib/utils';
import { TikTokMovableHeader } from './TikTokMovableHeader';

interface PullToRefreshProps {
  onRefresh: () => Promise<void> | void;
  children: React.ReactNode;
  threshold?: number;
  resistance?: number;
  enabled?: boolean;
  className?: string;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({
  onRefresh,
  children,
  threshold = 80,
  resistance = 2.5,
  enabled = true,
  className
}) => {
  const { isPulling, isRefreshing, showAnimation, pullDistance, containerProps } = usePullToRefresh({
    onRefresh,
    threshold,
    resistance,
    enabled
  });

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Container principal com o conteúdo */}
      <div {...containerProps}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === TikTokMovableHeader) {
            return React.cloneElement(child, { isRefreshing: showAnimation } as any);
          }
          return child;
        })}
      </div>
    </div>
  );
};