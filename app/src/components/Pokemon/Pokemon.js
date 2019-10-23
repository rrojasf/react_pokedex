import React, { Component } from "react"

import { API_URL } from "../../config"
import Navigation from "../elements/Navigation/Navigation"
import PokemonInfo from "../elements/PokemonInfo/PokemonInfo"
import PokemonInfoBar from "../elements/PokemonInfoBar/PokemonInfoBar"
import Spinner from "../elements/Spinner/Spinner"

class Pokemon extends Component {
  state = {
    pokemon: null,
    skills: null,
    loading: false
  }

  componentDidMount() {
    // ES6 destructuring the props
    const { pokemonId } = this.props.match.params

    if (localStorage.getItem(`${pokemonId}`)) {
      let state = JSON.parse(localStorage.getItem(`${pokemonId}`))

      this.setState({ ...state })
    } else {
      const endpoint = `${API_URL}${this.props.match.params.name}`

      this.setState({ loading: true })
      this.fetchItems(endpoint)
    }
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        // console.log(result)
        if (result.status_code) {
          this.setState({ loading: false })
        } else {
          this.setState({ pokemon: result }, () => {
            localStorage.setItem(
              `${this.props.match.itemId}`,
              JSON.stringify(this.state)
            )
          })
        }
      })
  }

  render() {
    return (
      <div className="pokedex-pokemon">
        {this.props.name}
        <Navigation />
        <PokemonInfo />
        <PokemonInfoBar />
        <Spinner />
      </div>
    )
  }
}

export default Pokemon
