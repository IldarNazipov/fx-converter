import { fetchVisaExchangeRate } from './visaApi.js';
import { state } from '../config/state.js';

export async function calculateRate(
  curInput,
  curInputType,
  bankFee,
  usdRate,
  kztRubRate,
  outputCurrency,
  feeSum
) {
  const usdCurRate = await fetchVisaExchangeRate(
    curInput,
    curInputType,
    bankFee
  );

  const curWithCommission = state.isFee ? curInput + feeSum : curInput;

  const curInUsd = curWithCommission / usdCurRate;
  const usdInOutput = usdRate * curInUsd;

  return outputCurrency === 'kzt' ? usdInOutput / kztRubRate : usdInOutput;
}
