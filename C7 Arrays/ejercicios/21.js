function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  //Creo el array resultado
  let resultado = [];

  //Recorro el array y guardo en el array resultado los meses pedidos
   for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      resultado.push(array[i]);
    }
  }

  // Si no se encontraron los meses pedidos, retornar el string: "No se encontraron los meses pedidos"
  if (resultado.length !== 3) {
    return 'No se encontraron los meses pedidos';
  }
  
    // Si están los meses pedidos, retornar el array
    return resultado;

}

module.exports = mesesDelAño;
