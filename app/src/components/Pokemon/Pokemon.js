import React, { Component } from "react"

import { API_URL } from "../../config"
import Navigation from "../elements/Navigation/Navigation"
import PokemonInfo from "../elements/PokemonInfo/PokemonInfo"
import PokemonStats from "../elements/PokemonStats/PokemonStats"
import Spinner from "../elements/Spinner/Spinner"

class Pokemon extends Component {
  state = {
    pokemon: null,
    skills: null,
    loading: false
  }

  componentDidMount() {
    //console.log("pokeInfo", this.props)

    /*if (localStorage.getItem(`${pokemonId}`)) {
      let state = JSON.parse(localStorage.getItem(`${pokemonId}`))

      this.setState({ ...state })
    } else { */
    const endpoint = `${API_URL}pokemon/${this.props.itemName}`

    this.setState({ loading: true })
    this.fetchItem(endpoint)
    // }
  }

  fetchItem = endpoint => {
    console.log("e", endpoint)
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        if (!result) {
          this.setState({ loading: false })
        } else {
          this.setState({
            pokemon: result
          })

          console.log(result)
          console.log(
            result.id,
            result.name,
            result.types, // types.type.name
            result.abilities, // abilities.ability.name
            result.moves, // moves.move.name,
            result.stats, // stats.stat.name, stats.base_stat
            result.height,
            result.weight
          )
        }
      })
  }

  setPokemonId = itemId => {
    while (itemId.length < 3) {
      itemId = "0" + itemId
    }

    return itemId
  }

  render() {
    return (
      <div className="pokedex-pokemon-box">
        {this.state.pokemon ? (
          <div className="pokedex-pokemon-box">
            <figure className="clickable">
              <img
                src={this.state.pokemon.sprites.front_default}
                alt={this.props.itemName}
              ></img>
              <img
                src={this.state.pokemon.sprites.back_default}
                alt={this.props.itemName}
              ></img>
            </figure>
            <div className="pokemon-info">
              <p className="id">
                <span className="number-prefix">#</span>
                {this.setPokemonId(this.props.itemId)}
              </p>
              <h3>{this.state.pokemon.name}</h3>
            </div>
            <PokemonInfo />
            <PokemonStats stats={this.state.pokemon.stats} />
            <Spinner />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Pokemon
