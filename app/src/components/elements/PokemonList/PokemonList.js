import React, { Component } from "react"
import PropTypes from "prop-types"

// import "./PokemonThumb.css"

class PokemonList extends Component {
  state = {
    pokemon: null,
    skills: null,
    loading: false
  }

  handlePokemonClick = pokemon => {
    console.log("handlePokemonClick:" + pokemon)
    //onSelectedPokemon(pokemon)
  }

  onClick = pokemon => {
    this.setState({ pokemon })
  }

  render() {
    return (
      <div className="pokedex-pokemon-thumb" onClick={this.onClick}>
        ABC
      </div>
    )
  }
}
/*
{
  this.state.items.map((element, i) => {
    let itemId = this.getItemIdFromUrl(element.url)
    //console.log(element)
    return (
      <PokemonThumb
        key={i}
        clickable={true}
        image={`${ASSETS_URL}${itemId}.png`}
        itemId={itemId}
        itemName={element.name}
        itemUrl={element.url}
        onSelectedPokemon={this.handleSelectedPokemon}
      ></PokemonThumb>
    )
  })
}*/

PokemonList.propTypes = {
  image: PropTypes.string,
  itemName: PropTypes.string,
  clickable: PropTypes.bool
}

export default PokemonList
