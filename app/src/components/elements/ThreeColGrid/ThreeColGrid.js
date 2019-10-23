import React from "react"
import PropTypes from "prop-types"

import "./ThreeColGrid.css"

const ThreeColGrid = props => {
  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className="pokedex-grid-element">
          {element}
        </div>
      )
    })

    return gridElements
  }

  return (
    <div className="pokedex-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="pokedex-grid-content">{renderElements()}</div>
    </div>
  )
}

ThreeColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default ThreeColGrid
