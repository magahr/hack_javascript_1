/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let unidades = ['cero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//export result
module.exports = result;

result.push("h@ck")

for (let i = 0; i < numberArray.length; i++) {

    if (i % 2 === 1) {
        result.push(numberArray[i]);
    } else
        result.push(unidades[numberArray[i]]);
 
 }

 result.push("h@ck")

 for (let i = 0; i < stringArray.length; i++) {
   

    if (stringArray[i] === "bar") {
        stringArray[i] = stringArray[i].replace("bar", "Bar");
    }  else
    
    if (stringArray[i] === "baz") {
        stringArray[i] = stringArray[i].replace("baz", "b@z");
    }   else
    
    if (stringArray[i] === "foo") {
        stringArray[i] = stringArray[i].replace("foo", "f00");
    }

    stringArray[i] = stringArray[i].replace("o", 0); 
    stringArray[i] = stringArray[i].replace("x", "X");
    stringArray[i] = stringArray[i].replace("e", "3");

    result.push(stringArray[i])
     
 }
 
 result.push("h@ck")
 console.log(result);