//lista de compras:
//Criar uma lista de compras vazia.
//Adicionar itens à lista.
//Remover itens da lista.
//Verificar se um item está na lista.
//Exibir todos os itens da lista.

var lista = [];

function Adicionar(item = "nenhum item foi adicionado"){

lista.push(item)

}

function Remover(item){

var indice = lista.indexOf(item)
if(indice !== -1){
/*quer dizer que existe um item na lista, ja que ele não retornou "-1"*/ 

lista.splice(indice, 1)


}else{

console.log("Item não foi encontrado, adicione-o primeiro!")

}

}

function Verificar(item){

if(lista.includes(item) == true){
  
var pos = lista.indexOf(item) + 1 
console.log(`O item: ${item}, encontra-se na posição ${pos} da lista!`)
return true

}else{

console.log('não conseguimos verificar o item na lista!')
return false
}
}

function Exibir() {
    if (lista.length > 0) {
        console.log(`Lista de Compras:`)
        lista.forEach((item, indice) => {
            console.log(`${indice + 1}. ${item}`)
        })
    } else {
        console.log("A lista de compras está vazia.")
    }
}













Adicionar("Maça");
Adicionar("Banana")
Adicionar("Leite")
console.log("O item 'Leite' está na lista? " + Verificar("Leite"));
Exibir();