let amigo = {nome: 'josé', sexo: 'M', peso: 85.4, engordar(p=0){

console.log('Engordou')
this.peso += p//"this" palavra de auto-referencia a o Objeto

}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
console.log(amigo.sexo)//para se referir a um indice do Objeto, utiliza-se "objeto.indice"
