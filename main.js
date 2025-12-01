import { initSelect } from './components/select.js';
import { initFeeToggle } from './components/fee.js';
import { initKztMode } from './components/kztMode.js';
import { initFormHandler } from './handlers/formHandler.js';
import { fetchExchangeRate } from './utils/api.js';
import { domElements } from './utils/dom.js';
import { state } from './config/state.js';

(async () => {
  initSelect();
  initFeeToggle();
  initKztMode();
  initFormHandler();

  await fetchExchangeRate();

  if (state.rubToUsd) {
    domElements.usdRubInput.value = state.rubToUsd;
  }
})();
