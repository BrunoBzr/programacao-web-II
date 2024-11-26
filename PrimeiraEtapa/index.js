import cesar from './cesar.js'

let mensagemCrip = cesar.criptografia("brunopereira", 3, cesar.cifrarLetras)
let mensagemDes = cesar.criptografia("euxqrshuhlud", 3, cesar.decifrarLetras)

console.log("Mensagem criptografada:", mensagemCrip.join(''))
console.log("Mensagem descriptografada:", mensagemDes.join(''))