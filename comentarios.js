// Aqui eu faço um comentário

// O Código abaixo escreve um comentário
console.log("Bem vindos ao starter")

/*
  AQUI EU TENHO UM COMENTÁRIO MULTI LINHA 
*/


console.log("Die'go")

console.log('Diego ${1+1}')

console.log(Infinity)

console.log(true)
console.log(false)

// Objeto
console.log({
  name: "Diego",
  idade: 21,
  andar: function() {
    console.log('andar')
  }
})

// Array
console.log([
  "Diego",
  21
])



// VAR
var clima = "quente"
clima = "frio"
console.log(clima)


// let
let clima2 = "quente"
clima2 = "frio"
console.log(clima2)


// const - nao pode mudar seu valor durante a aplicacao
// vai dar um erro
const clima3 = "quente"
clima3 = "frio"
console.log(clima3)



// Tipagem fraca e dinamica
let clima = true // boolean
clima = "" // string

console.log(clima)

// Block-Statement
{
  let x = 0  
  console.log(x)
}

// Var é global e, também local

// hoisting - Elevacao desse var x pra cima 
console.log('> existe x antes do bloco? ', x)

{
  var x = 0
}

console.log('> existe x depois do bloco? ', x)


