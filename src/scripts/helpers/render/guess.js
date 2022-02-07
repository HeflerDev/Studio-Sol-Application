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

export const renderGuessResult = (sortedNumber, input) => {
  const elem = document.querySelector('#guess-container');
  elem.classList.remove('hidden');
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
