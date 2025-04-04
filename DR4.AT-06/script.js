// 6 Série Fibonacci

// Enunciado: Crie uma página com um programa JavaScript que solicite um valor inteiro positivo e gere um array com a série Fibonacci dos números menores ou iguais ao número informado.

// Observações:

// Use input para obter o número.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.
// Não use recursividade nesta questão.
// Dispare um erro caso o valor informado não seja válido. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.
// Considerações:

// Serão usados como teste os números 4181 e 6765.

import { validaNumero } from "../lib/number.js";

const form = document.querySelector("form");
const numero = document.querySelector("#numero");
const div = document.querySelector("div");

function gerarFibonacci(numero) {
  const valor = validaNumero(numero, "console.error");

  if (valor === false || isNaN(valor) || valor <= 0) {
    throw new Error("O valor informado deve ser um número inteiro positivo maior que zero.");
  }

  let listaDeFibonacci = [0, 1];
  let proximoValor = 1; 

  while (proximoValor <= valor) {
    listaDeFibonacci.push(proximoValor);
    proximoValor = listaDeFibonacci[listaDeFibonacci.length - 1] + listaDeFibonacci[listaDeFibonacci.length - 2];
  }

  div.innerHTML = `
  <h3>Lista de Fibonacci:</h3>
  <div class="card"><p>${listaDeFibonacci.join(", ")}</p></div>`;
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    gerarFibonacci(numero.value);
  } catch (error) {
    div.innerHTML = `<div class="card" style="margin-top: 10px;"><p style="color:red;">Erro: ${error.message}</p></div>`;
  }
});