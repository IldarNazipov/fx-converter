import { calculateRate } from '../utils/calculateRate.js';
import { domElements } from '../utils/dom.js';
import { state } from '../config/state.js';

export function initFormHandler() {
  domElements.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    domElements.button.disabled = true;

    const rateResult = document.querySelector('#result');
    const sumResult = document.querySelector('#result-2');

    rateResult.textContent = '';
    sumResult.textContent = 'Пожалуйста, подождите...';

    const data = new FormData(e.target);

    const curInput = Number(data.get('curInput'));
    const curSelectType = document.querySelector('#curSelectType').value;
    const bankFee = Number(data.get('bankFee'));
    const feeInputValue = Number(data.get('feeInput'));

    const feeSum =
      domElements.select.value === 'fix'
        ? feeInputValue
        : (feeInputValue * curInput) / 100;

    const usdRate = state.isKzt
      ? Number(data.get('usdKztRate'))
      : Number(data.get('usdRubRate'));

    const kztRubRate = Number(data.get('kztRubRate'));

    const result = await calculateRate(
      curInput,
      curSelectType,
      bankFee,
      usdRate,
      kztRubRate,
      state.isKzt ? 'kzt' : 'rub',
      feeSum
    );

    domElements.button.disabled = false;

    if (isNaN(result)) {
      rateResult.textContent = 'Ошибка.';
      sumResult.textContent = state.error;
      return;
    }

    rateResult.textContent = `Курс к рублю: ${(result / curInput).toFixed(6)}`;
    sumResult.textContent = `Сумма в рублях: ${result.toFixed(2)}`;
  });
}
