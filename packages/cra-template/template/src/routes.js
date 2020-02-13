import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Count from "./components/Count"

export default [
  <Route exact path="/" render={() => <Home />} />,
  <Route exact path="/count" render={() => <Count />} />
]
