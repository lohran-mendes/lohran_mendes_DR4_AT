export function outputError(typeOutput, errorMessage) {
  if (typeof typeOutput === 'string' && typeOutput.length > 0) {
    switch (typeOutput.toLowerCase()) {
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
  }
}
