let num =[5,8,4] //indice "0" = 5, "1" = 8, "2" = 4
num[3] = 6 // estou adicionando o valor de um indice sem alterar a escrita da variavel("3" = 6), isso pode ser bem aplicavel para atribuir em consições específicas, as quais qaundo forem verdadeiras possa alterar ou acrescentar ou diminuir um indice do ARRAY.
num.push("valor")//nessa situação vai adicionar o valor no ultimo indice, independente de qual indice ele corresponde, nesse caso seria o indice "4"
num.length//serve para contar a qauntidade de indices do ARRAY(O comprimento do Array)
num.sort()//vai organizar todos os valores em ordem crescente
console.log(num[0])//estou escolhendo o primeiro indice do ARRAY
num.indexOf('valor')//ele vai buscar a Chave/indice do Valor determinado, nesse caso é "valor", que esta na posição "4", graças ao 'num.push', caso ele retorne "-1" quer dizer que o JavaScript procurou o valor dentro do ARRAY e não encontou uma chave correspondente.
num.splice(indice, 1)//"splice" quer dizer que vai remover um ou mais elementos do ARRAY, tomando dois parametros, assim, a parte escrita "indice" deveria ser considerado uma variave, onde indicaria o indice no Array e, assim, a remoção começaria por ali, alem disso, o numero"1", nesse caso, indica que havera a remocao de apenas um elemento a partir do indice indicado.
num.includes()//includes serve para verificar se existe aquele valor dentro do ARRAY, se sim, ele retorna verdadeiro e se não retorna falso!
num.forEach()//forEach é um método de arrays em JavaScript que executa uma função fornecida uma vez para cada elemento do array.
//Ele recebe uma função de callback como argumento. Essa função de callback é executada para cada item no array, e pode receber até três argumentos: o item atual (item), o índice do item atual (index), e o próprio array (array).