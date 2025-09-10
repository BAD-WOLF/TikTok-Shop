interface TikTokMovableHeaderProps {
  title: string;
  showBack?: boolean;
  isRefreshing?: boolean;
}

export const TikTokMovableHeader = ({ 
  title, 
  showBack = false,
  isRefreshing = false
}: TikTokMovableHeaderProps) => {
  return (
    <div className="bg-card">
      {/* Spacer para compensar o header fixo */}
      <div className="h-24"></div>
      
      {/* Animação de refresh durante o pull */}
      {isRefreshing && (
        <div className="flex justify-center py-2">
          <div className="relative w-4 h-2">
            <div 
              className="absolute w-2 h-2 bg-red-500/90 rounded-full" 
              style={{
                animation: 'move-right 1.5s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute w-2 h-2 bg-sky-300/90 rounded-full" 
              style={{
                animation: 'move-left 1.5s ease-in-out infinite'
              }}
            ></div>
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes move-right {
                0% {
                  left: 0;
                  z-index: 1;
                  transform: scale(1);
                }
                50% {
                  left: 8px;
                  z-index: 2;
                  transform: scale(1.2);
                }
                100% {
                  left: 0;
                  z-index: 1;
                  transform: scale(1);
                }
              }
              @keyframes move-left {
                0% {
                  right: 0;
                  z-index: 1;
                  transform: scale(1);
                }
                50% {
                  right: 8px;
                  z-index: 0;
                  transform: scale(0.8);
                }
                100% {
                  right: 0;
                  z-index: 1;
                  transform: scale(1);
                }
              }
            `
          }} />
        </div>
      )}
        
        {/* Título principal (apenas quando não está em modo back) */}
      {!showBack && (
        <div className="px-4 pb-4">
          <h1 className="text-2xl font-bold text-foreground">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};