import { outputError } from "./errors.js";

export function recebeString(inputString, outputErrorType) {
  if (validaString(inputString, outputErrorType)) return String(inputString);
  return inputString;
}

export function validaString(inputString, outputErrorType) {
  if (typeof inputString === "string" && inputString.trim().length > 0)
    return true;

  if (typeof outputErrorType === "string" && outputErrorType.length > 0)
    outputError(outputErrorType, `"${inputString}" - Não é uma string`);
  return false;
}
