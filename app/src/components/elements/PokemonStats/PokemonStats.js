import React from "react"
import PropTypes from "prop-types"
import { faHome, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./PokemonStats.css"

const PokemonStats = stats => {
  console.log(stats, stats.length)

  const strToComponent = stats => stats.map(stat => <div>Hola</div>)

  return <div className="pokedex-pokemon-stats">{strToComponent(stats)}</div>
}

export default PokemonStats
