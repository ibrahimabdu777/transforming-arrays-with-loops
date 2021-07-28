/**
 * 
 * @param {number []} arrayOfNumbers - numbers I want to stringify  
 * @returns {object []} - array of objects {asNumber: 5, asString: '5'}
 */
function numbObjFactory(number){
    return {
        asNumber: number,
        asString: `${number}`
    }
}
function numberToString(arrayOfNumbers){
   return arrayOfNumbers.map(numbObjFactory)
}

console.log(numberToString([4, -3.2]))