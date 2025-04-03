// Parte 1. Escrever programas em JavaScript com arrays e encontrar e tratar bugs (erros) em JavaScript
// 1 Elemento mais frequente em um array

// Enunciado: Crie uma página com um programa JavaScript para encontrar o item mais frequente em um array.

// Observações:

// Crie um array com pelo menos 10 elementos com alguns repetidos.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.

import { elementoMaisFrequente } from "../lib/array.js";

const array = [
  "naruto",
  "sakura",
  "sasuke",
  "ino",
  "kakashi",
  "gaara",
  "naruto",
  "sakura",
  "sasuke",
  "jiraya",
  "naruto",
];
document.body.innerHTML += `<p>Aqui está o array informado: [${array.join(
  ", "
)}]</p>`;
document.body.innerHTML += `<p>O item do array que aparece com mais frequência é [${
  elementoMaisFrequente(array)[0].join(', ')
}] aparecendo ${elementoMaisFrequente(array)[1]} vezes.</p>`;
