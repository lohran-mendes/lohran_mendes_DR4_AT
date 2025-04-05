// 13 Validação de string

// Enunciado: Crie uma página que use uma função para validar se uma string está em branco ou não.

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.

function estaEmBranco(input) {
  if (typeof input === "string" && input.trim().length > 0) {
    alert("A entrada não está em branco!");
    return;
  }
  alert("A entrada está em branco!");
}

const teste = prompt("Entre com a string  a ser testada!");
estaEmBranco(teste);
