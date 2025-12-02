import { state } from '../config/state.js';
import { domElements } from '../utils/domElements.js';

export function initFeeToggle() {
  domElements.feeCheckbox.addEventListener('change', (e) => {
    state.isFee = e.target.checked;

    domElements.feeDiv.style.display = state.isFee ? 'flex' : 'none';

    if (state.isFee) {
      domElements.feeInput.setAttribute('required', '');
    } else {
      domElements.feeInput.removeAttribute('required');
    }
  });
}
