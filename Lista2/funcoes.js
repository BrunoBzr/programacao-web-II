function dobrarVetor(vetor){
    let vetorDobrado = Array(vetor.length)
    for(let i=0;i<vetor.length;i++){
        vetorDobrado[i] = vetor[i] * 2
    }
    return vetorDobrado
}

function somarVetores(vetor, vetorDobrado){
    let somaVetores = Array(vetor.length)
    for(let i=0;i<vetor.length;i++){
        somaVetores[i] = vetor[i] + vetorDobrado[i]
    }
    return somaVetores
}

export default {dobrarVetor, somarVetores}