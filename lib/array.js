export function validaArray(inputArray, displayError) {
  const errorMessage = `ERRO!\nA entrada "${inputArray}" não é um array válido`;
  if (Array.isArray(inputArray) && inputArray.length > 0) {
    return inputArray;
  }
  switch (displayError.toLowerCase()) {
    case "console.log":
      console.log(errorMessage);
      break;
    case "console.error":
      console.error(errorMessage);
      break;
    case "alert":
      alert(errorMessage);
      break;
    default:
      break;
  }
  return false;
}

export function elementoMaisFrequente(inputArray, displayError) {
  if (validaArray(inputArray, displayError)) {
    const array = [...inputArray];

    const ocorrencias = {};
    const maioresOcorrencias = [];

    array.forEach((valor) => {
      const valorIterado = valor.toLowerCase();
      if (Object.hasOwn(ocorrencias, valorIterado)) {
        ocorrencias[valorIterado] += 1;
      } else {
        ocorrencias[valorIterado] = 1;
      }
    });

    const quantidadeDeOcorrencia = Math.max(...Object.values(ocorrencias));
    for (const key in ocorrencias) {
      if (ocorrencias[key] === quantidadeDeOcorrencia) {
        maioresOcorrencias.push(key);
      }
    }
    return [maioresOcorrencias, quantidadeDeOcorrencia];
  }
}

export function removeDuplicatas(inputArray, displayError) {
  if (validaArray(inputArray, displayError)) {
    const array = [...inputArray];
    const arraySemDuplicatas = [];

    array.forEach((item, index, array) => {
      let valor = typeof item === 'string'? item.toLowerCase(): item;
        if (array.indexOf(valor) === index) arraySemDuplicatas.push(valor);
    });
    return arraySemDuplicatas;
  }
}

export function listarAnosBissextos(inputArray, displayError) {
  if (validaArray(inputArray, displayError)) {
    const array = [...inputArray];
    const anosBissextos = array.filter(
      (ano) => new Date(ano, 1, 29).getDate() === 29
    );
    return anosBissextos;
  }
}