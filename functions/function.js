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