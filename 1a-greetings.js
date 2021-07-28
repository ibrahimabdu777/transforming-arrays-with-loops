/**
 * This function takes an array of names and returns an array of greetings
 * @param {string []} arrayOfNames: array of people you want to greet 
 * @returns {string []} : array of strings of greetings
 */

function greet(arrayOfNames){
    const arrayOfGreetings = []
    for (const name of arrayOfNames){
        const greetName = `Hello, ${name}`
        arrayOfGreetings.push(greetName)
    }
    return arrayOfGreetings
}



console.log(greet(["Ash", "Beth", "Ciara"]))