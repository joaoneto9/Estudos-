function parimp(n){

if(n%2 == 0){

    return 'par'
}else{

    return 'impar'//essa palavra impar vai entrar na variavel "res" onde se encontra a chamada, assim, executando a função que eu busquei identificar se o numeroe 2 ímpar ou par. 
}



}

let res = parimp(10)//chamada, onde estou atribuindo o parametro "n"
console.log(res)