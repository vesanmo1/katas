// Crea una función que devuelva el número negativo del parámetro

inverse(4); // Debe mostrar -4
inverse(2); // Debe mostrar -2

function inverse(num) {
  return -Math.abs(num);
}

console.log(inverse(4));
console.log(inverse(2));
