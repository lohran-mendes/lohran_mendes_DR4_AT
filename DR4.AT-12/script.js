// 12 Palíndromo

// Enunciado: Crie uma página que use uma função para verificar se uma string é um palíndromo. Um palíndromo é uma palavra ou frase que é dita da mesma maneira na ordem natural que na ordem inversa, ignorando pontuação, capitalização e espaçamento. Por exemplo: "Roma me tem amor" e "Socorram-me, subi no ônibus em Marrocos”.

// Observações:

// Use prompt e alert.
// Remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e transformar tudo para minúsculo.
// Teste o seu programa com cenários diferentes.

function verificaPalindromo() {
  let entrada;
  try {
    entrada = prompt(
      "Insira aqui a frase a ser verificada como palíndromo."
    );
    if (typeof entrada !== "string" || entrada.length === 0) {
      throw new Error(
        "O valor de entrada não pode ser vazio!\nTente novamente com um valor válido."
      );
    }
  } catch (error) {
    alert(error);
    return;
  }
  const texto = entrada
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f\s\-,.;!?]/g, "");
  const textoDeComparacao = texto.split("").reverse().join("");

  if (texto === textoDeComparacao) {
    alert("Parabéns! '" + entrada + "' é um palíndromo!");
    return;
  }
  alert("Que pena! '" + entrada + "' não é um palíndromo!");
}

verificaPalindromo();
