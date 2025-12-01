import { currencies } from '../config/currencies.js';

export function initSelect() {
  new TomSelect('#curSelectType', {
    plugins: ['remove_button'],
    placeholder: 'Выберите валюту...',
    maxItems: 1,
    closeAfterSelect: true,
    options: currencies,
  });
}
