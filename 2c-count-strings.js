/**
 * This function takes an array of strings and returns an array containing legnth of these strings
 * @param {string []} arrayOfStrings - contains the strings I want to count 
 * @returns {number []} - contains length of strings I counted
 */

const countString = string => string.length
function countStrings (arrayOfStrings){
   return arrayOfStrings.map(countString)
}

console.log(countStrings(["one", "two", "three", "four"]))