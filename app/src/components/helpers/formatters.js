const formatPokemonId = pokemonId => {
  while (pokemonId.length < 3) {
    pokemonId = "0" + pokemonId
  }

  return pokemonId
}
