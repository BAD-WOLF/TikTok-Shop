/**
 * Formata valores monetários de acordo com a moeda
 * R$ - com espaço (R$ 100,00)
 * Outras moedas - sem espaço ($100.00, €100.00, £100.00)
 */
export const formatCurrency = (currency: string, value: string): string => {
  if (currency === 'R$') {
    return `${currency} ${value}`;
  }
  return `${currency}${value}`;
};