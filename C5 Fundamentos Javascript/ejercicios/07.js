function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  if (typeof valor === 'string') {
    return 'string';
  } else if (typeof valor === 'number') {
    return 'number';
  } else if (typeof valor === 'boolean') {
    return 'boolean';
  } else if (typeof valor === 'object') {
    return 'object';
  } else if (typeof valor === 'function') {
    return 'function';
  } else {
    return 'undefined';
  }
}

module.exports = esTipoDato;