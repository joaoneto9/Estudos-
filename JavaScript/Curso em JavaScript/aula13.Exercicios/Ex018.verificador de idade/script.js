var homem = window.document.getElementById('homem')
var mulher = window.document.getElementById('mulher')
var verificador = window.document.getElementById('verificar')
var resultado = window.document.getElementById('txt4')
var img = window.document.getElementById('imagem')
verificador.addEventListener('click', calcular)
homem.addEventListener('click', marcar1)
mulher.addEventListener('click', marcar2)

function marcar1(){
    homem.style.backgroundColor = 'black'
    mulher.style.backgroundColor = 'white'
}
function marcar2(){
    homem.style.backgroundColor = 'white'
    mulher.style.backgroundColor = 'black'
}

function calcular(){

    var data =  new Date()
    var atual = data.getFullYear()
    var texto = window.document.getElementById('ano')
    var ano = parseFloat(texto.value)
    
    
if(ano == 0 || ano > atual){

alert('[Erro]igite numeros válidos!')

}else if(homem.style.backgroundColor == "black" || mulher.style.backgroundColor == "black"){

    var imgDiv = window.document.getElementById('img')
    imgDiv.style.display = 'block'
    var idade =  atual - ano
}
if(homem.style.backgroundColor == "black" && idade > 0 && idade <= 2){

    
    resultado.innerHTML = `detectamos um homem com ${idade} anos`
    img.src = "bebe.png"
}
else if(homem.style.backgroundColor == "black" && idade <= 12){

    resultado.innerHTML = `detectamos um homem com ${idade} anos`
    img.src = "crianca.png"
}
else if(homem.style.backgroundColor == "black" && idade <= 17){

    resultado.innerHTML = `detectamos um homem com ${idade} anos`
    img.src = "adolecente.png"

}
else if(homem.style.backgroundColor == "black" && idade < 60){

    resultado.innerHTML = `detectamos um homem com ${idade} anos`
    img.src = "adulto.png"

}else if(homem.style.backgroundColor == "black" &&idade >= 60){

    resultado.innerHTML = `detectamos um homem com ${idade} anos`
    img.src = "idoso.png"



}else if(mulher.style.backgroundColor == "black" && idade > 0 && idade <= 2){

    resultado.innerHTML = `detectamos uma mulher com ${idade} anos`
    img.src = "bebe2.png"
}
else if(mulher.style.backgroundColor == "black" && idade <= 12){

    resultado.innerHTML = `detectamos uma mulher com ${idade} anos`
    img.src = "crianca2.png"
}
else if(mulher.style.backgroundColor == "black" && idade <= 17){

    resultado.innerHTML = `detectamos uma mulher com ${idade} anos`
    img.src = "adolecente2.png"

}
else if(mulher.style.backgroundColor == "black" && idade < 60){

    resultado.innerHTML = `detectamos uma mulher com ${idade} anos`
    img.src = "adulto2.png"

}else if(mulher.style.backgroundColor == "black" && idade >= 60){

    resultado.innerHTML = `detectamos uma mulher com ${idade} anos`
    img.src = "idoso2.png"



}


}//essa foi a forma que eu consegui fazer o site sozinho, mas achava que o a logica que empreguei estava muito grande e fui buscar alternativas simplificadas, ate que o ChatGPT me direcionou esse codigo:

/* function calcular() {
    var texto = window.document.getElementById('ano');
    var ano = parseFloat(texto.value);
    var idade = 2024 - ano;

    if (homem.style.backgroundColor == "black" || mulher.style.backgroundColor == "black") {
        var imgDiv = window.document.getElementById('img');
        imgDiv.style.display = 'block';
    }

    var genero;
    if (homem.style.backgroundColor == "black") {
        genero = "homem";
    } else if (mulher.style.backgroundColor == "black") {
        genero = "mulher";
    }

    if (idade > 0 && idade <= 2) {
        resultado.innerHTML = `detectamos um(a) ${genero} com ${idade} anos`;
        img.src = genero === "homem" ? "bebe.png" : "bebe2.png";
    } else if (idade > 2 && idade <= 12) {
        resultado.innerHTML = `detectamos um(a) ${genero} com ${idade} anos`;
        img.src = genero === "homem" ? "crianca.png" : "crianca2.png";
    } else if (idade > 12 && idade <= 17) {
        resultado.innerHTML = `detectamos um(a) ${genero} com ${idade} anos`;
        img.src = genero === "homem" ? "adolecente.png" : "adolecente2.png";
    } else if (idade > 17 && idade < 60) {
        resultado.innerHTML = `detectamos um(a) ${genero} com ${idade} anos`;
        img.src = genero === "homem" ? "adulto.png" : "adulto2.png";
    } else if (idade >= 60) {
        resultado.innerHTML = `detectamos um(a) ${genero} com ${idade} anos`;
        img.src = genero === "homem" ? "idoso.png" : "idoso2.png";
    }
} */














