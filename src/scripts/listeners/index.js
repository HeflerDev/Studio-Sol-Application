import { requestNumber } from '../services';
import renderNumber from '../helpers/render/numbers'
import { read } from '../store'

window.onload = () => {
    document.querySelector('#guess-form')
        .addEventListener('submit', (e) => {
            e.preventDefault()
            requestNumber()
                .then(() => {
                    console.log(read('errorCode'))
                    renderNumber(read('sortedNumber'), 1)
                })
        })
}
