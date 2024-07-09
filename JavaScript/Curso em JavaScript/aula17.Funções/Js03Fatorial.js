//fatorial de um numero

/*function fatorial(n){

let fat = 1
for(let c = n; c > 1;c--){

fat *= c --> fat = fat * c


}
return fat

}
console.log(fatorial(5))*/

//RECURSIVIDADE: Na recursão, a função se chama repetidamente, reduzindo o problema a um problema menor em cada chamada. 

function fatorial(n){

if(n == 1){

    return 1
}else{

return n * fatorial(n-1)


}



}
console.log(fatorial(3))

//Detalhamento da Recursão:
//Chamada Inicial: Quando você chama fatorial(5), a função verifica se n é 1. Não é, então ela retorna 5 * fatorial(4). Chamada Recursiva: Agora fatorial(4) é chamado, que retorna 4 * fatorial(3). Continuação das Chamadas: Esse processo continua até que fatorial(1) seja chamado. Caso Base: Quando fatorial(1) é chamado, a condição if (n == 1) é verdadeira, então a função retorna 1. Desenrolamento das Chamadas: Agora a chamada de fatorial(2) pode ser resolvida como 2 * 1 = 2, fatorial(3) como 3 * 2 = 6, e assim por diante, até que fatorial(5) seja finalmente resolvido como 5 * 24 = 120.
// Porque a Recursão Funciona?
//A recursão funciona porque cada chamada reduz o problema a um problema menor (n - 1), e o caso base (n == 1) garante que a função eventualmente pare. Sem o caso base, a recursão entraria em um ciclo infinito, assim como um loop sem uma condição de término.

