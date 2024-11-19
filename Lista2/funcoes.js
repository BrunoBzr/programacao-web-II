function dobraVetor(vetor){
    let vetorDobrado = Array(vetor.lenght)
    for(let i =0; i<vetor.lenght;i++){
        vetorDobrado[i] = vetor[i] * 2
    }
    return vetorDobrado
}

function somaVetor(vetor, vetorDobra){
    let somaVetores = Array(vetor.lenght)
    for(let i = 0;i<vetor.lenght;i++){
        somaVetores[i] = vetor[i] + vetorDobra[i]
    }
    return somaVetores
}

export default {dobraVetor, somaVetor}