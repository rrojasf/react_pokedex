import React, { Component } from "react"
import PropTypes from "prop-types"

import { API_URL } from "../../../config"
import formatPokemonId from "../../helpers/formatters"

import "./PokemonThumb.css"

// const PokemonThumb = props => {
class PokemonThumb extends Component {
  constructor(props) {
    super(props)
  }

  selectPokemon = pokemon => {
    // console.log(pokemon)
    const endpoint = `${API_URL}pokemon/${pokemon.itemId}`

    this.setState({ loading: true })
    this.fetchItem(endpoint)
  }

  setPokemonId = pokemonId => {
    while (pokemonId.length < 3) {
      pokemonId = "0" + pokemonId
    }

    return pokemonId
  }

  fetchItem = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        // console.log(result)
        if (result.status_code) {
          this.setState({ loading: false })
        } else {
          this.setState({ selectedPokemon: result })
          this.props.onSelectedPokemon(this.state.selectedPokemon)
        }
      })
  }

  render() {
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

const mapStateToProps = state => {
  return {
    selectedItem: state
  }
}

export default PokemonThumb
