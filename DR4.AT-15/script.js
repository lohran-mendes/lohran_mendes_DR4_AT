// 15 Truncar string

// Enunciado: Crie uma página que use uma função para truncar uma string se ela for maior que o número especificado de caracteres. Strings truncadas terminarão com uma sequência de reticências.

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

function truncarString(string, maxStringLength) {
  try {
    if (typeof string !== "string" || string.trim().length === 0)
      throw new Error("A string fornecida não pode ser vazia!");
    if (
      typeof maxStringLength !== "number" ||
      maxStringLength <= 0 ||
      !Number.isInteger(maxStringLength)
    )
      throw new Error(
        "O tamanho máximo da string deve ser um valor numérico inteiro maior que 0!"
      );
  } catch (error) {
    alert(error);
    return;
  }
  if (string.length >= maxStringLength) {
    const arrayString = string.slice(0, maxStringLength).split("");
    alert(
      arrayString.join("").slice(0, arrayString.lastIndexOf(" ")).concat("...")
    );
    return;
  }
  alert(string);
}

truncarString(
  prompt("Entre com a string que deve ser truncada"),
  Number(prompt("Entre com o tamanho máximo da string."))
);
