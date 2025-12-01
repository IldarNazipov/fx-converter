import { state } from '../config/state.js';

export async function fetchVisaExchangeRate(amount, currency, bankFee) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'America/New_York',
  });

  const currentDate = formatter.format(new Date());

  const url = `https://usa.visa.com/cmsapi/fx/rates?amount=${amount}&fee=${bankFee}&utcConvertedDate=${currentDate}&exchangedate=${currentDate}&fromCurr=USD&toCurr=${currency}`;

  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    const data = await response.json();
    return parseFloat(data.reverseAmount.replace(/,/g, '')).toFixed(2);
  } catch (e) {
    state.error = e;
  }
}
