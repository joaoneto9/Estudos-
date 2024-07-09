var botão = window.document.getElementById('b')
var n1 = window.document.getElementById('nota1')
var n2 = window.document.getElementById('nota2')
var n3 = window.document.getElementById('nota3')
var resultado = window.document.getElementById('médiafinal')
var mínimo = 7
botão.addEventListener("click", calcular)



function calcular(){

var Ac1 = parseFloat(n1.value)
var Ac2 = parseFloat(n2.value)
var Ac3 = parseFloat(n3.value)
//partir agora para a logica de caso seja escrito "não numeors" ou numeros maiores que 10 pontos
if(isNaN(Ac1) || isNaN(Ac2) || isNaN(Ac3)) {

resultado.innerHTML = "Por Favor, digite numeros válidos para as determinadas notas" 


}else if((Ac1 < 0 || Ac2 < 0 || Ac3 < 0|| Ac1 > 10 || Ac2 > 10 || Ac3 > 10)){

resultado.innerHTML = "Por Favor, digite numeros entre a margem de notas, 0 < notas < 10!"


}else{

    var média = (Ac1 + Ac2 + Ac3) /3
    resultado.innerHTML = `O aluno teve uma média de ${média} pontos!`
    if(média >= mínimo){

resultado.style.backgroundColor = 'green'
resultado.style.color = 'white'
resultado.innerHTML += "APROVADO"

    }else{

resultado.style.backgroundColor = 'red'
resultado.style.color = 'black'     
resultado.innerHTML += "REPROVADO"  

    }

}







}