// Agrega o componente diretamente ao <body>

const appendToBody = (value) => {
    const elem = document.querySelector('main');
    if (elem) {
        return elem.innerHTML += value 
    } 
    document.querySelector('body').innerHTML = "<main>" + value + "</main>"

};

export default appendToBody;
