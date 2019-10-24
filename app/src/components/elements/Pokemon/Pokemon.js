import React, { Component } from "react"

import PokemonInfo from "../PokemonInfo/PokemonInfo"
import PokemonStats from "../PokemonStats/PokemonStats"
import PokemonAbilities from "../PokemonAbilities/PokemonAbilities"

import Spinner from "../Spinner/Spinner"
import formatPokemonId from "../../helpers/formatters"

class Pokemon extends Component {
  constructor({ selectedPokemon }) {
    super()

    this.state = {
      selectedPokemon
    }
    // console.log("poke", this.state.selectedPokemon)
  }

  setPokemonId = pokemonId => {
    while (pokemonId.length < 3) {
      pokemonId = "0" + pokemonId
    }

    return pokemonId
  }

  render() {
    return (
      <div className="pokedex-pokemon-box">
        {this.state.selectedPokemon ? (
          <div className="pokedex-pokemon-box">
            <figure className="clickable">
              <img
                src={this.state.selectedPokemon.sprites.front_default}
                alt={this.state.selectedPokemon.name}
              ></img>
              <img
                src={this.state.selectedPokemon.sprites.back_default}
                alt={this.state.selectedPokemon.name}
              ></img>
            </figure>
            <div className="pokemon-info">
              <p className="id">
                <span className="number-prefix">#</span>
                {this.setPokemonId(this.state.selectedPokemon.id)}
              </p>
              <h3>{this.state.selectedPokemon.name}</h3>
            </div>
            <PokemonInfo
              height={this.state.selectedPokemon.height}
              weight={this.state.selectedPokemon.weight}
            ></PokemonInfo>
            <PokemonAbilities
              abilities={this.state.selectedPokemon.abilities}
            />
            <PokemonStats stats={this.state.selectedPokemon.stats} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Pokemon
