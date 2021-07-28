/**
 * takes an array of strings and abbreviates them to intials 
 * @param {string []} arrayNames - array of names i want to abbreviate 
 * @returns {string []} - array of strings of intitals
 */

function onlyInitials(arrayNames){
    const arrayInitials = []
    for (const name of arrayNames){
        console.log(name)
        const arrayName = name.split(' ')
        const [firstName, lastName] = arrayName
        const firstInitial = firstName[0]
        const lastInitial = lastName[0]
        const initials = `${firstInitial[0]}. ${lastInitial[0]}.`
        arrayInitials.push(initials)
    }
    return arrayInitials
}
console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]))