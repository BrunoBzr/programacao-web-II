function cifrarLetras(letra, chave){
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let posicaoLetra
    let letraCifrada
    for(let i=0; i<alfabeto.length;i++){
        if(letra == alfabeto[i]){
            if(i+chave>alfabeto.length-1){
                
            }
        }
    }
    return letraCifrada
}

let letra = cifrarLetras('z', 2)
//console.log(letra)