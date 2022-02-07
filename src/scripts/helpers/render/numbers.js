/**
 * Handle the rendering of the numbers
 */

/**
 * Change state of all Led's to "Inactive"
 */
const clearNum = () => {
  document.querySelectorAll('.led').forEach((item) => {
    item.classList.remove('active');
    item.classList.add('inactive');
  });
};

/**
 * @param {string} selector The ID of the element
 */
const swapLedState = (selector) => {
  document.querySelector(`#${selector}`).classList.remove('inactive');
  document.querySelector(`#${selector}`).classList.add('active');
};

/**
 * Render the number one on the screen
 * @param {number} decimal Choose wich decimal house it will render
 */
const renderOne = (decimal) => {
  swapLedState(`top-right-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
};

const renderTwo = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-left-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

const renderThree = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

const renderFour = (decimal) => {
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`top-left-${decimal}`);
  swapLedState(`top-right-${decimal}`);
};

const renderFive = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-left-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

const renderSix = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-left-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-left-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

const renderSeven = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
};

const renderEight = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-left-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-left-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

const renderNine = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-left-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

const renderZero = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-left-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`bottom-left-${decimal}`);
  swapLedState(`bottom-right-${decimal}`);
  swapLedState(`bottom-${decimal}`);
};

/**
 *  Redirect the parameters to choose wich number will render
 *  @param {number} number The number to be rendered
 *  @param {number} decimal The number of decimal houses
 */
const renderNumber = (number, decimal) => {

    if (decimal === 2) { document.querySelector('#second-number').classList.remove('hidden') }
    if (decimal === 3) { document.querySelector('#third-number').classList.remove('hidden') }

  switch (number) {
    case 1:
      renderOne(decimal);
      break;
    case 2:
      renderTwo(decimal);
      break;
    case 3:
      renderThree(decimal);
      break;
    case 4:
      renderFour(decimal);
      break;
    case 5:
      renderFive(decimal);
      break;
    case 6:
      renderSix(decimal);
      break;
    case 7:
      renderSeven(decimal);
      break;
    case 8:
      renderEight(decimal);
      break;
    case 9:
      renderNine(decimal);
      break;
    case 0:
      renderZero(decimal);
      break;
    default:
      break;
  }
};

export default renderNumber;
