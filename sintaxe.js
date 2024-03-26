// Declaração de variáveis

let nome; // (LET) Valor manipilável
let idade; 

nome = "Ketlyn"; // String
idade = "19"; // Number

const altura = 1.64; //(CONST) Valor constante

let bol = true /// Boolean
let lista = ["banana", "maça", "uva"]; // Lista
let objeto = {nome: "Viviane", idade: 17}; // Objeto


// Operadores Aritméticos

let a = 10;

let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;

// Operadores de Atribuição
let x = 10;

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x/= 4; // x = x / 4 (06)


// Operadores de Comparação Lógica

idade = 20;
let temCNH = true
console.log(idade > 18); // idade é maior que 18?
console.log(idade == 18); // idade é igual a 18?
console.log(idade !== 18); // idade é diferente a 18?

/* Igualdade solta
5 == "5" (true)

Igualdade estrita
5 = "5" (false)

0 == false(true)
0 === false(false)
*/

console.log(idade > 18 && temCNH); // idade maior que 18
console.log(idade > 18 || temCNH); // idade maior que 18
console.log(!temCNH); // negação de posuir cnh (false)

// Estrutura Condicional
let hora = 12;

if(hora < 12){
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}


// Estruturas de Repetições

for (lef i=o; i<10; i++){
    console.log(i);
}

let contador = 0;
white (contador < 5) {
    console.log(contador);
    contador++;
}



// aula 26/03

var ListaDeFruta = ["Maçãs", "uvas", "Bananas", "Abacaxis"]

var primeiroItem = ListaDeFruta[0];
var segundoItem = ListaDeFruta[1];
var terceiroItem = ListaDeFruta[2];

ListaDeFruta.forEach(function(item, indice){
    console.log(item, indice)
})

//for Each - é um tipo de for que itera(percorre) um array(lista)
var posicao = ListaDeFruta.indexOf("Bananas") // pos= 2

/* Adicionar - Remover Itens da lista */

// no final da lista
ListaDeFruta.push("Laranjas") // ["Maçãs", "uvas", "Bananas", "Abacaxis", "Cajus", "Laranjas"]

// adicionar no início da lista
ListaDeFruta.unshift("Kiwis") // [ "Kiwis", "Maçãs", "uvas", "Bananas", "Abacaxis", "Cajus", "Laranjas"]

// Remover itens da lista

// remover primeiro item
ListaDeFruta.shift() // ["Maçãs", "uvas", "Bananas", "Abacaxis", "Cajus", "Laranjas"]

// remover o ultimo
ListaDeFruta.pop() // ["Maçãs", "uvas", "Bananas", "Abacaxis", "Cajus"]

// remover usando o indice como parametro
var pos = ListaDeFruta.indexOf("Bananas")
ListaDeFruta.splice(pos) ["Maçãs", "uvas", "Abacaxis", "Cajus"]

// saber o tamanho do array
var tam = ListaDeFruta.length() // Saída 3 (se começar do 0) ou 4 (se começar do 1)

// saber se é array
var isArray = ListaDeFruta.isArray() // True