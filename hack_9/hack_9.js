/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
// let result = 2;


function contarLetrasB(arr) {
    return arr.filter(elemento => elemento[0] === 'b').length;
  }

 result = contarLetrasB(arr);
 console.log(result);
 
//export result
module.exports = result;

// for (let i = 0; i < arr.length; i++) {

//         if (arr[i].slice(0,1) === "b" )
//         {
//             result++;
    
//         }
  
// 
// }
