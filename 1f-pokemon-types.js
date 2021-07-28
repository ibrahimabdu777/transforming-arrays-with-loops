/**
 * This function takes an array of pokemon objets and returns an array of descriptions
 * @param {object []} arrayOfObj - array of pokemons objects, each with a name and type property
 * @returns {string []} - array of descriptions of each pokemon 
 */

function pokemonTypes(arrayOfObj){
    arrayOfDescr = []
    for (const pokemon of arrayOfObj){
        const description = `${pokemon.name} is a ${pokemon.type} type Pokemon`
        arrayOfDescr.push(description)
    }
    return arrayOfDescr
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]))