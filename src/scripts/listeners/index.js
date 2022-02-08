import { displayNumber } from '../helpers/render/numbers';
import { read } from '../store';
import { validateNumberInput } from '../helpers/data/validate';
import { formErrors } from '../helpers/render/formErrors';
import { renderGuessResult } from '../helpers/render/guess';
import { resetGame } from '../helpers/render/reset'

window.onload = () => {
  document.querySelector('#guess-form')
    .addEventListener('submit', (e) => {
      console.log(read('sortedNumber'));
      e.preventDefault();
      const input = parseInt(document.querySelector('#input-send').value, 10).toString();
      const errors = validateNumberInput(input);
      if (errors) {
        return formErrors(errors);
      }

      document.querySelector('.errors-container').classList.add('hidden');
      displayNumber(input);
      renderGuessResult(read('sortedNumber'), input);
      document.querySelector("#input-send").value = ""
      return 0;
    });

  /**
     * Block non-number input and more than 3 decimals
     */
  document.querySelector('#input-send')
    .addEventListener('input', ({ target }) => {
      target.value = target.value.match(/[0-9]{1,3}/);
    });

  document.querySelector('#new-game-button')
    .addEventListener('click', () => {
      resetGame()
    });
};
