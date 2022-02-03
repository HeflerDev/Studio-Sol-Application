import appendToBody from './scripts/helpers/appendToBody' 

import Header from './components/Header.html'
import NumberContainer from './components/NumberContainer.html'
import InputForm from './components/InputForm.html'

const main =(() => {
    appendToBody(Header)
    appendToBody(NumberContainer)
    appendToBody(InputForm)
})();
