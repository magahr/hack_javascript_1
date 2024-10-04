/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];


//export result
module.exports = result;

let i = 1;
while (i < 6) {
    result[i] = i
    console.log(result[i]);
    i++;
  }