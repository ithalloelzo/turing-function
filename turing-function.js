// Algoritmos permitidos: 
/*+ Soma
- Subtração
/ Divisão
* Multiplicação
% Divisão com resto*/

//valida a divisão 
function validationDivByZero(num1, num2){
  if(num2 == 0){
    return 'Impossible to divide by 0.'
  }else{
    return num1 / num2
  }
}

//valida o módulo
function validationModByZero(num1, num2){
  if(num2 == 0){
    return 'Impossible to divide by 0.'
  }else{
    return num1 % num2
  }
}

//máquina de turing
function turingMachine(numeral_expression) {
  let result = []

  for (let i = 0; i < numeral_expression.length; i += 3) {

    let num1 = numeral_expression[i]
    let operator = numeral_expression[i + 1]
    let num2 = numeral_expression[i + 2]
    let calculation

    switch (operator) {
      case "+":
        calculation = num1 + num2
        break;

      case "-":
        calculation = num1 - num2
        break;

      case "*":
        calculation = num1 * num2
        break;

      case "/":
        calculation = validationDivByZero(num1,num2)
        break;

      case "%":
        calculation = validationModByZero(num1,num2)
        break;

      default:
        calculation = "Invalid Operator"
    }
    result.push(calculation)
  }

  return result
}

console.log("Resultados:", turingMachine([ 4, "/", 0]))