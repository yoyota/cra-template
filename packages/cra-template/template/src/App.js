import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { Container, CssBaseline } from "@material-ui/core"
import { ToastContainer } from "react-toastify"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import ApiExamples from "./ApiExamples"
import theme from "./theme"

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ToastContainer />
      <Container maxWidth="xl">
        <ApiExamples />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
