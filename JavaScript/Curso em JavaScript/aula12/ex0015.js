var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora}!`)
if(hora <= 12){

console.log('Bom dia')

}else if(hora < 18){

    console.log('Boa tarde')
}else if(hora <= 24){

console.log('Boa noite')

}if(hora > 24){

console.log(`O horário ${hora} não condiz com a realidade`)

}


