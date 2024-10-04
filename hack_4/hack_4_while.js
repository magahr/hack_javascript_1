/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 
let result = [];
*/

//export result
//module.exports = result;

/** 
let i = 1;
while ( i < 8) {
if (i % 2 === 1) {
result.push(i);

} 
i++;
}
console.log(result);
*/

let result = [];
let i = 1;

while (i <= 7) {
  result.push(i);
  i += 2;
}

console.log(result); // Imprime: [1, 3, 5, 7]

module.exports = result;



