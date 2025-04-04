import { outputError } from "./errors.js";
import { validaString } from "./string.js";

export function validaNumero(inputNumero, displayError) {
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

export function convertToNumber(string, outputType) {
  if (typeof string === "number") return string;
  else if (validaString(string) && !isNaN(string)) {
    return Number(string.trim());
  } else
    outputError(
      outputType,
      `'${
        string === "" ? "CAMPO VAZIO" : string
      }' - NÃO é um valor numérico e nem pode ser transformado em um.`
    );
  return string;
}
