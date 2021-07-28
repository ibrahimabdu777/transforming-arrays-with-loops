/**
 * This function takes an array of pokemon objets and returns an array of descriptions
 * @param {object []} arrayOfObj - array of pokemons objects, each with a name and type property
 * @returns {string []} - array of descriptions of each pokemon 
 */
function getMessage(pokemon){
    return description = `${pokemon.name} is a ${pokemon.type} type Pokemon`
}
function pokemonTypes(arrayOfObj){
  return arrayOfObj.map(getMessage)
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]))