import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TikTokHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  notificationCount?: number;
  onMenuClick?: () => void;
}

export const TikTokHeader = ({ 
  title, 
  showBack = false, 
  onBack, 
  notificationCount = 5,
  onMenuClick 
}: TikTokHeaderProps) => {
  return (
    <header className="bg-card">
      {/* Top row with X, title (if showBack), notification and menu */}
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
              <Bell className="h-7 w-7 text-foreground" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center">
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
  );
};