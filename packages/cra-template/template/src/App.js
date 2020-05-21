import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { CssBaseline } from "@material-ui/core"
import { ToastContainer } from "react-toastify"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import theme from "./theme"
import { Main } from "./layout"

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact name="Not found" path="/404" render={() => <div />} />
          <Route name="Home" path="/" render={() => <Main />} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
