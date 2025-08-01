import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  gmv: string;
  commission: string;
  sold: number;
}

interface PerformanceDataProps {
  currency: string;
  language: 'pt' | 'en';
  data: {
    gmv: string;
    itemsSold: string;
    estimatedCommission: string;
    commissionBase: string;
    productViews: string;
    productClicks: string;
  };
  products: Product[];
  onEditProduct?: (productId: string) => void;
  activePeriod: 'today' | 'last7days';
  onPeriodChange: (period: 'today' | 'last7days') => void;
}

export const PerformanceData = ({ 
  currency, 
  language, 
  data, 
  products,
  onEditProduct,
  activePeriod,
  onPeriodChange
}: PerformanceDataProps) => {
  const texts = {
    pt: {
      mainData: "Dados principais",
      today: "Hoje",
      yesterday: "Ontem",
      sevenDays: "7D",
      customize: "Personalizar",
      gmv: "GMV",
      itemsSold: "Itens vendidos",
      estimatedCommission: "Comissão estimada",
      commissionBase: "Base de comissão",
      productViews: "Visualizações do produto",
      productClicks: "Cliques no produto",
      product: "Produto",
      video: "Vídeo",
      live: "LIVE",
      productPerformance: "Desempenho do produto",
      viewAll: "Exibir tudo",
      contentPerformance: "Desempenho do conteúdo"
    },
    en: {
      mainData: "Main Data",
      today: "Today",
      yesterday: "Yesterday",
      sevenDays: "7D",
      customize: "Customize",
      gmv: "GMV",
      itemsSold: "Items Sold",
      estimatedCommission: "Estimated Commission",
      commissionBase: "Commission Base",
      productViews: "Product Views",
      productClicks: "Product Clicks",
      product: "Product",
      video: "Video",
      live: "LIVE",
      productPerformance: "Product Performance",
      viewAll: "View All",
      contentPerformance: "Content Performance"
    }
  };

  const t = texts[language];

  return (
    <div className="flex-1 bg-background tiktok-scroll overflow-y-auto">
      <div className="p-4">
        {/* Time Period Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <Button 
              variant={activePeriod === 'today' ? 'outline' : 'ghost'} 
              size="sm" 
              className={activePeriod === 'today' ? 'bg-foreground text-background' : ''}
              onClick={() => onPeriodChange('today')}
            >
              {t.today}
            </Button>
            <Button variant="ghost" size="sm">
              {t.yesterday}
            </Button>
            <Button 
              variant={activePeriod === 'last7days' ? 'outline' : 'ghost'} 
              size="sm"
              className={activePeriod === 'last7days' ? 'bg-foreground text-background' : ''}
              onClick={() => onPeriodChange('last7days')}
            >
              {t.sevenDays}
            </Button>
            <Button variant="ghost" size="sm">
              {t.customize}
            </Button>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-muted-foreground mb-4">Jul 30, 2025 (GMT-3)</p>

        {/* Main Data Section */}
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          {t.mainData}
          <span className="ml-2 text-muted-foreground">ℹ️</span>
        </h2>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t.gmv}</p>
            <p className="text-xl font-bold">{currency} {data.gmv}</p>
            <p className="text-xs text-red-500">-44,71%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t.itemsSold}</p>
            <p className="text-xl font-bold">{data.itemsSold}</p>
            <p className="text-xs text-red-500">-33,33%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t.estimatedCommission}</p>
            <p className="text-xl font-bold">{currency} {data.estimatedCommission}</p>
            <p className="text-xs text-red-500">-33,34%</p>
          </div>
        </div>

        {/* Secondary Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t.commissionBase}</p>
            <p className="text-xl font-bold">{currency} {data.commissionBase}</p>
            <p className="text-xs text-red-500">-67,08%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t.productViews}</p>
            <p className="text-xl font-bold">{data.productViews}</p>
            <p className="text-xs text-red-500">-4,43%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t.productClicks}</p>
            <p className="text-xl font-bold">{data.productClicks}</p>
            <p className="text-xs text-red-500">-30,36%</p>
          </div>
        </div>

        {/* Content Type Tabs */}
        <div className="flex space-x-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-1">
              📦
            </div>
            <span className="text-xs">{t.product}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-1 relative">
              ▶️
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></span>
            </div>
            <span className="text-xs">{t.video}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-1">
              📺
            </div>
            <span className="text-xs">{t.live}</span>
          </div>
        </div>

        {/* Product Performance Section */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{t.productPerformance}</h3>
          <div className="flex items-center text-muted-foreground">
            <span className="text-sm mr-1">{t.viewAll}</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-3 mb-6">
          {products.map((product) => (
            <Card key={product.id} className="p-3 cursor-pointer" onClick={() => onEditProduct?.(product.id)}>
              <div className="flex items-center space-x-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">GMV</p>
                      <p className="font-bold">{currency} {product.gmv}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.estimatedCommission}</p>
                      <p className="font-bold">{currency} {product.commission}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.itemsSold}</p>
                      <p className="font-bold">{product.sold}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Content Performance Section */}
        <div className="border-t border-border pt-4">
          <h3 className="text-lg font-semibold">{t.contentPerformance}</h3>
        </div>
      </div>
    </div>
  );
};