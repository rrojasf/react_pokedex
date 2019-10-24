import React from "react"

import "./PokemonInfo.css"

const PokemonInfo = props => {
  return (
    <div className="info">
      <div>
        <h5>Heigth</h5>
        {props.height}
      </div>
      <div>
        <h5>Weigth</h5>
        {props.weight}
      </div>
    </div>
  )
}

export default PokemonInfo
