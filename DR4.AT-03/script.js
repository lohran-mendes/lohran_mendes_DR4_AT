// 3 Encontrar anos bissextos em um array

// Enunciado: Crie uma página com um programa JavaScript para encontrar os anos bissextos em um determinado intervalo de anos.

// Observações:

// Crie um array com pelo menos 5 elementos representando anos.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// Crie a função de verificação de ano bissexto em uma biblioteca apropriada.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.
// Pelo menos 1 ano do array deve ser bissexto.

import { listarAnosBissextos } from "../lib/array.js";

const listaDeAnos = [
  2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
  2027, 2028,
];

document.body.innerHTML += `<p>Segue aqui a lista de anos: [${listaDeAnos.join(
  ", "
)}].</p>`;
document.body.innerHTML += `<p>Segue aqui uma nova lista com os anos bissextos: [${listarAnosBissextos(
  listaDeAnos,
  "console.error"
).join(", ")}].</p>`;
