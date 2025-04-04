// 2 Remover duplicatas em um array

// Enunciado: Crie uma página com um programa JavaScript para remover itens duplicados de um array, ignorando a diferenciação entre maiúsculas e minúsculas.

// Observações:

// Crie um array com pelo menos 10 elementos com alguns repetidos.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.

import { removeDuplicatas } from "../lib/array.js";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 10, 22];

document.body.innerHTML += `<p>Aqui está o array informado: [${array.join(
  ", "
)}].</p>`;
document.body.innerHTML += `<p>Aqui está o array sem duplicatas [${removeDuplicatas(
  array,
  "console.error"
).join(", ")}].`;
