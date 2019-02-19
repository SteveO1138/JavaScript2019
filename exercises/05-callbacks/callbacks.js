/**
 * Given a student name, formats and prints out the value in a visually appealing way
 * (e.g. with hyphens or astericks before each value) with `console.log`
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
const printer = (studentName) => {
  console.log("**" + studentName + "**")
  //return ;
};
// console.log(printer("Jamal"))
/**
 * Loops through the array of strings
 * and for each name, calls upon the function printer to print out the name
 * @param {array}
 * @param {function} callback printer function
 */
const printNames = (arr,callback) => {
  for (var i = 0; i < arr.length; i++){
    callback(arr[i])
    
  }
 
  
};
console.log(printNames(["Jamal", "Matina", " Eddy"],printer))

module.exports = {
  printer,
  printNames
};
