/**
 * Change state of all Led's to "Inactive"
 */
export const clearNum = () => {
  document.querySelectorAll('.led').forEach((item) => {
    item.classList.remove('active');
    item.classList.add('inactive');
  });
};


