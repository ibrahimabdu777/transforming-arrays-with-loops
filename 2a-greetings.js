/**
 * This function takes an array of names and returns an array of greetings
 * @param {string []} arrayOfNames: array of people you want to greet 
 * @returns {string []} : array of strings of greetings
 */
const greetName = name => `Hello, ${name}`
function greet(arrayOfNames){
    return arrayOfNames.map(greetName)
}




console.log(greet(["Ash", "Beth", "Ciara"]))