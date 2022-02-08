import { clearNum } from './reset';
import { read } from '../../store';
import { displayNumber } from './numbers';

export const renderVictory = () => {
  document.querySelectorAll('.active').forEach((item) => {
    item.classList.add('victory');
  });
  document.querySelector('#guess-container').classList.add('victory');
};

export const renderReset = () => {
  document.querySelector('#input-send').disabled = true;
  document.querySelector('#submit-btn').disabled = true;
  document.querySelector('.button-container').classList.remove('hidden');
};

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
