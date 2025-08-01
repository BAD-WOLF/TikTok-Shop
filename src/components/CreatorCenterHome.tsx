import { ChevronRight, ShoppingBag, Video, DollarSign, Gift, Mail, Users } from "lucide-react";
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
      estimatedCommission: "Comissão estimada",
      views: "Visualizações",
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
      estimatedCommission: "Estimated Commission",
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
      <div className="p-4">
        <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={onPerformanceClick}>
          <h2 className="text-xl font-semibold">{t.performanceData}</h2>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>
        
        <div className="flex space-x-2 mb-4">
          <Button 
            variant={activePeriod === 'today' ? 'secondary' : 'outline'} 
            size="sm" 
            className={activePeriod === 'today' ? 'bg-muted text-muted-foreground' : ''}
            onClick={() => onPeriodChange('today')}
          >
            {t.today}
          </Button>
          <Button 
            variant={activePeriod === 'last7days' ? 'secondary' : 'outline'} 
            size="sm"
            className={activePeriod === 'last7days' ? 'bg-muted text-muted-foreground' : ''}
            onClick={() => onPeriodChange('last7days')}
          >
            {t.last7days}
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">{t.gmv}</p>
            <p className="text-2xl font-bold">{currency} {data.gmv}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">{t.estimatedCommission}</p>
            <p className="text-2xl font-bold">{currency} {data.commission}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">{t.views}</p>
            <p className="text-2xl font-bold">{data.views}</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{t.toolkit}</h2>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">{t.marketplace}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">{t.manageShowcase}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <DollarSign className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">{t.revenue}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <Gift className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">{t.manageSamples}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <Mail className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">{t.collabInvites}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{t.increaseAudience}</h2>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>
        
        <Card className="p-4 border border-border">
          <div className="flex justify-between items-start mb-3">
            <span className="text-sm text-muted-foreground">{t.pending}</span>
            <Button className="bg-primary text-primary-foreground rounded-full px-6">
              {t.start}
            </Button>
          </div>
          <p className="text-base font-medium mb-3">
            {t.wantToGrowMore} 📈
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-primary">{currency} {data.campaignValue}</span>
            <span className="text-sm text-muted-foreground">{t.ends}</span>
          </div>
        </Card>

        <div className="mt-4 text-center">
          <Button variant="outline" className="w-full rounded-full">
            🎬 {t.createNow}
          </Button>
        </div>
      </div>
    </div>
  );
};