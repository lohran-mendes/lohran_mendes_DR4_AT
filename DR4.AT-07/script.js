// 7 Pesquisa de Satisfação

// Enunciado: Crie uma página com um programa que aplique uma pesquisa que avalia os serviços prestados por uma empresa de HelpDesk. Defina um array com perguntas que receberão respostas-padrão. As respostas-padrão pontuam o serviço da seguinte forma: Concordo = 10, Concordo Parcialmente = 5 e Discordo = 0 (use um prompt para obter a resposta do usuário).

// No final, use o alert para apresentar o percentual de satisfação do cliente.

// Observações:

// Use prompt e alert.
// Coloque pelo menos 5 questões.
// Teste o seu programa com cenários diferentes.

import { recebeString } from "../lib/string.js";

const comoAvaliar =
  "Responda somente com:\n'Concordo', 'Concordo Parcialmente' ou 'Discordo'\n\r";
const perguntas = [
  "Fui bem atendido em todo o momento.",
  "Consegui tudo o que eu queria.",
  "O valor do serviço foi muito justo.",
  "O atendimento foi bem rápido.",
  "Vou recomendar os serviços para meus conhecidos.",
];
const respostas = [];
let resposta = "";

function recebeAvaliacao() {
  for (const pergunta of perguntas) {
    if (resposta === null) {
      break;
    }
    do {
      resposta = recebeString(
        prompt(comoAvaliar + "" + pergunta),
        "console.log"
      );
      if (validaAvaliacao(resposta) && resposta !== null) {
        respostas.push(resposta.toLowerCase());
      } else if (validaAvaliacao(resposta) && resposta === null) {
        alert("Cancelando a pesquisa de satisfação...");
      } else {
        alert(
          `"${resposta}" - não é uma resposta válida! Responda com concordo, concordo plenamente ou discordo`
        );
      }
    } while (validaAvaliacao(resposta) === false);
  }
  if (resposta !== null) alert(`Agradecemos pela sua participação!\n\r${percentualDeSatisfacao()}`);
}

function validaAvaliacao(inputResposta) {
  let resposta = inputResposta;
  if (
    resposta === null ||
    resposta.toLowerCase() === "concordo" ||
    resposta.toLowerCase() === "concordo parcialmente" ||
    resposta.toLowerCase() === "discordo"
  ) {
    return true;
  }
  return false;
}

function percentualDeSatisfacao(){
  let pontuacao = 0;
  respostas.forEach(resposta =>{
    switch (resposta) {
      case 'concordo':
        pontuacao += 10;
        break;
      case 'concordo parcialmente':
        pontuacao += 5;
        break;
      case 'discordo':
        pontuacao += 0;
        break;
    
      default:
        break;
    }
  })
 return `Ficamos com uma pontuação de ${pontuacao} em um máximo de ${respostas.length * 10}`;
}

recebeAvaliacao();
