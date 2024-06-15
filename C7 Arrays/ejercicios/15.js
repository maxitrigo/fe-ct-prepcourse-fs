function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  //Si el array es vacío, retornar 0
  if (array.length === 0) return 0;

  //Devolver el valor de este índice
  return array.indexOf(Math.max(...array));
}

module.exports = encontrarIndiceMayor;
