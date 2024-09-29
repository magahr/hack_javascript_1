/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


//export result
module.exports = result;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === "bar" || arr[i] === "baz")
    {
        result.push(arr[i].slice(0,1) +  "@" + arr[i].slice(2) );
 
    }
    
    if (arr[i] === "qux")
    {
        result.push(arr[i].slice(0,3).toUpperCase());
     
    }
  
 }
 
 console.log(result);

//  result.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1));