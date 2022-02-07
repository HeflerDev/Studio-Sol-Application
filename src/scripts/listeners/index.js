import renderNumber from '../helpers/render/numbers';
import { read } from '../store';
import { clearNum } from '../helpers/render/reset';
import { validateNumberInput } from '../helpers/data/validate';
import { formErrors } from '../helpers/render/formErrors';
import { renderGuessResult } from '../helpers/render/guess';

/**
 * Display the input number on the screen
 */
const displayNumber = () => {
      clearNum();
  document.querySelector('#third-number').classList.add('hidden');
  document.querySelector('#second-number').classList.add('hidden');
  const input = document.querySelector('#input-send').value;
  if (input.length === 1) return renderNumber(parseInt(input), 1);
  input.split('').forEach((item, index) => {
    renderNumber(parseInt(item), index + 1);
  });
};

window.onload = () => {
  document.querySelector('#guess-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('#input-send').value;
      const errors = validateNumberInput(input);
        if (errors) { 
            return formErrors(errors)
        }
        displayNumber()
        renderGuessResult(read('sortedNumber'), input)
        
    });

  /**
     * Block non-number input and more than 3 decimals
     */
  document.querySelector('#input-send')
    .addEventListener('input', ({ target }) => {
      target.value = target.value.match(/[0-9]{1,3}/);
    });
};
