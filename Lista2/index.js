import vetor from './funcoes.js'

var x = [10,2,8,25,15]

var resultado = vetor.somaVetor(x, vetor.dobraVetor)

for(var i = 0; i<x.length;i++){
    console.log(resultado[i])
}