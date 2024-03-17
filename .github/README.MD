
# Primeiros Passos
## Para criar um arquivo js
- Basta eu criar um file com final js no nome e fazer o link no html com o Script
```
<script src="./scripts.js"></script>
```
## Como fazer comentário e executar a mensagem no console
```
// Aqui eu faço um comentário

  

// O Código abaixo escreve um comentário

console.log("Bem vindos ao starter")

  

/*

  AQUI EU TENHO UM COMENTÁRIO MULTI LINHA

*/
```
# Tipos de dados
## String no JS
- Para escrever podemos utilizar "xxx", 'xx' ou com crase `a``a
- ` 
- Tem como deixar uma string com aspas simples ou duplas, basta colocar uma ordem
```
console.log("Die'go")
```
- Posso colocar expressões dentro de string com a interpolação que consiste em colocar com as crases a expressão dentro dela
```
console.log('Diego ${1+1}')
```
## Tipos de números
### Inteiros
- 1, 2, 33, 55
### Reais / float
15.5, 13.333,
### NAN (Not a Number)
- basicamente quando tem alguma letra na conta ou algo do tipo
### Infinity
- Tem um valor que retorna Infinity, para tal precisa escrever com letra maiúscula
```
console.log(Infinity)
```
## Tipos de dados
### Boolean
- True e False
```
console.log(true)

console.log(false)
```
### Undefined vs Null
#### Undefined
- Dado indefinido, não existe
#### Null
- Nulo
- Objeto que não possui nada dentro dele, mas existe
### Object
- Tem propriedades / Atributos
- Funcionalidades / Métodos
```
  { propriedade: "valor"}
```
### Array / Vetores
- Uma lista
- Agrupamento de dados
```
  

console.log([

  "Diego",

  21

])
```
## Conclusão
- Tipos de dados conforme o ECMAScript tendo 9 tipos de dados
### Data Types
- Primitive / Primitive value
- Structural
- Structural Primitive
#### Primitivos
- String
- Number
- Boolean
- Undefined
- Symbol
- BigInt
#### Estruturais
##### Object
- Array
- Map
- Set
- Date
##### Function


# Variáveis
- Nome simbólico para receber algum valor
- Atalhos de código
- Identificadores
## 3 Palavras para criar uma variável
- Var e Let -> Podem mudar ao longo do código
- const -> Não pode ser alterado ao longo do código
```
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
```
## Tipos Dinâmicos
- O JS é uma linguagem fracamente tipada e dinâmica
### Significa que: 
- Variáveis não precisam ter um tipo previamente definido -> Não precisa declarar a que a variável é de um tipo ou de outro, ela entende "Automaticamente"
- Podemos mudar o conteúdo da variável -> A variável pode passar de Boolean para Number ao decorrer do código sem problema algum
```
  

let clima = true // boolean

clima = "" // string

  

console.log(clima)
```

## Scope  var, let e const
- Escopo determina a visibilidade de alguma variável no JS
### Block statement - Declaração de bloco
- O bloco também cria um novo escopo - block-scoped
```
// Vai iniciar um bloco

{

  // Dentro há o bloco que será colocado o código

} // Aqui fecha o código
```

### Scope Var
- Global e pode funcionar fora do escopo de um bloco
- Var é global e também local
- hoisting - Elevacao desse var x pra cima
```
console.log('> existe x antes do bloco? ', x)

  

{

  var x = 0

}

  

console.log('> existe x depois do bloco? ', x)
```
### Scop Let
- Eu tenho que declarar antes de chamar no JS, caso eu não declare, haverá erro
- Eu não preciso ficar chamado sempre com "let", posso apenas chamar a variável "Y" depois.
```
  let y = 1
  y = 2
```
```
let y = 1

  

{

  let y = 0

  console.log('> existe y ', y)

}

  

console.log('> existe x depois do bloco? ', y)
```
### Const
- Aqui realmente não tem como fazer alteração
## Nomeando Variáveis
JS é case-sensitive (sensível ao caso)
JS aceita uma cadeia de caracteres Unicode
### Posso
- Inciar com esses caracteres especiais: $_\
- Iniciar com letras
- Colocar acentos
- Letras maísuculas e minúsculas fazem diferença
## Não posso 
- Iniciar com números
- Colocar espaços vazios no nome
## Ideal
- Criar nomes que fazem sentido
- que explique o que a variável é ou faz 
- camelCase
- snake_case
- Escrever em inglês 

# Praticando e avançando
# Funções
# Manipulando dados
# Expressões e Operadores
# Condicionais e controle de fluxo
