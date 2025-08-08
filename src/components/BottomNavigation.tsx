import { Home, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import growthIcon from "@/components/icons/png/growth.png";

interface BottomNavigationProps {
  activeTab: 'home' | 'products' | 'growth';
  onTabChange: (tab: 'home' | 'products' | 'growth') => void;
  language: 'pt' | 'en';
}

export const BottomNavigation = ({ activeTab, onTabChange, language }: BottomNavigationProps) => {
  const texts = {
    pt: {
      home: "Início",
      products: "Produtos", 
      growth: "Crescimento"
    },
    en: {
      home: "Home",
      products: "Products",
      growth: "Growth"
    }
  };

  const t = texts[language];

  const tabs = [
    { id: 'home' as const, icon: Home, label: t.home },
    { id: 'products' as const, icon: ShoppingBag, label: t.products },
    { id: 'growth' as const, icon: 'growth', label: t.growth }
  ];

  return (
    <nav className="bg-card border-t border-border px-1 py-1">
      <div className="flex justify-center items-center gap-8">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors min-w-0 flex-1 max-w-[80px]",
              activeTab === id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {Icon === 'growth' ? (
              <img src={growthIcon} alt="Growth" className="h-3 w-3 mb-0.5" />
            ) : (
              <Icon className="h-3 w-3 mb-0.5" />
            )}
            <span className="text-[10px] leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};