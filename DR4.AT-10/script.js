// 10 Contador de vogais

// Enunciado: Crie uma página que use uma função para contar quantas vogais estão presentes em uma determinada string.

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

import { validaString } from "../lib/string.js";

function contagemDeVogais() {
  const string = prompt(
    "Insira aqui a string para que a contagem de vogais seja realizada."
  );
  let contagemVogal = 0;
  if (validaString(string, "alert")) {
    const letters = string.split("");
    letters.forEach((letter) => {
      if (
        letter.toLowerCase() === "a" ||
        letter.toLowerCase() === "e" ||
        letter.toLowerCase() === "i" ||
        letter.toLowerCase() === "o" ||
        letter.toLowerCase() === "u"
      )
        contagemVogal++;
    });
    if (contagemVogal > 0) {
      alert(`Existem ${contagemVogal} vogais no texto fornecido`);
    } else alert(`Não há vogais no texto fornecido`);
  }
}

contagemDeVogais();