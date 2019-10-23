import React, { Component } from "react"
import PropTypes from "prop-types"

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  PAGE_OFFSET,
  PAGE_LIMIT,
  ASSETS_URL
} from "../../../config"

import "./PokemonThumb.css"

// const PokemonThumb = props => {
class PokemonThumb extends Component {
  constructor({ pokemon }) {
    super()
    this.state = {
      pokemon,
      data: null
    }
    //console.log("constructor")
  }

  selectPokemon = pokemon => {
    console.log(pokemon)

    const endpoint = `${API_URL}pokemon/${pokemon.itemId}`

    this.setState({ loading: true })
    this.fetchItem(endpoint)
  }

  setPokemonId = itemId => {
    while (itemId.length < 3) {
      itemId = "0" + itemId
    }

    return itemId
  }

  /*componentWillMount() {
    const { pokemon } = this.state
    const endpoint = `${API_URL}pokemon/${pokemon.itemId}`

    this.setState({ loading: true })
    this.fetchItem(endpoint)
  } */

  fetchItem = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        // console.log(result)
        if (result.status_code) {
          this.setState({ loading: false })
        } else {
          this.setState({ pokemon: result })

          console.dir(result)
        }
      })
  }

  render() {
    const { onPokemonClick } = this.props
    const { pokemon, data } = this.state

    return (
      <div className="pokedex-pokemon-thumbnail">
        {this.props.clickable ? (
          <div className="pokedex-pokemon-thumb">
            <figure
              onClick={() => this.selectPokemon(this.props)} // check for best practices for handling events
              // onClick={onPokemonClick}
              className="clickable"
            >
              <img src={this.props.image} alt={this.props.itemName}></img>
            </figure>
            <div className="pokemon-info">
              <p className="id">
                <span className="number-prefix">#</span>
                {this.setPokemonId(this.props.itemId)}
              </p>
              <h3>{this.props.itemName}</h3>
            </div>
          </div>
        ) : (
          <img src={this.props.image} alt={this.props.itemName}></img>
        )}
      </div>
    )
  }
}

PokemonThumb.propTypes = {
  image: PropTypes.string,
  itemName: PropTypes.string,
  clickable: PropTypes.bool
}

export default PokemonThumb

//pathname: `/${props.itemName}`,
// pokemonName: `${props.itemName}`
