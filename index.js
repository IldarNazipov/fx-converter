const state = {
  isKzt: false,
  isFee: false,
  rubToUsd: 0,
  usdToKzt: 0,
  rubToKzt: 0,
};

// Элементы
const usdRubInput = document.getElementById('usdRubRate');
const usdRubDiv = document.querySelector('.usd-rub');
const usdKztDiv = document.querySelector('.usd-kzt');
const usdKztInput = document.getElementById('usdKztRate');
const kztRubDiv = document.querySelector('.kzt-rub');
const kztRubInput = document.getElementById('kztRubRate');
const form = document.getElementById('conversionForm');
const select = document.getElementById('select-addon');
const feeCheckbox = document.getElementById('feeCheckbox');
const feeDiv = document.querySelector('.fee');
const feeInput = document.getElementById('feeInput');

// Функция для получения курса с FX платформы
const fetchExchangeRate = async () => {
  const url = 'http://216.9.225.204:3000/api/rate';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();
    const rates = data.reason.rates;

    const rubToUsdObj = rates.find(
      (rate) => rate.currency_sell === 'USD' && rate.currency_buy === 'RUB'
    );
    const usdToKztObj = rates.find(
      (rate) => rate.currency_sell === 'USD' && rate.currency_buy === 'KZT'
    );
    const rubToKztObj = rates.find(
      (rate) => rate.currency_sell === 'RUB' && rate.currency_buy === 'KZT'
    );

    state.rubToUsd = rubToUsdObj.sell;
    state.usdToKzt = usdToKztObj.sell;
    state.rubToKzt = +rubToKztObj.buy.toFixed(2);

    if (state.rubToUsd !== 0) {
      usdRubInput.value = state.rubToUsd;
    }
  } catch (error) {
    console.log(error);
  }
};

fetchExchangeRate();

// Функция расчета курса
const calculateRate = async (
  curInput,
  curInputType,
  bankFee,
  usdRate,
  kztRubRate,
  outputCurrency,
  feeSum
) => {
  const fetchVisaExchangeRate = async (curInput, curInputType, bankFee) => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      timeZone: 'America/New_York',
    });
    const currentDate = formatter.format(date);
    const url = `https://usa.visa.com/cmsapi/fx/rates?amount=${curInput}&fee=${bankFee}&utcConvertedDate=${currentDate}&exchangedate=${currentDate}&fromCurr=USD&toCurr=${curInputType}`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      const result = parseFloat(data.reverseAmount.replace(/,/g, '')).toFixed(
        2
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const usdCurRate = await fetchVisaExchangeRate(
    curInput,
    curInputType,
    bankFee
  );

  let curWithCommission;
  if (state.isFee) {
    curWithCommission = curInput + feeSum;
  } else {
    curWithCommission = curInput;
  }
  const curInUsd = curWithCommission / usdCurRate;

  const usdInOutputCurrency = usdRate * curInUsd;
  let result;

  if (outputCurrency === 'kzt') {
    const kztInRub = usdInOutputCurrency / kztRubRate;
    result = kztInRub;
  } else if (outputCurrency === 'rub') {
    result = usdInOutputCurrency;
  } else {
    throw new Error('Invalid output currency');
  }

  return result;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const rateResultEl = document.querySelector('#result');
  const sumResultEl = document.querySelector('#result-2');
  rateResultEl.textContent = 'Пожалуйста, подождите...';
  sumResultEl.textContent = 'Пожалуйста, подождите...';
  const formData = new FormData(e.target);
  const curInput = +formData.get('curInput');
  const curSelectType = document.querySelector('#curSelectType').value;
  const bankFee = +formData.get('bankFee');
  const usdRubRate = +formData.get('usdRubRate');
  const usdKztRate = +formData.get('usdKztRate');
  const kztRubRate = +formData.get('kztRubRate');
  const feeInput = +formData.get('feeInput');
  const feeSum =
    select.value === 'fix' ? feeInput : (feeInput * curInput) / 100;
  const result = state.isKzt
    ? await calculateRate(
        curInput,
        curSelectType,
        bankFee,
        usdKztRate,
        kztRubRate,
        'kzt',
        feeSum
      )
    : await calculateRate(
        curInput,
        curSelectType,
        bankFee,
        usdRubRate,
        kztRubRate,
        'rub',
        feeSum
      );
  if (isNaN(result)) {
    rateResultEl.textContent = 'Что-то пошло не так.';
    sumResultEl.textContent = 'Проверьте параметры запроса.';
  } else {
    rateResultEl.textContent = `Курс к рублю: ${(result / curInput).toFixed(
      6
    )}`;
    sumResultEl.textContent = `Сумма в рублях: ${result.toFixed(2)}`;
  }
});

feeCheckbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    state.isFee = true;
    feeDiv.style.display = 'flex';
    feeInput.setAttribute('required', '');
  } else {
    state.isFee = false;
    feeDiv.style.display = 'none';
    feeInput.removeAttribute('required');
  }
});

const kztCheckbox = document.getElementById('kztCheckbox');
kztCheckbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    state.isKzt = true;
    usdRubDiv.style.display = 'none';
    usdRubInput.removeAttribute('required');
    usdKztDiv.style.display = 'block';
    usdKztInput.setAttribute('required', '');
    kztRubDiv.style.display = 'block';
    kztRubInput.setAttribute('required', '');
    if (state.usdToKzt !== 0 && state.rubToKzt !== 0) {
      usdKztInput.value = state.usdToKzt;
      kztRubInput.value = state.rubToKzt;
    }
  } else {
    state.isKzt = false;
    usdRubDiv.style.display = 'block';
    usdRubInput.setAttribute('required', '');
    usdKztDiv.style.display = 'none';
    usdKztInput.removeAttribute('required');
    kztRubDiv.style.display = 'none';
    kztRubInput.removeAttribute('required');
  }
});
