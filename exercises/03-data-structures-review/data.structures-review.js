/**
 *  Upper case the first letter in each array element
 * @param  { array }
 * @return {array}
 * @example
 * upperCaseEachElementInArray(['javascript','html','css']) // ['Javascript','HTML','CSS']
 * upperCaseEachElementInArray(['Brad','Tom']) // ['Brad','Tom']
 *
 *
 */

function upperCaseEachElementInArray(array) {
  var array = (['javascript','html','css'])
  
  return this.charAt(0).toUpperCase() + this.slice(1);
    
  

  /*** Dont forget to return an array with all elements being upper-cased */
}
console.log(array);

/**
 *  Use the Spread Operator to add an additional name (middle name) to an object
 *
 * @param  {Object} names an object representing a person, where each key is a type of name
 * e.g. {firstName:'Tom',lastName:'Jerry'}
 * @param {string} middleName
 * @return {Object} a clone of the names object with a middle name added to it
 * @example
 * addMiddleNameToObject({firstName:'Tom',lastName:'Jerry'},'Harris')
 * // {firstName:'Tom',MiddleName:'Harris', lastName:'Jerry'}
 */

function addMiddleNameToObject(names, middleName) {


}

/**
 * Use split method to return an array on white space
 * @param  { string }
 * @return { array }
 * @example
 * stringToArrayConverter("I went home.");
 * // ["I", "went", "home."]
 */

function stringToArrayConverter(str) {}

/**
 *
 * @param  { string }
 * @return { array }
 * @example
 */

/**
 * Tally the number of occurrences of each programming language in an array of languages.
 * @param {array} languages
 * @return {Object} an object where each key represents a language and its value is
 * the number of occurrences.
 * @example
 * dynamicObject(["Javascript","Javascript","HTML","HTML", "CSS","CSS","PHP"])
 * { "Javascript":2, "HTML":2, "CSS":2, "PHP":1 }
 */

function dynamicObject(array) {
  var obj = {};
  for (var item of array){
    if (obj[item]){
      obj[item] = obj[item] + 1;
    }
    obj[item] = 1)
  } else {
  console.log(obj) 
};

module.exports = {
  upperCaseEachElementInArray,
  addMiddleNameToObject,
  stringToArrayConverter,
  dynamicObject
};
