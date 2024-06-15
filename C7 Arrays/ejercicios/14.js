function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  //Iniciar el contador en 0
  let cuenta = 0;

  //iterar sobre el array y contar los elementos mayores a 10
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      cuenta++;
    }
  }
  return cuenta;
}

contarElementosMayoresA10([1, 2, 3, 4, 5]);
module.exports = contarElementosMayoresA10;
