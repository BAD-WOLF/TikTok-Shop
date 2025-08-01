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
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <X className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Bell className="h-6 w-6 text-foreground" />
          {notificationCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};