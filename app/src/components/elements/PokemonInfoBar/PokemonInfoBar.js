import React from "react"
import PropTypes from "prop-types"
import { faHome, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./PokemonInfoBar.css"

const PokemonInfoBar = ({ time, budget, revenue }) => (
  <div className="pokedex-pokemoninfobar">
    <div className="pokedex-pokemoninfobar-content">
      <div className="pokedex-pokemoninfobar-content-col">
        <FontAwesomeIcon
          className="pokedex-fa-time"
          name="clock-o"
          size="2x"
          icon={faTimes}
        ></FontAwesomeIcon>
        <span className="pokedex-pokemoninfobar-info">Running time:</span>
      </div>
      <div className="pokedex-pokemoninfobar-content-col">
        <FontAwesomeIcon
          className="pokedex-fa-time"
          name="clock-o"
          size="2x"
          icon={faTimes}
        ></FontAwesomeIcon>{" "}
        <span className="pokedex-pokemoninfobar-info">Budget:</span>
      </div>
      <div className="pokedex-pokemoninfobar-content-col">
        <FontAwesomeIcon
          className="pokedex-fa-time"
          name="clock-o"
          size="2x"
          icon={faTimes}
        ></FontAwesomeIcon>{" "}
        <span className="pokedex-pokemoninfobar-info">Revenue:</span>
      </div>
    </div>
  </div>
)

PokemonInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default PokemonInfoBar
