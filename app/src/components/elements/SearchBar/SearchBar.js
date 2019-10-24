import React, { Component } from "react"
// import FontAwesome from "react-font-awesome"
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./SearchBar.css"

class SearchBar extends Component {
  state = {}
  timeout = null

  doSearch = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="pokedex-searchbar">
        <div className="pokedex-searchbar-content">
          <FontAwesomeIcon
            className="pokedex-fa-search"
            name="search"
            size="2x"
            icon={faSearch}
          ></FontAwesomeIcon>
          <input
            type="text"
            className="pokedex-searchbar-input"
            placeholder="Search"
            onBlur={this.doSearch}
            value={this.state.value}
          ></input>
        </div>
      </div>
    )
  }
}

export default SearchBar
