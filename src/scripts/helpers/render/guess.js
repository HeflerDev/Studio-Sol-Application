import { clearNum } from './reset';
import { read } from '../../store';
import { displayNumber } from './numbers';

/**
 * Add the 'victory' class to display visual feedback when the player wins.
 */
export const renderVictory = () => {
  document.querySelectorAll('.active').forEach((item) => {
    item.classList.add('victory');
  });
  document.querySelector('#guess-container').classList.add('victory');
};

/*
 * Disable form inputs and render the reset button.
 */
export const renderReset = () => {
  document.querySelector('#input-send').disabled = true;
  document.querySelector('#submit-btn').disabled = true;
  document.querySelector('.button-container').classList.remove('hidden');
};

/**
 * Add the 'crash-report' class to display visual feedback when the requisition returns error.
 * @param { object } elem The element wich the error class will be added.
 */
export const renderCrash = (elem) => {
  clearNum();
  displayNumber(read('errorCode').toString());
  elem.innerHTML = 'ERRO';
  document.querySelectorAll('.active').forEach((item) => {
    item.classList.add('crash-report');
  });
  document.querySelector('#guess-container').classList.add('crash-report');
  renderReset();
};

/**
 * Alternately display info to the user, based on it's input.
 * @param {number} sortedNumber : The number returned from the requisition.
 * @param {string} input : The value guessed in the input.
 */
export const renderGuessResult = (sortedNumber, input) => {
  const elem = document.querySelector('#guess-container');
  elem.classList.remove('hidden');

  if (read('errorCode') || !read('sortedNumber')) return renderCrash(elem);

  if (input > sortedNumber) {
    elem.innerHTML = 'É menor';
  } else if (input < sortedNumber) {
    elem.innerHTML = 'É maior';
  } else {
    elem.innerHTML = 'Você acertou!!!!';
    renderVictory();
    renderReset();
  }
};
