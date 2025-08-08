import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TikTokChevronRight, TikTokAnalytics, TikTokEye, TikTokHeart, TikTokShare } from "./TikTokIcons";
import { TikTokPackage, TikTokPlay, TikTokTv } from "./icons";

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
      contentPerformance: "Desempenho do conteúdo",
      viewTrends: "Ver tendências"
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
      contentPerformance: "Content Performance",
      viewTrends: "View trends"
    }
  };

  const t = texts[language];

  // Função para gerar data atual e range
  const getCurrentDateRange = () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    
    if (activePeriod === 'last7days') {
      const sevenDaysAgo = new Date(now);
      sevenDaysAgo.setDate(now.getDate() - 7);
      const startDate = sevenDaysAgo.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      return `${startDate} - ${currentDate} (GMT-3)`;
    }
    
    return `${currentDate} (GMT-3)`;
  };

  // Função para determinar cor do índice
  const getPercentageColor = (percentage: string) => {
    const numValue = parseFloat(percentage.replace('%', '').replace(',', '.'));
    return numValue >= 0 ? 'text-[#22c55e]' : 'text-red-500';
  };

  return (
    <div className="flex-1 bg-background tiktok-scroll overflow-y-auto">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-2">
            <Button 
              variant={activePeriod === 'today' ? 'outline' : 'ghost'} 
              size="sm" 
              className={`text-sm px-4 py-2 ${activePeriod === 'today' ? 'bg-foreground text-background' : ''}`}
              onClick={() => onPeriodChange('today')}
            >
              {t.today}
            </Button>
            <Button variant="ghost" size="sm" className="text-sm px-4 py-2">
              {t.yesterday}
            </Button>
            <Button 
              variant={activePeriod === 'last7days' ? 'outline' : 'ghost'} 
              size="sm"
              className={`text-sm px-4 py-2 ${activePeriod === 'last7days' ? 'bg-foreground text-background' : ''}`}
              onClick={() => onPeriodChange('last7days')}
            >
              {t.sevenDays}
            </Button>
            <Button variant="ghost" size="sm" className="text-sm px-4 py-2">
              {t.customize}
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-3">{getCurrentDateRange()}</p>

        <h2 className="text-base font-semibold mb-3 flex items-center">
          {t.mainData}
          <svg className="ml-2 w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </h2>

        {/* Primeira linha de dados */}
        <div className="flex mb-4">
          <div className="flex-1 text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.gmv}</p>
            <p className="text-lg font-bold mb-1">{currency} {data.gmv}</p>
            <p className={`text-xs ${getPercentageColor('+70.74%')}`}>+70.74%</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.itemsSold}</p>
            <p className="text-lg font-bold mb-1">{data.itemsSold}</p>
            <p className={`text-xs ${getPercentageColor('+77.78%')}`}>+77.78%</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.estimatedCommission}</p>
            <p className="text-lg font-bold mb-1">{currency} {data.estimatedCommission}</p>
            <p className={`text-xs ${getPercentageColor('+32.09%')}`}>+32.09%</p>
          </div>
        </div>
        
        {/* Segunda linha de dados */}
        <div className="flex mb-4">
          <div className="flex-1 text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.commissionBase}</p>
            <p className="text-lg font-bold mb-1">{currency} {data.commissionBase}</p>
            <p className={`text-xs ${getPercentageColor('+89.33%')}`}>+89.33%</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.productViews}</p>
            <p className="text-lg font-bold mb-1">{data.productViews}</p>
            <p className={`text-xs ${getPercentageColor('+74.67%')}`}>+74.67%</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.productClicks}</p>
            <p className="text-lg font-bold mb-1">{data.productClicks}</p>
            <p className={`text-xs ${getPercentageColor('+50.99%')}`}>+50.99%</p>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <Button variant="ghost" className="text-base px-6 py-3 text-muted-foreground">
            {t.viewTrends} 📈
          </Button>
        </div>

        {/* Divisão horizontal */}
         <div className="border-t-8 border-gray-100 my-6 -mx-6"></div>

        <div className="flex space-x-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
              <TikTokPackage className="w-8 h-8" />
            </div>
            <span className="text-sm">{t.product}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-2 relative">
              <TikTokPlay className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <span className="text-sm">{t.video}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
              <TikTokTv className="w-8 h-8" />
            </div>
            <span className="text-sm">{t.live}</span>
          </div>
        </div>

        {/* Divisão horizontal */}
         <div className="border-t-8 border-gray-100 my-6 -mx-6"></div>

        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">{t.productPerformance}</h3>
          <div className="flex items-center text-muted-foreground">
            <span className="text-xs mr-1">{t.viewAll}</span>
            <TikTokChevronRight className="h-4 w-4" />
          </div>
        </div>

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

        <div className="border-t border-border pt-3">
          <h3 className="text-base font-semibold">{t.contentPerformance}</h3>
        </div>
      </div>
    </div>
  );
};