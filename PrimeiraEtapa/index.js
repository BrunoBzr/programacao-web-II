import cesar from './cesar.js'

let mensagemCrip = cesar.criptografia("zyx", 3, cesar.cifrarLetras)
let mensagemDes = cesar.criptografia("cba", 3, cesar.decifrarLetras)

console.log(mensagemCrip)
console.log(mensagemDes)