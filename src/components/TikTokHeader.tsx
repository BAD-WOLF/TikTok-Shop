import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TikTokHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  notificationCount?: number;
  onMenuClick?: () => void;
  isRefreshing?: boolean;
}

export const TikTokHeader = ({ 
  title, 
  showBack = false, 
  onBack, 
  notificationCount = 5,
  onMenuClick,
  isRefreshing = false
}: TikTokHeaderProps) => {
  return (
    <>
      <style>{`
        @keyframes tiktok-spin {
          0% { transform: translateX(0px); }
          25% { transform: translateX(16px); }
          50% { transform: translateX(0px); }
          75% { transform: translateX(-16px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
      
      {/* Top row with X, title (if showBack), notification and menu - FIXED */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card flex items-center justify-between p-4">
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
      
      {/* Spacer para compensar o header fixo */}
      <div className="h-20"></div>
      
      <header className="bg-card">
      
      {/* Animation between top row and title */}
      {isRefreshing && !showBack && (
        <div className="flex justify-center py-2">
          <div className="relative w-6 h-3 flex items-center justify-center">
            <div 
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                left: '2px',
                animation: 'tiktok-spin 1.2s linear infinite'
              }}
            />
            <div 
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                left: '2px',
                animation: 'tiktok-spin 1.2s linear infinite 0.6s'
              }}
            />
          </div>
        </div>
      )}
      
      {/* Bottom row with title (only when not showBack) */}
      {!showBack && (
        <div className="px-4 pb-4">
          <h1 className="text-xl font-bold text-foreground">
            {title.includes('Shop') ? (
              <>
                {title.replace(' Shop', '')}<br />
                Shop
              </>
            ) : (
              title
            )}
          </h1>
        </div>
      )}
    </header>
    </>
  );
};