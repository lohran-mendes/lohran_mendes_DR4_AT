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

export function elementoMaisFrequente(inputArray) {
  if (validaArray(inputArray, "console.error")) {
    const ocorrencias = {};
    const maioresOcorrencias = [];

    const array = [...inputArray];

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
    return [maioresOcorrencias, quantidadeDeOcorrencia]
  }
}
