/**
 * takes an array of strings and abbreviates them to intials 
 * @param {string []} arrayNames - array of names i want to abbreviate 
 * @returns {string []} - array of strings of intitals
 */
function getIntialsOfName(name){
    const [firstName, lastName] = name.split(' ')
    return `${firstName[0]}. ${lastName[0]}.`
}

function onlyInitials(arrayNames){
    return arrayNames.map(getIntialsOfName)
}
console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]))