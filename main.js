const h1 = document.createElement('h1')
const pokemonPic= document.querySelector('.pokemonPic')


async function getPokemonData() {
    const res = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
    const pokemonData = await res.json()
    // console.log(pokemonData)

    const pokemonImage = pokemonData.sprites.front_default
    pokemonPic.src = pokemonImage
};

getPokemonData()