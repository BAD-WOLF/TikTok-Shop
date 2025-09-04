import { useState, useEffect, useRef, useCallback } from 'react';

interface UsePullToRefreshOptions {
  onRefresh: () => Promise<void> | void;
  threshold?: number;
  resistance?: number;
  enabled?: boolean;
}

interface UsePullToRefreshReturn {
  isPulling: boolean;
  isRefreshing: boolean;
  showAnimation: boolean;
  pullDistance: number;
  containerProps: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
    style: React.CSSProperties;
  };
}

export const usePullToRefresh = ({
  onRefresh,
  threshold = 80,
  resistance = 2.5,
  enabled = true
}: UsePullToRefreshOptions): UsePullToRefreshReturn => {
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [startY, setStartY] = useState(0);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enabled || isRefreshing) return;
    
    const container = e.currentTarget as HTMLElement;
    if (!container) return;
    
    // Só ativa se estiver no topo da página
    if (container.scrollTop === 0) {
      setStartY(e.touches[0].clientY);
      setIsPulling(true);
      setShowAnimation(true);
      
      // Limpa timeout anterior se existir
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }
    }
  }, [enabled, isRefreshing]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isPulling || !enabled || isRefreshing) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    
    if (deltaY > 0) {
      // Aplica resistência para tornar o movimento mais suave
      const distance = Math.min(deltaY / resistance, threshold * 1.5);
      setPullDistance(distance);
      
      // Previne o scroll padrão quando puxando
      e.preventDefault();
    }
  }, [isPulling, startY, threshold, resistance, enabled, isRefreshing]);

  const handleTouchEnd = useCallback(async () => {
    if (!isPulling || !enabled) return;
    
    setIsPulling(false);
    
    // Reset pullDistance após um pequeno delay para permitir a transição
    setTimeout(() => {
      setPullDistance(0);
    }, 10);
    
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      
      try {
        await onRefresh();
      } catch (error) {
        console.error('Erro no refresh:', error);
      } finally {
        setIsRefreshing(false);
        
        // Mantém a animação por mais 0,5 segundos após o refresh
        animationTimeoutRef.current = setTimeout(() => {
          setShowAnimation(false);
        }, 500);
      }
    } else {
      // Se não atingiu o threshold, mantém a animação durante a transição de volta
      // e depois esconde após a transição
      setTimeout(() => {
        setShowAnimation(false);
      }, 300); // Tempo da transição CSS
    }
  }, [isPulling, pullDistance, threshold, onRefresh, enabled, isRefreshing]);

  // Reset states quando disabled
  useEffect(() => {
    if (!enabled) {
      setIsPulling(false);
      setIsRefreshing(false);
      setShowAnimation(false);
      setPullDistance(0);
      
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }
    }
  }, [enabled]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const containerProps = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    style: {
      transform: `translateY(${pullDistance}px)`,
      transition: isPulling ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    } as React.CSSProperties
  };

  return {
    isPulling,
    isRefreshing,
    showAnimation,
    pullDistance,
    containerProps
  };
};