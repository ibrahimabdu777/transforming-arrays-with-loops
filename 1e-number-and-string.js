/**
 * 
 * @param {number []} arrayOfNumbers - numbers I want to stringify  
 * @returns {object []} - array of objects {asNumber: 5, asString: '5'}
 */

function numberToString(arrayOfNumbers){
   const arrayStringNumber = []
   for (const number of arrayOfNumbers){
       const numberObj = {}
       numberObj.asNumber = number
       numberObj.asString = `${number}`
       arrayStringNumber.push(numberObj)
   }
   return arrayStringNumber
}

console.log(numberToString([4, -3.2]))