new TomSelect('#curSelectType', {
  plugins: ['remove_button'],
  placeholder: 'Выберите валюту...',
  maxItems: 1,
  closeAfterSelect: true,
  options: [
    { value: 'EUR', text: 'EUR - Euro' },
    { value: 'JPY', text: 'JPY - Japanese Yen' },
    { value: 'GBP', text: 'GBP - British Pound' },
    { value: 'AUD', text: 'AUD - Australian Dollar' },
    { value: 'CAD', text: 'CAD - Canadian Dollar' },
    { value: 'CHF', text: 'CHF - Swiss Franc' },
    { value: 'CNY', text: 'CNY - China Yuan Renminbi' },
    { value: 'SEK', text: 'SEK - Swedish Krona' },
    { value: 'MXN', text: 'MXN - Mexican Peso' },
    { value: 'AED', text: 'AED - UAE Dirham' },
    { value: 'AFN', text: 'AFN - Afghanistan Afghani' },
    { value: 'ALL', text: 'ALL - Albanian Lek' },
    { value: 'AMD', text: 'AMD - Armenian Dram' },
    { value: 'ANG', text: 'ANG - Neth. Ant An Guilder' },
    { value: 'AOA', text: 'AOA - Angolan Kwanza' },
    { value: 'ARS', text: 'ARS - Argentine Peso' },
    { value: 'AWG', text: 'AWG - Aruban Guilder' },
    { value: 'AZN', text: 'AZN - Azerbaijan Manat' },
    { value: 'BAM', text: 'BAM - Bosnian Convertible' },
    { value: 'BBD', text: 'BBD - Barbados Dollar' },
    { value: 'BDT', text: 'BDT - Bangladesh Taka' },
    { value: 'BGN', text: 'BGN - Bulgarian Lev' },
    { value: 'BHD', text: 'BHD - Bahrain Dinar' },
    { value: 'BIF', text: 'BIF - Burundi Franc' },
    { value: 'BMD', text: 'BMD - Bermudian Dollar' },
    { value: 'BND', text: 'BND - Brunei Dollar' },
    { value: 'BOB', text: 'BOB - Bolivian Boliviano' },
    { value: 'BRL', text: 'BRL - Brazilian Real' },
    { value: 'BSD', text: 'BSD - Bahamian Dollar' },
    { value: 'BTN', text: 'BTN - Bhutan Ngultrum' },
    { value: 'BWP', text: 'BWP - Botswana Pula' },
    { value: 'BYN', text: 'BYN - Belarusian Ruble' },
    { value: 'BZD', text: 'BZD - Belize Dollar' },
    { value: 'CDF', text: 'CDF - Congolais Franc' },
    { value: 'CLP', text: 'CLP - Chilean Peso' },
    { value: 'COP', text: 'COP - Colombian Peso' },
    { value: 'CRC', text: 'CRC - Costa Rican Colon' },
    { value: 'CVE', text: 'CVE - Cape Verde Escudo' },
    { value: 'CZK', text: 'CZK - Czech Koruna' },
    { value: 'DJF', text: 'DJF - Djibouti Franc' },
    { value: 'DKK', text: 'DKK - Danish Krone' },
    { value: 'DOP', text: 'DOP - Dominican Peso' },
    { value: 'DZD', text: 'DZD - Algerian Dinar' },
    { value: 'EGP', text: 'EGP - Egyptian Pound' },
    { value: 'ERN', text: 'ERN - Eritrean Nafka' },
    { value: 'ETB', text: 'ETB - Ethiopian Birr' },
    { value: 'FJD', text: 'FJD - Fiji Dollar' },
    { value: 'FKP', text: 'FKP - Falkland Is. Pound' },
    { value: 'GEL', text: 'GEL - Georgian Lari' },
    { value: 'GHS', text: 'GHS - Ghana Cedi' },
    { value: 'GIP', text: 'GIP - Gibraltar Pound' },
    { value: 'GMD', text: 'GMD - Gambia Dalasi' },
    { value: 'GNF', text: 'GNF - Guinea Franc' },
    { value: 'GQE', text: 'GQE - Eqguinea Ekwele' },
    { value: 'GTQ', text: 'GTQ - Guatemala Quetzal' },
    { value: 'GWP', text: 'GWP - GuineaBissau Peso' },
    { value: 'GYD', text: 'GYD - Guyana Dollar' },
    { value: 'HKD', text: 'HKD - Hong Kong Dollar' },
    { value: 'HNL', text: 'HNL - Hondura Lempira' },
    { value: 'HRK', text: 'HRK - Croatian Kuna' },
    { value: 'HTG', text: 'HTG - Haiti Gourde' },
    { value: 'HUF', text: 'HUF - Hungary Forint' },
    { value: 'IDR', text: 'IDR - Indonesian Rupiah' },
    { value: 'ILS', text: 'ILS - New Israeli Shekel' },
    { value: 'INR', text: 'INR - Indian Rupee' },
    { value: 'IQD', text: 'IQD - Iraqi Dinar' },
    { value: 'IRR', text: 'IRR - Iranian Rial' },
    { value: 'ISK', text: 'ISK - Iceland Krona' },
    { value: 'JMD', text: 'JMD - Jamaican Dollar' },
    { value: 'JOD', text: 'JOD - Jordanian Dinar' },
    { value: 'KES', text: 'KES - Kenyan Shilling' },
    { value: 'KGS', text: 'KGS - Kyrgyzstan Som' },
    { value: 'KHR', text: 'KHR - Cambodia Riel' },
    { value: 'KMF', text: 'KMF - Comoro Franc' },
    { value: 'KRW', text: 'KRW - South Korea Won' },
    { value: 'KWD', text: 'KWD - Kuwaiti Dinar' },
    { value: 'KYD', text: 'KYD - Cayman Is. Dollar' },
    { value: 'KZT', text: 'KZT - Kazakhstan Tenge' },
    { value: 'LAK', text: 'LAK - Laotian Kip' },
    { value: 'LBP', text: 'LBP - Lebanese Pound' },
    { value: 'LKR', text: 'LKR - Sri Lanka Rupee' },
    { value: 'LRD', text: 'LRD - Liberian Dollar' },
    { value: 'LSL', text: 'LSL - Lesotho Loti' },
    { value: 'LYD', text: 'LYD - Libyan Dinar' },
    { value: 'MAD', text: 'MAD - Moroccan Dirham' },
    { value: 'MDL', text: 'MDL - Moldovan Leu' },
    { value: 'MGA', text: 'MGA - Malagasy Ariary' },
    { value: 'MKD', text: 'MKD - Macedonian Denar' },
    { value: 'MMK', text: 'MMK - Myanmar Kyat' },
    { value: 'MNT', text: 'MNT - Mongolia Tugrik' },
    { value: 'MOP', text: 'MOP - Macau Pataca' },
    { value: 'MRU', text: 'MRU - Mauritania Ouguiya' },
    { value: 'MUR', text: 'MUR - Mauritius Rupee' },
    { value: 'MVR', text: 'MVR - Maldives Rufiyaa' },
    { value: 'MWK', text: 'MWK - Malawi Kwacha' },
    { value: 'MYR', text: 'MYR - Malaysian Ringgit' },
    { value: 'MZN', text: 'MZN - Mozambique Metical' },
    { value: 'NAD', text: 'NAD - Namibia Dollar' },
    { value: 'NGN', text: 'NGN - Nigeria Naira' },
    { value: 'NIO', text: 'NIO - Nicarag Cordoba Oro' },
    { value: 'NOK', text: 'NOK - Norwegian Krone' },
    { value: 'NPR', text: 'NPR - Nepalese Rupee' },
    { value: 'NZD', text: 'NZD - New Zealand Dollar' },
    { value: 'OMR', text: 'OMR - Oman Rial' },
    { value: 'PAB', text: 'PAB - Panama Balboa' },
    { value: 'PEN', text: 'PEN - Peru Nuevo Sol' },
    { value: 'PGK', text: 'PGK - Papua Ng Kina' },
    { value: 'PHP', text: 'PHP - Philippine Peso' },
    { value: 'PKR', text: 'PKR - Pakistan Rupee' },
    { value: 'PLN', text: 'PLN - Polish New Zloty' },
    { value: 'PYG', text: 'PYG - Paraguay Guarani' },
    { value: 'QAR', text: 'QAR - Qatar Rial' },
    { value: 'RON', text: 'RON - Romanian Lei' },
    { value: 'RSD', text: 'RSD - Serbia Dinar' },
    { value: 'RUB', text: 'RUB - Russian Ruble' },
    { value: 'RWF', text: 'RWF - Rwanda Franc' },
    { value: 'SAR', text: 'SAR - Saudi Riyal' },
    { value: 'SBD', text: 'SBD - Solomon Is. Dollar' },
    { value: 'SCR', text: 'SCR - Seychelles Rupee' },
    { value: 'SDG', text: 'SDG - Sudanese Pound' },
    { value: 'SGD', text: 'SGD - Singapore Dollar' },
    { value: 'SHP', text: 'SHP - St. Helena Pound' },
    { value: 'SLE', text: 'SLE - Sierra Leone Leone' },
    { value: 'SLL', text: 'SLL - Sierra L Leone' },
    { value: 'SOS', text: 'SOS - Somali Shilling' },
    { value: 'SRD', text: 'SRD - Surinam Dollar' },
    { value: 'SSP', text: 'SSP - South Sudanese Pound' },
    { value: 'STN', text: 'STN - Sao Tome Dobra' },
    { value: 'SVC', text: 'SVC - El Salvador Colon' },
    { value: 'SYP', text: 'SYP - Syrian Pound' },
    { value: 'SZL', text: 'SZL - Swazi Lilangeni' },
    { value: 'THB', text: 'THB - Thai Baht' },
    { value: 'TJS', text: 'TJS - Tajikistan Somoni' },
    { value: 'TMT', text: 'TMT - Turkmenistan Manat' },
    { value: 'TND', text: 'TND - Tunisian Dinar' },
    { value: 'TOP', text: 'TOP - Tonga Paanga' },
    { value: 'TRY', text: 'TRY - Turkish Lira' },
    { value: 'TTD', text: 'TTD - TrinidadTobago Dol.' },
    { value: 'TWD', text: 'TWD - New Taiwan Dollar' },
    { value: 'TZS', text: 'TZS - Tanzanian Shilling' },
    { value: 'UAH', text: 'UAH - Ukranian Hryvnia' },
    { value: 'UGX', text: 'UGX - Uganda Shilling' },
    { value: 'UYU', text: 'UYU - Uruguayo Peso' },
    { value: 'UZS', text: 'UZS - Uzbekistan Sum' },
    { value: 'VES', text: 'VES - Bolivar Soberano' },
    { value: 'VND', text: 'VND - Viet Nam Dong' },
    { value: 'VUV', text: 'VUV - Vanuatu Vatu' },
    { value: 'WST', text: 'WST - Samoa Tala' },
    { value: 'XAF', text: 'XAF - Cfa Franc Beac' },
    { value: 'XCD', text: 'XCD - E. Caribbean Dollar' },
    { value: 'XOF', text: 'XOF - Cfa Franc Bceao' },
    { value: 'XPF', text: 'XPF - Cfp Franc' },
    { value: 'YER', text: 'YER - Yemeni Rial' },
    { value: 'ZAR', text: 'ZAR - South African Rand' },
    { value: 'ZMW', text: 'ZMW - Zambian Kwacha' },
  ],
});

let state = {
  isKzt: false,
  isFee: false,
  rubToUsd: 0,
  usdToKzt: 0,
  rubToKzt: 0,
  error: '',
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
const button = document.querySelector('button');

// Функция для получения курса с FX платформы
const getExchangeRates = (rates) =>
  rates.reduce((acc, rate) => {
    if (rate.currency_sell === 'USD' && rate.currency_buy === 'RUB') {
      return {
        ...acc,
        rubToUsd: rate,
      };
    }
    if (rate.currency_sell === 'USD' && rate.currency_buy === 'KZT') {
      return {
        ...acc,
        usdToKzt: rate,
      };
    }
    if (rate.currency_sell === 'RUB' && rate.currency_buy === 'KZT') {
      return {
        ...acc,
        rubToKzt: rate,
      };
    }

    return acc;
  }, {});

const fetchExchangeRate = async () => {
  const url = 'https://api.bydlorita.fun/api/rate';
  try {
    const response = await fetch(url).then((res) => res.json());

    const rates = response.reason?.rates;

    const { rubToUsd, rubToKzt, usdToKzt } = getExchangeRates(rates);

    state = {
      ...state,
      rubToUsd: rubToUsd.sell,
      usdToKzt: usdToKzt.sell,
      rubToKzt: +rubToKzt.buy.toFixed(2),
    };

    if (state.rubToUsd !== 0) {
      usdRubInput.value = state.rubToUsd;
    }
  } catch (error) {
    state.error = error;
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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      const data = await response.json();
      const result = parseFloat(data.reverseAmount.replace(/,/g, '')).toFixed(
        2
      );

      return result;
    } catch (error) {
      state.error = error;
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

  switch (outputCurrency) {
    case 'kzt':
      result = usdInOutputCurrency / kztRubRate;
      break;
    case 'rub':
      result = usdInOutputCurrency;
      break;
    default:
      throw new Error('Invalid output currency');
  }

  return result;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  button.disabled = true;
  const rateResultEl = document.querySelector('#result');
  const sumResultEl = document.querySelector('#result-2');
  rateResultEl.textContent = '';
  sumResultEl.textContent = 'Пожалуйста, подождите...';
  const formData = new FormData(e.target);
  const curInput = Number(formData.get('curInput'));
  const curSelectType = document.querySelector('#curSelectType').value;
  const bankFee = Number(formData.get('bankFee'));
  const usdRubRate = Number(formData.get('usdRubRate'));
  const usdKztRate = Number(formData.get('usdKztRate'));
  const kztRubRate = Number(formData.get('kztRubRate'));
  const feeInput = Number(formData.get('feeInput'));
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
    button.disabled = false;
    rateResultEl.textContent = 'Что-то пошло не так.';
    sumResultEl.textContent = state.error;
  } else {
    button.disabled = false;
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
