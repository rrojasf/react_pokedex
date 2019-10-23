import React, { Component } from "react"
import queryString from "query-string"
import { connect } from "react-redux"

import SearchBar from "../elements/SearchBar/SearchBar"
import ThreeColGrid from "../elements/ThreeColGrid/ThreeColGrid"
import PokemonThumb from "../elements/PokemonThumb/PokemonThumb"
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn"
import Pokemon from "../Pokemon/Pokemon"
import Spinner from "../elements/Spinner/Spinner"

import { selectPokemon } from "../../actions"
import { store } from "../../store"

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  PAGE_OFFSET,
  PAGE_LIMIT,
  ASSETS_URL
} from "../../config"

import "./Home.css"

class Home extends Component {
  state = {
    items: [],
    loading: false,
    totalItems: 0,
    currentPage: 0,
    totalPages: 0,
    prevPage: null,
    nextPage: null,
    currPage: null,
    searchTerm: "",
    selectedItem: null
  }

  componentDidMount() {
    const endpoint = `${API_URL}pokemon`

    this.setState({ loading: true })
    this.fetchItems(endpoint)
  }

  /** */
  createEndPoint = (type, loadMore, searchTerm) => {
    let endpoint = `${API_URL}pokemon`

    return endpoint
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        // console.log(result)
        /*if (localStorage.getItem("HomeState")) {
          const state = JSON.parse(localStorage.getItem("HomeState"))

          this.setState({ ...state })
        } else { */
        this.setState(
          {
            items: [...this.state.items, ...result.results],
            loading: false,
            totalItems: result.count,
            currentPage: this.getCurrentPageFromEndpoint(endpoint), //result.next
            totalPages: this.getTotalPages(result.count),
            prevPage: result.previous,
            nextPage: result.next,
            currPage: endpoint,
            pokemon: null
          },
          () => {
            localStorage.setItem("HomeState", JSON.stringify(this.state))
          }
        )
        // }
      })
      .catch(error => console.error("Error:", error))
  }

  getCurrentPageFromEndpoint = endpoint => {
    const urlSplited = endpoint.split("?")
    const urlParams = queryString.parse(urlSplited[1])
    let currentPage

    if (typeof urlParams.offset !== "undefined") {
      currentPage = parseInt(urlParams.offset) / `${PAGE_OFFSET}`
      currentPage += 1
    } else {
      currentPage = 1
    }

    return currentPage
  }

  getItemIdFromUrl = itemUrl => {
    //console.log(itemUrl)
    let itemId = "undefined"
    let urlSplited = itemUrl.split("/")

    if (urlSplited.length > 0) {
      itemId = urlSplited[6]
    }

    return itemId
  }

  getTotalPages = totalItems => {
    let totalPages = totalItems / `${PAGE_OFFSET}`
    let roundPages = Number(totalPages).toFixed(0)

    if (totalPages > roundPages) {
      roundPages++
    }

    return roundPages
  }

  handleSelectedPokemon = pokemon => {
    this.setState({ pokemon })
    store.dispatch(selectPokemon(pokemon))

    console.log("Selected Pokemon:", pokemon)
  }

  loadMoreItems = () => {
    let endpoint = ""

    this.setState({ loading: true })

    if (this.state.searchTerm === "") {
      endpoint = this.state.nextPage
    } else {
      endpoint = `${API_URL}pokemon/` + this.state.searchTerm // currentPage + 1
    }

    this.fetchItems(endpoint)
  }

  searchItems = searchTerm => {
    let endpoint = ""

    this.setState({ items: [], loading: true, searchTerm })

    if (searchTerm === "") {
      endpoint = `${API_URL}pokemon`
    } else {
      endpoint = `${API_URL}pokemon/` + this.state.searchTerm // currentPage + 1
    }

    this.fetchItems(endpoint)
  }

  updateItems = (loadMore, searchTerm) => {} // refactoring para search y loadmore

  /** */
  render() {
    return (
      <div className="pokedex-home">
        <div className="pokedex-pokemon-view">
          <div className="pokedex-grid">
            <SearchBar callback={this.searchTerm} />
            <ThreeColGrid
              header={
                this.state.searchTerm ? "Search Result" : "Popular Pokemons"
              }
              loading={this.state.loading}
            >
              {this.state.items.map((element, i) => {
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
              })}
            </ThreeColGrid>
            {this.state.loading ? <Spinner /> : null}
            {this.state.currentPage <= this.state.totalPages &&
            !this.state.loading ? (
              <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
            ) : null}
          </div>
        </div>
        <div className="pokedex-detail-view">
          {this.state.pokemon ? (
            <Pokemon
              clickable={true}
              image={`${ASSETS_URL}${this.state.pokemon.itemId}.png`}
              itemId={this.state.pokemon.itemId}
              itemName={this.state.pokemon.name}
              itemUrl={this.state.pokemon.url}
            ></Pokemon>
          ) : (
            <h1>No Pokemon!</h1>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToPropsActions = dispatch => ({
  selectPokemon: value => dispatch(selectPokemon(value))
})

const HomeConnected = connect(
  null,
  mapDispatchToPropsActions
)(Home)

export default HomeConnected
