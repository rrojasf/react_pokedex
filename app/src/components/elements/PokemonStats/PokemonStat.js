import React from "react"
import { faHome, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./PokemonStats.css"

const PokemonStat = props => {
  return (
    <div className="pokedex-pokemon-stat">
      <h5>{props.name}</h5>
      {props.base}
    </div>
  )
}

export default PokemonStat
