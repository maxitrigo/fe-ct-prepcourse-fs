function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // Los numeros menores a 2 no son primos
  if (numero < 2) {
    return false;
  }

  // Verificamos si el número es divisible por algún número entre 2 y la raíz cuadrada de numero
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si encontramos un divisor, no es primo
    }
  }

  // Si no encontramos ningún divisor, es primo
  return true;
  
}

module.exports = esNumeroPrimo;
