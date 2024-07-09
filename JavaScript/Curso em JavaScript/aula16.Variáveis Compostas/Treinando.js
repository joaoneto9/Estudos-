var lista = [4,7,8,9,0]


/*for(let pos = 0;pos < lista.length; pos++){


console.log(`A posição ${pos} tem o valor ${lista[pos]}`)


}*/

//ainda existe uma forma ainda mais simplificada

for(var pos/*variavel criada para referir-se as posiçoões do ARRAY*/ in lista/*ARRAY*/){


//essa forma de Script do For é muito utilizada em Vetores/ARRAYS, em que se le "Para cada posição(pos) "dentro/dentro/in" de Lista(ARRAY)"
console.log(`A posição ${pos} tem o valor ${lista[pos]}`)

}