function dobraVetor(vetor){
    var vetorDobrado = Array(vetor.lenght)
    for(let i =0; i<vetor.lenght;i++){
        vetorDobrado[i] = vetor[i] * 2
    }
    return vetorDobrado
}

function somaVetor(vetor, dobra){
    var d = dobra(vetor)
    var soma = Array(vetor.lenght)
    for(let i = 0;i<vetor.lenght;i++){
        soma[i] = vetor[i] + d[i]
    }
    return soma
}

v = [3,5,7,10,12]

export default {dobraVetor, somaVetor}