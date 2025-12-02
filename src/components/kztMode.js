import { state } from '../config/state.js';
import { domElements } from '../utils/domElements.js';

export function initKztMode() {
  domElements.kztCheckbox.addEventListener('change', (e) => {
    state.isKzt = e.target.checked;

    const kzt = state.isKzt;

    domElements.usdRubDiv.style.display = kzt ? 'none' : 'block';
    domElements.usdRubInput.toggleAttribute('required', !kzt);

    domElements.usdKztDiv.style.display = kzt ? 'block' : 'none';
    domElements.usdKztInput.toggleAttribute('required', kzt);

    domElements.kztRubDiv.style.display = kzt ? 'block' : 'none';
    domElements.kztRubInput.toggleAttribute('required', kzt);

    if (kzt && state.usdToKzt && state.rubToKzt) {
      domElements.usdKztInput.value = state.usdToKzt;
      domElements.kztRubInput.value = state.rubToKzt;
    }
  });
}
