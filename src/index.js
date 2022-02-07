import appendToBody from './scripts/helpers/render/appendToBody'

// Como é permitido usar um bundler simulei componentização através do html-loader 
import Header from './components/Header.html'
import NumberContainer from './components/NumberContainer.html'
import InputForm from './components/InputForm.html'

import './styles/main.css';

import "./scripts/listeners"
import { requestNumber } from './scripts/services';

const main =(() => {
    requestNumber();
    appendToBody(Header)
    appendToBody(NumberContainer)
    appendToBody(InputForm)
})();
