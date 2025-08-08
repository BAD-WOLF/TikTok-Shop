import { useState, useEffect } from "react";
import { TikTokHeader } from "@/components/TikTokHeader";
import { CreatorCenterHome } from "@/components/CreatorCenterHome";
import { PerformanceData } from "@/components/PerformanceData";
import { BottomNavigation } from "@/components/BottomNavigation";
import SettingsMenu from "@/components/SettingsMenu";
import { ProductEditModal } from "@/components/ProductEditModal";
import carpetImage from "@/assets/carpet-purple.png";
import headphonesImage from "@/assets/headphones-silver.png";
import sewingMachineImage from "@/assets/sewing-machine-pink.png";

interface Product {
  id: string;
  name: string;
  image: string;
  gmv: string;
  commission: string;
  sold: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'growth'>('home');
  const [showPerformance, setShowPerformance] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [productEditOpen, setProductEditOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [currency, setCurrency] = useState('R$');
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [activePeriod, setActivePeriod] = useState<'today' | 'last7days'>('today');

  const [homeDataToday, setHomeDataToday] = useState({
    gmv: '373',
    commission: '45',
    views: '55.6K',
    campaignValue: '70,00'
  });

  const [homeData7Days, setHomeData7Days] = useState({
    gmv: '2,610',
    commission: '315',
    views: '389.2K',
    campaignValue: '70,00'
  });

  const [performanceDataToday, setPerformanceDataToday] = useState({
    gmv: '59,85',
    itemsSold: '2',
    estimatedCommission: '7,08',
    commissionBase: '57,89',
    productViews: '14.0K',
    productClicks: '116'
  });

  const [performanceData7Days, setPerformanceData7Days] = useState({
    gmv: '418,95',
    itemsSold: '14',
    estimatedCommission: '49,56',
    commissionBase: '405,23',
    productViews: '98.0K',
    productClicks: '812'
  });

  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Tapete Sala Felpudo 1,50X1,00 Premium',
      image: carpetImage,
      gmv: '36,86',
      commission: '5,24',
      sold: 1
    },
    {
      id: '2', 
      name: 'Fones De Ouvido Sem Fio Bluetooth 5.2 S20 T...',
      image: headphonesImage,
      gmv: '22,99',
      commission: '1,84',
      sold: 1
    },
    {
      id: '3',
      name: 'Mini Máquina Costura Portátil Elétrica Pilha +',
      image: sewingMachineImage,
      gmv: '0',
      commission: '0',
      sold: 0
    }
  ]);

  useEffect(() => {
    setLanguage(currency === 'R$' ? 'pt' : 'en');
  }, [currency]);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleDataChange = (key: string, value: string, period: 'today' | 'last7days') => {
    if (period === 'today') {
      setHomeDataToday(prev => ({ ...prev, [key]: value }));
    } else {
      setHomeData7Days(prev => ({ ...prev, [key]: value }));
    }
  };

  const handlePerformanceDataChange = (key: string, value: string, period: 'today' | 'last7days') => {
    if (period === 'today') {
      setPerformanceDataToday(prev => ({ ...prev, [key]: value }));
    } else {
      setPerformanceData7Days(prev => ({ ...prev, [key]: value }));
    }
  };

  const getCurrentHomeData = () => {
    return activePeriod === 'today' ? homeDataToday : homeData7Days;
  };

  const getCurrentPerformanceData = () => {
    return activePeriod === 'today' ? performanceDataToday : performanceData7Days;
  };

  const handleEditProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    setEditingProduct(product);
    setProductEditOpen(true);
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    setProducts(prev => 
      prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
  };

  const getTitle = () => {
    if (showPerformance) {
      return language === 'pt' ? 'Dados' : 'Data';
    }
    return language === 'pt' ? 'Central de criadores do TikTok Shop' : 'TikTok Shop Creator Center';
  };

  return (
    <div className="h-screen flex flex-col bg-background tiktok-fade-in">
      <TikTokHeader 
        title={getTitle()}
        showBack={showPerformance}
        onBack={() => setShowPerformance(false)}
        onMenuClick={() => setSettingsOpen(true)}
      />

      {showPerformance ? (
        <PerformanceData
          currency={currency}
          language={language}
          data={getCurrentPerformanceData()}
          products={products}
          onEditProduct={handleEditProduct}
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriod}
        />
      ) : (
        <CreatorCenterHome
          currency={currency}
          language={language}
          data={getCurrentHomeData()}
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriod}
          onPerformanceClick={() => setShowPerformance(true)}
        />
      )}

      <BottomNavigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === 'growth') {
            setShowPerformance(true);
          } else {
            setShowPerformance(false);
          }
        }}
        language={language}
      />

      <SettingsMenu
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        currency={currency}
        onCurrencyChange={handleCurrencyChange}
        homeDataToday={homeDataToday}
        homeData7Days={homeData7Days}
        performanceDataToday={performanceDataToday}
        performanceData7Days={performanceData7Days}
        onDataChange={handleDataChange}
        onPerformanceDataChange={handlePerformanceDataChange}
        language={language}
      />

      <ProductEditModal
        isOpen={productEditOpen}
        onClose={() => setProductEditOpen(false)}
        product={editingProduct}
        onSave={handleSaveProduct}
        language={language}
      />
    </div>
  );
};

export default Index;
