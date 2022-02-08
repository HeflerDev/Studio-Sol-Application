import { requestNumber } from "../../services";

/**
 * Change state of all Led's to "Inactive"
 */
export const clearNum = () => {
  document.querySelectorAll('.led').forEach((item) => {
    item.classList.remove('active');
    item.classList.add('inactive');
  });
};

export const resetGame = () => {
  document.querySelectorAll('.led').forEach(item => {
    item.classList.remove("victory")
    item.classList.remove("crash-report")
  })
  clearNum()
  document.querySelector("#input-send").disabled = false;
  document.querySelector("#submit-btn").disabled = false;
  document.querySelector(".button-container").classList.add("hidden")
  document.querySelector("#guess-container").classList.add('hidden')
  document.querySelector("#guess-container").classList.remove("victory")
  document.querySelector("#guess-container").classList.remove("crash-report")
  requestNumber()

}
