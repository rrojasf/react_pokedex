import React, { Component } from "react"
import SearchBar from "../elements/SearchBar/SearchBar"
import ThreeColGrid from "../elements/ThreeColGrid/ThreeColGrid"
import PokemonThumb from "../elements/PokemonThumb/PokemonThumb"
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn"
import Spinner from "../elements/Spinner/Spinner"

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../config"

import "./Home.css"

class Home extends Component {
  state = {
    items: [],
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  }

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
