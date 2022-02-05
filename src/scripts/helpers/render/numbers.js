/**
 * Change state of all Led's to "Inactive"
 */
const clearNum = () => {
  document.querySelectorAll('.led').forEach((item) => {
    item.classList.remove('active').add('inactive');
  });
};

const swapLedState = (selector) => {
  document.querySelector(selector).classList.remove('inactive').add('active');
};

const renderOne = (decimal) => {
  swapLedState(`#top-right-${decimal}`);
  swapLedState(`#bottom-right-${decimal}`);
};

const renderTwo = (decimal) => {
  swapLedState(`top-${decimal}`);
  swapLedState(`top-right-${decimal}`);
  swapLedState(`middle-top-${decimal}`);
  swapLedState(`middle-bottom-${decimal}`);
  swapLedState(`bottom-left-${decimal}`);
  swapLedState(`bottom-${decimal}`)
};

/**
 *  Render a chosen number to the Led
 *  @param {number} x The number to be rendered
 *  @param {number} y The decimal house
 */
const renderNumber = (number, decimal) => {
  if (decimal !== 1
    || decimal !== 10
    || decimal !== 100) { return new Error('Invalid Value'); }

  clearNum();

  switch (number) {
    case 1:
      renderOne(decimal);
    default:
      break;
  }
};

export default renderNumber;
