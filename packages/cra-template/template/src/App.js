import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"
import routes from "./routes"

function App() {
  return (
    <Router>
      <Container>
        <Switch>{routes}</Switch>
      </Container>
    </Router>
  )
}

export default App
