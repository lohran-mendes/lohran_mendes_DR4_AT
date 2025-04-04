export function validaNumero(inputNumero, displayError){
  const converteNumero = Number(inputNumero);
  const errorMessage = `ERRO!\nA entrada "${inputNumero}" não é um número inteiro.`;
  if (Number.isInteger(converteNumero) && !isNaN(converteNumero)) {
    return converteNumero;
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