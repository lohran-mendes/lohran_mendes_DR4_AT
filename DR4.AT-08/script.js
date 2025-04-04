// 8 Eleições em órgão profissional

// Enunciado: Uma eleição de um órgão profissional foi realizada e concorreram 5 chapas identificadas pelos números de 1 a 5.

// Crie uma página com um programa que leia o número de votos de cada chapa, permitindo apenas números naturais.

// Mostre os resultados, indicando quantos votos cada chapa recebeu e o percentual do total de votos equivalente (faça um alert para isto).

// Indique se deve haver segundo turno da eleição e quais serão as duas chapas a concorrer no segundo turno caso alguma das chapas não consiga mais de 50% dos votos totais no primeiro turno (faça outro alert para isto).

// Observações:

// Use prompt e alert.
// Teste o seu programa com cenários diferentes.
import { convertToNumber } from "../lib/number.js";

const chapas = [1, 2, 3, 4, 5];
const votosChapa = [];

function recebeVotos() {
  for (let i = 0; i < chapas.length; i++) {
    let voto = prompt(`Quantos votos a chapa ${chapas[i]} recebeu?`);
    if (voto === null) {
      alert("Cancelando programa...");
      break;
    } else {
      voto = convertToNumber(voto, "alert");
    }
    if (!isNaN(voto) && voto >= 0 && Number.isInteger(voto)) {
      votosChapa.push(voto);
    } else {
      alert("Tente novamente colocando um valor numérico inteiro!");
      i--;
    }
  }
  mostrarResultados()
}

function mostrarResultados(){
  const totalDeVotos = votosChapa.reduce((previousValue, currentValue) => previousValue + currentValue)
  let texto = 'Aqui está os resultados:\n'
  let segundoTurno = true;
  chapas.forEach((chapa, index) => {
    let porcentagem = ((votosChapa[index]* 100) / totalDeVotos).toFixed(2)
    if(porcentagem > 50) segundoTurno = false
    texto += `Chapa "${chapa}": recebeu ${votosChapa[index]} votos.  ${porcentagem}%\n`
  })
  texto += `Total de votos:  ${totalDeVotos}\n`
  texto += `${segundoTurno === true? 'Será necessário realizar um segundo turno!': 'Não será necessário realizar um segundo turno!'}`
  alert(texto)
}

recebeVotos();
