import React from "react"
import PropTypes from "prop-types"
import { faHome, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./PokemonStats.css"
//import PokemonStat from "./PokemonStat.js"

const PokemonStats = stats => {
  return (
    <div className="pokedex-pokemon-stats">
      {stats.stats[0].stat.name} {stats.stats[0].base_stat}
    </div>
  )
}

export default PokemonStats
