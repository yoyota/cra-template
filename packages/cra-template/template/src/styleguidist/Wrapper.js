import React from "react"
import { CssBaseline } from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import theme from "../theme"

export default function({ children }) {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
