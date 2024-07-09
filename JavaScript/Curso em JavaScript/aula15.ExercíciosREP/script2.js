var botão = window.document.getElementById('botão')
botão.addEventListener('click', calcular)

function calcular(){

var numero = window.document.getElementById('numero')

if(numero.value.length == 0){

    alert('[ERRO]Digita números válidos!')

}else{
    
var tabuada = window.document.getElementById('tabela')
var valor = Number(numero.value)
tabuada.innerHTML = ''//serve para "zerar" a tabela de tabuada toda vez que for atribuir um número
for(var c = 0; c <= 10; c++){

    var item = window.document.createElement('option')
    var calculo = valor*c
    item.text = `${valor} x ${c} = ${calculo}`
    tabuada.appendChild(item)//atribuir o elemento "item" dentro do elemento "tabuada", que seria o SELECT no HTML
    
    
}


}






}

