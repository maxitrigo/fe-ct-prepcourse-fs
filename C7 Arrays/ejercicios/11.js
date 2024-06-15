function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    const duplicado = array[i] * 2;
    nuevoArray.push(duplicado);
  }
  return nuevoArray;
  
}

module.exports = duplicarElementos;
