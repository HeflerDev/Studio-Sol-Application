/**
 * Display Errors in the screen
 * @param { Array } errors - An array of strings
 */
export const formErrors = (errors) => {
  document.querySelector('#input-send').value = '';
  document.querySelector('.errors-container').classList.remove('hidden');
  const elem = document.querySelector('.errors-container');
  elem.innerHTML = '';
  errors.forEach((item) => {
    elem.innerHTML += `<p>${item}</p>`;
  });
};
