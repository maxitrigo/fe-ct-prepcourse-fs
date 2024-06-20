/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  // Crear un objeto vacío para almacenar los conteos
  const charCount = {};

  // Recorrer cada carácter de la cadena
  for (let char of string) {
    // Si el carácter ya existe en el objeto, incrementar su conteo
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // Si el carácter no existe, inicializar su conteo en 1
      charCount[char] = 1;
    }
  }

  // Crear un arreglo con las claves del objeto y ordenarlas alfabéticamente
  const sortedKeys = Object.keys(charCount).sort();

  // Crear un nuevo objeto con las claves ordenadas
  const sortedCharCount = {};
  for (let key of sortedKeys) {
    sortedCharCount[key] = charCount[key];
  }

  // Retornar el objeto con los caracteres y sus conteos en orden alfabético
  return sortedCharCount;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  
  // Arreglos para almacenar letras mayúsculas y minúsculas
  let upperCaseLetters = [];
  let lowerCaseLetters = [];

  // Recorrer cada letra de la cadena
  for (let char of string) {
    // Verificar si la letra es mayúscula
    if (char === char.toUpperCase()) {
      upperCaseLetters.push(char);
    } else {
      // Si no es mayúscula, agregarla al arreglo de minúsculas
      lowerCaseLetters.push(char);
    }
  }

  // Combinar las letras mayúsculas primero y luego las minúsculas
  return upperCaseLetters.join('') + lowerCaseLetters.join('');
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
