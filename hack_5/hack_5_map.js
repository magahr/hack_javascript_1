/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

const numeros = [7, 6, 5, 4, 3, 2, 1];

const numerosImpares = numeros.map(numero => {
  // Si el número es impar, lo devolvemos. Si no, devolvemos undefined.
  return numero % 2 !== 0 ? numero : undefined;
});

// Filtramos los undefined para obtener solo los números impares
result = numerosImpares.filter(numero => numero !== undefined);

console.log(result); // Imprimirá: [7,5,3,1]

//export result
module.exports = result;

