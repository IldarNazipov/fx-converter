import { state } from '../config/state.js';

const getExchangeRates = (rates) =>
  rates.reduce((acc, rate) => {
    if (rate.currency_sell === 'USD' && rate.currency_buy === 'RUB') {
      acc.rubToUsd = rate;
    }
    if (rate.currency_sell === 'USD' && rate.currency_buy === 'KZT') {
      acc.usdToKzt = rate;
    }
    if (rate.currency_sell === 'RUB' && rate.currency_buy === 'KZT') {
      acc.rubToKzt = rate;
    }
    return acc;
  }, {});

export async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.ildarito.com.ru/api/rate');
    const data = await response.json();
    const rates = data.reason?.rates;

    const { rubToUsd, rubToKzt, usdToKzt } = getExchangeRates(rates);

    state.rubToUsd = rubToUsd.sell;
    state.usdToKzt = usdToKzt.sell;
    state.rubToKzt = +rubToKzt.buy.toFixed(2);

    return state;
  } catch (e) {
    state.error = e;
  }
}
