function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  //Creo el array resultado
  let result = [];
  
  //Mientras el array sea menor a 10 sumo 2 a num y lo guardo en el array result
  while (result.length < 10) {
    num += 2;
    result.push(num);

    let suma = 0;
    for (let i = 0; i < result.length; i++) {
      suma += result[i];
    }

    // Si la suma del array es igual a la longitud del array, interrumpo la ejecución
    if (suma === result.length) {
      return "Se interrumpió la ejecución";
    }
  
  }

  return result
  
}

module.exports = breakStatement;
