// Agrega o componente diretamente ao <body>

const appendToBody = (value) => {
  document.querySelector('body').innerHTML += value;
};

export default appendToBody;
