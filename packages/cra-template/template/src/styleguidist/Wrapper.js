import React from "react"
import { init } from "@rematch/core"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { CssBaseline } from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import * as models from "../models"
import theme from "../theme"

export default function({ children }) {
  const store = init({
    models
  })
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline />
        <MemoryRouter>{children}</MemoryRouter>
      </MuiThemeProvider>
    </Provider>
  )
}
