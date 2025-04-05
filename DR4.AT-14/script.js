// 14 Abreviação de nome próprio

// Enunciado: Crie uma página que use uma função para converter uma string com um nome próprio em formato abreviado, como usado aqui no Brasil. Por exemplo: “Pedro Álvares Cabral” ficaria “Pedro A. Cabral”.

// Observações:

// Use prompt e alert.
// Dispare um erro caso o nome próprio informado não seja passível de abreviação. Use throw e o erro mais adequado ao tipo de problema encontrado.
// Teste o seu programa com cenários diferentes.

function abreviaNome(string) {
  let entradaNome, nomeAbreviado;

  try {
    if(typeof string === 'string' && string.trim().length > 0){
    entradaNome = string.trim().toLowerCase().split(' ')
    if(entradaNome.length < 3) throw new Error("Não é possível abreviar um nome tão curto!");
    } else {
      throw new Error("A entrada não pode ser uma string vazia!");
    }
  } catch (error) {
    alert(error)
  }
  nomeAbreviado = entradaNome.map(nome => {
    return nome.replace(nome[0], nome[0].toUpperCase())
  })
  for (let i = 1; i < (nomeAbreviado.length - 1); i++) {
    nomeAbreviado[i] = nomeAbreviado[i].slice(0, 1).concat('.')
  }

  console.log(entradaNome)
  console.log(nomeAbreviado)


  return nomeAbreviado.join(' ');
}

console.log(abreviaNome('Lohran fellipe mendes de souza'))