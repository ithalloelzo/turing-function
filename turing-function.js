/*Usando o Javascript, desenvolva uma função que se baseie na máquina de Turing para conseguir realizar todas as operações matemáticas presente em um array e que retorne um array contendo os resultados.*/

// Algoritmos permitidos: 
/*+ Soma
- Subtração
/ Divisão
* Multiplicação
% Divisão com resto*/

//[1, "+", 2] = 3
//[1, "+", 2, 3, "*", 3]  = [3, 9]

function turingMachine(numeral_expression){
  let result = []

  for(let i = 0; i < numeral_expression.length; i+=3){

    let num1 = numeral_expression[i]
    let operator = numeral_expression[i+1]
    let num2 = numeral_expression[i+2]
    let calculation

    switch (operator){
      case "+":
        calculation = num1 + num2
      break;

      default:
        console.log("Error")
    }
    result.push(calculation)
  }

  return result
}

console.log(turingMachine([1,"+",2,4,"+",8]))