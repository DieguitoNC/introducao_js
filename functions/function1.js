//Criar um aplicatio de frases motivacionais


// Declaration - Declaração da função
// function statement
function createPhrases () {
  console.log('Estudar é muito bom')
  console.log('Paciência e persistência')
  console.log('Revisão é a mãe do aprendizado')
}

// Executar a função
// Execute, run, call, invoke

createPhrases()

console.log('Fim do programa')


// Function expression
// Function anonymous

// Parâmetros (parameters)
const sum = function(number1, number2) {
  let total = number1 + number2
  return total
}


let number1 = 34
let number2 = 25

sum(2,3) // arguments - argumentos
sum(10,5)

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)

//Modo lúdico

function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('Banana', 'Morango')

console.log(copo)


// Function Scope

let subject
function createThink() {
  subject = 'Study'
  return subject
}


console.log(subject)
console.log(createThink())
console.log(subject)


// Function Hoisting

// Nesse caso sofre elevação e o código roda
sayMyName()

function sayMyName() {
  console.log('Diego')
}

///

// Nesse caso, isso acontece, porém não roda a função e da erro
sayMyName()

const sayMyName = function() {
  console.log('Diego')
}


// Arrow Function

const sayMyName = (name) => {
  console.log(name)
}

sayMyName('Diego')

// Callback function


function sayMyName(name) {
  console.log('Antes de executar a função callback')
  name()
  console.log('Depois de executar a função callback')
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)

/*
  Function() constructor

  * Expressão new
  * Criar um novo objeto
  * This keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name +" Está andando"
  }
}
const diego = new Person("Diego")
const joao = new Person("Joao")
console.log(diego.walk())
console.log(joao.walk())