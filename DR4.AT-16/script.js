// 16 Contar substrings

// Enunciado: Crie uma página que use uma função para contar substrings em uma string.

// Observações:

// Use prompt e alert.
// Use expressões regulares.
// Teste o seu programa com cenários diferentes.
// Assim que terminar, salve seu trabalho em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR4_AT.PDF” e poste como resposta a este AT.

function contaSubstring() {
  let textoInicial,
    textoFinal,
    substring,
    substringFinal,
    quantidadeEncontrada = 0;
  const regex = /[\u0300-\u036f]/g;

  try {
    textoInicial = prompt("Coloque aqui o texto para extrair substrings:");
    if (typeof textoInicial !== "string" || textoInicial.trim().length === 0)
      throw new Error("O texto informado não pode ser vazio!");
    substring = prompt(
      "Coloque aqui a substring que você deseja contar as ocorrências"
    );
    if (typeof substring !== "string" || substring.trim().length === 0)
      throw new Error("A substring informada não pode ser vazia!");
  } catch (error) {
    return alert(error);
  }

  textoFinal = textoInicial
    .normalize("NFD")
    .replace(regex, "")
    .trim()
    .toLowerCase();
  substringFinal = substring
    .normalize("NFD")
    .replace(regex, "")
    .trim()
    .toLowerCase();

  while (textoFinal.includes(substringFinal)) {
    textoFinal = textoFinal.substring(
      textoFinal.indexOf(substringFinal) + substringFinal.length,
      textoFinal.length
    );
    quantidadeEncontrada++;
  }

  alert(
    `O texto: \n"${textoInicial}"\ntem "${quantidadeEncontrada}" ocorrências da substring: \n"${substring}".`
  );
}

contaSubstring();
