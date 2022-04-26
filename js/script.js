/**
 * 
 * Solicitar ao usuário que ele insira **dois números** e, 
 * a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

 Para se desafiar:
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

As operações matemáticas devem ser mostrada na tela.
 */

// Catch Variables
let numberPrimary = prompt("Digite o primeiro número: ")
let numberSecondary = prompt("Digite o segundo número: ")
numberPrimary = Number(numberPrimary)
numberSecondary = Number(numberSecondary)

// Operations
const sum = numberPrimary + numberSecondary
const subtraction = numberPrimary - numberSecondary
const multiplication = numberPrimary * numberSecondary
const division = numberPrimary / numberSecondary
const restDivison = numberSecondary % numberSecondary
const oddOrEven = sum % 2 === 0
const compare = numberPrimary === numberSecondary


