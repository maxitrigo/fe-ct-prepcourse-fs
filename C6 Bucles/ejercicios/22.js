function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0; // Contador de iteraciones
  do {
    num = num + 5;
    contador++; // Incrementa el contador
  } while ( contador < 8 );  // Mientras el contador sea menor que 8
  return num;
}

module.exports = doWhile;