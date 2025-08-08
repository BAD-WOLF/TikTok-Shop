import { Home, ShoppingBag, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
    { id: 'growth' as const, icon: TrendingUp, label: t.growth }
  ];

  return (
    <nav className="bg-card border-t border-border px-4 py-3">
      <div className="flex justify-around items-center">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center py-3 px-4 rounded-lg transition-colors",
              activeTab === id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-6 w-6 mb-2" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};