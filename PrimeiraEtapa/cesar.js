function criptografia(mensagem, chave, converter){
    let mensagemCrip = Array(mensagem.length)
    for(let i = 0;i<mensagem.length;i++){
        mensagemCrip[i] = converter(mensagem[i], chave)
    }
    return mensagemCrip
}

function cifrarLetras(letra, chave){
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let letraCifrada

    for(let i = 0; i < alfabeto.length; i++){
        if(letra === alfabeto[i]){
            
            if(i+chave<alfabeto.length){
                letraCifrada = alfabeto[i+chave]
            }else{
                let j = 0;
                chave = i+chave -(alfabeto.length-1)

                while(j+chave>alfabeto.length){
                    chave = chave - (alfabeto.length)
                }

                if(j+chave<alfabeto.length || j+chave == alfabeto.length){
                    letraCifrada = alfabeto[j+chave-1]
                }
            }
        }
    }
    return letraCifrada
}

function decifrarLetras(letra, chave){
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let letraDecifrada

    for(let i =0; i < alfabeto.length; i++){
        if(letra == alfabeto[i]){
            if(i-chave>0 ||i-chave==0){
                letraDecifrada = alfabeto[i-chave]
            }else{
                let j = 26
                chave = chave - i
                while(j-chave<0){
                    chave = chave - j
                }
                letraDecifrada = alfabeto[j-chave]
            }

        }
    }
    return letraDecifrada
}

export default {criptografia, cifrarLetras, decifrarLetras}