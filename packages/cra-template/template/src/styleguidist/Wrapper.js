import { CssBaseline } from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import theme from "../theme"

function Wrapper({ children }) {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default Wrapper