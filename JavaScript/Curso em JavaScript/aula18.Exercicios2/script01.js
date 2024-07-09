var num = document.getElementById('numero')
var lista = document.getElementById('lista')
var texto = document.getElementById('txt2')
var botão01 = document.getElementById('button01')
var botão02 = document.getElementById('button02')
botão01.addEventListener('click', adicionar)
botão02.addEventListener('click', finalizar)
var valores = []

function isNumero(n){
//recebe apenas um parâmetro

if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
}


}
function inLista(n, l) {
    //recebe dois parâmetros
    if(l.indexOf(Number(n)) != -1) {
        //se o numero "n" tiver na lista
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
//aqui esta sendo a chamada dos parametros das funçoões, juntamnete com a logica estudada, em que caso retorne "true" os comandos serão ativados.
       valores.push(Number(num.value))
       var item = document.createElement('option')
       item.text = `valor ${num.value} adicionado.`
       lista.appendChild(item)
       texto.innerHTML = ''

    } else{

        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''//para limpar a caixa
    num.focus()
}


function finalizar(){

    if(valores.length == 0){

        window.alert('Digite valores para finalizar.')
    }else{

texto.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
valores.sort()
texto.innerHTML += `<p>O maior valor informado é ${valores[valores.length - 1]}.</p>`
texto.innerHTML += `<p>O menor valor informado é ${valores[0]}.</p>`
var soma = 0
for(var c = 0; c < valores.length; c++){

soma += valores[c]

}
texto.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
var media = soma/valores.length 
texto.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

}
}