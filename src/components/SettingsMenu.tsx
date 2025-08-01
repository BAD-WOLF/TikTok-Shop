import { useState } from "react";
import { X, Edit2, DollarSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  homeDataToday: any;
  homeData7Days: any;
  performanceDataToday: any;
  performanceData7Days: any;
  onDataChange: (key: string, value: string, period: 'today' | 'last7days') => void;
  onPerformanceDataChange: (key: string, value: string, period: 'today' | 'last7days') => void;
  language: 'pt' | 'en';
}

export const SettingsMenu = ({
  isOpen,
  onClose,
  currency,
  onCurrencyChange,
  homeDataToday,
  homeData7Days,
  performanceDataToday,
  performanceData7Days,
  onDataChange,
  onPerformanceDataChange,
  language
}: SettingsMenuProps) => {
  const [activeSection, setActiveSection] = useState<'currency' | 'home' | 'performance'>('currency');
  const [activePeriod, setActivePeriod] = useState<'today' | 'last7days'>('today');

  const texts = {
    pt: {
      settings: "Configurações",
      currency: "Moeda",
      homeData: "Dados da Tela Inicial",
      performanceData: "Dados de Performance",
      today: "Hoje",
      last7days: "Últimos 7 dias",
      gmv: "GMV",
      commission: "Comissão",
      views: "Visualizações",
      campaignValue: "Valor da Campanha",
      itemsSold: "Itens Vendidos",
      commissionBase: "Base de Comissão",
      productViews: "Visualizações do Produto",
      productClicks: "Cliques no Produto",
      save: "Salvar"
    },
    en: {
      settings: "Settings",
      currency: "Currency",
      homeData: "Home Screen Data",
      performanceData: "Performance Data",
      today: "Today",
      last7days: "Last 7 days",
      gmv: "GMV",
      commission: "Commission",
      views: "Views",
      campaignValue: "Campaign Value",
      itemsSold: "Items Sold",
      commissionBase: "Commission Base",
      productViews: "Product Views",
      productClicks: "Product Clicks",
      save: "Save"
    }
  };

  const t = texts[language];

  const getCurrentHomeData = () => {
    return activePeriod === 'today' ? homeDataToday : homeData7Days;
  };

  const getCurrentPerformanceData = () => {
    return activePeriod === 'today' ? performanceDataToday : performanceData7Days;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-card w-full h-[95vh] rounded-t-2xl p-4 tiktok-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">{t.settings}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex space-x-2 mb-6">
          <Button
            variant={activeSection === 'currency' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveSection('currency')}
          >
            <Globe className="h-4 w-4 mr-2" />
            {t.currency}
          </Button>
          <Button
            variant={activeSection === 'home' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveSection('home')}
          >
            <Edit2 className="h-4 w-4 mr-2" />
            {t.homeData}
          </Button>
          <Button
            variant={activeSection === 'performance' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveSection('performance')}
          >
            <DollarSign className="h-4 w-4 mr-2" />
            {t.performanceData}
          </Button>
        </div>
        {(activeSection === 'home' || activeSection === 'performance') && (
          <div className="flex space-x-2 mb-4">
            <Button
              variant={activePeriod === 'today' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActivePeriod('today')}
            >
              {t.today}
            </Button>
            <Button
              variant={activePeriod === 'last7days' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActivePeriod('last7days')}
            >
              {t.last7days}
            </Button>
          </div>
        )}

        <div className="tiktok-scroll overflow-y-auto max-h-[60vh]">
          {activeSection === 'currency' && (
            <Card className="p-4">
              <Label htmlFor="currency-select">{t.currency}</Label>
              <Select value={currency} onValueChange={onCurrencyChange}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="R$">R$ - Real Brasileiro</SelectItem>
                  <SelectItem value="$">$ - US Dollar</SelectItem>
                  <SelectItem value="€">€ - Euro</SelectItem>
                  <SelectItem value="£">£ - British Pound</SelectItem>
                  <SelectItem value="¥">¥ - Japanese Yen</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          )}
          {activeSection === 'home' && (
            <div className="space-y-4">
              <Card className="p-4">
                <Label htmlFor="gmv">{t.gmv}</Label>
                <Input
                  id="gmv"
                  value={getCurrentHomeData().gmv}
                  onChange={(e) => onDataChange('gmv', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="commission">{t.commission}</Label>
                <Input
                  id="commission"
                  value={getCurrentHomeData().commission}
                  onChange={(e) => onDataChange('commission', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="views">{t.views}</Label>
                <Input
                  id="views"
                  value={getCurrentHomeData().views}
                  onChange={(e) => onDataChange('views', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="campaign">{t.campaignValue}</Label>
                <Input
                  id="campaign"
                  value={getCurrentHomeData().campaignValue}
                  onChange={(e) => onDataChange('campaignValue', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
            </div>
          )}

          {activeSection === 'performance' && (
            <div className="space-y-4">
              <Card className="p-4">
                <Label htmlFor="perf-gmv">{t.gmv}</Label>
                <Input
                  id="perf-gmv"
                  value={getCurrentPerformanceData().gmv}
                  onChange={(e) => onPerformanceDataChange('gmv', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="items-sold">{t.itemsSold}</Label>
                <Input
                  id="items-sold"
                  value={getCurrentPerformanceData().itemsSold}
                  onChange={(e) => onPerformanceDataChange('itemsSold', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="perf-commission">{t.commission}</Label>
                <Input
                  id="perf-commission"
                  value={getCurrentPerformanceData().estimatedCommission}
                  onChange={(e) => onPerformanceDataChange('estimatedCommission', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="commission-base">{t.commissionBase}</Label>
                <Input
                  id="commission-base"
                  value={getCurrentPerformanceData().commissionBase}
                  onChange={(e) => onPerformanceDataChange('commissionBase', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="product-views">{t.productViews}</Label>
                <Input
                  id="product-views"
                  value={getCurrentPerformanceData().productViews}
                  onChange={(e) => onPerformanceDataChange('productViews', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
              <Card className="p-4">
                <Label htmlFor="product-clicks">{t.productClicks}</Label>
                <Input
                  id="product-clicks"
                  value={getCurrentPerformanceData().productClicks}
                  onChange={(e) => onPerformanceDataChange('productClicks', e.target.value, activePeriod)}
                  className="mt-2"
                />
              </Card>
            </div>
          )}
        </div>

        <div className="mt-2">
          <Button onClick={onClose} className="w-full">
            {t.save}
          </Button>
        </div>
      </div>
    </div>
  );
};