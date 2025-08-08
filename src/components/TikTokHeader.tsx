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
    <header className="flex items-center justify-between p-4 bg-card border-b border-border">
      <div className="flex items-center">
        {showBack && (
          <Button variant="ghost" className="mr-2 p-3" onClick={onBack}>
            <X className="h-6 w-6" />
          </Button>
        )}
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      
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
    </header>
  );
};