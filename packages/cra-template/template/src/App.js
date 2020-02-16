import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import routes from "./routes"

function App() {
  console.log(routes)
  return (
    <Router>
      <ToastContainer />
      <Container>
        <Switch>{routes}</Switch>
      </Container>
    </Router>
  )
}

export default App
