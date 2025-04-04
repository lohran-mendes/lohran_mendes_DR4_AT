// 9 Validação de números

// Enunciado: Crie uma página que use uma função para validar se uma string só tem números.

// Observações:

// Use prompt e alert.
// Use expressões regulares.
// Teste o seu programa com cenários diferentes.

function ValidaStringNumerica(inputString) {
  const regex = /^\d+$/;
  if (regex.test(inputString)) {
    return alert(`Válido! "${inputString}" só tem valores numéricos`);
  }
  alert(`Inválido! "${inputString}" tem valores que não são numéricos`);
}

const entrada = prompt("Insira a string para que a validação seja feita.");
ValidaStringNumerica(entrada);
