import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Container, CssBaseline } from "@material-ui/core"
import { ToastContainer } from "react-toastify"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import routes from "./routes"
import theme from "./theme"

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Router>
        <ToastContainer />
        <Container maxWidth="xl">
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                render={() => <route.component />}
              />
            ))}
          </Switch>
        </Container>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
