 var b1 = window.document.getElementById('b1')
 var b2 = window.document.getElementById('b2') 
 var count = window.document.getElementById('contador')
 b1.addEventListener('click', contar)
 b2.addEventListener('click', zerar)
 var clicks = 0
 
 function contar(){


clicks ++
count.innerHTML = `${clicks}`



 }function zerar(){

clicks = 0
count.innerHTML = `${clicks}`


 }