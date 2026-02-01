# Turing Machine: Code Lab

Este projeto foi desenvolvido como parte da Iniciativa Code Lab, do Instituto Programadores do Amanhã, com o objetivo de demonstrar uma sequência de ações para o computador através da linguagem JavaScript. A proposta é criar uma função que simule o comportamento de uma Máquina de Turing, um modelo matemático teórico fundamental na teoria da computação criado por Alan Turing.

Assim como a máquina original utiliza códigos e bits para realizar operações, esta função interpreta um array de dados (representando uma fita de instruções) e executa cálculos baseados em algoritmos pré-programados.

## 📋 Funcionalidades

A função principal é capaz de receber um único array contendo números e operadores, processando-os e retornando um novo array com os resultados.

O código foi construído com foco em ser identado e limpo, garantindo que a execução seja livre de erros. A lógica foi estruturada para percorrer o array em saltos, identificando cada conjunto de "Número, Operador, Número" para realizar o cálculo correto.

Operações Suportadas:
- Soma (+)
- Subtração (-)
- Divisão (/)
- Multiplicação (*)
- Divisão com resto (%)

Exemplo de Entrada e Saída:
- Entrada: [1, "+", 2, 3, "*", 3]
- Saída: [3, 9]

## 🛠️ Tecnologias Utilizadas

- JavaScript: Linguagem principal para a lógica do projeto.
- Git & GitHub: Utilizados para o versionamento do código, seguindo o padrão de semantic commits.

## ⚙️ Como Executar o Projeto
Para realizar o teste da máquina de Turing, siga estes passos:
1. Clone o repositório:
```
git clone https://github.com/ithalloelzo/turing-function.git
```
2. Abra o arquivo no seu editor de código (ex: VS Code).
3. Execute o arquivo JavaScript usando o Node.js ou o console do navegador:
4. Teste a função: Chame a função passando um array de sua escolha, por exemplo:
```
console.log(minhaFuncao([10, "/", 2]))
```
