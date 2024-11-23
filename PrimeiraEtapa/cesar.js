function cifrarLetras(letra, chave){
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let posicaoLetra
    let letraCifrada
    for(let i=0; i<alfabeto.length;i++){
        let restoChave
        if(letra == alfabeto[i]){
            if(i+chave<alfabeto.length){
                letraCifrada = alfabeto[i+chave]
            }else{
                restoChave = i+chave - (alfabeto.length-1)
                let j = 0
                letraCifrada = alfabeto[j+restoChave-1]
            }
        }
    }
    return letraCifrada
}



let letra = cifrarLetras('u', 6)
console.log(letra)