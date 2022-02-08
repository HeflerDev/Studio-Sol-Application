import { requestNumber } from '../../services';
import { stash } from '../../store';

/**
 * Change state of all Led's to "Inactive"
 */
export const clearNum = () => {
  document.querySelectorAll('.led').forEach((item) => {
    item.classList.remove('active');
    item.classList.add('inactive');
  });
};

/**
 * When triggered, resets the entire game to it's initial state.
 * It would be easier a window.reload(), but since this is not the objective of the challenge,
 * I think this solution suits better.
 */
export const resetGame = () => {
  stash('errorCode', null);
  document.querySelectorAll('.led').forEach((item) => {
    item.classList.remove('victory');
    item.classList.remove('crash-report');
  });
  clearNum();
  document.querySelector('#second-number').classList.add('hidden');
  document.querySelector('#third-number').classList.add('hidden');
  document.querySelector('#input-send').disabled = false;
  document.querySelector('#submit-btn').disabled = false;
  document.querySelector('.button-container').classList.add('hidden');
  document.querySelector('#guess-container').classList.add('hidden');
  document.querySelector('#guess-container').classList.remove('victory');
  document.querySelector('#guess-container').classList.remove('crash-report');
  document.querySelector('#input-send').value = '';
  requestNumber();
};
