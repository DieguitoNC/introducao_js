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


// const e let são locais e só funcionam no escopo onde foi criada

let y = 1

{
  let y = 0
  console.log('> existe y ', y)
}

console.log('> existe y depois do bloco? ', y)


// Variáveis e tipos de dados
// Declaração or declaration
var name 

// assigment or atribuição de valores

name = "Diego"

// Que tipo de dado foi colocado na variável 

console.log(typeof name)

// agrupamento de declarações

let age, isHuman

age = 18
isHuman = true

// Multíplos argumentos na função
console.log(name, age, isHuman)

// Escrita de texto + variáveis

// concatenando valores
console.log('O ' + name + ' tem ' + age + ' anos.')

// Interporlando valores com template literals or template strings

console.log(`O ${name} tem ${age} anos.`)


// Objects

const person = {
  name: "Diego",
  age: 21,
  weight: 83.3,
  isAdmin: true
}

console.log(person.name)

console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
  'Lion', // 0 
  'Monkey', // 1
  'Cat', // 2
  {
    name: 'Turtle',
    age: 4
  }
]

// Acessar valores
console.log(animals[0])
console.log(animals.length)
console.log(animals[3].name)

