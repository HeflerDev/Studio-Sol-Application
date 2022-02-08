import { appendToBody } from './scripts/helpers/render/appendToBody';

// Containers processed with html-loader
import Header from './components/Header.html';
import NumberContainer from './components/NumberContainer.html';
import InputForm from './components/InputForm.html';
// Containers processed with css-loader
import './styles/main.css';

import './scripts/listeners';
import { requestNumber } from './scripts/services';

import refreshIcon from './assets/icons/refreshIcon';

requestNumber();
appendToBody(Header);
appendToBody(NumberContainer);
appendToBody(InputForm);
document.querySelector('#new-game-button').innerHTML = `${refreshIcon()}<div>Nova Partida</div>`;
