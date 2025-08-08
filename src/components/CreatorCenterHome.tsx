import { TikTokChevronRight, TikTokShoppingBag, TikTokVideo, TikTokDollarSign, TikTokGift, TikTokMail, TikTokUsers, TikTokCreate } from "./TikTokIcons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CreatorCenterHomeProps {
  currency: string;
  language: 'pt' | 'en';
  data: {
    gmv: string;
    commission: string;
    views: string;
    campaignValue: string;
  };
  activePeriod: 'today' | 'last7days';
  onPeriodChange: (period: 'today' | 'last7days') => void;
  onPerformanceClick: () => void;
}

export const CreatorCenterHome = ({ currency, language, data, activePeriod, onPeriodChange, onPerformanceClick }: CreatorCenterHomeProps) => {
  const texts = {
    pt: {
      performanceData: "Dados de desempenho",
      today: "Hoje",
      last7days: "Últimos 7 dias",
      gmv: "GMV",
      estimatedCommission: "Comissão estima...",
      views: "Visualizações do...",
      toolkit: "Kit de ferramentas TikTok Shop",
      marketplace: "Mercado de produtos",
      manageShowcase: "Gerenciar vitrine",
      revenue: "Receita",
      manageSamples: "Gerenciar amostras",
      collabInvites: "Convites de colaboração",
      increaseAudience: "Aumente seu público e sua receita",
      pending: "Pendente",
      wantToGrowMore: "Quer crescer mais? Publique vídeos curtos diariamente!",
      start: "Iniciar",
      ends: "Termina em 07/30",
      createNow: "Criar agora"
    },
    en: {
      performanceData: "Performance Data",
      today: "Today",
      last7days: "Last 7 days",
      gmv: "GMV",
      estimatedCommission: "Estimated Comm...",
      views: "Views",
      toolkit: "TikTok Shop Toolkit",
      marketplace: "Product Marketplace",
      manageShowcase: "Manage Showcase",
      revenue: "Revenue",
      manageSamples: "Manage Samples",
      collabInvites: "Collaboration Invites",
      increaseAudience: "Increase your audience and revenue",
      pending: "Pending",
      wantToGrowMore: "Want to grow more? Post short videos daily!",
      start: "Start",
      ends: "Ends on 07/30",
      createNow: "Create now"
    }
  };

  const t = texts[language];

  return (
    <div className="flex-1 bg-background tiktok-scroll overflow-y-auto">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={onPerformanceClick}>
          <h2 className="text-lg font-semibold">{t.performanceData}</h2>
          <TikTokChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="flex space-x-2 mb-3">
          <Button 
            variant={activePeriod === 'today' ? 'secondary' : 'outline'} 
            size="sm" 
            className={`text-xs px-3 py-1 ${activePeriod === 'today' ? 'bg-muted text-muted-foreground' : ''}`}
            onClick={() => onPeriodChange('today')}
          >
            {t.today}
          </Button>
          <Button 
            variant={activePeriod === 'last7days' ? 'secondary' : 'outline'} 
            size="sm"
            className={`text-xs px-3 py-1 ${activePeriod === 'last7days' ? 'bg-muted text-muted-foreground' : ''}`}
            onClick={() => onPeriodChange('last7days')}
          >
            {t.last7days}
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.gmv}</p>
            <p className="text-lg font-bold">{currency} {data.gmv}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.estimatedCommission}</p>
            <p className="text-lg font-bold">{currency} {data.commission}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.views}</p>
            <p className="text-lg font-bold">{data.views}</p>
          </div>
        </div>
      </div>

      {/* Horizontal division */}
      <div className="border-t-8 border-gray-100 -mx-6 my-6"></div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">{t.toolkit}</h2>
          <TikTokChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="grid grid-cols-5 gap-3">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-2">
              <TikTokShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xs text-center">{t.marketplace}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-2">
              <TikTokUsers className="h-5 w-5" />
            </div>
            <span className="text-xs text-center">{t.manageShowcase}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-2">
              <TikTokDollarSign className="h-5 w-5" />
            </div>
            <span className="text-xs text-center">{t.revenue}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-2">
              <TikTokGift className="h-5 w-5" />
            </div>
            <span className="text-xs text-center">{t.manageSamples}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-2">
              <TikTokMail className="h-5 w-5" />
            </div>
            <span className="text-xs text-center">{t.collabInvites}</span>
          </div>
        </div>
      </div>

      {/* Horizontal division */}
      <div className="border-t-8 border-gray-100 -mx-6 my-6"></div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">{t.increaseAudience}</h2>
          <TikTokChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <Card className="p-3 border border-border">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-muted-foreground">{t.pending}</span>
            <Button className="bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm">
              {t.start}
            </Button>
          </div>
          <p className="text-sm font-medium mb-2">
            {t.wantToGrowMore} 📈
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary">{currency} {data.campaignValue}</span>
            <span className="text-xs text-muted-foreground">{t.ends}</span>
          </div>
        </Card>

      </div>
      
      {/* Central Floating Create Button */}
      <Button 
        className="fixed bottom-16 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-black shadow-lg z-50 flex items-center justify-center gap-2 border border-gray-200"
      >
        <TikTokCreate className="h-5 w-5" />
        <span className="text-base font-medium">Criar agora</span>
      </Button>
    </div>
  );
};