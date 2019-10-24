import React from "react"

const PokemonAbilities = abilities => {
  return <div>{abilities.abilities[0].ability.name}</div>
}

export default PokemonAbilities
