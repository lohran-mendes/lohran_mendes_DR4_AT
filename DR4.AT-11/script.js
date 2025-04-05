// 11 Anagrama

// Enunciado: Crie uma página que use uma função para verificar se duas strings dadas são anagramas uma da outra ou não. Um anagrama de uma string é outra string que contém os mesmos caracteres, apenas a ordem dos caracteres pode ser diferente. Por exemplo, “listen” e “silent” são anagramas uma da outra.

// Observações:

// Use prompt e alert.
// Dispare um erro caso a string informada não seja válida. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.
function confereAnagrama() {
  let primeiroAnagrama, segundoAnagrama;
  try {
    primeiroAnagrama = prompt("Insira aqui a primeira string.");
    if (
      typeof primeiroAnagrama !== "string" ||
      primeiroAnagrama.trim().length === 0
    ) {
      throw new Error("O primeiro Anagrama não pode ser um valor vazio.");
    }
    segundoAnagrama = prompt("Insira aqui a segunda string.");
    if (
      typeof segundoAnagrama !== "string" ||
      segundoAnagrama.trim().length === 0
    ) {
      throw new Error("O segundo Anagrama não pode ser um valor vazio.");
    }
  } catch (error) {
    alert(error);
    return;
  }

  const arrayDoAnagrama1 = primeiroAnagrama
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  const arrayDoAnagrama2 = segundoAnagrama
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");

  if (arrayDoAnagrama1 === arrayDoAnagrama2) {
    alert(
      `Correto! "${primeiroAnagrama}" é um anagrama de ${segundoAnagrama}!`
    );
    return;
  }
  alert(
    `Errado! "${primeiroAnagrama}" não é um anagrama de ${segundoAnagrama}!`
  );
}

confereAnagrama();
