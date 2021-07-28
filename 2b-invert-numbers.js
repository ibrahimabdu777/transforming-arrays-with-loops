/**
 * This function reverses the sign of each number in the array 
 * @param {number []} array - array of numbers
 * @returns {number []} - array of numbers with signs changed 
 */
const invertNumber = number => number * -1

function invertNumbers(array){
    return array.map(invertNumber)
}

console.log(invertNumbers([1, -3, 2, 8, -10]))