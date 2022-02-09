/* eslint-disable */

import { formErrors } from '..';

describe('when rendering errors', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="errors-container"></div>
      <form id="guess-form">
        <label for="send">
          <input type="text" id="input-send" />
        </label>
        <input type="submit" value="ENVIAR" id="submit-btn">
      </form>
    `;
  });

  const errors = ['Error One', 'Error Two'];

  test('it displays accordingly', () => {
    formErrors(errors);
    expect(/\<p\>Error One\<\/p\>\<p\>Error Two\<\/p\>/.test(document.body.innerHTML)).toBe(true);
  });
});

/* eslint-enable */
