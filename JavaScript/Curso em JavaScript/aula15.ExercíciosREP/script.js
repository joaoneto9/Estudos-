var início = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var txt2 = window.document.getElementById('txt2')
var botão = window.document.getElementById('botão')

botão.addEventListener('click', calcular)

function calcular(){

    var ValorI = Number(início.value)
    var ValorF = Number(fim.value)
    var ValorP = Number(passo.value)

    
    if(ValorP === 0 || ValorI === 0 || ValorF === 0 || isNaN(ValorI) || isNaN(ValorF) || isNaN(ValorP)){

     alert("[ERRO] Digite números válidos!")
     txt2.innerHTML = 'impossível contar!'
    
    }else if(ValorF > ValorI){

        
        txt2.innerHTML = 'Contando:'
        
     
     
        for(var c = ValorI;c <= ValorF; c += ValorP){

    txt2.innerHTML += `${c}\u{1F449}`
    //crescente
     }
    txt2.innerHTML += `\u{1F3C1}`
    }else{

        for(var c = ValorI;c >= ValorF; c -= ValorP){

            txt2.innerHTML += `${c}\u{1F449}`
    //decrescente    
             }
            txt2.innerHTML += `\u{1F3C1}`



      }

    
    }





