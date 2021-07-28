/**
 * This function takes an array of strings and returns an array containing legnth of these strings
 * @param {string []} arrayOfStrings - contains the strings I want to count 
 * @returns {number []} - contains length of strings I counted
 */

function countStrings (arrayOfStrings){
    const arrayCountedStrings = []
    for (const string of arrayOfStrings){
        const stringLength = string.length
        arrayCountedStrings.push(stringLength)
    }
    return arrayCountedStrings
}

console.log(countStrings(["one", "two", "three", "four"]))