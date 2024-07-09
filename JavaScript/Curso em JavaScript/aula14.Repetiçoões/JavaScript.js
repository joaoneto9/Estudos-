var button = window.document.getElementById('botão')
button.addEventListener('click', calcular)


function calcular(){


var n = window.document.getElementById('numero')//string
var numero = parseFloat(n.value)//numero
var resultado = 0//inicializador
if(isNaN(numero)){

alert('[ERRO]Digite valores válidos!')}
else while(numero > 0){

resultado += numero
numero -= 1
} 

var texto = window.document.getElementById('txt')
texto.innerHTML = `a soma de todos os antecessores foi ${resultado}`}




