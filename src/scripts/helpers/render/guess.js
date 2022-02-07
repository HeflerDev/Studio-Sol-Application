export const renderGuessResult = (sortedNumber, input) => {
    const elem = document.querySelector('#guess-container')
    elem.classList.remove('hidden')
    if (input > sortedNumber) {
        elem.innerHTML = 'É menor'
    } else if (input < sortedNumber) {
        elem.innerHTML = 'É maior'
    } else {
        elem.innerHTML = 'Você acertou!!!!'   
    }
}
