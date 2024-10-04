/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let result = [];

const numeros = [1, 2, 3, 4, 5, 6, 7];

const numerosImpares = numeros.map(numero => {
  // Si el número es impar, lo devolvemos. Si no, devolvemos undefined.
  return numero % 2 !== 0 ? numero : undefined;
});

// Filtramos los undefined para obtener solo los números impares
result = numerosImpares.filter(numero => numero !== undefined);

console.log(result); // Imprimirá: [1,3,5,7]

//export result
/*
module.exports = result;
*/
module.exports = { default: result }
/*export default result; */