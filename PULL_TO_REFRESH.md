# Pull to Refresh - Estilo TikTok

Este projeto implementa uma funcionalidade de "puxar para atualizar" (pull-to-refresh) inspirada no TikTok, com animações suaves e feedback visual.

## 🚀 Funcionalidades

- ✨ Animação suave estilo TikTok
- 🎯 Feedback visual em tempo real
- 📱 Otimizado para dispositivos móveis
- 🔄 Ícone rotativo com mudança de cor
- 💫 Transições CSS personalizadas
- 🎨 Design moderno e responsivo

## 📦 Componentes

### 1. `usePullToRefresh` Hook

Hook personalizado que gerencia a lógica do pull-to-refresh:

```typescript
const { isPulling, isRefreshing, pullDistance, containerProps } = usePullToRefresh({
  onRefresh: handleRefresh,
  threshold: 80,
  resistance: 2.5,
  enabled: true
});
```

**Parâmetros:**
- `onRefresh`: Função chamada quando o refresh é ativado
- `threshold`: Distância mínima para ativar o refresh (padrão: 80px)
- `resistance`: Resistência do movimento (padrão: 2.5)
- `enabled`: Habilita/desabilita a funcionalidade (padrão: true)

### 2. `PullToRefresh` Componente

Componente wrapper que adiciona a funcionalidade a qualquer conteúdo:

```tsx
<PullToRefresh onRefresh={handleRefresh}>
  <YourContent />
</PullToRefresh>
```

## 🎯 Como Usar

### Implementação Básica

```tsx
import { PullToRefresh } from '@/components/PullToRefresh';

const MyComponent = () => {
  const handleRefresh = async () => {
    // Sua lógica de atualização aqui
    await fetchNewData();
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div>
        {/* Seu conteúdo aqui */}
      </div>
    </PullToRefresh>
  );
};
```

### Implementação Avançada

```tsx
<PullToRefresh 
  onRefresh={handleRefresh}
  threshold={100}
  resistance={3}
  enabled={!isLoading}
  className="custom-class"
>
  <YourContent />
</PullToRefresh>
```

## 🎨 Personalização

### Cores e Estilos

O componente usa as seguintes classes CSS que podem ser personalizadas:

- `.bg-pink-500`: Cor do ícone quando pronto para refresh
- `.bg-gray-200`: Cor do ícone em estado normal
- `.text-white`: Cor do ícone quando ativo
- `.text-gray-600`: Cor do ícone em estado normal

### Animações

As animações são controladas por:

- `transform: translateY()`: Movimento vertical do conteúdo
- `transform: rotate()`: Rotação do ícone
- `transition`: Transições suaves

## 📱 Demonstração

Visite `/pull-to-refresh-demo` para ver uma demonstração completa da funcionalidade.

### Recursos da Demo:

- 📊 Métricas em tempo real
- 🔄 Contador de atualizações
- 🎯 Instruções de uso
- 🎨 Interface moderna

## 🔧 Configurações Recomendadas

### Para Listas de Dados
```tsx
<PullToRefresh 
  onRefresh={refetchData}
  threshold={60}
  resistance={2}
>
  <DataList />
</PullToRefresh>
```

### Para Dashboards
```tsx
<PullToRefresh 
  onRefresh={updateMetrics}
  threshold={80}
  resistance={2.5}
>
  <Dashboard />
</PullToRefresh>
```

### Para Feeds Sociais
```tsx
<PullToRefresh 
  onRefresh={loadNewPosts}
  threshold={70}
  resistance={2
>
  <SocialFeed />
</PullToRefresh>
```

## 🚀 Performance

- ⚡ Otimizado para 60fps
- 🎯 Debounce automático
- 📱 Suporte nativo para touch
- 🔄 Gerenciamento eficiente de estado

## 🔍 Troubleshooting

### Problema: Pull-to-refresh não funciona
**Solução:** Verifique se o container está no topo (`scrollTop === 0`)

### Problema: Animação travada
**Solução:** Verifique se `enabled={true}` e não há conflitos de CSS

### Problema: Refresh não dispara
**Solução:** Verifique se `pullDistance >= threshold`

## 📄 Licença

Este componente faz parte do projeto TikTok Shop Creator Center.

---

**Desenvolvido com ❤️ para uma experiência mobile excepcional**