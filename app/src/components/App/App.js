import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./App.css"

import Header from "../elements/Header/Header"
import NotFound from "../elements/NotFound/NotFound"
import Home from "../Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
