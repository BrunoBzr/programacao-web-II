import vetor from './funcoes.js'

let x = [10,2,8,25,15]
let xd = vetor.dobraVetor(x)

let resul = vetor.somaVetor(x,xd)

for(let i = 0; i<x.length;i++){
    console.log(resul[i])
}