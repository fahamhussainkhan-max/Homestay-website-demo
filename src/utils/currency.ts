export type Currency = 'INR' | 'USD' | 'EUR';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  INR: { symbol: '₹', rate: 1, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' }
};

export function formatPrice(amountInINR: number, currency: Currency = 'INR'): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  const converted = Math.round(amountInINR * rate);
  
  if (currency === 'INR') {
    return `${symbol}${amountInINR.toLocaleString('en-IN')}`;
  }
  return `${symbol}${converted.toLocaleString('en-US')}`;
}
