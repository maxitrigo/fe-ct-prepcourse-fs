function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  //Creamos la variable cuenta
  let cuenta = 0;

  //Iteramos sobre el array y contamos los pares
  for (let i = 0; i < numeros.length; i++) {
    
    //Si el elemento es par, aumentamos la cuenta
    if (numeros[i] % 2 === 0) {
      cuenta++;
    } else {
      //Si no es par, continuamos con la siguiente iteración
      continue;
    }
  }
  return cuenta;
}

module.exports = contarParesConContinue;
