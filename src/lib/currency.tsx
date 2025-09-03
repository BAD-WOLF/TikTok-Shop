import React from 'react';

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

/**
 * Formata valores monetários com classe CSS para símbolos de moeda
 */
export const formatCurrencyWithClass = (currency: string, value: string): React.ReactElement => {
  if (currency === 'R$') {
    return (
      <>
        <span className="currency-symbol">{currency}</span> <span className="numeric-text">{value}</span>
      </>
    );
  }
  return (
    <>
      <span className="currency-symbol">{currency}</span><span className="numeric-text">{value}</span>
    </>
  );
};