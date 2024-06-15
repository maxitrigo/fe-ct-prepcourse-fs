function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // Si no se pasan argumentos, retorna 0
  if (arguments.length === 0) {
    return 0;
  }

  // Si se pasa un solo argumento, se retorna
  if (arguments.length === 1) {
    return arguments[0];
  }

  // Inicializa el producto en 1 (elemento neutro de la multiplicación)
  let producto = 1;

  // Itera sobre todos los argumentos y multiplica
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  // Retorna el producto de todos los argumentos
  return producto;
}

module.exports = multiplicarArgumentos;
