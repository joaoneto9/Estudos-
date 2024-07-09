var n = 153
var nString = n.toString()
var comprimento = nString.length
var resultado = 0

if (comprimento !== 0) {
  for (var c = 0; c < comprimento; c++) {
    var dígito = parseInt(nString.charAt(c))
    var calcular = dígito**comprimento
    resultado += calcular
  }
  if(resultado == n){
  console.log(`${resultado} = ${n}, seu numero é um numero Narcisista!`)
  }else{
    console.log(`${resultado} != ${n}, seu numero não é um numero Narcisista!`)}
}
//precisei passar "numero" para "string", para que podesse pegar o valor do compimento(digitos) do numero, utilizando-se "variável.lenght" e posteriormente conseguir fazer o looping!
//"charAt" = serve para selecionar o valor do digito selecionado, caso o valor desse comando fosse "0", por exemplo, ele retornaria o valor 1, uma vez que contamos em javaScript a partir do "elemento 0", que na vida real eé o primeiro elemento, assim retornando o valor "1" de 153.

  
                        
