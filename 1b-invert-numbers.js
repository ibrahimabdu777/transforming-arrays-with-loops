/**
 * This function reverses the sign of each number in the array 
 * @param {number []} array - array of numbers
 * @returns {number []} - array of numbers with signs changed 
 */

function invertNumbers(array){
    const arrayNegative = []
    for (const number of array){
        const negativeNumber = -1 *number
        arrayNegative.push(negativeNumber)
    }
    return arrayNegative
}

console.log(invertNumbers([1, -3, 2, 8, -10]))