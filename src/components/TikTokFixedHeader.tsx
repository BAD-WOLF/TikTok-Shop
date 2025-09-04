import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TikTokFixedHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  notificationCount?: number;
  onMenuClick?: () => void;
  showAnimation?: boolean;
}

export const TikTokFixedHeader = ({ 
  title, 
  showBack = false, 
  onBack, 
  notificationCount = 5,
  onMenuClick,
  showAnimation = false
}: TikTokFixedHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card">
      <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Button variant="ghost" className="p-3" onClick={onBack}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      
      {showBack && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-base font-semibold text-foreground">
            {title}
          </h1>
        </div>
      )}
      
      <div className="flex items-center">
        {/* Placeholder para manter o espaçamento */}
      </div>
      
      {!showBack && (
        <div className="flex items-center space-x-3">
          <div className="relative p-2">
            <Bell className="h-6 w-6 text-foreground" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>
          <Button variant="ghost" className="p-3" onClick={onMenuClick}>
            <Menu className="h-7 w-7" />
          </Button>
        </div>
      )}
      </div>
        
        {/* Animação de refresh */}
        {showAnimation && (
          <div className="flex justify-center py-2">
            <div className="relative w-6 h-2">
              <div 
                className="absolute w-2 h-2 bg-red-500 rounded-full" 
                style={{
                  animation: 'move-right 1.5s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="absolute w-2 h-2 bg-blue-500 rounded-full" 
                style={{
                  animation: 'move-left 1.5s ease-in-out infinite'
                }}
              ></div>
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes move-right {
                  0% {
                    left: 0;
                    z-index: 1;
                    transform: scale(1);
                  }
                  50% {
                    left: 16px;
                    z-index: 2;
                    transform: scale(1.2);
                  }
                  100% {
                    left: 0;
                    z-index: 1;
                    transform: scale(1);
                  }
                }
                @keyframes move-left {
                  0% {
                    right: 0;
                    z-index: 1;
                    transform: scale(1);
                  }
                  50% {
                    right: 16px;
                    z-index: 0;
                    transform: scale(0.8);
                  }
                  100% {
                    right: 0;
                    z-index: 1;
                    transform: scale(1);
                  }
                }
              `
            }} />
          </div>
        )}
 
      </div>
  );
};