import React from "react"

import "./LoadMoreBtn.css"

const LoadMoreBtn = props => {
  return (
    <div className="pokedex-loadmore-btn" onClick={props.onClick}>
      {props.text}
    </div>
  )
}

export default LoadMoreBtn
