var agora = new Date()
var hora = agora.getHours()
var d1 = window.document.getElementById('txt1')
var d2 = window.document.getElementById('txt2')
var fundo = window.document.getElementById('corpo')
var ft1 = window.document.getElementById('foto1')
var ft2 = window.document.getElementById('foto2')
var ft3 = window.document.getElementById('foto3')


if(hora >= 0 && hora < 12){
//bom dia
d1.innerHTML = `Agora sao ${hora} horas`
fundo.style.backgroundColor = 'rgb(228, 228, 83)'
ft1.style.display = "block"
ft2.style.display = "none"
ft3.style.display = "none"




}else if(hora >= 12 && hora < 18){
//boa tarde
d1.innerHTML = `agora sao ${hora} horas`
fundo.style.backgroundColor = 'rgb(214, 133, 11)'
ft1.style.display = "none"
ft2.style.display = "block"
ft3.style.display = "none"

}else{
//boa noite
d1.innerHTML = `agora sao ${hora} horas`
fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.700)'
ft1.style.display = "none"
ft2.style.display = "none"
ft3.style.display = "block"


}

