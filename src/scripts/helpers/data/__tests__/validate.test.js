/* eslint-disable */

import { validateNumberInput } from '..';

describe('When validating', () => {
  test('Return false if Valid', () => {
    for (let i = 0; i <= 300; i += 1) {
      expect(validateNumberInput(i)).toBe(false);
    }
  });

  test('Return error if input is negative', () => {
    const validation = validateNumberInput(-1);
    expect(Array.isArray(validation)).toBe(true);
    expect(validation).toStrictEqual(['Números negativos não são permitidos.', 'Apenas números são permitidos.']);
  });

  test('Return error if input is above 300', () => {
    const value = validateNumberInput(301);
    expect(Array.isArray(value)).toBe(true);
    expect(value).toStrictEqual(['Números acima de 300 são proibidos.']);
  });

  test('Return error if input is not a number', () => {
    const arrayofBadValues = [
      '33r',
      'ert',
      '4.3',
      '@#$%',
      ' ',
      'çl',
      '!12',
    ];

    const validRegex = /[^0-9]/;

    arrayofBadValues.forEach((item) => {
      expect(validRegex.test(item)).toBe(true);
    });
  });
});

/* eslint-disable */
