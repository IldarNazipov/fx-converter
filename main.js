import { initSelect } from './src/components/select.js';
import { initFeeToggle } from './src/components/fee.js';
import { initKztMode } from './src/components/kztMode.js';
import { initFormHandler } from './src/handlers/formHandler.js';
import { fetchExchangeRate } from './src/utils/bankApi.js';
import { domElements } from './src/utils/domElements.js';
import { state } from './src/config/state.js';

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
