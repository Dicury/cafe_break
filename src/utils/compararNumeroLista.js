function compararNumeroLista(numero, lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return true; // Number found in the array
    }
  }
  return false; // Number not found in the array
}

export default compararNumeroLista;
