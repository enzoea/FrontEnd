
function inserirNaTela(valor) {
    document.getElementById('display').value += valor;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    // A função eval() avalia uma string como código JavaScript.
    let result = eval(document.getElementById('display').value);
    // Atualiza o valor do campo de entrada (display) para exibir o resultado da expressão avaliada.
    document.getElementById('display').value = result;
}