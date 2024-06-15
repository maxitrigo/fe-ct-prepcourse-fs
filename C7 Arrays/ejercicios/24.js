function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  //Creo el array resultado
  let result = [];

  //Iteramos por un maximo de 10 veces
  for (let i = 0; i < 10; i++) {
    
    //Si el numero de iteraciones es igual a 5, continuamos con la siguiente
    if (i === 5) {
      continue;
    }
    
    //Aumentamos en 2
    num += 2;

    //Agregamos el elemento al array
    result.push(num);
  }

  return result;

}

module.exports = continueStatement;
