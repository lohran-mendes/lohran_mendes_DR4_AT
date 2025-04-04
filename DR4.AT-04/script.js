// 4 Classificar objetos em um array

// Enunciado: Crie uma página com um programa JavaScript que exiba um array de objetos representando obras literárias classificadas por título.

// Observações:

// Crie um array com pelo menos 5 elementos representando as obras literárias.
// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
// O modelo de objeto deve seguir o exemplo: {autor: 'Machado de Assis', título: 'Dom Casmurro', isbn: 1254}.
// Dispare um erro caso o array não contenha objetos com o formato solicitado. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.
// Considerações:

// O array original poderá ser alterado para testar outros cenários de execução.
import { validaArray } from "../lib/array.js";

const obrasLiterarias = [
  { autor: "Machado de Assis", titulo: "Dom Casmurro", isbn: 1254 },
  { autor: "Clarice Lispector", titulo: "A Hora da Estrela", isbn: 2378 },
  { autor: "Guimarães Rosa", titulo: "Grande Sertão: Veredas", isbn: 3490 },
  { autor: "Graciliano Ramos", titulo: "Vidas Secas", isbn: 4512 },
  { autor: "José de Alencar", titulo: "O Guarani", isbn: 5623 },
  { autor: "Jorge Amado", titulo: "Capitães da Areia", isbn: 6734 },
  { autor: "Aluísio Azevedo", titulo: "O Cortiço", isbn: 7845 },
  { autor: "Manuel Antônio de Almeida",titulo: "Memórias de um Sargento de Milícias",isbn: 8956, },
  { autor: "Raul Pompeia", titulo: "O Ateneu", isbn: 9067 },
  { autor: "Monteiro Lobato", titulo: "Urupês", isbn: 1023 },
];

document.body.innerHTML += `<p class="container"><strong>Aqui está o array original:</strong> ${JSON.stringify(
  obrasLiterarias
)}.</p>`;

function exibirObras(input, displayError) {
  input.forEach(item => validaObra(item))
  if (validaArray(obrasLiterarias, displayError)) {
    const array = [...input].sort((a, b) => a.titulo.localeCompare(b.titulo));
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.innerHTML +=
      '<p class="container"><strong>Aqui está o array classificados por título:</strong>';

    array.forEach((item) => {
        container.innerHTML += `<div class="card">
      <p><strong>Titulo:</strong> ${item.titulo}</p>
      <p><strong>Autor:</strong> ${item.autor}</p>
      <p><strong>ISBN:</strong> ${item.isbn}</p>
    </div>`;
    });
    document.body.appendChild(container);
  }
}

function validaObra(obra) {
  const propriedadesInvalidas = [];
  let valido = true;

  if (!Object.hasOwn(obra, "titulo")) {
    propriedadesInvalidas.push("titulo");
    valido = false;
  }
  if (!Object.hasOwn(obra, "autor")) {
    propriedadesInvalidas.push("autor");
    valido = false;
  }
  if (!Object.hasOwn(obra, "isbn")) {
    propriedadesInvalidas.push("isbn");
    valido = false;
  }
  if (valido === false) {
    throw new Error(
      `${JSON.stringify(
        obra
      )} Não é uma obra válida!\nFalta a propriedade: [${propriedadesInvalidas.join(
        ", "
      )}] `
    );
  } else if (valido === true) return true;
}

exibirObras(obrasLiterarias, "console.error");
