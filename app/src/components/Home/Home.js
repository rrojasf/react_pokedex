import React, { Component } from "react"
import SearchBar from "../elements/SearchBar/SearchBar"
import ThreeColGrid from "../elements/ThreeColGrid/ThreeColGrid"
import PokemonThumb from "../elements/PokemonThumb/PokemonThumb"
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn"
import Spinner from "../elements/Spinner/Spinner"

import "./Home.css"

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="pokemon-home">
        <SearchBar />
        <ThreeColGrid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    )
  }
}

export default Home
