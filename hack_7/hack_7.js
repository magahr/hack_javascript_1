/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


//export result
module.exports = result;

for (let i = 0; i < arr.length; i++) {
    
   result.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1));

}

console.log(result);