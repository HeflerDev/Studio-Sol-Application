/**
 * If false, return. Else, return a list of errors
 * @param {integer} input The input received
 */
export const validateNumberInput = (input) => {
  const errors = [];

  if (input < 0) errors.push('Números negativos não são permitidos.');
  if (input > 300) errors.push('Números acima de 300 são proibidos.');
  if (/[^0-9]/.test(input)) errors.push('Apenas números são permitidos.');
  if (input.length === 0) errors.push('É necessário escolher pelo menos um número.');

  return errors.length > 0 ? errors : false;
};
