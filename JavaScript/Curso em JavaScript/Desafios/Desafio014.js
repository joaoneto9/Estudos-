//fatorial vai pegar o numero e multiplicar pelo antecessor, asism tenho que fazer com que o numero parta dessa logica, posso utilizar a estrutura de repeticao, uma vez que ele vai ter que multiplicar o numero ate que ele chegue em 1
var botão = window.document.getElementById('botão')
botão.addEventListener('click', calcular)
var texto = window.document.getElementById('txt')

function calcular(){

var numero = Number(window.prompt('Digite um numero real e positivo'))
if(numero < 0 || isNaN(numero)){
    alert('[Erro]Digite um numero válido')
}else{

    var resultado = 1

    for(var n = 2; n <= numero; n++){

      resultado = resultado*n
//novo resultado vai ser igual a "resultado"(1) vezes 2, depois o novo resultado vai ser "resultado"(2) vezes 3, depois vai ser "resultado"(6) vezes 4. se comportando como um sistema faatorial, ja que 6 == 3*2, assim, naquela ultima ocasiao se observa, 6*4, ou, 4*3*2, que seria, nessa situacao, caso n<=numero, um sistema fatorial do numero 4. Descobrir a logica de realizar esse sistema foi dificil, ja que nao tava observando, que eu poderia "dividir" o numero para representar a forma fatorada, por exempol --> 6 ser a mesma coisa que 3*2
    }
    
    texto.innerHTML = `O resultado do fatorial do numero ${numero} é igual a ${resultado}`

}}
