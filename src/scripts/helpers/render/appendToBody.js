/**
 * Append element to <main> tag. If there is no <main>, it creates one
 * @param {string} value The element to be rendered
 */
export const appendToBody = (value) => {
  const elem = document.querySelector('main');
  if (elem) {
    return elem.innerHTML += value;
  }
  return document.querySelector('body').innerHTML = `<main>${value}</main>`;
};
