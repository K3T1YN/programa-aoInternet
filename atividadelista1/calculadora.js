


// Operações: Adição, Subtração, Multiplicação e Divisão


 
function calcular(op) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = 0;
    
    switch (op) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Erro: divisão por zero';
            }
            break;
    }
    
    <input type="text" id="resultado" placeholder="Resultado" readonly></input>
    document.getElementById('resultado').value = resultado;
    
}