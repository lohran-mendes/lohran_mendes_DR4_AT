// 5 Tabuada

// Enunciado: Crie uma página com um programa para mostrar a tabuada de 1 a 10. Exiba o resultado em uma página HTML.

// Observações:

// Use “document.write” ou innerHTML para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.

function tabuada(multiplicador) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <p>${multiplicador} x  1 = <strong>${multiplicador * 1}</strong></p>
      <p>${multiplicador} x  2 = <strong>${multiplicador * 2}</strong></p>
      <p>${multiplicador} x  3 = <strong>${multiplicador * 3}</strong></p>
      <p>${multiplicador} x  4 = <strong>${multiplicador * 4}</strong></p>
      <p>${multiplicador} x  5 = <strong>${multiplicador * 5}</strong></p>
      <p>${multiplicador} x  6 = <strong>${multiplicador * 6}</strong></p>
      <p>${multiplicador} x  7 = <strong>${multiplicador * 7}</strong></p>
      <p>${multiplicador} x  8 = <strong>${multiplicador * 8}</strong></p>
      <p>${multiplicador} x  9 = <strong>${multiplicador * 9}</strong></p>
      <p>${multiplicador} x 10 = <strong>${multiplicador * 10}</strong></p>
    `;
  document.body.querySelector(".container").appendChild(card);
}

for (let i = 1; i <= 10; i++) {
  tabuada(i);
}

// Eu não entendi muito bem o enunciado, então eu fiz no html a função taubuada e aqui eu fiz a tabuada dentro de um array.
function tabuadaArray() {
  const tabuada = [];
  for (let i = 1; i <= 10; i++) {
    const tabuadaNumero = [];
    for (let j = 1; j <= 10; j++) {
      tabuada.push(`${i} x ${j} = ${i * j}`);
    }
    tabuada.push(tabuadaNumero);
  }
  document.body.innerHTML += `<div class='container'> <strong>Array da tabuada:</strong> [${tabuada.join(
    "], ["
  )}]</div>`;
}

tabuadaArray();
